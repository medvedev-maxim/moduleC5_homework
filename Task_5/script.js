function useRequest(url, callback) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(JSON.stringify(data));
      localStorage.setItem('storJSON', JSON.stringify(data));
      callback(data);
    })
    .catch((error) => { console.log('Произошла ошибка:', error.message); });
  };
  
const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('.j-btn-request');
const btnClear = document.querySelector('.j-btn-clear');
  
function displayResult(jsonData) {
  let res = '';
  
  jsonData.forEach(item => {
    const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
        </div>
      `;
    res = res + cardBlock;
  });    

  resultNode.innerHTML = res;
}

// console.log(localStorage.getItem('storJSON'));

if (localStorage.getItem('storJSON')) {
  displayResult(JSON.parse(localStorage.getItem('storJSON')));
}

btnNode.addEventListener('click', () => {
  Num1 = document.querySelector('#input_1').value;
  Num2 = document.querySelector('#input_2').value;
  
  
  if (!isNaN(Num1) && !isNaN(Num2) && Num1 >= 1 && Num1 <=10 && Num2 >= 1 && Num2 <=10){
      useRequest(`https://picsum.photos/v2/list?page=${Num1}&limit=${Num2}`, displayResult);
    } else {
      let inf = '';       
      if ((isNaN(Num1) || Num1 < 1 || Num1 >10 ) && (isNaN(Num2) || Num2 < 1 || Num2 >10)) {
        inf = 'Номер страницы и лимит вне диапазона от 1 до 10'
      } else {
          if ((Num1 < 1 || Num1 > 10) || isNaN(Num1))  {
            inf = 'Номер страницы вне диапазона от 1 до 10\n';
          }
          if ((Num2 < 1 || Num2 > 10) || isNaN(Num2)) {
            inf = 'Лимит вне диапазона от 1 до 10';
          }        
      }
      resultNode.innerHTML = inf;
    }
})

// Очистка localStorage
btnClear.addEventListener('click', () => {
  localStorage.clear();
  console.log('localStorage очищен');
})