import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database/sequelize";

export class Plage_Horaire extends Model{
    date!:Date
    StartHour!:Date
    EndHour!:Date
    pauseStartHour!:Date
    pauseEndHour!:Date
    duree_horaire!:number
}
const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}
    Plage_Horaire.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('le date') },
                notEmpty: { msg: concatRequiredMessage('le date') }
            }
        },
        StartHour: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('td_StartHour date') },
                notEmpty: { msg: concatRequiredMessage('td_StartHour date') }
            }
        },
        EndHour: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('td_EndHour date') },
                notEmpty: { msg: concatRequiredMessage('td_EndHour date') }
            }
        },
        pauseStartHour: {
            type: DataTypes.DATE,
            allowNull: true,
            validate: {
                notEmpty: { msg: concatRequiredMessage('pauseStartHour') }
            }
        },
        pauseEndHour: {
            type: DataTypes.DATE,
            allowNull: true,
            validate: {
                notEmpty: { msg: concatRequiredMessage('pauseEndHour') }
            }
        },
        duree_horaire: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                notEmpty: { msg: concatRequiredMessage('duree_horaire') }
            }
        }
    },

    {
        sequelize,
        freezeTableName: true,
        tableName: "td_Plage_Horaire",
    }
);


