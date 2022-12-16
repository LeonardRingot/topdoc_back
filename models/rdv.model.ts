import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";
import { concatRequiredMessage } from "../core/method"

export class Rdv extends Model {
    td_date_rendez_vous!: Date
    td_duree_rdv:number
    td_motif!: string
    PatientUserId: number
     PraticienUserId: number
}

Rdv.init({

        td_date_rendez_vous: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('rdv date') },
                notEmpty: { msg: concatRequiredMessage('rdv date') }
            }
            
        },
        td_duree_rdv: {
            type: DataTypes.INTEGER,
            allowNull: false,
        
        },
        td_motif: {
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
        tableName: "Rdvs",
        underscored: true
    }
);
        
        
  
    
