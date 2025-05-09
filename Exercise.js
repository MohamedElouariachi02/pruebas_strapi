class Exercise {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    toString() {
        return `Name: ${this.name} Description: ${this.description}`;
    }
}
module.exports = Exercise;