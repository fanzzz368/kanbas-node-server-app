import model from "./model.js";

export const createCourse = (course) => {
    delete course._id
    return model.create(course)};
export const findAllCourses = () => model.find();
export const findCourseById = (courseId) => model.findById(courseId); // might need to fix
export const updateCourse = (courseId, course) =>  model.updateOne({ _id: courseId }, { $set: course });
export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });
