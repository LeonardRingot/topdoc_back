import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database/sequelize";
import { concatRequiredMessage } from "../core/method"

export class Conge extends Model {
    id!: number
    td_debut_conge!: Date
    td_fin_conge!: Date
}

Conge.init( {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        td_debut_conge: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('debut conge') },
                notEmpty: { msg: concatRequiredMessage('debut conge') }
            }
            
        },
        td_fin_conge: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('fin conge') },
                notEmpty: { msg: concatRequiredMessage('fin conge') }
            }
        }
    },
        {
            sequelize,
            freezeTableName: true,
            tableName: "Conge",
            underscored: true
        }
    );