let id = 1;

module.exports = class Category {
    constructor(
        name,
        description
    ){
        this.id = ++id;
        this.name = name;
        this.description = description;
    }
}