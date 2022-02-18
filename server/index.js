const express = require("express")
const app = express()
const routerUsers = require("./src/routes/userRoutes")
const cors = require("cors")
const path = require("path");



app.use(cors())
app.use(express.json())
app.use("/api", routerUsers)

app.use(express.static(path.join(__dirname, "..", "client", "build")));
//console.log(path.join(__dirname, "..", "client", "build"))
app.use((req, res) => {
    console.log("paso")
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });

const PORT = process.env.PORT || 7001
app.listen(PORT, ()=>{
    console.log(`Server is running`)
})

module.exports = app