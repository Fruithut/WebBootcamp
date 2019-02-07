let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app", { useNewUrlParser: true });

let catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

let dbModel = mongoose.model("Cat", catSchema);

/**
 * Saving a new cat to the db
 */

let newEntry = new Cat({
    name: "Mrs. Norris",
    age: 12,
    temperament: "Evil"
});

newEntry.save(function(err, cat) {
    if (err) {
        console.log("Error occurred...");
    } else {
        console.log("We just saved a cat to the db:");
        console.log(cat);
    }
});

/**
 * Adding a new cat directly
 */
dbModel.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function (err, cat) {
    if (err) {
        console.log(err);
    } else {
        console.log(cat);
    }
});


/**
 * Retrieve all cats from database
 */
dbModel.find({}, function(err, searchResult) {
    if (err) {
        console.log("We should really handle this error..");
        console.log(err);
    } else {
        console.log("Here are all the cats:");
        console.log(searchResult);
    }
});
