import { DataTypes, Sequelize } from "sequelize"

import { userTypes } from "../types/utilisateur"
import { localisationTypes } from "../types/localisation"
import { patientTypes } from "../types/patient"
import { praticienTypes } from "../types/praticien"
import { roleTypes } from "../types/role"
import { rdvTypes } from "../types/rdv"
import { tokenTypes } from "../types/token"

import { users } from './mock-user'
import { localisations } from './mock-localisation'
import { praticien } from './mock-praticien'
import { patient } from './mock-patient'
import { roles } from './mock-role'
import { rdvs } from './mock-rdv'
import { tokens } from './mock-token'

const UserModel = require('../models/utilisateurs')
const LocalisationModel = require('../models/localisation')
const PatientModel = require('../models/patient')
const PraticienModel = require('../models/praticien')
const RoleModel = require('../models/role')
const RdvModel = require('../models/rdv')
const RdvUserModel = require('../models/rdvUsers')
const RoleUserModel = require('../models/roleUsers')
const TokenModel = require('../models/token')

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
    export const User = UserModel(sequelize, DataTypes)
    export const Localisation = LocalisationModel(sequelize, DataTypes)
    export const Patient = PatientModel(sequelize, DataTypes)
    export const Praticien = PraticienModel(sequelize, DataTypes)
    

    export const Role = RoleModel(sequelize, DataTypes)
    export const Rdv = RdvModel(sequelize, DataTypes)
    export const RdvUser = RdvUserModel(sequelize, DataTypes)
    export const RoleUser = RoleUserModel(sequelize, DataTypes)
    export const Token = TokenModel(sequelize, DataTypes)

    User.hasOne(Token, { onDelete: 'cascade', hooks: true })
Token.belongsTo(User, { onDelete: 'cascade', hooks: true })

Localisation.hasOne(User, { onDelete: 'cascade', hooks: true })
User.belongsTo(Localisation, { onDelete: 'cascade', hooks: true })



Rdv.belongsToMany(User, { through: RdvUser })
User.belongsToMany(Rdv, { through: RdvUser })


User.hasOne(Patient, { foreignKey: 'UserId', onDelete: 'cascade', hooks: true })
Patient.belongsTo(User, { foreignKey: 'UserId', onDelete: 'cascade', hooks: true })

User.hasOne(Praticien, { foreignKey: 'UserId', onDelete: 'cascade', hooks: true })
Praticien.belongsTo(User, { foreignKey: 'UserId', onDelete: 'cascade', hooks: true })

Role.belongsToMany(User, { through: RoleUser })
User.belongsToMany(Role, { through: RoleUser })

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
    
            users.map((user: userTypes, index: number) => {
                User.create({
                    td_email: user.td_email,
                    td_phone: user.td_phone,
                    td_isActif: user.td_isActif,
                    td_password: user.td_password,
                    LocalisationId: user.LocalisationId,
                }).then (async (req:any)=>{
                    const rdvRow = await Rdv.findByPk(index + 1);
                await req.addRdv(rdvRow, { through: RdvUser })

                const roleRow = await Role.findByPk(index + 1);
                await req.addRole(roleRow, { through: RoleUser })
                })
            })
            
            patient.map((patient: patientTypes, index: number) => {
                Patient.create({
                    td_firstname: patient.td_firstname,
                    td_lastname: patient.td_lastname,
                    td_birthday: patient.td_birthday,
                    UserId: index + 1
                }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
            })
            praticien.map((praticien: praticienTypes) => {
                Praticien.create({
                    td_activite: praticien.td_activite,
                    UserId: 3,
                }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
            })
            rdvs.map((rdv: rdvTypes) => {
                Rdv.create({
                    td_heure: rdv.td_heure,
                    td_motif:rdv.td_motif,
                    td_duree_rdv:rdv.td_duree_rdv
                   
                }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
            })
            tokens.map((token: tokenTypes) => {
                Token.create({
                    refreshToken: token.refreshToken,
                    UserId: token.UserId
                }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
            })
            
    
            console.log('Database created')
        })
    }