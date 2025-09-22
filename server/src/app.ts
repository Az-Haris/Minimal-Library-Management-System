import express, { Application } from "express"
import { bookRoutes } from "./app/controllers/book.controller";
import { borrowRoutes } from "./app/controllers/borrow.controller";

const app: Application = express();

app.use(express.json());

// API Routes
app.use("/api/books", bookRoutes);
app.use("/api/borrow", borrowRoutes);

// Root Route
app.get("/", (req, res)=>{
    res.send("Welcome to Library Management System!")
})

export default app;