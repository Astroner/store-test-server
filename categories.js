const Category = require("./Category");

const all = new Map([
    ["SEX", new Category("SEX", "THE ONLY MAN CATEGORY")],
    ["food", new Category("food", "All u can eat")],
    ["sport", new Category("sport", "right sport version")]
])

const asArray = Array.from(all).map(i => i[1])

exports.all = all
exports.asArray = asArray