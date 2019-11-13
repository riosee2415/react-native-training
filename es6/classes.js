// Classes

class Animal {
  constructor(type, tail) {
    this.type = type;
    this.tail = tail;
  }

  cry(value = "Woof Woof") {
    console.log(value);
  }

  static instance() {
    console.log("statica !!");
  }
}

let dog = new Animal("Dog", true);
console.log(dog);

dog.tail = false;
console.log(dog);

dog.cry("woof");

// Animal.dog();  에러
Animal.instance();

// inheritance
class Cat extends Animal {
  constructor(type, tail, color) {
    super(type, tail);
    this.color = color;
  }

  cry(value = "Meow Meow") {
    console.log(value);
  }
}

let cat = new Cat("Cat", true, "yellow");
cat.cry();
console.log(cat);
