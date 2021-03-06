const router = require("express").Router();
const Burger = require("../models/burger");

router.get("/", (req, res) => {
  
  Burger.getBurgers((burgers) => {
    let devour = []
    let devoured = []
    burgers.forEach((burger) => {
      if (burger.devoured === 0) {
        devour.push(burger)
      }
      else devoured.push(burger)
    })
    res.render("index", { devour, devoured })
  })
})

module.exports = router