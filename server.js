const express = require("express");
const app = express()
const router = require("./router/auth-router");


app.use(express.json())

app.use("/api/auth", router)



//PORT  

const PORT  = 8080 ;
app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`);
   

})
