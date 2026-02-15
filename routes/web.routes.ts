import { Hono } from "hono";
import SchoolsController from "../controllers/schools.controller";
import ClassesController from "../controllers/classes.controller";


const web = new Hono();
const schoolsController = new SchoolsController();
const classesController = new ClassesController();
web.get('/schools', schoolsController.getListData)
web.get('/school/:id',schoolsController.getDetailData)
web.get('/classes',classesController.getListlKelas)


export default web