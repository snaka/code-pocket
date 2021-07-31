var Person = /** @class */ (function () {
    function Person(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    Person.prototype.show = function () {
        return this.name + "\u306F" + this.sex + "\u3067\u3059\u3002";
    };
    return Person;
}());
var p = new Person('理央', '女');
console.log(p.show());
console.log(p.name);
