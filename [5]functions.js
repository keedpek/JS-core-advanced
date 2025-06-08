//Напишите функцию для применения алгоритма сортировки пузырьком.

//Решение
function bubbleSort(arr) {
  if (!Array.isArray(arr)) {return 'Ожидался массив'}
  let array = arr.slice(); 
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

const tests = [
  {arr: [1, 6, 3, 7, 10, 2], expect: [1, 2, 3, 6, 7, 10]},
  {arr: [1, 2, 3, 4, 5], expect: [1, 2, 3, 4, 5]},
  {arr: [1], expect: [1]},
  {arr: [], expect: []},
  {arr: 1, expect: 'Ожидался массив'},
];

tests.forEach((test, index) => {
  console.log(JSON.stringify(bubbleSort(test.arr)) === JSON.stringify(test.expect) ? `Тест ${index + 1} пройден` : `Тест ${index + 1} не пройден`)
})
