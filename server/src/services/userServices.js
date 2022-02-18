
const {userDao} = require("../models/daos/index")

const getUsersService = async () =>{
    return await userDao.listarAll()
}

const getUserByIdService = async (id) =>{
    return await userDao.listar(id)
    //return {id: id, test: "test"}
}

const createUserService = async (data) =>{
    return await userDao.guardar(data)
}

const deleteByIdService = async (id) =>{
    return await userDao.borrar(id)
}

const deleteAllService = async () =>{
    return await userDao.borrarAll()
}

module.exports = {
    getUsersService, getUserByIdService, createUserService, deleteByIdService, deleteAllService
}