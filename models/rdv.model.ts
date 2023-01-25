import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";

export class Rdv extends Model {
    date!: Date
    duree_rdv!:number
    StartHour!:Date
    EndHour!:Date
    motif!: string
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
        duree_rdv: {
            type: DataTypes.INTEGER,
            allowNull: false,
        
        },
        StartHour: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('td_StartHour date') },
                notEmpty: { msg: concatRequiredMessage('td_StartHour date') }
            }
        },
        EndHour: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('td_EndHour date') },
                notEmpty: { msg: concatRequiredMessage('td_EndHour date') }
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
        
        
  
    
