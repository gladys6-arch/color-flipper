// get elements by ids
const button = document.getElementById('btn');
const colorText = document.getElementById('color');

button.addEventListener('click', function(){
  // make a list of letters and numbers used in hex colors

  const hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

  // start building color with #

  let color = "#";
  for (let i= 0; i<6; i++){
    const randomIndex= Math.floor(Math.random() * hex.length);
    color += hex[randomIndex];
  }

  document.body.style.backgroundColor = color;
  colorText.textContent = color;
})