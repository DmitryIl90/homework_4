export class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }
}

const john = new Person('John', 30);
console.log(john.getName()); // After fixing: will print "John"
console.log(john.getAge()); // After fixing: will print 30

