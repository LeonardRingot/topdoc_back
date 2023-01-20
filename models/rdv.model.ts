import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";

export class Rdv extends Model {
    date_rendez_vous!: Date
    duree_rdv:number
    motif!: string
}
const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}

Rdv.init({

        date_rendez_vous: {
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
        
        
  
    
