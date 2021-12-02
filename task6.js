class CustomArray {
  constructor() {
    this.items = arguments;
  }
  Join() {
    let string = "";
    if (this.items.length > 0) {
      for (let i = 0; i < this.items.length; i++) {
        if (i === this.items.length - 1) {
          string += this.items[i];
          break;
        }
        string += this.items[i] + ",";
      }
      return string;
    } else {
      return "Array daxil edin.";
    }
  }
}
let arr = new CustomArray(6);
console.log(arr.Join());
