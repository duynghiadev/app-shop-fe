import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect(`${process.env.MONGO_DB}`);
    console.log("Connect Database success");
  } catch (error) {
    console.log("Error connecting to Database", error);
  }
};

export default connectDB;
