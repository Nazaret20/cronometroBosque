document.addEventListener('DOMContentLoaded', () => {
    calcularTotalMinutos()
    const botonEmpezar = document.querySelector('#boton');
    const cronometro = document.querySelector('#cronometro');
    const boton05 = document.querySelector('#boton05')
    const boton30 = document.querySelector('#boton30')
    const boton45 = document.querySelector('#boton45')
    const boton60 = document.querySelector('#boton60')
    let intervalo; 
    let minutos = 30
    let botonPulsado;
    cronometro.innerHTML = `${minutos}:00`

    boton05.addEventListener('click', () => {
        elegirMinutos(5)
    })
    boton30.addEventListener('click', () => {
        elegirMinutos(30)
    })

    boton45.addEventListener('click', () => {
        elegirMinutos(45)
    })
    boton60.addEventListener('click', () => {
        elegirMinutos(60)
    })


    function elegirMinutos(minutosElegidos) {
        botonPulsado = minutosElegidos
        if (intervalo) {
            clearInterval(intervalo);
        }
        minutos = minutosElegidos
        cronometro.innerHTML = `${minutos}`
        //cronometro.innerHTML = `${minutos}:00`
    }


    botonEmpezar.addEventListener("click", () => {
        if (intervalo) {
            clearInterval(intervalo);
        }
        contador = minutos;
        //contador = minutos * 60;
        intervalo = setInterval(cuentaAtras, 1000); // 1 segundo = 1000 milisegundos
    });

    function cuentaAtras() {
        contador = contador - 1;

        if(contador === 0) {
            sumarMinutos(botonPulsado)
        }
        
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

            calcularTotalMinutos()
    }

    function calcularTotalMinutos() {
        const total = localStorage.getItem('total')
        
        if(total > 0) {
            const minutosTotales = document.querySelector('#minutosTotales')
            minutosTotales.innerHTML = `En total llevas ${total} minutos 🎉`
        }
    }
})

function sumarMinutos(minutosPulsados) {
    //¿Cuántos minutos llevo?
    const total = localStorage.getItem('total')
    //¿Cuántos minutos llevo más el tiempo nuevo?
    const minutosSumados = parseInt(total) + parseInt(minutosPulsados)
    localStorage.setItem('total', minutosSumados)
}