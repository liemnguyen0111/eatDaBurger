const orm = require('../config/orm.js')

module.exports = {
  getBurgers(cb) {
    orm.selectAll("burgers", (burgers) => cb(burgers));
  },
  updateBurger(changes, where, cb) {
    orm.updateOne("burgers", changes, where, (info) => cb(info));
  },
  addBurger(burger, cb) {
    orm.insertOne("burgers", burger, (info) => cb(info));
  },
};