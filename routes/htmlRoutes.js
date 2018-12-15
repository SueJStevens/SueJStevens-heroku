var db = require("../models");

module.exports = function(app) {
  
  app.get("/contact", function(req, res) {
    res.render("contact");
  });

  app.get("/portfolio", function(req, res) {
    res.render("portfolio");
  });

  // Load index page
  app.get("/", function(req, res) {
      res.render("index");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
