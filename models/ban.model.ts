import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database/sequelize";
import { concatRequiredMessage } from "../core/method"

export class Ban extends Model{
    td_ban_raison!: string
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