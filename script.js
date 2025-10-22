// Inicializa Lucide Icons
lucide.createIcons();

// Lógica para animação de revelação ao rolar
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // O elemento é considerado visível quando 10% dele está na tela
    });

    // Observa todos os elementos com a classe .reveal
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
});
