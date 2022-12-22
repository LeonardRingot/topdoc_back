import { Router } from "express";
import { router } from "./router";

export const Apirouter = Router();
Apirouter.use('api/', router)