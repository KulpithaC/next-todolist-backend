import express, { Application, Request, Response } from "express";


const app: Application = express();
const PORT: number = 8080;

// Middleware
app.use(express.json());

// Routes

// Default Route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the TypeScript Backend!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
