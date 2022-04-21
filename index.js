// Your code here

class Cat {
    constructor(name) {
        this.name = name;
        this.speak = function() {
            return `${this.name} says meow!`;
        }
    }
}

let pepper = new Cat("pepper");

class Dog {
    constructor(name) {
        this.name = name;
        this.speak = function() {
            return `${this.name} says woof!`;
        }
    }

}

let bailey = new Dog("bailey");

class Bird {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
        this.speak = function() {
            if(this.gender === "male") {
               return `It's me! ${this.name}, the parrot!`} else{
                    return `${this.name} says squawk!`;
                }
        }

    }
}
