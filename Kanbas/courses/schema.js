import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    number: { type: String, required: true, unique: true },
    startDate: String,
    endDate: String,
    department: String,
    credits: Int32Array,
    description: String,
},
  { collection: "courses" });
export default courseSchema;