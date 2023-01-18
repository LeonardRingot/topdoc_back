
import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database/sequelize";

export class Role extends Model{
    
    RoleId!:number;
    td_role_nom!:string;
}
const concatRequiredMessage = (data: string) => {
    return `Le champ ${data} est requis`
}
   Role.init({
    RoleId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
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
}
);
        
