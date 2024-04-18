import express from 'express';
import Hello from './Hello.js';
import Lab5 from './Lab5.js';
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from './Kanbas/Users/routes.js';
import session from "express-session";
import "dotenv/config";
import CourseRoutes from './Kanbas/courses/routes.js';

const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/kanbas' || process.env.DB_CONNECTION_STRING 
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors(
  {credentials: true,
        origin: process.env.FRONTEND_URL}
    ));
const sessionOptions = {
secret: process.env.SESSION_SECRET,
resave: false,
saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
sessionOptions.proxy = true;
sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.HTTP_SERVER_DOMAIN,
};
}
app.use(session(sessionOptions));
app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
Hello(app);
Lab5(app);
UserRoutes(app);
CourseRoutes(app);
app.listen(process.env.PORT || 4000);
