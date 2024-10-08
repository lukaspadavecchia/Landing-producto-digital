let currentIndex = 0;

// Cambiar imagen del carrusel
function cambiarImagen(n) {
    const images = document.querySelectorAll('.carrusel img');
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + n + images.length) % images.length;
    images[currentIndex].classList.add('active');
}

// Mostrar el primer elemento al cargar
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.carrusel img')[0].classList.add('active');

    // Inicializar el mapa después de que el DOM esté cargado
    mapboxgl.accessToken = 'pk.eyJ1IjoibHVrYXNwYWRhdmUiLCJhIjoiY20xemw3ZTVpMDAxZTJqb3BxcTlnYWJzcSJ9.qOYWTWDuFyYC8eGJmXSBpA';
    const map = new mapboxgl.Map({
        container: 'map', // ID del contenedor del mapa
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-58.3816, -34.6037], // Coordenadas de Buenos Aires
        zoom: 12
    });

    // Agregar un marcador
    new mapboxgl.Marker()
        .setLngLat([-58.3816, -34.6037]) // Coordenadas del marcador
        .setPopup(new mapboxgl.Popup().setHTML("<h3>Buenos Aires</h3><p>Una ciudad vibrante en Argentina.</p>")) // Popup opcional
        .addTo(map);
});

// Chat Assistance
const chatBtn = document.getElementById('chat-btn');
const chatContainer = document.getElementById('chat-container');
const sendBtn = document.getElementById('send-btn');
const chatMessages = document.querySelector('.chat-messages');
const chatInput = document.getElementById('chat-input');
const closeChatBtn = document.getElementById('close-chat');

chatBtn.addEventListener('click', () => {
    chatContainer.style.display = chatContainer.style.display === 'none' ? 'block' : 'none';
});

// Cerrar el chat
closeChatBtn.addEventListener('click', () => {
    chatContainer.style.display = 'none';
});

// Enviar mensaje
sendBtn.addEventListener('click', () => {
    const message = chatInput.value;
    if (message.trim() !== '') {
        const newMessage = document.createElement('div');
        newMessage.textContent = message;
        chatMessages.appendChild(newMessage);
        chatInput.value = ''; // Limpiar input
        chatMessages.scrollTop = chatMessages.scrollHeight; // Desplazar hacia abajo
    }
});
