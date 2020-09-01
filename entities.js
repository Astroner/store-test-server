const Merch = require("./Merchandise")

const { all: cats } = require("./categories")

module.exports = [
    new Merch(
        "Billy's cum",
        "The only true religion",
        cats.get("food").id,
        1000000
    ),
    new Merch(
        "Fisting",
        "Da best maaa-ass-age",
        cats.get("SEX").id,
        300
    ), ,
    new Merch(
        "T-shirt",
        "Sad unhanded shirt",
        cats.get("sport").id,
        100
    ),
]