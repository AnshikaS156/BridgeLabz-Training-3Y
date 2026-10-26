// Q4: Constructor Function and Prototype Method - Car

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// One shared method is stored on Car.prototype.
Car.prototype.getDetails = function () {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Civic");

car1.getDetails();
car2.getDetails();

// Both objects share the same prototype method.
console.log(car1.getDetails === car2.getDetails); // true
