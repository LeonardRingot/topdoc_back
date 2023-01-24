import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";

export class Rdv extends Model {
    date!: Date
    motif!: string
    startHour!: string
    endHour!: string
}
const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}

Rdv.init({

    date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('rdv date') },
                notEmpty: { msg: concatRequiredMessage('rdv date') }
            }
        },
        startHour: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('startHour') },
                notEmpty: { msg: concatRequiredMessage('startHour') }
            }
        },
        endHour: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('endHour') },
                notEmpty: { msg: concatRequiredMessage('endHour') }
            }
        },
        motif: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('motif') },
                notEmpty: { msg: concatRequiredMessage('motif') }
            }
        },
       
    },
    {
        sequelize,
        freezeTableName: true,
        tableName: "td_Rdvs",
    }
);
        
        
  
    
