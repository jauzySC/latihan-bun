import type { Context } from "hono";
import { KelasModel } from "../models/kelas.model";


export function mapGender(gender:number): string {
    switch (gender) {
        case 1:
            return "Laki-laki"
        case 2:
            return "Perempuan"
        default:
            return ""
    }
}

export default class ClassesController{
    async getListlKelas(C:Context){
        const kelas = await KelasModel.fetchAll().map ((item:any)=> {
            return{
                id: item.get('id'),
                kelas : item.get('kelas'),

            }
            
        }) 
         return C.json({
        status: true,
        message: "Data Telah berhasil Di Tambahkan",
        data: kelas,
        });
    }
    
    async getDetailKelas(c: Context){
    const id = c.req.param('id')

    const kelas = await KelasModel
        .where('id', id)
        .fetch({ require: false, withRelated: ['users'] })

    if (!kelas) {
        return c.json({ status:false, message:"Data tidak ditemukan" }, 404)
    }

    const users = kelas.related('users').map((u:any) => ({
        id: u.get('id'),
        name: u.get('name'),
        gender: mapGender(u.get('gender'))
    }))

    return c.json({
        status : true,
        message: "Data berhasil di tampilkan",
        data: {
            id: kelas.get('id'),
            kelas: kelas.get('kelas'),
            users
        }
    })
}

    }

