class CustomArray {
  constructor() {
    this.items = arguments;
  }
  Inclue(elem) {
    let include = false;
    for (const item of this.items) {
      if (item == elem) {
        include = true;
      }
    }
    return include;
  }
}
let arr = new CustomArray(4, 5, 7, 10);
console.log(arr.Inclue(51));
