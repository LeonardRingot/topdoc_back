import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database/sequelize";

export class Plage_Horaire extends Model{

    date!:Date
    startHour!:string
    endHour!:string
    pauseStartHour!:string
    pauseEndHour!:string
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
        startHour: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('td_StartHour date') },
                notEmpty: { msg: concatRequiredMessage('td_StartHour date') }
            }
        },
        endHour: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('td_EndHour date') },
                notEmpty: { msg: concatRequiredMessage('td_EndHour date') }
            }
        },
        pauseStartHour: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: { msg: concatRequiredMessage('pauseStartHour') }
            }
        },
        pauseEndHour: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: { msg: concatRequiredMessage('pauseEndHour') }
            }
        }
    },

    {
        sequelize,
        freezeTableName: true,
        tableName: "td_Plage_Horaire",
    }
);


