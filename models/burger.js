// var orm = require("../config/orm.js");


// var burger = {

//     showAll: function(cb) {
//         orm.showAll("burgers", function(res) {
//             cb(res);
//         });
//     },
//     create: function(col, vals, cb) {
//         orm.createBurger("burgers", cols, vals, function(res) {
//             cb(res);
//         })
//     },
//     devourBurger: function(col, vals, cb) {
//         orm.devourBurger("burgers", col, vals, function(res) {
//             cb(res);
//         });

//     },
//     update: function(objColVals, condition, cb) {
//         orm.update("burgers", objColVals, condition, function(res) {
//             cb(res);
//         });
//     },
// };
// module.exports = burger;

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(cols, vals, cb) {
    orm.delete("burgers", cols, vals, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;