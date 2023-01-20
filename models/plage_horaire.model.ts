import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database/sequelize";

export class Plage_Horaire extends Model{

    jour!:string
    StartHour!:Date
    EndHour!:Date
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
        jour: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('le jour') },
                notEmpty: { msg: concatRequiredMessage('le jour') }
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
        duree_horaire: {
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
        tableName: "td_Plage_Horaire",
    }
);


