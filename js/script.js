const botonEmpezar = document.querySelector('#boton');
const cronometro = document.querySelector('#cronometro'); 
const boton10 = document.querySelector('#boton10')
const boton20 = document.querySelector('#boton20')
const boton30 = document.querySelector('#boton30')
const boton40 = document.querySelector('#boton40')
let intervalo; 
let minutos = 30
cronometro.innerHTML = `${minutos}:00`

boton10.addEventListener('click', () => {
    elegirMinutos(10)
})

boton20.addEventListener('click', () => {
    elegirMinutos(20)
})
boton30.addEventListener('click', () => {
    elegirMinutos(30)
})
boton40.addEventListener('click', () => {
    elegirMinutos(40)
})

function elegirMinutos(minutosElegidos) {
    if (intervalo) {
        clearInterval(intervalo);
    }
    minutos = minutosElegidos
    cronometro.innerHTML = `${minutos}:00`
}


botonEmpezar.addEventListener("click", () => {
    if (intervalo) {
        clearInterval(intervalo);
    }
    contador = minutos * 60;
    intervalo = setInterval(escribir, 1000); // 1 segundo = 1000 milisegundos
});

function escribir() {
    contador = contador - 1;
    
    if (contador < 0) {
        clearInterval(intervalo);
        contador = 0;
    }

        // Calculamos minutos y segundos
        const minutos = Math.floor(contador / 60);
        const segundos = contador % 60;
        
        // Formateamos para que siempre tengan 2 dígitos
        const minutosFormateados = minutos < 10 ? `0${minutos}` : minutos;
        const segundosFormateados = segundos < 10 ? `0${segundos}` : segundos;
        
        cronometro.innerHTML = `${minutosFormateados}:${segundosFormateados}`;

}