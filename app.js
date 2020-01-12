const express = require("express");


const app = express();


//creating routes
app.get('/', (req,res) => {

    res.send("we are making node backend server restAPI");

});


//dev port 
//const port = 3000;
//production port 
const port = process.env.PORT || 8080;

app.listen(port ,()=>{
    console.log("server running on port "+ port);
});
//app.listen(8080);
