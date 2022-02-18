class MemoriaDaos{
    constructor(){
        this.elementos = []
    }

    async listar(id){
        let user = await this.elementos.find(data => data.id == id)
        if(!user){
            return "error: usuario no encontrado"
        }else{
            return user
        }
    }

    listarAll(){
        return [...this.elementos]
    }

    guardar(elem){
        let newId;
        if(this.elementos.length == 0){
            newId = 1
        }else{
            newId = this.elementos[this.elementos.length -1].id+1;
        }
        const newElem = {... elem, id: newId}
        this.elementos.push(newElem);
        return newElem
    }

    actualizar(elem){
        const index = this.elementos.findIndex((p)=>{
            p.id == elem.id
        })
        if(index == -1){
            throw new Error("error al actualizar: elemento no encontrado")
        }else{
            this.elementos[index] = elem
            return elem;
        }
    }

    async borrar(id){
        console.log(id)
        const index = await this.elementos.findIndex((data)=>{
            return data.id == id
        })
        if(index == -1){
            throw new Error("error al borrar: elemento no encontrado")
        }else{
            return this.elementos.splice(index, 1);
        }
    }

    borrarAll(){
        if(this.elementos.length > 0){
            return this.elementos = []
        }else{
            return "no hay elementos para eliminar"
        }
    }
}

module.exports = MemoriaDaos; 