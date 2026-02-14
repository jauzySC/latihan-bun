import { bookshelf } from "../config/database";
import { UserModel } from "./user.model";

export const KelasModel = bookshelf.model('KelasModel',{
    tableName: 'classes',

    users(){
        return this.hasMany(UserModel,"classes_id")
    }

   
})
