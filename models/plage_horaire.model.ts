import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database/sequelize";
import { concatRequiredMessage } from "../core/method"

export class Plage_Horaire extends Model{
    td_jour!:string
    td_debut_jour!:Date
    td_fin_jour!:Date
    td_duree_horaire!:number
    PlanningId!:number
}

    Plage_Horaire.init({
       

        td_jour: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('jour') },
                notEmpty: { msg: concatRequiredMessage('jour') }
            }
        },
        td_debut_jour: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('td_debut_jour date') },
                notEmpty: { msg: concatRequiredMessage('td_debut_jour date') }
            }
        },
        td_fin_jour: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('td_fin_jour date') },
                notEmpty: { msg: concatRequiredMessage('td_fin_jour date') }
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
        PlanningId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('PlanningId') },
                notEmpty: { msg: concatRequiredMessage('PlanningId') }
            }
        }
    },

    {
        sequelize,
        freezeTableName: true,
        tableName: "Plage_Horaire",
        underscored: true
    }
);


