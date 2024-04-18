import mongoose from "mongoose";

const lessonsSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: String,
    description: String,
    module: {type: String, required: true, unique: true}
});
const moduleSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    course: {type: String, required: true, unique: true},
    description: String,
    lessons: [lessonsSchema]
},
  { collection: "modules" });
export default moduleSchema;