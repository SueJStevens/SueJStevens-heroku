var db = require("../models");

    // using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'StevensStock@gmail.com',
  from: 'test@example.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

module.exports = function(app) {

  app.post("/contact", function(req, res) {
    //send mail
    sgMail.send(msg);
  });

  app.get("/contact", function(req, res) {
    res.render("contact");
  });

  app.get("/about", function(req, res) {
    res.render("about");
  });

  app.get("/portfolio", function(req, res) {
    res.render("portfolio", {
        portfolio: [
          {
            title:"Google API Book Search!",
            src: "/assets/images/ugur-akdemir-664735-unsplash.jpg",
            caption: "Photo by Ugur Akdemir on Unsplash",
            description: "API Search App to Demo React and MongoDB",
            tags: ["reactjs","mongodb","bootstrap4","javascript","nodejs", "html", "css", "heroku"],
            githublink: "https://github.com/SueJStevens/searchgooglebooks",
            deployed: true,
            deploylink: "https://secret-earth-95362.herokuapp.com/",
            tooltip: "So many books, so little time....",
            fontawesome: "fal fa-books"
          },          
          {
            title:"Dog Gone It!",
            src: "/assets/images/alexis-chloe-534920-unsplash.jpg",
            caption: "Photo by Alexis Chloe on Unsplash",
            description: "Memory Game to Demo React Components, State, and Response to User Events.",
            tags: ["reactjs","bootstrap4","javascript","nodejs", "html", "css", "heroku"],
            githublink: "https://github.com/SueJStevens/clicky-game",
            deployed: true,
            deploylink: "https://stormy-cliffs-31355.herokuapp.com/",
            tooltip: "My dog he turned to me and he said...",
            fontawesome: "fal fa-dog-leashed"
          },          
          {
            title:"All the News That's Fit to Scrape",
            src: "/assets/images/jon-tyson-195064-unsplash.jpg",
            caption: "Photo by Jon Tyson on Unsplash",
            description: "Full Stack Application to demonstrate MongoDB, Mongoose and Cheerio.",
            tags: ["mongodb","mongoose","cheeriojs","axios","handlebarsjs","expressjs","nodejs", "javascript", "jQuery", "momentjs", "bootstrap4", "html", "css", "heroku", "fullstack"],
            githublink: "https://github.com/SueJStevens/news-combine-harvester",
            deployed: true,
            deploylink: "https://news-combine-harvester.herokuapp.com/",
            tooltip: "Convert bad news to good news.",
            fontawesome: "fas fa-tractor"
          },          
          {
            title:"Bakeoff",
            src: "/assets/images/brooke-lark-203839-unsplash.jpg",
            caption: "Photo by Brooke Lark on Unsplash",
            description: "Full Stack Application to demonstrate Node, Express, Handlebars and MVC Design",
            tags: ["handlebarsjs","nodejs","expressjs","mysql","javascript","moment-js","html","css","jquery","bootstrap4","mvc"],
            githublink: "https://github.com/SueJStevens/bakeoff",
            deployed: true,
            deploylink: "https://blooming-depths-36189.herokuapp.com/",
            tooltip: "Let them eat cake.",
            fontawesome: "fas fa-birthday-cake"
          },          
          {
            title:"It's a Match!",
            src: "/assets/images/annie-spratt-365624-unsplash.jpg",
            caption: "Photo by Annie Spratt on Unsplash",
            description: "Full Stack Application using Node and Express Servers to identify compatability based on quiz answers.",
            tags: ["expressjs","nodejs","body-parser","path","javascript","jquery","heroku"],
            githublink: "https://github.com/SueJStevens/FriendFinder",
            deployed: true,
            deploylink: "https://mighty-journey-94523.herokuapp.com/",
            tooltip: "Find your best friend",
            fontawesome: "fas fa-user-friends"
          },          
          {
            title:"BambiZon Command Line Shopping",
            src: "/assets/images/fancycrave-520419-unsplash.jpg",
            caption: "Photo by Fancycrave on Unsplash",
            description: "Command line application to demonstrate MySQL, Node.js",
            tags: ["mysql","nodejs","npm","chalk-pipe","inquirer","table","javascript"],
            githublink: "https://github.com/SueJStevens/bambizon_v1",
            deployed: false,
            deploylink: "",
            tooltip: "",
            fontawesome: ""
          },
          {
            title:"Guess The Word Again - Command Line",
            src: "/assets/images/irvan-smith-563894-unsplash.jpg",
            caption: "Photo by Irvan Smith on Unsplash",
            description: "Command line application to demonstrate advanced JavaScript concept of constructors",
            tags: ["npm","inquirer","javascript","command-line","nodejs"],
            githublink: "https://github.com/SueJStevens/constructor_word_guess",
            deployed: false,
            deploylink: "",
            tooltip: "",
            fontawesome: ""
          },
          {
            title:"Timothy - A Nodejs Command Line Bot",
            src: "/assets/images/markus-spiske-771011-unsplash.jpg",
            caption: "Photo by Markus Spiske on Unsplash.",
            description: "Command line node.js app that will search three different APIs based on user provided parameters or user input from text file.",
            tags: ["nodejs","request","momentjs","dotenv","api","javascript"],
            githublink: "https://github.com/SueJStevens/timothy",
            deployed: false,
            deploylink: "",
            tooltip: "",
            fontawesome: ""
          },
          {
            title:"Train Time Scheduler",
            src: "/assets/images/drew-farwell-481107-unsplash.jpg",
            caption: "Photo by Drew Farwell on Unsplash.",
            description: "Application which uses Firebase and Moment.js to provide train schedules.",
            tags: ["firebase","datatables","jquery","javascript","momentjs","bootstrap4","css","html"],
            githublink: "https://github.com/SueJStevens/TrainTime/",
            deployed: true,
            deploylink: "https://suejstevens.github.io/TrainTime/",
            tooltip: "Listen to the whistle of the evening train",
            fontawesome: "fas fa-subway"
          },
          {
            title: "Giftastic",
            src: "/assets/images/joshua-rawson-harris-1066897-unsplash.jpg",
            caption: "Photo by Joshua Rawson-Harris on Unsplash.",
            description: "Fun, Interactive website designed to demo the power of API.",
            tags: ["api","ajax","jquery","javascript","html","css","font-awesome","bootstrap4"],
            githublink: "https://github.com/SueJStevens/Giftastic/",
            deployed: true,
            deploylink: "https://suejstevens.github.io/GifTastic/",
            tooltip: "What a long, strange trip it's been...",
            fontawesome: "far fa-grin-tears"
          },
          {
            title: "Crystal Collector",
            src: "/assets/images/krystal-ng-596638-unsplash_348x275.jpg",
            caption: "Photo by Krystal Ng on Unsplash.",
            description: "Crystal Collector Simple, fun, interactive game for web browsers to demo features of jQuery library.",
            tags: ["jquery","html","css","bootstrap4"],
            githublink: "https://github.com/SueJStevens/unit-4-game-crystals/",
            deployed: true,
            deploylink: "https://suejstevens.github.io/unit-4-game-crystals/",
            tooltip: "Panes of crystal ice sparkle like waterfalls",
            fontawesome: "fas fa-gem"
          },
          {
            title: "Hangman",
            src: "/assets/images/jason-leung-705076-unsplash.jpg",
            caption: "Photo by Jason Leung on Unsplash.",
            description: "A new iteration of Word-Guess-Game with JS as an Object",
            tags: ["javascript","html","css","bootstrap4"],
            githublink: "https://github.com/SueJStevens/Word-Guess-Game_ObjectVersion/",
            deployed: true,
            deploylink: "https://suejstevens.github.io/Word-Guess-Game_ObjectVersion/",
            tooltip: "Jack Straw from Wichita...",
            fontawesome: "fas fa-skull-crossbones"
          },
          {
            title: "Role Play Game",
            src: "/assets/images/raynaldy-dachlan-45670-unsplash.jpg",
            caption: "Photo by Raynaldy Dachlan on Unsplash.",
            description: "Fun, interactive role play game to demo features of jQuery library",
            tags: ["jquery","javascript","html","css","bootstrap4"],
            githublink: "https://github.com/SueJStevens/unit-4-game-rpg/",
            deployed: true,
            deploylink: "https://suejstevens.github.io/unit-4-game-rpg/",
            tooltip: "I bought you a paddle for your paper canoe.",
            fontawesome: "fas fa-hand-scissors"
          },
          {
            title: "Trivia Game",
            src: "/assets/images/tracy-thomas-56810-unsplash.jpg",
            caption: "Photo by Tracy Thomas on Unsplash.",
            description: "Trivia Game to demo API, JQuery, Ajax, Javascript and CSS animation",
            tags: ["api","ajax","jquery","javascript","html","css","bootstrap4"],
            githublink: "https://github.com/SueJStevens/TriviaGameAPI/",
            deployed: true,
            deploylink: "https://suejstevens.github.io/TriviaGameAPI/",
            tooltip: "If my words did glow with the gold of sunshine...",
            fontawesome: "fas fa-dice"
          },        
          // {
          //   title: "Rutgers Info Widget",
          //   src: "/assets/images/chris-liverani-552010-unsplash.jpg",
          //   caption: "Photo by Chris Liverani on Unsplash.",
          //   deployed: false,
          //   githublink: "",
          //   deploylink: "",
          //   tooltip: "I am lost...",
          //   fontawesome: "fas fa-dog"
          // },          
          // {
          //   title: "Rock Paper Scissors",
          //   src: "/assets/images/pro-church-media-441059-unsplash.jpg",
          //   caption: "Photo by Pro Church Media on Unsplash.",
          //   deployed: false,
          //   githublink: "",
          //   deploylink: "",
          //   tooltip: "I am lost...",
          //   fontawesome: "fas fa-cut"
          // }    
        ]
    });
  });  
  
  // Load index page
  app.get("/index", function(req, res) {
    res.render("index");
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
