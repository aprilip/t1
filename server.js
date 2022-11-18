var express = require("express");
var bodyParser = require("body-parser");

server = express();

server.use(express.static("Bootstrap_Exercise2"));//web root
 
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());
 
server.get("/portfolio", function(req, res){
    portfolios= [
        { href: "#portfolioModal1", imgSrc: "img/portfolio/roundicons.png", title: "Round Icons", text: "Graphic Design" },
        { href: "#portfolioModal2", imgSrc: "img/portfolio/startup-framework.png", title: "Startup Framework", text: "Website Design" },
        { href: "#portfolioModal3", imgSrc: "img/portfolio/treehouse.png", title: "Treehouse", text: "Website Design" },
        { href: "#portfolioModal1", imgSrc: "img/portfolio/roundicons.png", title: "Round Icons", text: "Graphic Design" },
        { href: "#portfolioModal2", imgSrc: "img/portfolio/startup-framework.png", title: "Startup Framework", text: "Website Design" },
        { href: "#portfolioModal3", imgSrc: "img/portfolio/treehouse.png", title: "Treehouse", text: "Website Design" }
    ]
   res.send(portfolios);
})
  
server.get("/contact", function(req,res){
    //res.send("");
    res.redirect("/BS5_Ex2 Vue.html");
})

server.post("/contact", function(req,res){
    console.log(req.body);
    res.redirect("/BS5_Ex2 Vue.html");
})

server.listen(5500, function(){
    console.log("Server is running at port 5500!");
})