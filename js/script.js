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
    const audio = new Audio('../assets/notificacion.mp3');

    /*boton05.addEventListener('click', () => {
        elegirMinutos(5)
    })*/
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
        cronometro.innerHTML = `${minutos}:00`
        //cronometro.innerHTML = `${minutos}`
    }


    botonEmpezar.addEventListener("click", () => {
        if (intervalo) {
            clearInterval(intervalo);
        }
        contador = minutos * 60;
        //contador = minutos;
        intervalo = setInterval(cuentaAtras, 1000); // 1 segundo = 1000 milisegundos
    });

    function cuentaAtras() {
        contador = contador - 1;

        if(contador === 0) {
            sumarMinutos(botonPulsado)
            audio.play();
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
        let total = localStorage.getItem('total');
        
        if(!total || isNaN(total)) {
            localStorage.setItem('total', '0');
            total = '0';
        }
        
        const totalNum = parseInt(total);
        
        if(totalNum > 0) {
            const minutosTotales = document.querySelector('#minutosTotales');
            minutosTotales.innerHTML = `En total llevas ${totalNum} minutos 🎉`;
        }
    }
})

function sumarMinutos(minutosPulsados) {
    //¿Cuántos minutos llevo?
    const total = localStorage.getItem('total')
    //¿Cuántos minutos llevo más el tiempo nuevo?
    const minutosSumados = parseInt(total) + parseInt(minutosPulsados)
    localStorage.setItem('total', parseInt(minutosSumados))
}