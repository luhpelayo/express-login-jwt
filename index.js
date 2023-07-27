import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import authTokenRouter from "./routes/auth_token.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const expressApp = express();

expressApp.use(cookieParser());
expressApp.use(express.json());
expressApp.use(express.text());


expressApp.use("/auth-token", authTokenRouter);


expressApp.listen(PORT, () =>
  console.log(`Servidor levantado en el puerto ${PORT}`)
);
