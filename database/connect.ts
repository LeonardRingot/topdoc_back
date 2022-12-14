import { sequelize } from './sequelize'

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

import { Patient } from "~~/models/patient.model"
import { Praticien } from "~~/models/praticien.model"
import { User } from "~~/models/users.model"
import { Localisation } from "~~/models/localisation.model"
import { Ban } from "~~/models/ban.model"
import { Conge } from "~~/models/conge.model"
import { Plage_Horaire } from "~~/models/plage_horaire.model"
import { Planning } from "~~/models/planning.model"
import { Rdv } from "~~/models/rdv.model"
import { Role } from "~~/models/role.model"
import { Token } from "~~/models/token.model"

sequelize.authenticate()
    .then(() => console.log('Link established'))
    .catch((error: Error) => console.error(`Error: ${error}`)
    )

User.hasOne(Token, { onDelete: 'cascade', hooks: true })
Token.belongsTo(User, { onDelete: 'cascade', hooks: true })

Localisation.hasOne(User, {  onDelete: 'cascade', hooks: true })
User.belongsTo(Localisation, { onDelete: 'cascade', hooks: true})

User.hasOne(Patient, {  onDelete: 'cascade', hooks: true, foreignKey:"UserId" })
Patient.belongsTo(User, { onDelete: 'cascade', hooks: true, foreignKey:"UserId"})


User.hasOne(Patient, {  onDelete: 'cascade', hooks: true})
Patient.belongsTo(User, {onDelete: 'cascade', hooks: true})

User.hasOne(Praticien, {  onDelete: 'cascade', hooks: true })
Praticien.belongsTo(User, {  onDelete: 'cascade', hooks: true })

Praticien.hasOne(Conge, {  onDelete: 'cascade', hooks: true ,  foreignKey:"PraticienUserId"})
Conge.belongsTo(Praticien, {  onDelete: 'cascade', hooks: true ,  foreignKey:"PraticienUserId"})

Patient.hasOne(Rdv, {  onDelete: 'cascade', hooks: true, foreignKey:"PatientUserId"})
Rdv.belongsTo(Patient, {  onDelete: 'cascade', hooks: true , foreignKey:"PatientUserId"})

Praticien.hasOne(Rdv, { onDelete: 'cascade', hooks: true,  foreignKey:"PraticienUserId" })
Rdv.belongsTo(Praticien, {  onDelete: 'cascade', hooks: true, foreignKey:"PraticienUserId"})

Planning.hasOne(Plage_Horaire, {  onDelete: 'cascade', hooks: true })
Plage_Horaire.belongsTo(Planning, {  onDelete: 'cascade', hooks: true })

export const initDb = () => {
    return sequelize.sync({ force: true }).then(() =>
     {
        localisations.map(localisation => {
            Localisation.create({
                td_address: localisation.td_address,
                td_zipCode: localisation.td_zipCode,
                td_city: localisation.td_city
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })
        roles.map(role => {
            Role.create({
                td_role_nom: role.td_role_nom
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })
        users.map(user => {
            User.create({
              //  UserId:user.UserId,
                td_lastname:user.td_lastname,
                td_firstname:user.td_firstname,
                td_birthday:user.td_birthday,
                td_email: user.td_email,
                td_phone: user.td_phone,
                td_isActif: user.td_isActif,
                td_password: user.td_password,
                LocalisationId: user.LocalisationId
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })
        tokens.map(token => {
            Token.create({
                refreshToken: token.refreshToken,
                UserId: token.UserId
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })
        patients.map((patient,index: number) =>{
            Patient.create({
                td_numbervitalCode: patient.td_numbervitalCode,
                UserId:index+1
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })
        praticien.map(praticien=> {
            Praticien.create({
                UserId:praticien.UserId,
                td_activite: praticien.td_activite,
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })
        rdvs.map(rdv=> {
            Rdv.create({
                PraticienUserId:rdv.PraticienUserId,
                PatientUserId:rdv.PatientUserId,
                td_date_rendez_vous: rdv.td_date_rendez_vous,
                td_motif:rdv.td_motif,
                td_duree_rdv:rdv.td_duree_rdv
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })
        bans.map(bans=> {
            Ban.create({
                td_ban_raison: bans.td_ban_raison,
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })
        conge.map((conge, index:number) => {
            Conge.create({
                PraticienUserId:conge.PraticienUserId,
                td_debut_conge: conge.td_debut_conge,
                td_fin_conge: conge.td_fin_conge,
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })
        planning.map(planning => {
            Planning.create({
                td_dure_validite:planning.td_dure_validite,
                td_date_debut:planning.td_date_debut,
                td_date_fin:planning.td_date_fin,
            }).then((response: { toJSON: () => string }) => console.log(response.toJSON()))
        })
        plage_horaire.map(plage_horaire => {
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
