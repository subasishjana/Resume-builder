// import express from "express";
// import cors from "cors";
// import "dotenv/config";
// import connectDB from "./configs/db.js";
// import userRouter from "./routes/userRoutes.js";
// import resumeRouter from "./routes/resumeRoutes.js";
// import aiRouter from "./routes/aiRoutes.js";

// const app = express();
// const PORT = process.env.PORT || 3000;

// // DataBase Connections
// await connectDB()

// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );

// app.get('/', (req,res)=> res.send("server is live..."))
// app.use('/api/users' , userRouter)
// app.use('/api/resumes' , resumeRouter)
// app.use('/api/ai',aiRouter)

// app.listen(PORT,()=>{
//     console.log(`server is running on port ${PORT}`);

// })

import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./configs/db.js";

import userRouter from "./routes/userRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRoutes.js";

const app = express();

const PORT = process.env.PORT || 3000;

// DataBase Connection
await connectDB();

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// Routes
app.get("/", (req, res) => {
  res.send("server is live...");
});

app.use("/api/users", userRouter);
app.use("/api/resumes", resumeRouter);
app.use("/api/ai", aiRouter);

// Server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
