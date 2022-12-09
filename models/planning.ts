import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
    const concatRequiredMessage = (data: string) => {
        return `${data} is required`
    }

    return sequelize.define('Planning', {

        td_dure_validite: {
            type: dataTypes.INTEGER,
            allowNull: false,
           
        },
        td_date_debut: {
            type: dataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage(' date debut') },
                notEmpty: { msg: concatRequiredMessage('date debut') }
            }
            
        },
        td_date_fin: {
            type: dataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('date fin') },
                notEmpty: { msg: concatRequiredMessage('date fin') }
            }
        },
       
        
    })
}