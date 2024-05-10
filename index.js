//import express into out file
const express = require('express')

// create a new express application

const app = express()

//define the port our server will run on

const port = 3000

//define our server routes

app.get('/test', (req, res)=>{
 //will return a message if client make a request

 //send back a response to the client

 res.send("Server is operational")


})
// run our server to listen at the port we defined
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})
