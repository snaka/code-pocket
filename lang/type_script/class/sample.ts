class Person {
  private name: string;
  private sex: string;

  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  public show() {
    return `${this.name}は${this.sex}です。`;
  }
}

let p = new Person('理央', '女');
console.log(p.show());
// --- compile error
// console.log(p.name);
