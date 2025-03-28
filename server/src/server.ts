import express, { Request, Response, Application } from "express";

const app: Application = express();
const port = 5000;
const cors = require("cors");

const corsOptions = {
  origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));
app.use(express.json());

app.get("/api", (req: Request, res: Response) => {
  res.json({ message: "siemka" });
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
