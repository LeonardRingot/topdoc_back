import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database/sequelize";

export class Token extends Model{
    id!:number
    refreshToken!:string
    UserId!:number
}
const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
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
    tableName: "td_Token",
}
);

      
