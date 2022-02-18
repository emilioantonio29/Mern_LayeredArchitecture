const MongoDaos = require("./mongoDaos")
const MemoriaDaos = require("./memoryDaos")

let userDao;
let persis = "memoria"

switch(persis){
    case "mongo":
        userDao = new MongoDaos()
        break;
    case "memoria":
        userDao = new MemoriaDaos()
        break;
}

module.exports = {userDao}