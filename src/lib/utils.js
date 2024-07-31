import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import mongoose from "mongoose"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const connectToDB = async () => {
  const connection = async () => { }
  try {
    // if (connection.isConnected) return;
    const db = await mongoose.connect("mongodb://127.0.0.1:27017/admindashboard");
    connection.isConnected = db.connections[0].readyState
    console.log("connection succesfully")
  } catch (error) {
    throw new Error(error)
  }
}
