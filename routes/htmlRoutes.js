var db = require("../models");

module.exports = function(app) {
  
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
            title:"Train Time Scheduler",
            src: "/assets/images/drew-farwell-481107-unsplash.jpg",
            caption: "Photo by Drew Farwell on Unsplash.",
            githublink: "https://github.com/SueJStevens/TrainTime/",
            deploylink: "https://suejstevens.github.io/TrainTime/",
            tooltip: "Listen to the whistle of the evening train",
            fontawesome: "fas fa-subway"
          },
          {
            title: "Giftastic",
            src: "/assets/images/joshua-rawson-harris-1066897-unsplash.jpg",
            caption: "Photo by Joshua Rawson-Harris on Unsplash.",
            githublink: "https://github.com/SueJStevens/Giftastic/",
            deploylink: "https://suejstevens.github.io/GifTastic/",
            tooltip: "What a long, strange trip it's been...",
            fontawesome: "far fa-grin-tears"
          },
          {
            title: "Crystal Collector",
            src: "/assets/images/krystal-ng-596638-unsplash_348x275.jpg",
            caption: "Photo by Krystal Ng on Unsplash.",
            githublink: "https://github.com/SueJStevens/unit-4-game-crystals/",
            deploylink: "https://suejstevens.github.io/unit-4-game-crystals/",
            tooltip: "Panes of crystal ice sparkle like waterfalls",
            fontawesome: "fas fa-gem"
          },
          {
            title: "Hangman",
            src: "/assets/images/jason-leung-705076-unsplash.jpg",
            caption: "Photo by Jason Leung on Unsplash.",
            githublink: "https://github.com/SueJStevens/Word-Guess-Game_ObjectVersion/",
            deploylink: "https://suejstevens.github.io/Word-Guess-Game_ObjectVersion/",
            tooltip: "Jack Straw from Wichita...",
            fontawesome: "fas fa-skull-crossbones"
          },
          {
            title: "RGP Game",
            src: "/assets/images/raynaldy-dachlan-45670-unsplash.jpg",
            caption: "Photo by Raynaldy Dachlan on Unsplash.",
            githublink: "https://github.com/SueJStevens/unit-4-game-rpg/",
            deploylink: "https://suejstevens.github.io/unit-4-game-rpg/",
            tooltip: "I bought you a paddle for your paper canoe.",
            fontawesome: "fas fa-hand-scissors"
          },
          {
            title: "Trivia Game",
            src: "/assets/images/tracy-thomas-56810-unsplash.jpg",
            caption: "Photo by Tracy Thomas on Unsplash.",
            githublink: "https://github.com/SueJStevens/TriviaGameAPI/",
            deploylink: "https://suejstevens.github.io/TriviaGameAPI/",
            tooltip: "If my words did glow with the gold of sunshine...",
            fontawesome: "fas fa-dice"
          },        
          {
            title: "Rutgers Info Widget",
            src: "/assets/images/chris-liverani-552010-unsplash.jpg",
            caption: "Photo by Chris Liverani on Unsplash.",
            githublink: "",
            deploylink: "",
            tooltip: "I am lost...",
            fontawesome: "fas fa-dog"
          },          
          {
            title: "Rock Paper Scissors",
            src: "/assets/images/pro-church-media-441059-unsplash.jpg",
            caption: "Photo by Pro Church Media on Unsplash.",
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
