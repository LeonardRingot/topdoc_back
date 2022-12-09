import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
    const concatRequiredMessage = (data: string) => {
        return `${data} is required`
    }

    return sequelize.define('Plage_Horaire', {
       

        td_jour: {
            type: dataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('jour') },
                notEmpty: { msg: concatRequiredMessage('jour') }
            }
        },
        td_debut_jour: {
            type: dataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('td_debut_jour date') },
                notEmpty: { msg: concatRequiredMessage('td_debut_jour date') }
            }
        },
        td_fin_jour: {
            type: dataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('td_fin_jour date') },
                notEmpty: { msg: concatRequiredMessage('td_fin_jour date') }
            }
        },
        td_duree_horaire: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        
    })
}