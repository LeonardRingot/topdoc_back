import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";

export class Planning extends Model {
    td_planning_name!: string
    td_startDate!: Date
    td_endDate!: Date
    
}
const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}
 Planning.init(
    
{
    
    td_planning_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Planning name') },
            notEmpty: { msg: concatRequiredMessage('Planning name') }
        }
    },
    td_startDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage(' date debut') },
                notEmpty: { msg: concatRequiredMessage('date debut') }
            }
            
        },
        td_endDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('date fin') },
                notEmpty: { msg: concatRequiredMessage('date fin') }
            }
        }
    },
        {
            sequelize,
            freezeTableName: true,
            tableName: "Plannings",
        }
);