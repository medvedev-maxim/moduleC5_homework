function useRequest(url, callback) {
  fetch(url)
    .then((response) => {
      // console.log(JSON.stringify(response.headers.get('Content-Type')));
      return response.blob();
    })
    .then((blob) => {
      let imageUrl = URL.createObjectURL(blob);
      // console.log(imageUrl);
      callback(1,imageUrl);
    })
    .catch((error) => { console.log('Произошла ошибка:', error.message); });
  };
  
const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('.j-btn-request');
  
function displayResult(mode, url) {
  let res = ''
  
  if(mode == 1){
    res = `<img src="${url}">`;
  } else {
    res = 'Одно из чисел вне диапазона от 100 до 300';
  }

  resultNode.innerHTML = res;
}
  
btnNode.addEventListener('click', () => {
  Num1 = document.querySelector('#input_1').value;
  Num2 = document.querySelector('#input_2').value;

  if (!isNaN(Num1) && !isNaN(Num2) && Num1 >= 100 && Num1 <=300  && Num2 >= 100 && Num2 <=300){
    useRequest(`https://picsum.photos/${Num1}/${Num2}`, displayResult);
  } else {
    displayResult(2);
  } 
})