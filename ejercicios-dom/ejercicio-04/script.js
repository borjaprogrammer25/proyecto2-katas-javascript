//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
const boton = document.createElement("button");
boton.id = "btnToClick";
boton.textContent = "Boton";
boton.onclick = function () {
        console.log("Has apretado el boton llamado Boton");
}
document.querySelector("body").appendChild(boton);

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focusInput = document.querySelector('.focus');

focusInput.addEventListener('focus', function(event) {
    console.log(event.target.value);
});

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const todosLosInputs = document.querySelectorAll('input');
todosLosInputs.forEach(function(input) {
    input.addEventListener('input', function(event) {
        console.log(event.target.value);
    });
});