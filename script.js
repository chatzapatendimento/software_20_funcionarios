document.addEventListener('DOMContentLoaded', () => {
    // Navegação entre seções
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and sections
            navButtons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(sec => sec.classList.remove('active'));

            // Add active class to clicked button and corresponding section
            button.classList.add('active');
            document.getElementById(button.dataset.section).classList.add('active');
        });
    });

    // Inicializar Swiper
    const produtoSwiper = new Swiper('.produto-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    const planosSwiper = new Swiper('.planos-swiper', {
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    const diferenciaisSwiper = new Swiper('.diferenciais-swiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });

    const depoimentosSwiper = new Swiper('.depoimentos-swiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });

    // Toggle de plano mensal/anual
    const planoToggle = document.getElementById('plano-toggle');
    const planoMensal = document.querySelector('.plano-mensal');
    const planoAnual = document.querySelector('.plano-anual');

    planoToggle.addEventListener('change', () => {
        if (planoToggle.checked) {
            planoMensal.style.display = 'none';
            planoAnual.style.display = 'block';
        } else {
            planoMensal.style.display = 'block';
            planoAnual.style.display = 'none';
        }
    });

    // Botões de CTA
    const ctaButtons = document.querySelectorAll('.cta-button, .cta-button-software');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            const nome = prompt('Digite seu nome completo:');
            const email = prompt('Digite seu email corporativo:');
            const telefone = prompt('Digite seu telefone (com DDD):');
            
            if (nome && email && telefone) {
                const mensagem = button.classList.contains('cta-button') 
                    ? `Obrigado, ${nome}! Entraremos em contato sobre o Coletor de Ponto IDFace no email ${email}.`
                    : `Obrigado, ${nome}! Você receberá um email em ${email} com as instruções para testar gratuitamente o RHiD.`;
                
                alert(mensagem);
            } else {
                alert('Por favor, preencha todos os campos para prosseguir.');
            }
        });
    });

    // Botão de CTA do Vídeo
    const ctaVideoButton = document.querySelector('.cta-button-video');
    
    ctaVideoButton.addEventListener('click', () => {
        const nome = prompt('Quer saber mais? Digite seu nome completo:');
        const email = prompt('Digite seu email corporativo:');
        const telefone = prompt('Digite seu telefone (com DDD):');
        
        if (nome && email && telefone) {
            const mensagem = `Obrigado, ${nome}! Vamos enviar mais detalhes sobre o RHiD no email ${email}. Nossa equipe entrará em contato em breve.`;
            alert(mensagem);
        } else {
            alert('Por favor, preencha todos os campos para prosseguir.');
        }
    });

    // Lógica do popup de manutenção
    const botaoEnviarMensagem = document.getElementById('enviar-mensagem');
    const popupManutencao = document.getElementById('popup-manutencao');
    const botaoFecharPopup = document.querySelector('.btn-fechar-popup');

    botaoEnviarMensagem.addEventListener('click', () => {
        popupManutencao.style.display = 'flex';
    });

    botaoFecharPopup.addEventListener('click', () => {
        popupManutencao.style.display = 'none';
    });

    // Fechar popup ao clicar fora
    popupManutencao.addEventListener('click', (event) => {
        if (event.target === popupManutencao) {
            popupManutencao.style.display = 'none';
        }
    });
});
