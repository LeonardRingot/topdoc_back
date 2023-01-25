import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";

export class Rdv extends Model {
    date!: Date
<<<<<<< HEAD
    duree_rdv!:number
    StartHour!:Date
    EndHour!:Date
=======
>>>>>>> bb5ac0482451c8167aa80e629380b973acfd336e
    motif!: string
    startHour!: string
    endHour!: string
}
const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}

Rdv.init({

<<<<<<< HEAD
        date: {
=======
    date: {
>>>>>>> bb5ac0482451c8167aa80e629380b973acfd336e
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
        
        
  
    
