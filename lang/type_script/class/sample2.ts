class Person {
  private _age: number;

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value < 0) {
      throw new RangeError('age property must be positive number.');
    }
    this._age = value;
  }
}

let p = new Person();
p.age = 10;
console.log(p.age);
