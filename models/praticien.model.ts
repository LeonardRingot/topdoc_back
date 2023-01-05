import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";
import { User } from "./users.model";

export class Praticien extends Model {
    static mapToDtoCreate(praticien: Praticien, newUser: User): any {
        throw new Error("Method not implemented.");
    }
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
        }
);