let number = document.getElementById('number');

function generate(){
    let randomNumber = Math.floor(Math.random() * 100); 
    number.textContent = randomNumber
    console.log(randomNumber)
}

 