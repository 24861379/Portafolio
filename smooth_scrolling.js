//----codigo del nav 
function desplazarSeccion(evento) {
    evento.preventDefault();

    const idDestino = evento.target.getAttribute('href').substring(1);
    const seccionDestion = document.getElementById(idDestino);

    seccionDestion.scrollIntoView({
        behavior: 'smooth'   
    });
}

const enlaceNav = document.querySelectorAll('nav a');
enlaceNav.forEach(enlace => {
    enlace.addEventListener('click', desplazarSeccion)
})

