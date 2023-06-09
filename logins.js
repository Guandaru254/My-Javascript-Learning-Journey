const express = require('express');
const mysql = require('mysql');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'guandaru',
    database: 'dartgame_db', 
}

const app = express();
app.use (express.json());

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) {
        console.error ('Error creating connection to the database', err);
        return; 
    }
    console.log('Connected to database');
});

app.post('/', (req, res)  => {
    const { user_id,name,email,password} = req.body; 
    const query = "INSERT INTO logins ( user_id ,name, email, password) VALUES(?,?,?,?)";
    connection.query(query, [ user_id , name, email, password ] , (err, result) => {
        if (err) {
            console.error ('Error inserting user data into database', err);
            return res.status (500).json({error : 'Error inserting user data into database'});
            }
          res.json({success : true, message : 'User data successfully inserted'});
        });
    })


process.on('SIGINT', () => {
    connection.end();
    process.exit();
});


module.exports =  app;