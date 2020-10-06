console.log('test');
const submitButton= document.querySelector('#submitButton');
// why i can not access document here ?
const cityNameInput = document.querySelector('input');


submitButton.addEventListener('click' , () => {
  const cityName = cityNameInput.value;
 console.log(cityName);
  
})

