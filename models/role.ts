
import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
    const concatRequiredMessage = (data: string) => {
        return `${data} is required`
    }

    return sequelize.define('Role', {
        td_role_nom: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('role name') },
                notEmpty: { msg: concatRequiredMessage('role name') }
            }
        },
    })
}