class CustomArray {
  constructor() {
    this.items = arguments;
  }
  Map(callback) {
    let newArr = [];
    for (const item of this.items) {
      newArr.push(callback(item));
    }
    return newArr;
  }
}
let arr = new CustomArray(4, 5, 7, 10);
console.log(arr.Map((item) => item / 2));
