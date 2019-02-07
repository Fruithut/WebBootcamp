const request = require("request");
const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.listen(process.env.PORT || 3000, function () {
    console.log("Movie app has started...")
});

app.get("/", function(req, res) {
    res.render("search");
});

app.get("/results", function (req, res) {
    let searchTerm = req.query.search;
    request(`https://omdbapi.com/?s=${searchTerm}&apikey=thewdb`, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let results = JSON.parse(body);
            res.render("results", {results: results});
        }
    })
});




