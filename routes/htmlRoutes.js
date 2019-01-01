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
            title:"All the News That's Fit to Scrape",
            src: "/assets/images/jon-tyson-195064-unsplash.jpg",
            caption: "Photo by Jon Tyson on Unsplash",
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
            githublink: "https://github.com/SueJStevens/FriendFinder",
            deployed: true,
            deploylink: "https://mighty-journey-94523.herokuapp.com/",
            tooltip: "Find your best friend",
            fontawesome: "fas fa-user-friends"
          },          
          {
            title:"Timothy - A Nodejs Command Line Bot",
            src: "/assets/images/markus-spiske-771011-unsplash.jpg",
            caption: "Photo by Markus Spiske on Unsplash.",
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
            githublink: "https://github.com/SueJStevens/Word-Guess-Game_ObjectVersion/",
            deployed: true,
            deploylink: "https://suejstevens.github.io/Word-Guess-Game_ObjectVersion/",
            tooltip: "Jack Straw from Wichita...",
            fontawesome: "fas fa-skull-crossbones"
          },
          {
            title: "RGP Game",
            src: "/assets/images/raynaldy-dachlan-45670-unsplash.jpg",
            caption: "Photo by Raynaldy Dachlan on Unsplash.",
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
            githublink: "https://github.com/SueJStevens/TriviaGameAPI/",
            deployed: true,
            deploylink: "https://suejstevens.github.io/TriviaGameAPI/",
            tooltip: "If my words did glow with the gold of sunshine...",
            fontawesome: "fas fa-dice"
          },        
          {
            title: "Rutgers Info Widget",
            src: "/assets/images/chris-liverani-552010-unsplash.jpg",
            caption: "Photo by Chris Liverani on Unsplash.",
            deployed: false,
            githublink: "",
            deploylink: "",
            tooltip: "I am lost...",
            fontawesome: "fas fa-dog"
          },          
          {
            title: "Rock Paper Scissors",
            src: "/assets/images/pro-church-media-441059-unsplash.jpg",
            caption: "Photo by Pro Church Media on Unsplash.",
            deployed: false,
            githublink: "",
            deploylink: "",
            tooltip: "I am lost...",
            fontawesome: "fas fa-cut"
          }    
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
