import express, { Request, Response, Application } from "express";
import { Sequelize, DataTypes, Model, where } from "sequelize";
const app: Application = express();
const port = 5000;
const cors = require("cors");

const corsOptions = {
  origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));
app.use(express.json());

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.db",
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");
    await sequelize.sync();
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};

class Report extends Model {
  public id!: number;
  public title!: string;
  public location!: string;
  public likes!:number;
  public date?: string;
  public description?: string;
  public image?: Buffer;
}
Report.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull :false,
    },
    date: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.BLOB,
    },
  },
  {
    sequelize,
    modelName: "Report",
  }
);
sequelize.sync();

const test = async () => {
  const tst = await Report.create({
    title: "Śmieci w lesie",
    location: "Krakow",
    date: "now",
  });
  console.log(tst.title);
};

app.get("/api", (req: Request, res: Response) => {
  res.json({ message: "siemka" });
});

app.post("/api/report", async (req: Request, res: Response) => {
  const { title, location,likes, date, description, image } = req.body;
  if (!title || !location ||likes==null) {
    res.status(401).json({ message: "title, likes and location required" });
    return;
  }
  try {
    const newReport = await Report.create({
      title: title,
      location: location,
      likes: likes,
      date: date,
      description: description,
      image: image,
    });
    res.status(201).json(newReport);
  } catch {
    res.status(500).json({ error: "Failed to create report", details: Error });
  }
});

app.get("/api/report", async (req: Request, res: Response) => {
  try {
    const reports = await Report.findAll();
    if (reports == null) {
      res.status(404).json({ message: "report not found" });
      return;
    }
    res.status(201).json(reports);
  } catch {
    res.status(500).json({ error: "Failed to fetch reports", details: Error });
  }
});

app.get("/api/report/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const report = await Report.findOne({ where: { id: id } });
    if (report == null) {
      res.status(404).json({ message: "report not found" });
      return;
    }
    res.status(201).json(report);
  } catch {
    res.status(500).json({ error: "Failed to fetch report", details: Error });
  }
});

connectDB();

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
