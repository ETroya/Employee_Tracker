const inquirer =require ("inquirer")
const mysql = require ("mysql")
const cTable = require('console.table');

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
          "Add Employee",
          "Remove Employee",
          "View All Employees",
          "Update Employee Role",
          "Add Department",
          "View All Departments",
          "Add Roles",
          "View All Roles",
          "Exit"
        ]
      }
      ])

    .then(function(res){
    switch (res.start){
      case "Add Employee":
        addEmployee();
        break;

        case "Remove Employee":
          removeEmployee();
        break;
        
        case "View All Employees":
          viewAllEmployees();
        break;

        case "Update Employee Role":
          updateEmployeeRole();
        break;

        case "Add Department":
          addDepartment();
        break;
        
        case "View All Departments":
          viewAllDepartment();
        break;

        case "Add Roles":
        addRole();
        break;

        case "View All Roles":
        viewAllRoles();
        break;

        case "Exit":
        connection.end();
        break;
    }
  })  
}

function viewAllEmployees(){
  connection.query("SELECT employee.first_name, employee.last_name,, role.title, role.salary, department.name, CONCAT(e.first_name, '' ,e.last_name)As Manager From employee Inner JOIN role.id = employee.role_id INNER JOIN department on department.id = left join employee e on employee.manager_id =e.id,",
  function (err, res) {
    if (err, res){
      if (err) throw err
      console.table(res)
      start()
    }
  })
}

