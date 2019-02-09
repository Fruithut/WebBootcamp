let express = require("express");
let app = express();

// Sets express to serve public folder
app.use(express.static("public"));
// render files now default to ejs type
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/youchoose/:thing", function(req, res) {
    let thing = req.params.thing;
    res.render("choose", {thingVar: thing});
});

app.get("/posts", function(req, res) {
    let posts = [
        {title: "Post 1", author: "Susy"},
        {title: "Post 2", author: "Charlie"},
        {title: "Post 3", author: "Peter"},
    ];

    res.render("posts", {posts: posts});
});

app.listen(process.env.PORT || 3000, function start() {
    console.log("Server has started.");
});
