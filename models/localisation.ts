import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
    const concatRequiredMessage = (data: string) => {
        return `${data} is required`
    }

    return sequelize.define('Localisation', {

        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        td_address: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('address') },
                notEmpty: { msg: concatRequiredMessage('address') }
            }
        },
        td_zipCode: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        td_city: {
            type: dataTypes.STRING,
            allowNull: false
        }
    })
}