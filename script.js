// Lógica Navbar Trocando Background no Scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Toggle do Menu Mobile
const mobileBtn = document.getElementById('mobile-btn');
const navLinks = document.getElementById('nav-links');
const icon = mobileBtn.querySelector('i');

mobileBtn.addEventListener('click', () => {
    const isActive = navLinks.classList.toggle('active');
    
    // Troca de Ícone Hambúrguer <-> X
    if (isActive) {
        icon.classList.replace('fa-bars', 'fa-times');
        mobileBtn.setAttribute('aria-expanded', 'true');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
        mobileBtn.setAttribute('aria-expanded', 'false');
    }
});

// Fechar menu mobile ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        icon.classList.replace('fa-times', 'fa-bars');
        mobileBtn.setAttribute('aria-expanded', 'false');
    });
});

// Observer API para Animações de Entrada (Fade Up)
const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Para animar apenas 1 vez
    });
}, appearOptions);

document.querySelectorAll('.fade-up').forEach(element => {
    appearOnScroll.observe(element);
});

// O botão de currículo agora é uma tag 'a' nativa com atributo 'download',
// sem necessidade de simulação JS.

// Lógica de Filtro do Portfolio (Skills)
const filterButtons = document.querySelectorAll('.skill-item');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove a classe active de todos
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Adiciona a classe active no botão clicado
        button.classList.add('active');
        
        // Pega o valor do filtro (html, css, js, tc)
        const filterValue = button.getAttribute('data-filter');
        
        // Loop por todos os projetos do portfólio
        portfolioItems.forEach(item => {
            if (filterValue === 'all') {
                item.style.display = 'block';
                setTimeout(() => item.style.opacity = '1', 10);
                setTimeout(() => item.style.transform = 'scale(1)', 10);
            } else {
                // Checa se o projeto possui a categoria do filtro
                if (item.getAttribute('data-category').includes(filterValue)) {
                    item.style.display = 'block';
                    setTimeout(() => item.style.opacity = '1', 10);
                    setTimeout(() => item.style.transform = 'scale(1)', 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => item.style.display = 'none', 300); // Espera a transição do CSS (se houver) para apagar o display
                }
            }
        });
    });
});


