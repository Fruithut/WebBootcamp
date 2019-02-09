let express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// Schema setup
let campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

let campgroundModel = mongoose.model("Campground", campgroundSchema);

app.listen(process.env.PORT || 3000, function () {
    console.log("[YelpCamp] Server has started");
});

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    campgroundModel.find({}, function (err, allCampgrounds) {
        if (err) {
            console.log(err);
        } else {
            res.render("index", {campgrounds: allCampgrounds});
        }
    })
});

app.post("/campgrounds", function (req, res) {
    let name = req.body.name;
    let image = req.body.image;
    let desc = req.body.description;
    let newCamp = {name: name, image: image, description: desc};

    campgroundModel.create(newCamp, function (err, response) {
        if (err) {
            console.log(err);
        } else {
            console.log("NEWLY CREATED CAMPGROUND:");
            console.log(response);
        }
    });

    res.redirect("/campgrounds")
});

app.get("/campgrounds/new", function (req, res) {
    res.render("new")
});

app.get("/campgrounds/:id", function (req, res) {
    campgroundModel.findById(req.params.id, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.render("show", {campground: result})
        }
    });
});