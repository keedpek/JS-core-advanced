// Напишите функцию, которая извлекает данные из API и отменяет запрос, если он занимает больше указанного времени.

//TODO: AbortController() - отменяет сам HTTP запрос а не игнорирует результат
// Решение

function fetchData(url, runtime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Превышено время ожидания ответа на запрос');
    }, runtime);

    //    runtimeErrorPromise - мок запрос длящийся 3 секунды (дольше переданных в функцию 2-х сек)

    // const runtimeErrorPromise = new Promise((errResolve, errReject) => {
    //   setTimeout(() => {
    //     errResolve({
    //       ok: true,
    //       json: () => ({ id: 1, title: 'Mocked title' })
    //     })
    //   }, 3000);
    // })

    //    fetchPromise - обычный fetch запрос, должен успеть выполниться, при тестировании отменялся при переданном времени 170+-20 мс

    const fetchPromise = fetch(url);

    fetchPromise
      .then(response => {
        if (!response.ok) {
          reject(`Непредвиденная ошибка ${response.status}`);
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(err => console.error(err))
  })
}

const url = 'https://jsonplaceholder.typicode.com/posts/10';

fetchData(url, 1000)
  .then(res => console.log(res))
  .catch(err => console.error(`Ошибка ${err}`))