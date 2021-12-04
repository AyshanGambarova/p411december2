class CustomArray {
  constructor() {
    this.items = arguments;
  }
  Some(callback) {
    let res = true;
    for (const item of this.items) {
      if (callback(item) {
        break;
      }
    }
    return res;
  }
}

let arr = new CustomArray(17, 21, 4, 65, 7);

console.log(arr.Some((item) => item < 20));
