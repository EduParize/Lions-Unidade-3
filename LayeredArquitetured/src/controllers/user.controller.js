import userService from "../services/user.service.js"

export default{
    async userCreate(req, res){
    const data = req.body
        try{
            const user = await userService.createUser(req.body)
            res.status(201).json(user)
        }catch(error){
            next(error)
        }
} 
}