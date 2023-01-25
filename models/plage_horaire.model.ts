import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database/sequelize";

export class Plage_Horaire extends Model{

<<<<<<< HEAD
    jour!:Date
    StartHour!:Date
    EndHour!:Date
    pauseStart!:Date
    pauseEnd!:Date
    duree_horaire!:number
=======
    date!:Date
    startHour!:string
    endHour!:string
    pauseStartHour!:string
    pauseEndHour!:string
>>>>>>> bb5ac0482451c8167aa80e629380b973acfd336e
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
<<<<<<< HEAD
        jour: {
=======
        date: {
>>>>>>> bb5ac0482451c8167aa80e629380b973acfd336e
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
<<<<<<< HEAD
        pauseStart: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('pauseStart date') },
                notEmpty: { msg: concatRequiredMessage('pauseStart date') }
            }
        },
        pauseEnd: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('pauseEnd date') },
                notEmpty: { msg: concatRequiredMessage('pauseEnd date') }
            }
        },
        duree_horaire: {
            type: DataTypes.INTEGER,
            allowNull: false,
=======
        pauseStartHour: {
            type: DataTypes.STRING,
            allowNull: true,
>>>>>>> bb5ac0482451c8167aa80e629380b973acfd336e
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


