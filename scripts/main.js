const myHeading = document.querySelector("h1");
myHeading.textContent = "Meu portifólio"

let btnImg = [document.getElementById('btnImg1'), document.getElementById('btnImg2')];

btnImg.forEach(btn => {
    btn.addEventListener("click", () => {
        let textButton = btn.textContent;
        let changeImg = document.getElementById('lamp');

        if(textButton === 'Acender lâmpada') {
            changeImg.setAttribute("src", "img/pic_bulbon.gif")
        } else {
            changeImg.setAttribute("src", "img/pic_bulboff.gif");
        }
    })
});

function setUserName() {
    const myName = prompt('Por fvor, digite seu nome');

    if(!myName) {
        setUserName()
    } else {
        localStorage.setItem('name', myName);
        document.querySelector('h1').textContent = `Bem vindo ao meu site ${myName}`;
    }
}

if(!localStorage.getItem('name')) {
    setUserName()
} else {
    document.querySelector('h1').textContent = `Bem vindo ao meu site ` + localStorage.getItem('name')
}


document.getElementById('btnUser').addEventListener("click", () => {
    setUserName()
});


function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }
  let arrayNome = ['Joao', 'Maria', 'Pedro', 'Bruno', 'Zé', 'Maithe', 'Miguel']  
  // Exemplo de uso
  const numeroAleatorio = getRandomIndex(arrayNome); // Gera um número entre 1 e 100
  console.log(numeroAleatorio);