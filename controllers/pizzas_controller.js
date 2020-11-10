var express = require("express");

var router = express.Router();

var pizza = require("../models/pizza.js");

router.get("/", function(req, res) {
  pizza.all(function(data) {
    var hbsObject = {
      pizza: data
    };    
    res.render("index", hbsObject);
  });
});

router.post("/api/pizzas", function(req, res) {
  pizza.create([
    "name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function(result) {

    res.json({ id: result.insertId });
  });
});

router.put("/api/pizzas/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  pizza.update({
   devoured: 1
  }, condition, function(result) {
    if (result.changedRows == 0) {

      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Export routes for server.js to use.
module.exports = router;
