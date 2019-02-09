let express = require("express");
let bodyParser = require("body-parser");
let app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

// Just some sample data -> use a database later
let friends = ["Ole", "Dole", "Doffen", "Donald"];

app.listen(process.env.PORT || 3000, function () {
    console.log("Server has started.");
});

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/friends", function (req, res) {
    res.render("friends", { friends: friends });
});

app.post("/addfriend", function (req, res) {
    let newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});