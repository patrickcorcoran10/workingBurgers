var orm = require("../config/orm.js");


var burger = {

    showAll: function(cb) {
        orm.showAll("burgers", "devoured", false, function(res) {
            cb(res);
        });
    },
    create: function(col, vals, cb) {
        orm.createBurger("burgers", cols, vals, function(res) {
            cb(res);
        })
    },
    devourBurger: function(col, condition, cb) {
        orm.devourBurger("burgers", col, condition, function(res) {
            cb(res);
        });

    }
};
module.exports = burger;