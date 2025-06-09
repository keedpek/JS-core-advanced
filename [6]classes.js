// Создайте класс под названием «Прямоугольник» со свойствами ширины и высоты. Включите два метода расчета площади и периметра прямоугольника. Создайте экземпляр класса «Прямоугольник» и вычислите его площадь и периметр.

// Решение

class Recrangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  square() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

const shape = new Recrangle(10, 3);
console.log(shape.perimeter());
console.log(shape.square());