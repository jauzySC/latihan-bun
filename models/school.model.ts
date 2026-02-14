import { bookshelf } from "../config/database";
import { KelasModel } from "./kelas.model";
import { UserModel } from "./user.model";

export const SchoolModel = bookshelf.model('SchoolModel', {
   tableName: 'schools',

   users(){
      return this.hasMany(UserModel, 'schools_id')
   },

 
})
