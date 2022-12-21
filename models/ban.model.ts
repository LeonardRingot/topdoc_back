import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database/sequelize";


export class Ban extends Model{
    td_ban_raison!: string
}
const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}
    Ban.init({

        td_ban_raison: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('raison ban') },
                notEmpty: { msg: concatRequiredMessage('raison ban') }
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        tableName: "Bans",
        underscored: true
    }
);