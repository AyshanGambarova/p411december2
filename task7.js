class CustomArray {
  constructor() {
    this.items = arguments;
  }
  ToString() {
    let string = "";
    for (let i = 0; i < this.items.length; i++) {
      if (i === this.items.length - 1) {
        string += this.items[i];
        break;
      }
      string += this.items[i] + ",";
    }
    return string;
  }
}
let arr = new CustomArray("Ayshan", "Hello", "Agabala", 6);
console.log(arr.ToString());
