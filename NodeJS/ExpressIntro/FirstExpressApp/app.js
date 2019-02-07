let express = require("express");
let app = express();

// let server listen
app.listen(process.env.PORT || 3000, function () {
    console.log("Server has started");
});

// routes
app.get("/", function (req, res) {
    res.send("Hi there!");
});

app.get("/bye", function (req, res) {
    console.log("Someone made a request to /bye");
    res.send("Goodbye!");
});

// matching route with pattern (reddit example)
app.get("/r/:subName", function (req, res) {
    let sub = req.params.subName;
    res.send("WELCOME TO SUB: " + sub.toUpperCase());
});

app.get("/r/:subName/comments/:id/:title/", function (req, res) {
    res.send("WELCOME TO THE COMMENTS");
});

// * must come last in the order of routes (matches against ever path)
app.get("*", function (req, res) {
    res.send("Sorry this page does not exist.")
});
