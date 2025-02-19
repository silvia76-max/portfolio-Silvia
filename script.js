// Selecciona el elemento <header> del documento
const header = document.querySelector('header');

// Agrega un evento que escucha el desplazamiento de la página (scroll)
window.addEventListener('scroll', () => {
    // Si el usuario ha desplazado más de 50 píxeles hacia abajo, se añade la clase 'scrolled' al header
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        // Si el desplazamiento es menor o igual a 50 píxeles, se elimina la clase 'scrolled'
        header.classList.remove('scrolled');
    }
});

// Array de colores aleatorios que se usarán para las bolas animadas
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50; // Número de bolas que se van a generar
const balls = []; // Array para almacenar las bolas creadas

// Bucle para crear las bolas y asignarles propiedades aleatorias
for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement("div"); // Crea un elemento <div> para la bola
    ball.classList.add("ball"); // Agrega la clase 'ball' al elemento

    // Asigna un color aleatorio a la bola
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    // Posición inicial aleatoria dentro del viewport (ancho y alto de la ventana)
    ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`;

    // Escala aleatoria para variar el tamaño de las bolas
    ball.style.transform = `scale(${Math.random()})`;
    
    // Define un tamaño aleatorio en 'em' para la bola
    ball.style.width = `${Math.random()}em`;
    ball.style.height = ball.style.width; // La altura es igual al ancho para que sea un círculo

    // Agrega la bola al array y la añade al cuerpo del documento
    balls.push(ball);
    document.body.append(ball);
}

// Aplica animaciones a cada bola creada
balls.forEach((el, i) => {
    // Define la dirección del movimiento aleatorio
    let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11), // Movimiento horizontal aleatorio
        y: Math.random() * 12 // Movimiento vertical aleatorio
    };

    // Crea la animación con keyframes
    let anim = el.animate(
        [
            { transform: "translate(0, 0)" }, // Posición inicial
            { transform: `translate(${to.x}rem, ${to.y}rem)` } // Posición final
        ],
        {
            duration: (Math.random() + 1) * 2000, // Duración aleatoria entre 2000ms y 4000ms
            direction: "alternate", // Alterna entre la posición inicial y final
            fill: "both", // Mantiene el estado de la animación
            iterations: Infinity, // Repite la animación infinitamente
            easing: "ease-in-out" // Suaviza la animación en la entrada y salida
        }
    );
});
