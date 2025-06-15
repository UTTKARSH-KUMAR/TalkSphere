import express from 'express';
import { createServer } from "node:http";

import mongoose from 'mongoose';
import cors from 'cors';
import { connectToSocket } from "./controllers/socketManager.js"
import userRoutes from "./routes/users.routes.js"
const app = express();
const server = createServer(app);
const io = connectToSocket(server, {
    cors: {
        origin:"*",
        methods: ["GET", "POST"],
        allowedHeaders: ["*"],
        credentials: true
    }
});

app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({ limit: "40kb", extended: true }));
app.use("/api/v1/users", userRoutes);

const start = async () => {
    app.set("mongo_user");              
    const connectionDb = await mongoose.connect("mongodb+srv://uttkarshthakur0325:MI7sRGIosjO5v204@cluster0.4qeek.mongodb.net/")
    console.log(`MONGO Connected DB Host: ${connectionDb.connection.host}`)
    server.listen(app.get("port"), () => {
        console.log("LISTENIN ON PORT 8000")
    });



}



start();