import * as dao from "./dao.js";

function ModuleRoutes(app) {


  const createModule = async (req, res) => { 
    const module = {...req.body, course: req.params.courseId};
    const result = await dao.createModule(module);
    res.json(result);
  };

  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.moduleId);
    res.json(status);
   };

  const findModulesById = async (req, res) => { 
    const modules = await dao.findModulesById(req.params.courseId);
    res.json(modules);
  };

  const updateModule = async (req, res) => {
    const { moduleId } = req.params;
    const status = await dao.updateModule(moduleId, req.body);
    res.json(status);
};


app.post("/api/courses/:courseId/modules", createModule);
app.get("/api/courses/:courseId/modules", findModulesById);
app.put("/api/modules/:moduleId", updateModule);
app.delete("/api/modules/:moduleId", deleteModule);

}
export default ModuleRoutes;