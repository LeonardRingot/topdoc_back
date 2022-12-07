import { DataTypes, Sequelize } from "sequelize"
import { userTypes } from "../types/utilisateur"
import { users } from './mock-user'
import { localisationTypes } from "../types/localisation"
import { localisations } from './mock-localisation'
const UserModel = require('../models/utilisateurs')
const LocalisationModel = require('../models/localisation')

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
            users.map((user: userTypes, index: number) => {
                User.create({
                    email: user.email,
                    phone: user.phone,
                    isActif: user.isActif,
                    password: user.password,
                    LocalisationId: user.LocalisationId,
                })
            })
            users.map((user: userTypes, index: number) => {
                User.create({
                    email: user.email,
                    phone: user.phone,
                    isActif: user.isActif,
                    password: user.password,
                    LocalisationId: user.LocalisationId,
                }).then(async (req: any) => {
    
    
                    
                })
            })
            
    
            console.log('Database created')
        })
    }