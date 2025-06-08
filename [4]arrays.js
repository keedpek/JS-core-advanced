// Напишите функцию, которая принимает массив с числами и находит сумму первой половины элементов этого массива.

// Решение
function halfArraySum(arr) {
  if (!Array.isArray(arr)) {return 'Ожидался массив'}
  let acc = 0;
  for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
    acc += arr[i];
  }
  return acc;
}

// Тесты

const tests = [
  {arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], expect: 15},
  {arr: [11, 12, 13, 14, 15, 16, 17, 18, 19], expect: 65},
  {arr: [], expect: 0},
  {arr: [2], expect: 2},
  {arr: 1, expect: 'Ожидался массив'},
];

tests.forEach((test, index) => {
  console.log(halfArraySum(test.arr) === test.expect ? `Тест ${index + 1} пройден` : `Тест ${index + 1} не пройден`)
})