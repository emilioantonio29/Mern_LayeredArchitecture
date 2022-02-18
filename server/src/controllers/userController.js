const {getUsersService, getUserByIdService, createUserService, deleteByIdService, deleteAllService} = require("../services/userServices")

const getAllUsers = async (req, res) => {
    try {
        //consumir el servicio
        let users = await getUsersService()
        res.json(users)
    } catch (err) {
        res.json({message: "error en la consulta de usuarios"})
    }
}

const getUserById = async (req, res) =>{
    let {id} = req.params
    try {
        let user = await getUserByIdService(id)
        res.json(user)
    } catch (err) {
        res.json({message: "error en la consulta de usuario"})
    }
}

const createUser = async (req, res) => {
    let userBody = req.body
    try {
        // EJEMPLO EN MEMORIA; CREO EL ID
        userBody.id = Math.random()
        let userSave = await createUserService(userBody)
        res.json({message: "Usuario creado", data: userSave})
    } catch (err) {
        console.log("error al crear usuario")
    }
}

const deleteUser = async(req, res) => {
    let {id} = req.params;
    try {
        let userDelete = await deleteByIdService(id)
        res.json({message: "Usuario borrado", data: userDelete})
    } catch (err) {
        res.json("error al eliminar usuario")
    }   

}

const deleteAll = async(req, res) =>{
    try {
        let usersDelete = await deleteAllService()
        res.json(usersDelete)
    } catch (err) {
        res.json({message: "error borrando todos los usuarios"})
    }
}

module.exports = {
    getAllUsers, getUserById, createUser, deleteUser, deleteAll
}