const express = require('express')
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'mydb',
  user: 'root',
  password:'root',
  database: 'nodedb'
});

connection.query(
    'CREATE TABLE USERS (id int AUTO_INCREMENT, name VARCHAR(125),  PRIMARY KEY (id));',
    function(err, results, fields) {
      console.log(results, err); // results contains rows returned by server
    }
);

connection.query(
    'INSERT INTO USERS VALUES (1, "Mateus");',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
    }
);

const app = express()
const port = 3000

app.get('/', (req, res) => {

    connection.query(
        'SELECT * FROM USERS',
        function(err, results, fields) {
          console.log(results)
          res.send("<h1>Full Cycle Rocks!</h1></br>" + JSON.stringify(results))
        }
      );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})