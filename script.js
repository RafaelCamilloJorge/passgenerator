let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let conteinerPassword = document.querySelector("#conteiner-password");

let charset = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNO0050PQRSTUVWXYZ1234567890!@";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }



    conteinerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    alert('SENHA SALVA');
    console.log(novaSenha);
    
    navigator.clipboard.writeText(novaSenha);
}
