require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var hbsHelpers = exphbs.create({
  helpers: require("./helpers/handlebars.js").helpers, 
  defaultLayout: 'main',
  extname: '.handlebars'
});

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
// app.engine("handlebars",
//   exphbs({
//     defaultLayout: "main"
//   })
// );

app.engine("handlebars", hbsHelpers.engine);
app.set("view engine", "handlebars");
//app.set('view engine', '.hbs');

// Routes
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
