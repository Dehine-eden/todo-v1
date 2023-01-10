const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const date = require(__dirname + "/date.js");

const app = express();

let items = [];

let WorkItems = [];

let RecreationItems = [];

app.set('view engine', 'ejs');

console.log(date.getDate());

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    
    let day = date.getDay();

    res.render("list", {listTitle: day, newListItems: items});

    });

    app.get("/Work", function(req, res){
        res.render("list", {listTitle: "Work List", newListItems: WorkItems});
    });
    
    app.get("/Recreation", function(req, res){
        res.render("list", {listTitle: "Recreation List", newListItems: RecreationItems});
    });
    
    app.get("/about", function(req, res){
        res.render("about");
    });
    

app.post("/", function(req, res){

    let item = req.body.newItem;

    console.log(req.body);

    if (req.body.list === "Work"){
        WorkItems.push(item);
        res.redirect("/Work");
    }else if (req.body.list === "Recreation"){
        RecreationItems.push(item);
        res.redirect("/Recreation");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
    

});

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
}); 
