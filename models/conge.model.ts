import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database/sequelize";

export class Conge extends Model {
    td_debut_conge!: Date
    td_fin_conge!: Date
}
const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}
Conge.init( {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
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
        }
);