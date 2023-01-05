import { DataTypes, Model, Sequelize } from "sequelize"
import { sequelize } from "../database/sequelize";

export class Localisation extends Model {
    id?: number
    td_address: string
    td_zipCode: number
    td_city: string
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
        td_address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('address') },
                notEmpty: { msg: concatRequiredMessage('address') }
            }
        },
        td_zipCode: {
            type: DataTypes.INTEGER,
             allowNull: false
        },
        td_city: {
            type: DataTypes.STRING,
            allowNull: false
        }
        },{
        sequelize,
        modelName:'Localisation',
        tableName:'Localisation',
        timestamps:false,
         freezeTableName: true
});
