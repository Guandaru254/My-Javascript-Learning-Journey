//Import express modeule 
const express = require ('express');

//Create an instance of the express application
const app = express();

//Define routes
app.get (`/`,(req,res) => {
     res.send ('Home Page');
});

app.get (`about`, (req,res) => {
    res.send ('About');
});

app.get (`Contacts`, (req,res) => {
    res.send ('Contacts');
});

//Start the server
app.listen(3000, () => {
    console.log ('Server Started at port 3000');
});
