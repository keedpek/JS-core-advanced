// Напишите функцию, которая принимает массив URL-адресов и параллельно загружает содержимое каждого URL-адреса с помощью Promises.

// Решение

function fetchAllUrls(urls) {
  const requests = urls.map(url => fetch(url)) 
  return Promise.all(requests)
    .then(responses => Promise.all(responses.map(res => res.json())))
}

const urls = [
  'https://jsonplaceholder.typicode.com/posts/10',
  'https://jsonplaceholder.typicode.com/posts/4',
  'https://jsonplaceholder.typicode.com/posts/38',
  'https://jsonplaceholder.typicode.com/posts/52',
]

fetchAllUrls(urls)
  .then(data => {
    data.forEach(post => {console.log(post)})
  })