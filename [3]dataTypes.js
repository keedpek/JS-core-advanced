// Напишите функцию, которая принимает строку и выводит в консоль последний символ строки.

// Решение
function getLastLetter(str) {
  if (typeof str !== 'string') { return 'Введите строку' }
  if (str.length === 0) { return 'Строка пустая' }
  let result = str.charAt(str.length - 1);
  console.log(result);
  return result;
}

// Тесты

const tests = [
  {str: '1234', expect: '4'},
  {str: 'фыва', expect: 'а'},
  {str: '', expect: 'Строка пустая'},
  {str: 1, expect: 'Введите строку'},
  {str: '1', expect: '1'},
];

tests.forEach((test, index) => {
  console.log(getLastLetter(test.str) === test.expect ? `Тест ${index + 1} пройден` : `Тест ${index + 1} не пройден`)
})