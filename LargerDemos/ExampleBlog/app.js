let express = require("express"),
    methodOverride = require("method-override"),
    expressSanitizer = require("express-sanitizer"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    app = express();

// APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app", {useNewUrlParser: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());

app.listen(3000 || process.env.PORT, function () {
    console.log("Blog server is now running!");
});

// MONGOOSE/MODEL CONFIG
let blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
let blogModel = mongoose.model("Blog", blogSchema);

/*
    Example creation:

    blogModel.create({
        title: "Simple Test",
        image: "https://images.unsplash.com/photo-1550785452-751dd0309037?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
        body: "Hi folks, welcome to my blog"
    });
*/

// RESTFUL ROUTES BELOW

// REDIRECT TO INDEX
app.get("/", function (req, res) {
    res.redirect("/blogs")
});

// INDEX
app.get("/blogs", function (req, res) {
    blogModel.find({}, function (err, blogs) {
        if (err) {
            console.log("Error at /blogs database lookup");
        } else {
            res.render("index", {blogs: blogs});
        }
    });
});

// NEW
app.get("/blogs/new", function (req, res) {
    res.render("new");
});

// CREATE
app.post("/blogs", function (req, res) {
    // Sanitize blog post content
    req.body.blog.body = req.sanitize(req.body.blog.body);

    blogModel.create(req.body.blog, function (err, newBlog) {
        if (err) {
            res.render("new");
        } else {
            res.redirect("/blogs");
        }
    });
});

// SHOW
app.get("/blogs/:id", function (req, res) {
    blogModel.findById(req.params.id, function (err, foundBlog) {
        if (err) {
            res.redirect("/blogs")
        } else {
            res.render("show", {blog: foundBlog})
        }
    })
});

// EDIT
app.get("/blogs/:id/edit", function (req, res) {
    blogModel.findById(req.params.id, function (err, foundBlog) {
        if (err) {
            res.redirect("/blogs")
        } else {
            res.render("edit", {blog: foundBlog})
        }
    });
});

// UPDATE
app.put("/blogs/:id", function (req, res) {
    // Sanitize blog post content
    req.body.blog.body = req.sanitize(req.body.blog.body);

    blogModel.findByIdAndUpdate(req.params.id, req.body.blog, function (err, updatedBlog) {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

// DELETE
app.delete("/blogs/:id", function (req, res) {
    blogModel.findByIdAndDelete(req.params.id, function (err, updatedBlog) {
        if (err) {
            console.log("An error occurred while trying to delete the blog post");
        } else {
            res.redirect("/blogs");
        }
    });
});