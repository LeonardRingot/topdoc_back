import { DataTypes, Model} from "sequelize"
import { sequelize } from "../database/sequelize";

import { Role } from "./role.model";
export class User extends Model{
   
   
    id!:number
    lastname!:string
    firstname!:string
    birthday!: Date
    email!:string
    password!:string
    phone!:number
    isActif!:boolean
    
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
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('Lastname') },
                notEmpty: { msg: concatRequiredMessage('Lastname') }
            }
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('Firstname') },
                notEmpty: { msg: concatRequiredMessage('Firstname') }
            }
        },
        birthday: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('birthday date') },
                notEmpty: { msg: concatRequiredMessage('birthday date') }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                notNull: { msg: concatRequiredMessage('Email') },
                notEmpty: { msg: concatRequiredMessage('Email') }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('Password') },
                notEmpty: { msg: concatRequiredMessage('Password') }
            }
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            validate: {
                isAlphanumeric: true
            }
        },
        isActif: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    },
{
    sequelize,
    tableName: 'td_User',
    freezeTableName: true
   
    
}
);
