class CustomArray {
  constructor() {
    this.items = arguments;
  }
  indexOf(elem) {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i] == elem) {
        return i;
      }
    }
    return -1;
  }
  lastIndexOf(elem) {
    for (var i = this.items.length - 1; i >= 0; i--) {
      if (this.items[i] == elem) {
        return i;
      }
    }
    return -1;
  }
}
let arr = new CustomArray(4, 5, 7, 10, 7);
console.log(arr.indexOf(7));
console.log(arr.lastIndexOf(7));
