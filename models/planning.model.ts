import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";

export class Planning extends Model {
    planning_id!:number;
    PraticienUserId!:number
    td_planning_name!: string
    td_date_debut!: Date
    td_date_fin!: Date
    
}
const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}
 Planning.init(
    
{
    planning_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    td_planning_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: concatRequiredMessage('Planning name') },
            notEmpty: { msg: concatRequiredMessage('Planning name') }
        }
    },
    td_date_debut: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage(' date debut') },
                notEmpty: { msg: concatRequiredMessage('date debut') }
            }
            
        },
        td_date_fin: {
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