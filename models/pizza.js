// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var Pizza = {
  all: function(cb) {
    orm.all("pizzas", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("pizzas", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("pizzas", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (Pizzas_controller.js).
module.exports = Pizza;