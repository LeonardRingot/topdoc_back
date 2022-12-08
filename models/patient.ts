import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
    const concatRequiredMessage = (data: string) => {
        return `${data} is required`
    }

    return sequelize.define('Patient', {
        td_firstname: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('firstname') },
                notEmpty: { msg: concatRequiredMessage('firstname') }
            }
        },
        td_lastname: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('lastname') },
                notEmpty: { msg: concatRequiredMessage('lastname') }
            }
        },
        td_birthday: {
            type: dataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('birthday date') },
                notEmpty: { msg: concatRequiredMessage('birthday date') }
            }
        },
        
    })
}