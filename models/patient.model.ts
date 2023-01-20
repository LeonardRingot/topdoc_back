import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";

export class Patient extends Model {
    UserId!: number
    numbervitalCode:string
}
const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}
     Patient.init({
        UserId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        numbervitalCode:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('Carte vitale') },
                notEmpty: { msg: concatRequiredMessage('Carte vitale') }
            }
        }
    },
        {
            sequelize,
            freezeTableName: true,
            tableName: "td_Patient",
            
        }
);