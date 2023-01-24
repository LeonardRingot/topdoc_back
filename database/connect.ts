import { sequelize   } from './sequelize'
import { DataTypes, Sequelize } from "sequelize"
import { users } from './mock-user'
import { localisations } from './mock-localisation'
import { praticien } from './mock-praticien'
import { patients } from './mock-patient'
import { roles } from './mock-role'
import { rdvs } from './mock-rdv'
import { tokens } from './mock-token'
import { bans } from './mock-ban'
import { conge } from './mock-conge'
import { plage_horaire } from './mock-plage_horaire'
import { planning } from './mock-planning'



import { roleTypes } from "../types/role"
import { Patient } from "~~/models/patient.model"

import { Role } from '~~/models/role.model'

import { Praticien } from "~~/models/praticien.model"
import { User } from "~~/models/users.model"
import { Localisation } from "~~/models/localisation.model"
import { Ban } from "~~/models/ban.model"
import { Conge } from "~~/models/conge.model"
import { Plage_Horaire } from "~~/models/plage_horaire.model"
import { Planning } from "~~/models/planning.model"
import { Rdv } from "~~/models/rdv.model"

import { Token } from "~~/models/token.model"
import { userTypes } from '~~/types/utilisateur'
const RoleUserModel = require('../models/roleUsers')


sequelize.authenticate()
    .then(() => console.log('Link established'))
    .catch((error: Error) => console.error(`Error: ${error}`)
    )
    export const RoleUser = RoleUserModel(sequelize, DataTypes)
    
User.hasOne(Token, { onDelete: 'cascade', hooks: true })
Token.belongsTo(User, { onDelete: 'cascade', hooks: true })

Localisation.hasOne(User, {  onDelete: 'cascade', hooks: true })
User.belongsTo(Localisation, { onDelete: 'cascade', hooks: true, foreignKey:'LocalisationId'})

User.hasOne(Patient, {  onDelete: 'cascade', hooks: true })
Patient.belongsTo(User, { onDelete: 'cascade', hooks: true, foreignKey:'UserId'})

User.hasOne(Praticien, {  onDelete: 'cascade', hooks: true  })
Praticien.belongsTo(User, {  onDelete: 'cascade', hooks: true })

Plage_Horaire.belongsTo(Planning, {  onDelete: 'cascade', hooks: true , foreignKey: 'planningId'})
Planning.hasMany(Plage_Horaire, {  onDelete: 'cascade', hooks: true, foreignKey: 'planningId' })

// Planning.belongsTo(Praticien, {  onDelete: 'cascade', hooks: true, foreignKey: 'planningId' })
// Praticien.hasMany(Planning, {  onDelete: 'cascade', hooks: true , foreignKey: 'planningId'})

Conge.belongsTo(Praticien, {  onDelete: 'cascade', hooks: true ,  foreignKey:"PraticienUserId"})
Praticien.hasMany(Conge, {  onDelete: 'cascade', hooks: true ,  foreignKey:"PraticienUserId"})

Patient.hasOne(Rdv, {  onDelete: 'cascade', hooks: true, foreignKey:"PatientUserId"})
Rdv.belongsTo(Patient, {  onDelete: 'cascade', hooks: true , foreignKey:"PatientUserId"})

Praticien.hasOne(Rdv, { onDelete: 'cascade', hooks: true,  foreignKey:"PraticienUserId" })
Rdv.belongsTo(Praticien, {  onDelete: 'cascade', hooks: true, foreignKey:"PraticienUserId"})

Planning.hasOne(Plage_Horaire, {  onDelete: 'cascade', hooks: true , foreignKey: 'planningId'})
Plage_Horaire.belongsTo(Planning, {  onDelete: 'cascade', hooks: true, foreignKey: 'planningId' })

Role.belongsToMany(User, { through: RoleUser })
User.belongsToMany(Role, { through: RoleUser })

export const initDb = () => {
    return sequelize.sync({ force: true }).then(() =>
     {
        localisations.map(localisation => {
            Localisation.create({
                address: localisation.address,
                zipCode: localisation.zipCode,
                city: localisation.city
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })
        roles.map((role: roleTypes) => {
            Role.create({
                role_nom: role.role_nom
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })
        users.map((user: userTypes, index: number) => {
            User.create({
                lastname:user.lastname,
                firstname:user.firstname,
                birthday:user.birthday,
                email: user.email,
                phone: user.phone,
                isActif: user.isActif,
                password: user.password,
                LocalisationId: user.LocalisationId
            }).then(async (req: any) => {
                        const praticienRole = await Role.findByPk(index + 1);
                       await req.addRole(praticienRole, { through: RoleUser  })
            })
        })
        tokens.map(token => {
            Token.create({
                refreshToken: token.refreshToken,
                UserId: token.UserId
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })
        patients.map((patient,index: number) =>{
            Patient.create({
                numbervitalCode: patient.numbervitalCode,
                UserId:index+1
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })
        praticien.map(praticien=> {
            Praticien.create({
                UserId:praticien.UserId,
                planningId:praticien.planningId,
                activite: praticien.activite,
                
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })
        rdvs.map(rdv=> {
            Rdv.create({
                PraticienUserId:rdv.PraticienUserId,
                PatientUserId:rdv.PatientUserId,
                date: rdv.date,
                motif:rdv.motif,
                startHour: rdv.startHour,
                endHour: rdv.endHour
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })
        bans.map(bans=> {
            Ban.create({
                ban_raison: bans.ban_raison,
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })
        conge.map((conge, index:number) => {
            Conge.create({
                PraticienUserId:conge.PraticienUserId,
                startDate: conge.startDate,
                endDate: conge.endDate,
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })
        planning.map(planning => {
            Planning.create({
                planningId:planning.planningId,
                planning_name:planning.planning_name,
                startDate:planning.startDate,
                validDuration: planning.validDuration,
                rdvDuration: planning.rdvDuration,
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })
        plage_horaire.map(plage_horaire => {
            Plage_Horaire.create({
                planningId:plage_horaire.planningId,
                date:plage_horaire.date,
                startHour:plage_horaire.startHour,
                endHour:plage_horaire.endHour,
                pauseStartHour: plage_horaire.pauseStartHour,
                pauseEndHour: plage_horaire.pauseEndHour,
               
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })
        console.log('Database created')
    })
}
