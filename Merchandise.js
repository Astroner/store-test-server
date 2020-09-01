let id = 1;

module.exports = class Merchandise {
    constructor(
        name,
        description,
        category,
        price
    ) {
        this.id = ++id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
    }
}