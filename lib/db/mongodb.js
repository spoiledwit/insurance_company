import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Please add your mongo_uri to environment variables");
}

async function dbConnect() {
  if (mongoose.connection.readyState > 1) {
    return;
  }
  return mongoose.connect(MONGO_URI, { useUnifiedTopology: true });
}

export default dbConnect;
