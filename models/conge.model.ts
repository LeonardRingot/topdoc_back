import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database/sequelize";

export class Conge extends Model {
    startDate!: Date
    endDate!: Date
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
    startDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('debut conge') },
                notEmpty: { msg: concatRequiredMessage('debut conge') }
            }
            
        },
        endDate: {
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
            tableName: "td_Conge",
        }
);