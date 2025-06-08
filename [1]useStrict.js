'use strict'
//Напишите функцию, которая принимает массив и значение, и возвращает true, если это значение присутствует в массиве, и false, если нет. Используйте строгий режим.

//Решение
// function isContain (arr, val) {
//   return arr.includes(val);
// }

//Если без готовых методов
function isContain (arr, val) {
  if (!Array.isArray(arr)) {return false}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) { return true }
  }
  return false;
}


//Тесты

const tests = [
  {arr: [1, 2, 3, 4], val: 3, expect: true},
  {arr: [1, 2, 3, 4], val: '3', expect: false},
  {arr: ['a', 'b', 'c', 'd'], val: 'a', expect: true},
  {arr: ['aa', 'bb', 'cc', 'dd'], val: 'a', expect: false},
  {arr: [], val: 3, expect: false},
  {arr: '', val: 2, expect: false},
  {arr: '1', val: 1, expect: false},
];

tests.forEach((test, index) => {
  console.log(isContain(test.arr, test.val) === test.expect ? `Тест ${index + 1} пройден` : `Тест ${index + 1} не пройден`)
})
