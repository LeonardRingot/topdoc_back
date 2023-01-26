import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";

export class Rdv extends Model {
    date!: Date
    motif!: string
    StartHour!: Date
    EndHour!: Date
    duree_rdv!:number
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
        StartHour: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('StartHour') },
                notEmpty: { msg: concatRequiredMessage('StartHour') }
            }
        },
        EndHour: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('EndHour') },
                notEmpty: { msg: concatRequiredMessage('EndHour') }
            }
        },
        duree_rdv: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('duree_rdv') },
                notEmpty: { msg: concatRequiredMessage('duree_rdv') }
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
        
        
  
    
