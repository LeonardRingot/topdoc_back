import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";

export class Planning extends Model {
    planning_name!: string
    startDate!: Date
    rdvDuration!:number
    validDuration!:number
    
}
const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}
 Planning.init(
    
{
    
    planning_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Planning name') },
            notEmpty: { msg: concatRequiredMessage('Planning name') }
        }
    },
    startDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage(' date debut') },
                notEmpty: { msg: concatRequiredMessage('date debut') }
            }
            
        },
        rdvDuration: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('rdvDuration') },
                notEmpty: { msg: concatRequiredMessage('rdvDuration') }
            }
        },
        validDuration: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('validDuration') },
                notEmpty: { msg: concatRequiredMessage('validDuration') }
            }
        }
    },
        {
            sequelize,
            freezeTableName: true,
            tableName: "td_Plannings",
        }
);