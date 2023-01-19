import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database/sequelize";

export class Plage_Horaire extends Model{

    td_day!:string
    td_StartHour!:Date
    td_EndHour!:Date
    td_duree_horaire!:number
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
        td_day: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('le jour') },
                notEmpty: { msg: concatRequiredMessage('le jour') }
            }
        },
        td_StartHour: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('td_StartHour date') },
                notEmpty: { msg: concatRequiredMessage('td_StartHour date') }
            }
        },
        td_EndHour: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('td_EndHour date') },
                notEmpty: { msg: concatRequiredMessage('td_EndHour date') }
            }
        },
        td_duree_horaire: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('td_duree_horaire') },
                notEmpty: { msg: concatRequiredMessage('td_duree_horaire') }
            }
        },
    },

    {
        sequelize,
        freezeTableName: true,
        tableName: "Plage_Horaire",
    }
);


