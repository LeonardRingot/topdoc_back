import { DataTypes, Sequelize } from "sequelize"

// import { userTypes } from "../types/utilisateur"
// import { localisationTypes } from "../types/localisation"
// import { patientTypes } from "../types/patient"
// import { praticienTypes } from "../types/praticien"
// import { roleTypes } from "../types/role"
// import { rdvTypes } from "../types/rdv"
// import { tokenTypes } from "../types/token"
// import { bansTypes } from "../types/ban"
// import { congeTypes } from "../types/conge"
// import { plageHoraireTypes } from "../types/plage_horaire"
// import { planningTypes } from "../types/planning"

import { users } from './mock-user'
import { localisations } from './mock-localisation'
import { praticien } from './mock-praticien'
import { patient } from './mock-patient'
import { roles } from './mock-role'
import { rdvs } from './mock-rdv'
import { tokens } from './mock-token'
import { bans } from './mock-ban'
import { conge } from './mock-conge'
import { plage_horaire } from './mock-plage_horaire'
import { planning } from './mock-planning'

// const UserModel = require('../models/utilisateurs')
// const LocalisationModel = require('../models/localisation')
// const PatientModel = require('../models/patient')
// const PraticienModel = require('../models/praticien')
// const RoleModel = require('../models/role')
// const RdvModel = require('../models/rdv')
// const RoleUserModel = require('../models/roleUsers')
// const TokenModel = require('../models/token')
// const BanModel = require('../models/ban')
// const BanUserModel = require('../models/BanUsers')
// const CongeModel = require('../models/conge')
// const Plage_HoraireModel = require('../models/plage_horaire')
// const PlanningModel = require('../models/planning')

import { User } from "../models/users.model"
import { Localisation } from "../models/localisation.model"
import { Patient } from "../models/patient.model"
import { Praticien } from "../models/praticien.model"
import { Role } from "../models/role.model"
import { Rdv } from "../models/rdv.model"
//import { RoleUser } from "../models/roleUsers.model"
import { Token } from "../models/token.model"
import { Ban } from "../models/ban.model"
import { Conge } from "../models/conge.model"
import { Planning } from "../models/planning.model"
import { Plage_Horaire } from "../models/plage_horaire.model"

const sequelize = new Sequelize(
        `${process.env.NAME_DATABASE}`,
        `${process.env.HOST_DATABASE}`,
        `${process.env.PASS_DATABASE}`,
        {
            host: 'localhost',
            dialect: 'postgres',
            port: 5432,
            dialectOptions: {
                useUTC: false,
                dateStrings: true,
                typeCast: true
            },
            timezone: '+02:00'
        }
    )
sequelize.authenticate()
    .then(() => console.log('Link established'))
    .catch((error: Error) => console.error(`Error: ${error}`)
    )
    // export const User = UserModel(sequelize, DataTypes)
    // export const Localisation = LocalisationModel(sequelize, DataTypes)
    // export const Patient = PatientModel(sequelize, DataTypes)
    // export const Praticien = PraticienModel(sequelize, DataTypes)
    // export const Role = RoleModel(sequelize, DataTypes)
    // export const Rdv = RdvModel(sequelize, DataTypes)
    // export const RoleUser = RoleUserModel(sequelize, DataTypes)
    // export const BanUser = BanUserModel(sequelize, DataTypes)
    // export const Token = TokenModel(sequelize, DataTypes)
    // export const Ban = BanModel(sequelize, DataTypes)
    // export const Conge = CongeModel(sequelize, DataTypes)
    // export const Plage_Horaire = Plage_HoraireModel(sequelize, DataTypes)
    // export const Planning = PlanningModel(sequelize, DataTypes)

User.hasOne(Token, { onDelete: 'cascade', hooks: true })
Token.belongsTo(User, { onDelete: 'cascade', hooks: true })

Localisation.hasOne(User, { onDelete: 'cascade', hooks: true })
User.belongsTo(Localisation, { onDelete: 'cascade', hooks: true })

User.hasOne(Conge, { onDelete: 'cascade', hooks: true })
Conge.belongsTo(User, { onDelete: 'cascade', hooks: true })

User.hasOne(Patient, {   onDelete: 'cascade', hooks: true })
Patient.belongsTo(User, {  onDelete: 'cascade', hooks: true })

User.hasOne(Praticien, { foreignKey:'UserId', onDelete: 'cascade', hooks: true })
Praticien.belongsTo(User, {  onDelete: 'cascade', hooks: true })


Patient.hasOne(Rdv, {  onDelete: 'cascade', hooks: true })
Rdv.belongsTo(Patient, { foreignKey:"UserId", onDelete: 'cascade', hooks: true })

Praticien.hasOne(Rdv, { onDelete: 'cascade', hooks: true })
Rdv.belongsTo(Praticien, { foreignKey:"UserId", onDelete: 'cascade', hooks: true })


Role.belongsToMany(User, { through: RoleUser })
User.belongsToMany(Role, { through: RoleUser })

Planning.hasOne(Plage_Horaire, {  onDelete: 'cascade', hooks: true })
Plage_Horaire.belongsTo(Planning, {  onDelete: 'cascade', hooks: true })

    export const initDb = () => {
        return sequelize.sync({ force: true }).then(() =>
         {
            
           
            localisations.map((localisation: localisationTypes) => {
                Localisation.create({
                    td_address: localisation.td_address,
                    td_zipCode: localisation.td_zipCode,
                    td_city: localisation.td_city
                }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
            })
            roles.map((role: roleTypes) => {
                Role.create({
                    td_role_nom: role.td_role_nom
                }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
            })
    
            users.map((user: userTypes , index:number) => {
                User.create({
                    td_email: user.td_email,
                    td_phone: user.td_phone,
                    td_isActif: user.td_isActif,
                    td_password: user.td_password,
                    LocalisationId: user.LocalisationId
                }).then (async (req:any)=>{
                const roleRow = await Role.findByPk(index + 1);
                await req.addRole(roleRow, { through: RoleUser })
                
                
                })
            })
            
            tokens.map((token: tokenTypes) => {
                Token.create({
                    refreshToken: token.refreshToken,
                    UserId: token.UserId
                }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
            })
            
            patient.map((patient: patientTypes, inUserIddex: number) => {
                Patient.create({
                   // UserId: patient.UserId,
                    td_firstname: patient.td_firstname,
                    td_lastname: patient.td_lastname,
                    td_birthday: patient.td_birthday
                }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
            })
            praticien.map((praticien: praticienTypes) => {
                Praticien.create({
                    td_activite: praticien.td_activite,
                    //UserId:praticien.UserId
                }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
            })
            rdvs.map((rdv: rdvTypes, index:number) => {
                Rdv.create({
                    PraticienUserId: rdv.PraticienUserId,
                    td_date_rendez_vous: rdv.td_date_rendez_vous,
                    td_motif:rdv.td_motif,
                    td_duree_rdv:rdv.td_duree_rdv,
                    PatientUserId: rdv.PatientUserId
                }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
            })
            bans.map((bans: bansTypes) => {
                Ban.create({
                    td_ban_raison: bans.td_ban_raison,
                }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
            })
            conge.map((conge:  congeTypes,  index: number) => {
                Conge.create({
                    td_debut_conge: conge.td_debut_conge,
                    td_fin_conge: conge.td_fin_conge,
                    UserId: conge.UserId
                }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
            })
            planning.map((planning:  planningTypes) => {
                Planning.create({
                    td_dure_validite:planning.td_dure_validite,
                    td_date_debut:planning.td_date_debut,
                    td_date_fin:planning.td_date_fin,
                }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
            })
            plage_horaire.map((plage_horaire:  plageHoraireTypes,  index: number) => {
                Plage_Horaire.create({
                    td_jour: plage_horaire.td_jour,
                    td_debut_jour:plage_horaire.td_debut_jour,
                    td_fin_jour:plage_horaire.td_fin_jour,
                    td_duree_horaire:plage_horaire.td_duree_horaire,
                    PlanningId:plage_horaire.PlanningId
                }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
            })
            console.log('Database created')
        })
    }