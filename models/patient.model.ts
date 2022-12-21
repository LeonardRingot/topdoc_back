import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";


export class Patient extends Model {
    UserId!: number
    td_firstname!:string
    td_lastname!:string
    td_birthday!:Date

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
        td_firstname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('firstname') },
                notEmpty: { msg: concatRequiredMessage('firstname') }
            }
        },
        td_lastname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('lastname') },
                notEmpty: { msg: concatRequiredMessage('lastname') }
            }
        },
        td_birthday: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('birthday date') },
                notEmpty: { msg: concatRequiredMessage('birthday date') }
            }
        }
    },
        {
            sequelize,
            freezeTableName: true,
            tableName: "Patients",
            underscored: true
        }
    );