
import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database/sequelize";
import { concatRequiredMessage } from "../core/method"

export class Token extends Model{
    id!:number
    refreshToken!:string
   
}
   Token.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    refreshToken: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Token') },
            notEmpty: { msg: concatRequiredMessage('Token') }
        }
    }
},
{
    sequelize,
    freezeTableName: true,
    tableName: "Token",
    underscored: true
}
);

      
