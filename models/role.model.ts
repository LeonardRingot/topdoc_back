
import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database/sequelize";
import { concatRequiredMessage } from "../core/method"

export class Role extends Model{
    td_role_nom!:string
}

   Role.init({
        td_role_nom: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: { msg: concatRequiredMessage('role name') },
                notEmpty: { msg: concatRequiredMessage('role name') }
            }
        }
   },
   {
    sequelize,
    freezeTableName: true,
    tableName: "Role",
    underscored: true
}
);
        
