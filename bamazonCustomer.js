var inquirer = require("inquirer");
var prompt = require("prompt");
var mysql = require('mysql');
var digits;
var IDz;
var name;
var newQ;

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'bamazon'
});


connection.connect();

connection.query('SELECT * FROM products', function(error, results, fields) {
    if (error) throw error;
    console.log('')
    console.log('Welcome To Bamazon! Products are below...')
    console.log('')
    for (var i = 0; i < results.length; i++) {
        console.log(results[i].id)
        console.log(results[i].product_name)
        console.log(results[i].price)
        console.log('')
    }

    inquirer.prompt([
            // Here we create a basic text prompt.
            {
                type: "input",
                message: "What's the ID of the product you'd like to buy?",
                name: "ID"
            }, {
                type: "input",
                message: "How many units would you like to buy?",
                name: "units"
            },
            {
                type: "confirm",
                message: "Are you sure:",
                name: "confirm",
                default: true
            }
        ])
        .then(function(inquirerResponse) {
            // this grabs the name of the product and quantity
            if (inquirerResponse.confirm) {
                digits = inquirerResponse.ID
                for (var i = 0; i < results.length; i++) {
                    if (parseInt(digits) === results[i].id) {
                        name = results[i].product_name
                        quantity = results[i].quantity
                        newQ = results[i].quantity - inquirerResponse.units
                            var cost = results[i].price * inquirerResponse.units
                            console.log("-----------------------------------");
                            console.log("Your order has been placed! \nThe total cost is $" + cost.toFixed(2) + "\nThank you!")
                            console.log("\nYou bought " + inquirerResponse.units + " units of " + name);
                        } else {
                            console.log("-----------------------------------");
                            console.log("Sorry, we do not have enough in stock. \nWe only have " + results[i].quantity + " units of " + name + ". \nPlease retry your order. \nThank you!")
                        }

                        function update(response, newQ) {
                            connection.query(
                                "UPDATE products SET ? WHERE ?", [{
                                        quantity: newQ
                                    },
                                    {
                                        product_name: name
                                    }

                                ],
                                function(err, res) {
                                    connection.end();


                                }
                            );
                        }

                        update()







                        // console.log(results[i].product_name)
                    }

                }

            }



        })

    connection.end();

});