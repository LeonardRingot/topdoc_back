import { handlerLogin } from "./handler/auth.handler";
import { AuthRepository } from "./repository/auth.repository";
import { AuthService } from "./service/auth.service";

import {UserHandler} from "./handler/user.handler"
import { UserRepository } from "./repository/user.repository";
import { UserService } from "./service/user.service";

import {PatientHandler} from "./handler/patient.handler"
import { PatientRepository } from "./repository/patient.repository";
import { PatientService } from "./service/patient.service";

import {PraticienHandler} from "./handler/praticien.handler"
import { PraticienRepository } from "./repository/praticien.repository";
import { PraticienService } from "./service/praticien.service";

import {LocalisationHandler} from "./handler/localisation.handler"
import { LocalisationRepository } from "./repository/localisation.repository";
import { LocalisationService } from "./service/localisation.service";

import {BanHandler} from "./handler/ban.handler"
import { BanRepository } from "./repository/ban.repository";
import { BanService } from "./service/ban.service";

import {CongeHandler} from "./handler/conge.handler"
import { CongeRepository } from "./repository/conge.repository";
import { CongeService } from "./service/conge.service";

import {PlageHoraireHandler} from "./handler/plage_horaire.handler"
import { PlageHoraireRepository } from "./repository/plage_horaire.repository";
import { PlageHoraireService } from "./service/plage_horaire.service";

import {PlanningHandler} from "./handler/planning.handler"
import { PlanningRepository } from "./repository/planning.repository";
import { PlanningService } from "./service/planning.service";

import {RdvHandler} from "./handler/rdv.handler"
import { RdvRepository } from "./repository/rdv.repository";
import { RdvService } from "./service/rdv.service";

import {RoleHandler} from "./handler/role.handler"
import { RoleRepository } from "./repository/role.repository";
import { RoleService } from "./service/role.service";

export const authHandler = new handlerLogin(new AuthService(new AuthRepository()))
export const userHandler = new UserHandler (new UserService(new UserRepository()))
export const patientHandler = new PatientHandler (new PatientService(new PatientRepository()))
export const praticienHandler = new PraticienHandler (new PraticienService(new PraticienRepository()))
export const localisationHandler = new LocalisationHandler (new LocalisationService(new LocalisationRepository()))
export const banHandler = new BanHandler (new BanService(new BanRepository()))
export const congeHandler = new CongeHandler (new CongeService(new CongeRepository()))
export const plagehoraireHandler = new PlageHoraireHandler (new PlageHoraireService(new PlageHoraireRepository()))
export const planningHandler = new PlanningHandler (new PlanningService(new PlanningRepository()))
export const rdvHandler = new RdvHandler (new RdvService(new RdvRepository()))
export const roleHandler = new RoleHandler (new RoleService(new RoleRepository()))