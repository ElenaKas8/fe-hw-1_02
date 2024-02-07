//* Задана ссылка на api в переменной
// let url = "https://jsonplaceholder.typicode.com/photos"
// // // // Напишите fetch-запрос, который получит данные от сервера в виде массива и для каждого полученного элемента (чей albumId = 35 ) создайте DIV элемент в HTML разметке.
// // Воспользуйтесь GRID сеткой, чтобы разместить по 4 элемента в ряд, сформировав следующее описание:
//
// Картинка с разрешением 200 на 200 пикселей (url)
// Заголовок h2 с описанием фотографии (title)
//
// // // // Позиционирование элементов может быть произвольной. Перед созданием внимательно ознакомьтесь с полученными данными, после уже формируйте процесс по созданию элементов.
//
// // // Примечание: после получения данных вызовите подготовленную функцию render() для реализации разметки
//

function render() {
  let url = "https://jsonplaceholder.typicode.com/photos";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        if (element.albumId === 35) {
          let div = document.createElement("div");
          let img = document.createElement("img");
          let h2 = document.createElement("h2");
          img.src = element.url;
          img.alt = element.title;
          img.style.width = "200px";
          img.style.height = "200px";
          img.classList.add("image");
          div.classList.add("card");
          div.append(img, h2);
          h2.innerText = element.title;
          document.querySelector(".card_container").append(div);
        }
      });
    });
}

render();
