import type { Context } from "hono";
import { SchoolModel } from "../models/school.model";

export default class SchoolsController {
 async getListData(c:Context){
    const school = await SchoolModel.fetchAll().map ((item:any) => {
        return{
            id : item.get('id'),
            name :item.get('name')

        }
    })
    return c.json({
        status: true,
        message: "Data Telah berhasil Di Tambahkan",
        data: school,
        });

        }  
 
    async getDetailData(c:Context) {
        const id = c.req.param('id')
        
        const school = await SchoolModel.where('id',id).
        fetch({require: false, withRelated: [ 'users']})

        return c.json({
        status :    true,
        message: "Data berhasil di tampilkan",
        data: {
            id      : school.get('id'),
            name    : school.get('name'),
            users   : school.related('users')
        }
                })
        }
        
    


}