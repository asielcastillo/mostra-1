document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica do Slideshow de Fundo ---
    const images = document.querySelectorAll('#background-slideshow img');
    let currentIndex = 0;
    const fadeDuration = 2500; // Duração da transição (fade) em milissegundos (2.5 segundos - MAIS SUAVE)
    const displayDuration = 8000; // Duração que cada imagem fica visível em milissegundos (8 segundos - MAIS TEMPO)

    function showImage(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        });
    }

    function nextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        setTimeout(() => {
            showImage(currentIndex);
        }, 50); 
    }

    if (images.length > 0) {
        showImage(currentIndex);
        setInterval(nextImage, displayDuration + fadeDuration);
    }

    // --- Lógica de Transição de Imagem de Perfil Automática ---
    const profileDefault = document.querySelector('.profile-image-wrapper .profile-default');
    const profileHover = document.querySelector('.profile-image-wrapper .profile-hover'); 
    const profileTransitionInterval = 15000; // Intervalo para a troca da imagem de perfil (15 segundos - MAIS ESPAÇADO)

    if (profileDefault && profileHover) {
        let isDefaultVisible = true; 

        // Garante que a transição de opacidade no CSS está configurada para 1.5s ou mais
        // A lógica do JS apenas alterna a visibilidade a cada `profileTransitionInterval`
        setInterval(() => {
            if (isDefaultVisible) {
                profileDefault.style.opacity = '0'; 
                profileHover.style.opacity = '1';  
            } else {
                profileDefault.style.opacity = '1'; 
                profileHover.style.opacity = '0';  
            }
            isDefaultVisible = !isDefaultVisible; 
        }, profileTransitionInterval);
    }


    // --- Lógica de Alternância de Paletas de Cores (Temas) ---
    const body = document.body;
    const themes = ['theme-modern-vivid', 'theme-gray-black', 'theme-white-black']; 
    let currentThemeIndex = 0;
    const themeChangeInterval = 15000; // Alterna o tema a cada 15 segundos (15000 ms - MAIS ESPAÇADO)

    // Certifica que o body começa com uma das classes de tema se ele não tiver nenhuma
    if (!body.classList.contains(themes[currentThemeIndex])) {
        body.classList.add(themes[currentThemeIndex]);
    }

    function switchTheme() {
        body.classList.remove(themes[currentThemeIndex]);
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        body.classList.add(themes[currentThemeIndex]);
    }

    setInterval(switchTheme, themeChangeInterval);


    // --- Lógica de Animação ao Scroll (Intersection Observer) ---
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            } 
        });
    }, observerOptions);

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});