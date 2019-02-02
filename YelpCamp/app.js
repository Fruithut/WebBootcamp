let express = require("express");
let app = express();
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// This is going to a database soon
let testgrounds = [
    {name: "testCamp1", image: "https://forthemommas.com/wp-content/uploads/2015/09/campgrounds.jpg"},
    {name: "testCamp2", image: "http://www.destination360.com/north-america/us/kentucky/images/s/kentucky-camping.jpg"},
    {name: "testCamp3", image: "https://cbsla.files.wordpress.com/2012/05/camping-fishing-lake1.jpg"},
    {name: "testCamp4", image: "https://forthemommas.com/wp-content/uploads/2015/09/campgrounds.jpg"},
    {name: "testCamp5", image: "http://www.destination360.com/north-america/us/kentucky/images/s/kentucky-camping.jpg"},
    {name: "testCamp6", image: "https://cbsla.files.wordpress.com/2012/05/camping-fishing-lake1.jpg"},
    {name: "testCamp5", image: "http://www.destination360.com/north-america/us/kentucky/images/s/kentucky-camping.jpg"},
    {name: "testCamp6", image: "https://cbsla.files.wordpress.com/2012/05/camping-fishing-lake1.jpg"}
];

app.listen(process.env.PORT || 3000, function () {
    console.log("[YelpCamp] Server has started");
});

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {

    res.render("campgrounds", {campgrounds: testgrounds});
});

app.post("/campgrounds", function (req, res) {
    let name = req.body.name;
    let image = req.body.image;
    let newCamp = {name: name, image: image};
    testgrounds.push(newCamp);
    // Redirect back to campgrounds overview
    res.redirect("/campgrounds")
});

app.get("/campgrounds/new", function (req, res) {
    res.render("new")
});