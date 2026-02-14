import { bookshelf } from "../config/database";
import { KelasModel } from "./kelas.model";
import { SchoolModel } from "./school.model";

export const UserModel = bookshelf.model("UserModel", {
  tableName: "users",

   schools(){
      return this.belongsTo(SchoolModel, 'schools_id')
   },

   classes(){
      return this.belongsTo(KelasModel,'users_id')
   }
});

