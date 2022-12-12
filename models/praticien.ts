import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
    const concatRequiredMessage = (data: string) => {
        return `${data} is required`
    }

    return sequelize.define('Praticien', {
        UserId: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        td_activite: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('activite') },
                notEmpty: { msg: concatRequiredMessage('activite') }
            }
        },
    })
}