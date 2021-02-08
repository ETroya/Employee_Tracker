const inquirer =require ("inquirer")
const mysql = require ("mysql")
const connection =mysql.createConnection({
    hot:' localhost',
    port:3306,
    user:`root`,
    password: 'troya',
    database: 'employee_trackerDB'
})

connection.connect((err)=>{
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);

    connection.query(`Select * FROM department`,(err, results)=> {
      if (err) throw err;
      console.log (results);
    });
  });

  function startPrompt(){
    inquirer.prompt([
      {
        name: "choice",
        type:"list",
        message: "What would you like to do?",
        choice:[
          "View All Employers?",
          "View All Employee's by Department",
          "Update Employee information",
          "Add Employee",
          "Add Role",
          "Add Department"
        ]
      }])
  }