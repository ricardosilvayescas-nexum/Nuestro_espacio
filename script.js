function iniciarSorpresa() {
    document.getElementById('main-card').style.opacity = '0';
    
    setTimeout(() => {
        document.getElementById('main-card').style.display = 'none';
        const overlay = document.getElementById('rain-overlay');
        overlay.style.display = 'flex';

        // 6 Posiciones estratégicas para rodear el mensaje
// He ajustado las posiciones de abajo (t: 75 y 85) a valores más cercanos al centro (t: 65 y 75)
const posiciones = [
    { t: 10, l: 10, r: -10 }, // 1. Arriba Izquierda
    { t: 5,  l: 45, r: 5 },   // 2. Arriba Centro
    { t: 10, l: 80, r: 15 },  // 3. Arriba Derecha
    { t: 65, l: 10, r: -8 },  // 4. Abajo Izquierda (Subida de 75 a 65)
    { t: 72, l: 45, r: 3 },   // 5. Abajo Centro (Subida de 85 a 72 para cerrar el espacio)
    { t: 65, l: 80, r: 12 }   // 6. Abajo Derecha (Subida de 75 a 65)
];

        // Lista de tus 6 fotos
        const misFotos = [
            'fotos/Boda_alin.jpg', 
            'fotos/mina.png', 
            'fotos/mina_2.png', 
            'fotos/Navidad_2.jpg', 
            'fotos/pachuca.png', 
            'fotos/burbujas.png'
        ];

        posiciones.forEach((pos, i) => {
            setTimeout(() => {
                const img = document.createElement('img');
                img.src = misFotos[i] || misFotos[0];
                img.className = 'floating-photo';
                
                // Aplicar posición
                img.style.top = pos.t + '%';
                img.style.left = pos.l + '%';
                
                // Variables para la rotación personalizada (del CSS)
                img.style.setProperty('--rot', pos.r + 'deg');
                img.style.setProperty('--rot-alt', (pos.r + 5) + 'deg');
                
                // Iniciar animación de flotado suave
                img.style.animation = `float ${3 + Math.random()}s ease-in-out infinite`;
                
                overlay.appendChild(img);
                
                // Aparecer suavemente con fade-in
                setTimeout(() => img.style.opacity = '1', 100);
            }, i * 400); // Aparecen una tras otra
        });

        // Mostrar mensaje final
        setTimeout(() => {
            document.getElementById('final-message').style.opacity = '1';
        }, 1200);

    }, 500);
}