// ...
import { user } from "../models/user.model.js"
import userService from "../services/user.service.js"
import returnError from "../utils/returnError.js"

export default{
    async userCreate(req, res, next){
    const data = req.body
        try{
            const user = await userService.createUser(data)
            res.status(201).json(user)
        }catch(error){
            next(error)
        }
},
    async userList(req, res, next){
        try{
        const userList = await userService.listUser()
        res.json(userList)
    }catch(error){
        next(error)
    }
},
    async updateUser(req, res, next){   
        const id  = req.params.id   
        const data = req.body
        try{
            const updatedUser = await userService.updateUser(id, data)
            res.status(200).json(updatedUser)
        }catch(error){
            next(error)
        }
    },
    async deleteUser(req, res, next){
        const id=req.params.id;
        try{
            const deletedUser = await userService.deleteUser(id);
            res.status(200).json("Usuario deletado com sucesso!")
        }catch(error){
            next(error)
        }
    }
}