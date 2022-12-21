import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";


export class Praticien extends Model {
    UserId!: number
    td_activite!: string
}
const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}
     Praticien.init({
        UserId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        td_activite: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('activite') },
                notEmpty: { msg: concatRequiredMessage('activite') }
            }
        }
    },
        {
            sequelize,
            freezeTableName: true,
            tableName: "Praticiens",
            underscored: true
        }
    );