interface StringMap {
  [index: string]: string;
}
let obj: StringMap = {
  'hoge': 'ほげ',
  'foo': 'ふー',
  'bar': 'ばー'
};

console.log(obj.hoge);

console.log(obj['hoge']);
