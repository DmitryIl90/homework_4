export class Car {
    brand: string;
    speed: number;

    constructor(brand: string, speed: number) {
        this.brand = brand;
        this.speed = speed;
    }

    accelerate(amount: number): void {
        this.speed = this.speed + amount;
    }
}

const car = new Car('Toyota', 100);
car.accelerate(20); // After fixing: will print 120
console.log(car.speed);

