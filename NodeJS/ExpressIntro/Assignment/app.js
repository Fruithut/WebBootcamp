let express = require("express");
let app = express();

app.listen(process.env.PORT || 3000, function () {
    console.log("Server has started.")
});

// routes
app.get("/", function () {
    console.log("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function (req, res) {
    let animal = req.params['animal'];
    switch (animal) {
        case "pig": res.send("The pig says 'Oink'"); break;
        case "cow": res.send("The cow says 'Moo'"); break;
        case "dog": res.send("The dog says 'Woof Woof!'"); break;
        default: res.send("This animal is mute");
    }
});

app.get("/repeat/:word/:iter", function (req, res) {
    let result = "";
    for (let i = 0; i < req.params['iter']; i++) {
        result = result + " " + req.params['word'];;
    }
    res.send(result);
});

app.get("*", function (req, res) {
    res.send("Sorry, page not found.. What are you doing with your life?");
});