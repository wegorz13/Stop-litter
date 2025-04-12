import express, { Request, Response, Application } from "express";
import { Sequelize, DataTypes, Model, where } from "sequelize";
const bodyParser = require('body-parser');
const app: Application = express();
const port = 5000;
const cors = require("cors");
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

const corsOptions = {
  origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));
app.use(express.json());

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "../database.db",
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
  public likes!: number;
  public date?: string;
  public description?: string;
  public image?: string;
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
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: "Report",
  }
);
sequelize.sync();

app.get("/api", (req: Request, res: Response) => {
  res.json({ message: "siemka" });
});

app.post("/api/report", async (req: Request, res: Response) => {
  try {
    const { title, location, likes, date, description, image } = req.body;

    if (!title || !location || likes == null) {
      res
        .status(400)
        .json({ message: "Title, likes, and location are required" });
      return;
    }

    const newReport = await Report.create({
      title,
      location,
      likes,
      date: date || new Date().toISOString(),
      description,
      image,
    });

    res.status(201).json(newReport);
  } catch (error) {
    console.error("Error creating report:", error);
    res.status(500).json({ error: "Failed to create report" });
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

app.put("/api/report/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const report = await Report.findOne({ where: { id: id } });
    if (report == null) {
      res.status(404).json({ message: "Report not found" });
      return;
    }
    await report.update({ likes: report.likes + 1 });
    res.status(201).json(report);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({ error: "Failed to update report", details: error.message });
    } else {
      res
        .status(500)
        .json({ error: "Failed to update report", details: "Unknown error" });
    }
  }
});
connectDB();

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
