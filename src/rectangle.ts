class Rectangle {
    width: number
    height: number

    constructor(width: number, height: number) {
        this.width = width
        this.height = height
    }

    getArea(): number {
        return this.width * this.height
    }
}

const rect = new Rectangle(5, 10)
console.log(rect.getArea()) // After fixing: will print 50
