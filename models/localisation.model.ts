import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database/sequelize";
import { concatRequiredMessage } from "../core/method"

export class Localisation extends Model {
    id?: number
    td_address!: string
    td_zipCode!: number
    td_city!: string
}

    Localisation.init({

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        td_address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('address') },
                notEmpty: { msg: concatRequiredMessage('address') }
            }
        },
        td_zipCode: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        td_city: {
            type: DataTypes.STRING,
            allowNull: false
        }
        },
    
    {
        sequelize,
        freezeTableName: true,
        tableName: "addresses",
        underscored: true
    }
);