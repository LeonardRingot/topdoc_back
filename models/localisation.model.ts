import { DataTypes, Model, Sequelize } from "sequelize"
import { sequelize } from "../database/sequelize";

export class Localisation extends Model {
    id?: number
    address!: string
    zipCode!: number
    city!: string
}
const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}
    Localisation.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('address') },
                notEmpty: { msg: concatRequiredMessage('address') }
            }
        },
        zipCode: {
            type: DataTypes.INTEGER,
             allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        }
        },{
        sequelize,
        tableName:'td_Localisation',
         timestamps:false,
         freezeTableName: true
});
