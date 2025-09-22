import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import 'dotenv/config'

let server: Server;
const PORT = 3000;

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log("Connected to MongoDB using Mongoose.");

    server = app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
