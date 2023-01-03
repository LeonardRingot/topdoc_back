import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";


export class Patient extends Model {
   
    UserId!: number
    // td_lastname:string
    // td_firstname:string
    // td_birthday: Date
    // td_email:string
    // td_password:string
    // td_phone:number
    // td_isActif:boolean
    td_patient:string

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
        // td_lastname: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     validate: {
        //         notNull: { msg: concatRequiredMessage('Lastname') },
        //         notEmpty: { msg: concatRequiredMessage('Lastname') }
        //     }
        // },
        // td_firstname: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     validate: {
        //         notNull: { msg: concatRequiredMessage('Firstname') },
        //         notEmpty: { msg: concatRequiredMessage('Firstname') }
        //     }
        // },
        // td_birthday: {
        //     type: DataTypes.DATE,
        //     allowNull: false,
        //     validate: {
        //         notNull: { msg: concatRequiredMessage('birthday date') },
        //         notEmpty: { msg: concatRequiredMessage('birthday date') }
        //     }
        // },
        // td_email: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     unique: true,
        //     validate: {
        //         isEmail: true,
        //         notNull: { msg: concatRequiredMessage('Email') },
        //         notEmpty: { msg: concatRequiredMessage('Email') }
        //     }
        // },
        // td_password: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     validate: {
        //         notNull: { msg: concatRequiredMessage('Password') },
        //         notEmpty: { msg: concatRequiredMessage('Password') }
        //     }
        // },
        // td_phone: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     unique: true,
        //     validate: {
        //         isAlphanumeric: true
        //     }
        // },
        // td_isActif: {
        //     type: DataTypes.BOOLEAN,
        //     allowNull: false
        // },
        td_patient:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('Patient') },
                notEmpty: { msg: concatRequiredMessage('Patient') }
            }
        }
        
    },
        {
            sequelize,
            freezeTableName: true,
            tableName: "Patient",
            
        }
    );