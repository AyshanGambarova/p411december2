class CustomArray {
  constructor() {
    this.items = arguments;
  }

  Filter(callback) {
    let newArr = [];
    for (const item of this.items) {
      if (callback(item)) {
        newArr.push(item);
      }
    }
    return newArr;
  }
}
let arr = new CustomArray(20, 3, 22, 42);
console.log(arr.Filter((item) => item > 20));
