var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value < 0) {
                throw new RangeError('age property must be positive number.');
            }
            this._age = value;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var p = new Person();
p.age = 10;
console.log(p.age);
