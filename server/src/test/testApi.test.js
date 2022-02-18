// EXTRACCION DE LA APLICACION SI UTILIZAR EL EXPORT DEL ARCHIVO INDEX
// SUPERTEST te permite hacer una copia de toda la aplicacion de express
const request = require("supertest")("http://localhost:7001")
const expect = require("chai").expect

// AHORA el request queda cargado con los metodos
// request.get("/api/users")

describe("API GET api/users", () => {
    it("Deberia retornar status 200", async () =>{
        let response = await request.get("/api/users")
        expect(response.status).to.eql(200)
    })
})