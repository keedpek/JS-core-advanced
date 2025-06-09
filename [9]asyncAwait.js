// Напишите функцию, которая сначала загружает данные с одного сервера, а затем использует эти данные для выполнения запроса к другому серверу. Используйте async/await для обеспечения последовательного выполнения запросов.

// Решение

async function posFetchedData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/10');
  const resData = await response.json();
  const {userId, title, body} = resData;
  const reqBody = {title, body, userId};
  
  const post = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(reqBody),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  if (post.ok) {
    const postResponse = await post.json();
    return `Пост был создан: ${JSON.stringify(postResponse)}`
  } else {
    return 'Что-то пошло не так('
  }
}

posFetchedData()
  .then(res => console.log(res))