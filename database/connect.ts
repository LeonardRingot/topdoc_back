import { DataTypes, Sequelize } from "sequelize"

import { userTypes } from "../types/utilisateur"
import { localisationTypes } from "../types/localisation"
import { patientTypes } from "../types/patient"
import { praticienTypes } from "../types/praticien"
import { roleTypes } from "../types/role"

import { users } from './mock-user'
import { localisations } from './mock-localisation'
import { praticien } from './mock-praticien'
import { patient } from './mock-patient'
import { roles } from './mock-role'

const UserModel = require('../models/utilisateurs')
const LocalisationModel = require('../models/localisation')
const PatientModel = require('../models/patient')
const PraticienModel = require('../models/praticien')
const RoleModel = require('../models/role')

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
    Localisation.hasOne(User, { onDelete: 'cascade', hooks: true })
User.belongsTo(Localisation, { onDelete: 'cascade', hooks: true })

User.hasOne(Patient, { foreignKey: 'UserId', onDelete: 'cascade', hooks: true })
Patient.belongsTo(User, { foreignKey: 'UserId', onDelete: 'cascade', hooks: true })

User.hasOne(Praticien, { foreignKey: 'UserId', onDelete: 'cascade', hooks: true })
Praticien.belongsTo(User, { foreignKey: 'UserId', onDelete: 'cascade', hooks: true })

    export const initDb = () => {
        return sequelize.sync({ force: true }).then(() =>
         {
            localisations.map((localisation: localisationTypes) => {
                Localisation.create({
                    address: localisation.address,
                    zipCode: localisation.zipCode,
                    city: localisation.city
                }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
            })
            roles.map((role: roleTypes) => {
                Role.create({
                    role: role.role
                }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
            })
    
            users.map((user: userTypes, index: number) => {
                User.create({
                    email: user.email,
                    phone: user.phone,
                    isActif: user.isActif,
                    password: user.password,
                    LocalisationId: user.LocalisationId,
                })
            })
            
            patient.map((patient: patientTypes, index: number) => {
                Patient.create({
                    firstname: patient.firstname,
                    lastname: patient.lastname,
                    birthday: patient.birthday,
                    UserId: index + 1
                }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
            })
            praticien.map((praticien: praticienTypes) => {
                Praticien.create({
                    activite: praticien.activite,
                    UserId: 3,
                }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
            })
            
    
            console.log('Database created')
        })
    }