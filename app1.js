//1
function Person(first, last, age, gender, interests) {
    this.name = {
        firstName: first,
        lastName : last
      };
      this.age = age;
      this.gender = gender;
      this.interests = interests;
    }
    showData = function () {
      console.log(this.name,this.age,this.gender,this.interests);
    }
    let person1 = new Person('Has', 'Gevorgyan', 17, 'female', ['danse', 'design','nails']);
    let person2 = new Person('Kar', 'Nikoghosyan', 19, 'male', ['cars', 'weapons ','girls']);
    let person3 = new Person('Gev', 'Gevorgyan', 30, 'male', ['sport', 'music',]);

    person1.showData();
    person2.showData();
    person3.showData();
    

//2
function Person() {
  Person.prototype.name = "Hasik";
  Person.prototype.age = 17;
  Person.prototype.friends = ['Ines', 'Karine'],
  Person.prototype.sayName = function(){
	console.log(this.name);
}
}
const person1= new Person('Kar',20,['Hayk,Arman,Karen']);
const person2 = new Person('Lera',16,['Nare,Sara,Jhenya']);
person1.friends.push("Argine");

console.log(person1.friends);
console.log(person2.friends);

//3
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

var square = new Square(2);

console.log(this.width,this.height);


