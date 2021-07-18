document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const select = document.getElementById('cars'),
    output = document.getElementById('output');

  const getData = (url) => {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) {
          return;
        }
        if (request.status === 200) {
          const data = JSON.parse(request.responseText);
          data.cars.forEach((item) => {
            if (item.brand === select.value) {
              const { brand, model, price } = item;
              resolve(`Тачка ${brand} ${model} <br>
                       Цена: ${price}$`);
            }
          });
        } else {
          reject('Произошла ошибка');
        }
      });
      request.open('GET', url);
      request.setRequestHeader('Content-type', 'application/json');
      request.send();
    });
  };

  select.addEventListener('change', () => {
    getData('./cars.json')
      .then((data) => (output.innerHTML = data))
      .catch((error) => (output.innerHTML = error));
  });
});
