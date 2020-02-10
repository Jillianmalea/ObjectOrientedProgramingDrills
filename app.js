let person = {
    name: 'Josh',
    sayHello: function() {
        console.log(`hello ${this.name}`);
    }
}

person.sayHello();

class Vehicle {
    constructor(manufacturer, numOfWheels) {
        this.manufacturer = manufacturer;
        this.numOfWheels = numOfWheels;
    }

    aboutVehicle() {
        console.log(`This instance of a vehicle is a ${this.manufacturer}. It has ${this.numOfWheels} wheels`)
    }
}

let honda = new Vehicle('honda', 4);
honda.aboutVehicle();

class Motorcycle extends Vehicle {
    constructor(manufacturer, numOfWheels, hasHandlebars, hasDoors) {
        super();

        this.manufacturer = manufacturer;
        this.numOfWheels = numOfWheels;
        this.hasHandlebars = hasHandlebars;
        this.hasDoors = hasDoors;
    }

    aboutMotorcycle() {
        console.log(`This instance of a vehicle is a ${this.manufacturer}. It has ${this.numOfWheels} wheels. Does it have doors? ${this.hasDoors}`)
    }
}

let motorcycle = new Motorcycle('Harley Davidson', 2, true, false);
motorcycle.aboutVehicle();
motorcycle.aboutMotorcycle();
