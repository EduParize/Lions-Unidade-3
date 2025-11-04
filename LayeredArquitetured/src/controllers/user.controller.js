// ...
import { user } from "../models/user.model.js"
import userService from "../services/user.service.js"

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
}}