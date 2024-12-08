// Configuración del texto que se va a mostrar
const texto1 = "Sé que soy una mrd y un idiota, pero este idiota te ama más de lo que crees ...";
const texto2 = "¿Me perdonas? 😢";

// Referencias a los elementos HTML
const textElement1 = document.getElementById('text1');
const textElement2 = document.getElementById('text2');
const buttonsElement = document.getElementById('buttons');
const resultElement = document.getElementById('result');
const messageElement = document.getElementById('message');
const cuteImageElement = document.getElementById('cuteImage');
const mePerdonasImageElement = document.getElementById('mePerdonasImage');  // Imagen de "¿Me perdonas?"

// Función para simular la escritura del texto
function escribirTexto(texto, textElement, callback) {
    let index = 0;
    textElement.innerHTML = ""; // Limpiamos el contenido anterior
    const interval = setInterval(() => {
        textElement.innerHTML += texto[index];
        index++;
        if (index === texto.length) {
            clearInterval(interval); // Detenemos la animación cuando se termine el texto
            callback(); // Llamamos a la función de callback cuando termina
        }
    }, 100); // Velocidad de escritura
}

// Escribimos el primer texto
escribirTexto(texto1, textElement1, () => {
    // Luego de terminar el primer texto, mostramos el segundo
    setTimeout(() => {
        textElement2.style.display = "inline"; // Mostramos el segundo texto
        escribirTexto(texto2, textElement2, () => {
            // Cuando ambos textos hayan terminado, mostramos los botones
            buttonsElement.style.display = "flex";
            // Mostrar la imagen de la pregunta "¿Me perdonas?"
            mePerdonasImageElement.style.opacity = 1;
            mePerdonasImageElement.style.transform = "scale(1.2)"; // Efecto de zoom
        });
    }, 1000); // Retardo de 1 segundo antes de mostrar el "¿Me perdonas?"
});

// Función para mostrar el mensaje bonito y la imagen cuando se presiona "Sí"
function showMessage() {
    // Ocultar y eliminar inmediatamente la imagen "¿Me perdonas?"
    mePerdonasImageElement.style.display = "none";

    // Ocultar la pregunta y los textos anteriores
    textElement1.style.display = "none";
    textElement2.style.display = "none";
    buttonsElement.style.display = "none"; // Ocultamos los botones

    // Mostrar el mensaje bonito
    messageElement.innerHTML = "¡Gracias por perdonarme! 😍 Eres lo mejor de mi vida. TE AMO MI MOCOSA ";
    resultElement.style.display = "flex";

    // Mostrar la imagen tierna con un retardo
    setTimeout(() => {
        cuteImageElement.style.opacity = 1; // Hacemos que la imagen sea visible
        cuteImageElement.classList.add("visible");
    }, 100); // Retardo de 1 segundo antes de mostrar la imagen
}
// Función para que el botón "No" se escape
function escapeNo() {
    const noButton = document.querySelector('.no');
    if (!noButton) return;  // Verifica si el botón existe en el DOM

    // Obtiene las dimensiones de la ventana
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Obtiene las dimensiones del botón "No"
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Calcula las nuevas posiciones aleatorias, asegurándose de que el botón no se salga de la pantalla
    const randomX = Math.floor(Math.random() * (windowWidth - buttonWidth));
    const randomY = Math.floor(Math.random() * (windowHeight - buttonHeight));

    // Establece la posición del botón con una transición suave
    noButton.style.position = 'absolute';
    noButton.style.transition = 'all 0.5s ease'; // Añade una transición para un movimiento suave
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// Llama a la función cuando se hace clic en el botón "No"
document.querySelector('.no').addEventListener('click', escapeNo);
