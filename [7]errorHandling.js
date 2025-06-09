// Напишите функцию, которая использует блок try-catch для перехвата и обработки ошибки TypeError при доступе к свойству неопределенного объекта.

// Решение

function errorHandler(obj, prop) {
  try {
    let property = obj[prop];
    return property
  } catch (error) {
    if (error instanceof TypeError) {
      console.error(`TypeError: возникла ошибка при доступе к свойству неопределенного объекта`);
    } else {
      console.error(`Возникла неопределенная ошибка`);
    }
  }
  return null;
}

const obj = {
  name: 'Jakob',
};

console.log(errorHandler(obj, 'name'));
console.log(errorHandler(null, 'age'));