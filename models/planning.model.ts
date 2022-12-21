import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";


export class Planning extends Model {
    id_planning!:number;
    td_dure_validite!: number
    td_date_debut!: Date
    td_date_fin!: Date
    
}
const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}
 Planning.init(
    
{
    id_planning: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
        td_dure_validite: {
            type: DataTypes.INTEGER,
            allowNull: false,
           
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
            underscored: true
        }
    );