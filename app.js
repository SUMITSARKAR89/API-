// fetch - https://jsonplaceholder.typicode.com/posts 


fetch("https://jsonplaceholder.typicode.com/posts ")
.then((response) => response.json())
.then((data) => console.log(data))