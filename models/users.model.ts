import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database/sequelize";


export class User extends Model{
    id!:number
    td_email!:string
    td_password!:string
    td_phone!:number
    td_isActif!:boolean
    LocalisationId!:number
}
const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}

    User.init({
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        td_email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                notNull: { msg: concatRequiredMessage('Email') },
                notEmpty: { msg: concatRequiredMessage('Email') }
            }
        },
        td_password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('Password') },
                notEmpty: { msg: concatRequiredMessage('Password') }
            }
        },
        td_phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            validate: {
                isAlphanumeric: true
            }
        },
        td_isActif: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        LocalisationId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            validate: {
                isAlphanumeric: true
            }
        },
    },
{
    sequelize,
    freezeTableName: true,
    tableName: "User",
    underscored: true
}
);
