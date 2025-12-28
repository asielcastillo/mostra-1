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

    // --- Lógica de Transição de Imagem de Perfil Automática (APENAS SE EXISTIR NA PÁGINA) ---
    const profileDefault = document.querySelector('.profile-image-wrapper .profile-default');
    const profileHover = document.querySelector('.profile-image-wrapper .profile-hover'); 
    const profileTransitionInterval = 15000; // Intervalo para a troca da imagem de perfil (15 segundos - MAIS ESPAÇADO)

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

    // --- NOVO: Lógica de Multi-idiomas ---

    // Objeto de traduções. As chaves devem AGORA corresponder EXATAMENTE aos data-key nos HTMLs.
    const translations = {
        'index': {
            'pt': {
                'index_page_title': 'Sua Nova Landing Page | Serviços de Criação Web Personalizada',
                'index_meta_description': 'Desenvolvimento de Landing Pages otimizadas para conversão. Transforme suas ideias em resultados com design moderno e funcionalidade impecável.',
                'index_og_title': 'Criação de Landing Pages Profissionais - Alcance Seus Objetivos Online',
                'index_og_description': 'Precisa de uma landing page que realmente converta? Desenvolvemos soluções web personalizadas para destacar seu negócio.',
                'index_og_locale': 'pt_BR',
                'index_client_name': 'Sua Ideia, Nosso Design.',
                'index_tagline': 'Landing Pages Profissionais que Convertem. Rápido, Eficaz e Personalizado.',
                'index_description_text': 'Transformamos a visão do seu negócio em experiências digitais impactantes. Com foco em design responsivo, usabilidade e otimização para motores de busca, criamos landing pages que geram resultados reais e impulsionam seu crescimento online.',
                'index_whatsapp_button': 'Fale Conosco para um Orçamento',
                'index_instagram_button': 'Veja Nossos Projetos no Instagram',
                'index_location_button': 'Encontre-nos no Mapa',
                'index_solutions_button': 'Conheça Nossas Soluções',
                'instagram_profile': '@asielcastillo'
            },
            'en': {
                'index_page_title': 'Your New Landing Page | Custom Web Creation Services',
                'index_meta_description': 'Development of optimized Landing Pages for conversion. Turn your ideas into results with modern design and impeccable functionality.',
                'index_og_title': 'Professional Landing Page Creation - Achieve Your Online Goals',
                'index_og_description': 'Need a landing page that truly converts? We develop custom web solutions to highlight your business.',
                'index_og_locale': 'en_US',
                'index_client_name': 'Your Idea, Our Design.',
                'index_tagline': 'Professional Landing Pages that Convert. Fast, Effective and Personalized.',
                'index_description_text': 'We transform your business vision into impactful digital experiences. Focusing on responsive design, usability, and search engine optimization, we create landing pages that generate real results and drive your online growth.',
                'index_whatsapp_button': 'Talk to Us for a Quote',
                'index_instagram_button': 'See Our Projects on Instagram',
                'index_location_button': 'Find Us on the Map',
                'index_solutions_button': 'Discover Our Solutions',
                'instagram_profile': '@asielcastillo'
            },
            'es': {
                'index_page_title': 'Tu Nueva Landing Page | Servicios de Creación Web Personalizada',
                'index_meta_description': 'Desarrollo de Landing Pages optimizadas para la conversión. Transforma tus ideas en resultados con un diseño moderno y funcionalidad impecable.',
                'index_og_title': 'Creación de Landing Pages Profesionales - Alcanza Tus Metas Online',
                'index_og_description': '¿Necesitas una landing page que realmente convierta? Desarrollamos soluciones web personalizadas para destacar tu negocio.',
                'index_og_locale': 'es_ES',
                'index_client_name': 'Tu Idea, Nuestro Diseño.',
                'index_tagline': 'Landing Pages Profesionales que Convierten. Rápido, Efectivo y Personalizado.',
                'index_description_text': 'Transformamos la visión de tu negocio en experiencias digitales impactantes. Con enfoque en diseño responsivo, usabilidad y optimización para motores de búsqueda, creamos landing pages que generan resultados reales e impulsan tu crecimiento online.',
                'index_whatsapp_button': 'Contáctanos para un Presupuesto',
                'index_instagram_button': 'Mira Nuestros Proyectos en Instagram',
                'index_location_button': 'Encuéntranos en el Mapa',
                'index_solutions_button': 'Conoce Nuestras Soluciones',
                'instagram_profile': '@asielcastillo'
            }
        },
        'services': {
            'pt': {
                'services_page_title': 'Nossos Serviços | Criação de Landing Pages',
                'services_meta_description': 'Conheça nossos serviços de criação de landing pages personalizadas, consultoria estratégica e otimização web.',
                'services_client_name': 'Nossas Soluções Digitais',
                'services_tagline': 'Elevando sua presença online a um novo nível.',
                'service1_title': 'Consultoria Estratégica Personalizada',
                'service1_description': 'Analisamos suas necessidades e objetivos para desenvolver um plano de ação exclusivo. Nossa abordagem estratégica garante soluções inovadoras e direcionadas ao crescimento, maximizando seu potencial e otimizando seus recursos.',
                'service2_title': 'Desenvolvimento e Implementação de Projetos',
                'service2_description': 'Transformamos suas ideias em realidade, desde o conceito inicial até a execução final. Cuidamos de cada detalhe com expertise e eficiência, garantindo que seu projeto seja entregue com qualidade, dentro do prazo e do orçamento.',
                'service3_title': 'Otimização e Melhoria Contínua',
                'service3_description': 'Não paramos na entrega! Oferecemos acompanhamento e otimização contínua para garantir que seus resultados sejam sempre os melhores. Adaptamos e ajustamos estratégias para que seu negócio esteja sempre à frente.',
                'service4_title': 'Soluções Inovadoras e Tecnológicas',
                'service4_description': 'Impulsione seu negócio com as mais recentes tendências e tecnologias. Desenvolvemos ferramentas e soluções customizadas que integram inovação e funcionalidade para otimizar processos e engajar seu público.',
                'services_whatsapp_button_services': 'Quero Minha Landing Page!',
                'services_back_to_demo_button': 'Voltar para a Demonstração'
            },
            'en': {
                'services_page_title': 'Our Services | Landing Page Creation',
                'services_meta_description': 'Discover our custom landing page creation services, strategic consulting, and web optimization.',
                'services_client_name': 'Our Digital Solutions',
                'services_tagline': 'Elevating your online presence to a new level.',
                'service1_title': 'Custom Strategic Consulting',
                'service1_description': 'We analyze your needs and goals to develop an exclusive action plan. Our strategic approach guarantees innovative, growth-oriented solutions, maximizing your potential and optimizing your resources.',
                'service2_title': 'Project Development and Implementation',
                'service2_description': 'We transform your ideas into reality, from initial concept to final execution. We handle every detail with expertise and efficiency, ensuring your project is delivered with quality, on time, and within budget.',
                'service3_title': 'Continuous Optimization and Improvement',
                'service3_description': 'We don\'t stop at delivery! We offer continuous monitoring and optimization to ensure your results are always the best. We adapt and adjust strategies to keep your business ahead.',
                'service4_title': 'Innovative and Technological Solutions',
                'service4_description': 'Boost your business with the latest trends and technologies. We develop customized tools and solutions that integrate innovation and functionality to optimize processes and engage your audience.',
                'services_whatsapp_button_services': 'I Want My Landing Page!',
                'services_back_to_demo_button': 'Back to Demo'
            },
            'es': {
                'services_page_title': 'Nuestros Servicios | Creación de Landing Pages',
                'services_meta_description': 'Descubre nuestros servicios de creación de landing pages personalizadas, consultoría estratégica y optimización web.',
                'services_client_name': 'Nuestras Soluciones Digitales',
                'services_tagline': 'Elevando tu presencia online a un nuevo nivel.',
                'service1_title': 'Consultoría Estratégica Personalizada',
                'service1_description': 'Analizamos tus necesidades y objetivos para desarrollar un plan de acción exclusivo. Nuestro enfoque estratégico garantiza soluciones innovadoras y orientadas al crecimiento, maximizando tu potencial y optimizando tus recursos.',
                'service2_title': 'Desarrollo e Implementación de Proyectos',
                'service2_description': 'Transformamos tus ideas en realidad, desde el concepto inicial hasta la ejecución final. Cuidamos cada detalle con experiencia y eficiencia, garantizando que tu proyecto se entregue con calidad, a tiempo y dentro del presupuesto.',
                'service3_title': 'Optimización y Mejora Continua',
                'service3_description': '¡No nos detenemos en la entrega! Ofrecemos seguimiento y optimización continua para garantizar que tus resultados sean siempre los mejores. Adaptamos y ajustamos estrategias para que tu negocio siempre esté a la vanguardia.',
                'service4_title': 'Soluciones Innovadoras y Tecnológicas',
                'service4_description': 'Impulsa tu negocio con las últimas tendencias y tecnologías. Desarrollamos herramientas y soluciones personalizadas que integran innovación y funcionalidad para optimizar procesos y atraer a tu audiencia.',
                'services_whatsapp_button_services': '¡Quiero Mi Landing Page!',
                'services_back_to_demo_button': 'Volver a la Demostración'
            }
        }
    };

    function setLanguage(lang) {
        // Obter a página atual do data-attribute do botão clicado, ou do URL se nenhum botão for clicado (primeira carga)
        // Isso é crucial para que, ao carregar a página, saibamos qual conjunto de traduções usar.
        const path = window.location.pathname;
        let currentPageIdentifier;
        if (path.includes('servicos.html')) {
            currentPageIdentifier = 'services';
        } else {
            currentPageIdentifier = 'index'; // Padrão para index.html
        }

        const currentTranslations = translations[currentPageIdentifier][lang];

        if (!currentTranslations) {
            console.error(`No translations found for language: ${lang} on page: ${currentPageIdentifier}`);
            return;
        }

        document.documentElement.lang = lang;

        // Iterar sobre TODOS os elementos com data-key (seja no head ou no body)
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            const translation = currentTranslations[key];

            if (translation) {
                if (element.tagName === 'TITLE') {
                    document.title = translation;
                } else if (element.tagName === 'META') {
                    // Atualiza apenas as meta tags relevantes (description e og:*)
                    if (element.getAttribute('name') === 'description' || element.getAttribute('property')) {
                        element.setAttribute('content', translation);
                    }
                } else if (element.classList.contains('action-button') && element.querySelector('span')) {
                    // Para botões de ação que possuem um <span> interno
                    element.querySelector('span').textContent = translation;
                } else {
                    // Para todos os outros elementos de texto direto
                    element.textContent = translation;
                }
            }
        });

        // Atualizar botões de idioma ativos
        document.querySelectorAll('.lang-button').forEach(button => {
            button.classList.remove('active');
            if (button.dataset.lang === lang) {
                button.classList.add('active');
            }
        });

        // Salvar a preferência do idioma no localStorage
        localStorage.setItem('preferredLanguage', lang);
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