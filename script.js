document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000, // global duration for AOS animations
        once: true // animations happen only once
    });

    // Theme switching logic (if applicable, based on your previous code)
    // For now, keeping the body class as theme-modern-vivid
    // You can add logic here to load a theme preference or cycle themes

    // Image slideshow for background
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
        // Pequeno delay para garantir que a classe 'active' seja removida antes de adicionar na próxima
        setTimeout(() => {
            showImage(currentIndex);
        }, 50); 
    }

    if (images.length > 0) {
        showImage(currentIndex); // Mostra a primeira imagem imediatamente
        setInterval(nextImage, displayDuration + fadeDuration);
    }

    // --- Lógica de Transição de Imagem de Perfil Automática ---
    const profileDefault = document.querySelector('.profile-image-wrapper .profile-default');
    const profileHover = document.querySelector('.profile-image-wrapper .profile-hover'); 
    const profileTransitionInterval = 15000; // Intervalo para a troca da imagem de perfil (15 segundos)

    if (profileDefault && profileHover) {
        let isDefaultVisible = true; 
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
    const themeChangeInterval = 15000; // Alterna o tema a cada 15 segundos

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
        threshold: 0.1 // Quando 10% do elemento estiver visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Deixa de observar o elemento uma vez que ele já apareceu
            } 
        });
    }, observerOptions);

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // --- Lógica de Multi-idiomas ---

    // Todas as traduções para a página única
    const translations = {
        'pt': {
            'index_page_title': 'Sua Landing Page | Soluções Web Personalizadas',
            'index_meta_description': 'Desenvolvimento de Landing Pages otimizadas para conversão e resultados. Design moderno, funcionalidade impecável e personalização.',
            'index_og_title': 'Criação de Landing Pages Profissionais - Alcance Seus Objetivos Online',
            'index_og_description': 'Precisa de uma landing page que realmente converta? Desenvolvemos soluções web personalizadas para destacar seu negócio e gerar resultados.',
            'index_og_locale': 'pt_BR',
            'index_client_name': 'Sua Ideia, Nosso Design.',
            'index_tagline': 'Landing Pages Profissionais que Convertem. Rápido, Eficaz e Personalizado.',
            'index_description_text': 'Transformamos a visão do seu negócio em experiências digitais impactantes. Com foco em design responsivo, usabilidade e otimização para motores de busca, criamos landing pages que geram resultados reais e impulsionam seu crescimento online.',
            
            'differentiators_short_title': 'Por Que Nos Escolher?',
            'differentiator_speed': '<strong>Agilidade Extrema:</strong> Seu projeto online em tempo recorde.',
            'differentiator_custom': '<strong>Personalização Total:</strong> Sua marca, sua identidade, sem limites.',
            'differentiator_results': '<strong>Foco em Resultados:</strong> Design para converter e impulsionar seu sucesso.',

            // INÍCIO DAS MUDANÇAS PARA A OPÇÃO 2
            'solutions_main_title': 'Crie Sua Landing Page Ideal', // Título da Seção
            'solutions_intro': 'Este é um exemplo de como podemos construir uma landing page exclusiva e eficaz, pronta para seu lançamento rápido.', // Intro da Seção
            'solution1_title': 'Personalize com Sua Identidade', // Bloco 1 Título
            'solution1_description': 'Este é o lugar para os ícones, cores e fontes da sua empresa. Um modelo que se adapta 100% à sua marca, pronto para ser preenchido com seu estilo.', // Bloco 1 Descrição
            'solution2_title': 'Apresente Seu Diferencial', // Bloco 2 Título
            'solution2_description': 'Use este modelo para destacar o que torna seu negócio único. Textos e imagens customizáveis para contar sua história e seus serviços de forma eficaz.', // Bloco 2 Descrição
            'solution3_title': 'Estruture Suas Informações', // Bloco 3 Título
            'solution3_description': 'Organize suas ideias em seções claras e objetivas. Um layout intuitivo que permite dispor seus produtos, serviços ou portfólio com facilidade.', // Bloco 3 Descrição
            'solution4_title': 'Engaje e Conquiste Clientes', // Bloco 4 Título
            'solution4_description': 'Crie um caminho claro para seus visitantes agirem. Integre formulários de contato, links para redes sociais ou botões de compra para impulsionar suas vendas.', // Bloco 4 Descrição
            // FIM DAS MUDANÇAS PARA A OPÇÃO 2

            'index_whatsapp_button_cta': 'Quero Fazer Meu Projeto!',
            'index_instagram_button_cta': 'Conheça Meu Trabalho no Instagram',
            'index_location_button_cta': 'Localização do Escritório',
            'instagram_profile': '@asielcastillo'
        },
        'en': {
            'index_page_title': 'Your Landing Page | Custom Web Solutions',
            'index_meta_description': 'Development of optimized Landing Pages for conversion and results. Modern design, impeccable functionality, and personalization.',
            'index_og_title': 'Professional Landing Page Creation - Achieve Your Online Goals',
            'index_og_description': 'Need a landing page that truly converts? We develop custom web solutions to highlight your business and generate results.',
            'index_og_locale': 'en_US',
            'index_client_name': 'Your Idea, Our Design.',
            'index_tagline': 'Professional Landing Pages that Convert. Fast, Effective, and Personalized.',
            'index_description_text': 'We transform your business vision into impactful digital experiences. Focusing on responsive design, usability, and search engine optimization, we create landing pages that generate real results and drive your online growth.',
            
            'differentiators_short_title': 'Why Choose Us?',
            'differentiator_speed': '<strong>Extreme Agility:</strong> Your project online in record time.',
            'differentiator_custom': '<strong>Total Customization:</strong> Your brand, your identity, no limits.',
            'differentiator_results': '<strong>Results-Oriented:</strong> Design to convert and boost your success.',

            // INÍCIO DAS MUDANÇAS PARA A OPÇÃO 2
            'solutions_main_title': 'Create Your Ideal Landing Page',
            'solutions_intro': 'This is an example of how we can build an exclusive and effective landing page, ready for your quick launch.',
            'solution1_title': 'Customize with Your Identity',
            'solution1_description': 'This is the place for your company\'s icons, colors, and fonts. A model that adapts 100% to your brand, ready to be filled with your style.',
            'solution2_title': 'Present Your Differential',
            'solution2_description': 'Use this model to highlight what makes your business unique. Customizable texts and images to tell your story and services effectively.',
            'solution3_title': 'Structure Your Information',
            'solution3_description': 'Organize your ideas into clear and objective sections. An intuitive layout that allows you to easily display your products, services, or portfolio.',
            'solution4_title': 'Engage and Win Clients',
            'solution4_description': 'Create a clear path for your visitors to act. Integrate contact forms, social media links, or purchase buttons to boost your sales.',
            // FIM DAS MUDANÇAS PARA A OPÇÃO 2

            'index_whatsapp_button_cta': 'I Want My Project Done!',
            'index_instagram_button_cta': 'See My Work on Instagram',
            'index_location_button_cta': 'Office Location',
            'instagram_profile': '@asielcastillo'
        },
        'es': {
            'index_page_title': 'Tu Landing Page | Soluciones Web Personalizadas',
            'index_meta_description': 'Desarrollo de Landing Pages optimizadas para la conversión y resultados. Diseño moderno, funcionalidad impecable y personalización.',
            'index_og_title': 'Creación de Landing Pages Profesionales - Alcanza Tus Objetivos Online',
            'index_og_description': '¿Necesitas una landing page que realmente convierta? Desarrollamos soluciones web personalizadas para destacar tu negocio y generar resultados.',
            'index_og_locale': 'es_ES',
            'index_client_name': 'Tu Idea, Nuestro Diseño.',
            'index_tagline': 'Landing Pages Profesionales que Convierten. Rápido, Eficaz y Personalizado.',
            'index_description_text': 'Transformamos la visión de tu negocio en experiencias digitales impactantes. Con enfoque en diseño responsivo, usabilidad y optimización para motores de búsqueda, creamos landing pages que generan resultados reales e impulsan tu crecimiento online.',
            
            'differentiators_short_title': '¿Por Qué Elegirnos?',
            'differentiator_speed': '<strong>Agilidad Extrema:</strong> Tu proyecto online en tiempo récord.',
            'differentiator_custom': '<strong>Personalización Total:</strong> Tu marca, tu identidad, sin límites.',
            'differentiator_results': '<strong>Enfoque en Resultados:</strong> Diseño para convertir e impulsar tu éxito.',

            // INÍCIO DAS MUDANÇAS PARA A OPÇÃO 2
            'solutions_main_title': 'Crea Tu Landing Page Ideal',
            'solutions_intro': 'Este es un ejemplo de cómo podemos construir una landing page exclusiva y efectiva, lista para tu lanzamiento rápido.',
            'solution1_title': 'Personaliza con Tu Identidad',
            'solution1_description': 'Este es el lugar para los iconos, colores y fuentes de tu empresa. Un modelo que se adapta al 100% a tu marca, listo para ser rellenado con tu estilo.',
            'solution2_title': 'Presenta Tu Diferencial',
            'solution2_description': 'Usa este modelo para destacar lo que hace que tu negocio sea único. Textos e imágenes personalizables para contar tu historia y servicios de forma efectiva.',
            'solution3_title': 'Estructura Tu Información',
            'solution3_description': 'Organiza tus ideas en secciones claras y objetivas. Un diseño intuitivo que te permite mostrar tus productos, servicios o portafolio con facilidad.',
            'solution4_title': 'Engancha y Conquista Clientes',
            'solution4_description': 'Crea un camino claro para que tus visitantes actúen. Integra formularios de contacto, enlaces a redes sociales o botones de compra para impulsar tus ventas.',
            // FIM DAS MUDANÇAS PARA A OPÇÃO 2

            'index_whatsapp_button_cta': '¡Quiero Hacer Mi Proyecto!',
            'index_instagram_button_cta': 'Mira Mi Trabajo en Instagram',
            'index_location_button_cta': 'Ubicación de la Oficina',
            'instagram_profile': '@asielcastillo'
        }
    };

    function setLanguage(lang) {
        document.documentElement.lang = lang; // Define o atributo lang do <html>
        localStorage.setItem('preferredLanguage', lang); // Salva a preferência
        
        const currentTranslations = translations[lang];

        if (!currentTranslations) {
            console.error(`No translations found for language: ${lang}`);
            return;
        }

        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            const translation = currentTranslations[key];

            if (translation !== undefined) { // Garante que há uma tradução para a chave
                if (element.tagName === 'TITLE') {
                    document.title = translation; // Atualiza o título da página
                } else if (element.tagName === 'META') {
                    // Atualiza o atributo 'content' para meta tags (description e og:*)
                    if (element.hasAttribute('name') || element.hasAttribute('property')) {
                        element.setAttribute('content', translation);
                    }
                } else if (element.classList.contains('action-button') && element.querySelector('span')) {
                    // Para botões de ação que possuem um <span> interno (apenas texto)
                    element.querySelector('span').textContent = translation;
                } else {
                    // Para todos os outros elementos que podem conter HTML (como <strong> ou <br>)
                    element.innerHTML = translation;
                }
            } else {
                console.warn(`Translation missing for key: "${key}" in language: "${lang}"`);
                // Se uma tradução estiver faltando, podemos definir o texto como vazio ou manter o original
                // Para não deixar a página em branco, podemos comentar a linha abaixo,
                // mas é melhor garantir que todas as chaves tenham traduções.
                // element.innerHTML = ''; 
            }
        });

        // Atualizar botões de idioma ativos
        document.querySelectorAll('.lang-button').forEach(button => {
            button.classList.remove('active');
            if (button.dataset.lang === lang) {
                button.classList.add('active');
            }
        });
    }

    // Adicionar event listeners aos botões de idioma
    document.querySelectorAll('.lang-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const lang = event.currentTarget.dataset.lang;
            setLanguage(lang);
        });
    });

    // Carregar o idioma preferido do usuário ou definir um padrão
    const savedLang = localStorage.getItem('preferredLanguage') || 'pt'; // 'pt' como padrão
    setLanguage(savedLang); // Aplicar o idioma ao carregar a página
});