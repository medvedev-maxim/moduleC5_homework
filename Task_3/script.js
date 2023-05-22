function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  
  xhr.open('GET', url, true);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
        const result = JSON.parse(xhr.response);
        if (callback) {
          callback(1, result);
      }
    }
  };
  
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
  
  xhr.send();
};

const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('.j-btn-request');

function displayResult(mode, apiData) {
  let res = '';
  
  if(mode == 1){
    apiData.forEach(item => {
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
  } else if (mode == 2) {
    res = 'Число вне диапазона от 1 до 10';
  } else {
    res = 'Вообще не число!';    
  }
  
  resultNode.innerHTML = res;
}

btnNode.addEventListener('click', () => {
  Num = document.querySelector('.j-input').value;
  
  if(!isNaN(Num)) {
    if (Num >= 1 &&  Num <= 10){
      useRequest(`https://picsum.photos/v2/list/?limit=${Num}`, displayResult);
    } else {
      displayResult(2);
    } 
  } else {
     displayResult(3);   
  }
})