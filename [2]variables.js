//Попробуйте объявить переменную с тем же именем дважды, используя var, let и const. Какие переменные позволяют повторное объявление, а какие нет?

//Решение

const constVar = 1;
// const constVar = 2;

let letVar = 1;
// let letVar = 2;
// переменные const и let нельзя дважды объявить с тем же именем, т.к. они имеют блочную область видимости 

var varVar = 1;
var varVar = 2;
// переменные var можно дважды объявить с тем же именем, т.к. они имеют функциональную область видимости

if (true) {
  let letVar = 5
  const constVar = 1
}
// при этом в другой области видимости можно инициализировать const и let переменные с теми же именами