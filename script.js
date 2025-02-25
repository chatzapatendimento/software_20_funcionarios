// Dados das opiniões
const opinions = [
    {
        rating: 5,
        date: '25 fev. 2025',
        comment: 'Excelente software! A implementação foi muito rápida e o suporte técnico foi excepcional durante todo o processo. Nossa equipe se adaptou rapidamente ao sistema.',
        useful: 12,
        author: 'Maria Silva',
        company: 'Tech Solutions Ltda'
    },
    {
        rating: 5,
        date: '23 fev. 2025',
        comment: 'O que mais me impressionou foi a rapidez do suporte. Sempre que precisamos de ajuda, eles respondem em minutos. O sistema é muito intuitivo e fácil de usar.',
        useful: 8,
        author: 'João Santos',
        company: 'Construções Santos'
    },
    {
        rating: 4,
        date: '20 fev. 2025',
        comment: 'Ótimo custo-benefício! O sistema atende todas as nossas necessidades e o suporte é sempre muito atencioso. Recomendo fortemente.',
        useful: 5,
        author: 'Ana Oliveira',
        company: 'Mercado Central'
    },
    {
        rating: 5,
        date: '18 fev. 2025',
        comment: 'Implementamos o RHiD há 6 meses e foi a melhor decisão que tomamos. O controle de ponto ficou muito mais eficiente e preciso.',
        useful: 15,
        author: 'Carlos Eduardo',
        company: 'Logística Express'
    },
    {
        rating: 5,
        date: '15 fev. 2025',
        comment: 'A integração com nosso sistema de folha de pagamento foi perfeita! O suporte nos auxiliou em todo o processo. Muito satisfeito!',
        useful: 7,
        author: 'Patricia Mendes',
        company: 'Indústrias Mendes'
    },
    {
        rating: 4,
        date: '12 fev. 2025',
        comment: 'Sistema muito completo e estável. Raramente temos problemas, e quando acontece algo, o suporte resolve rapidamente.',
        useful: 4,
        author: 'Roberto Almeida',
        company: 'Supermercados Almeida'
    },
    {
        rating: 5,
        date: '10 fev. 2025',
        comment: 'O aplicativo mobile é sensacional! Nossos funcionários externos conseguem bater ponto sem nenhuma dificuldade.',
        useful: 9,
        author: 'Fernanda Costa',
        company: 'Vendas Externas SA'
    },
    {
        rating: 5,
        date: '08 fev. 2025',
        comment: 'Excelente ferramenta para gestão de ponto. Os relatórios são muito completos e nos ajudam muito na tomada de decisão.',
        useful: 11,
        author: 'Lucas Martins',
        company: 'Martins & Associados'
    },
    {
        rating: 4,
        date: '05 fev. 2025',
        comment: 'O suporte é muito profissional e sempre nos atende com muita paciência. O sistema é muito bom e atende nossas necessidades.',
        useful: 6,
        author: 'Amanda Reis',
        company: 'Clínica Saúde Total'
    },
    {
        rating: 5,
        date: '03 fev. 2025',
        comment: 'Melhor sistema de ponto que já utilizamos! Interface moderna e intuitiva. O suporte é sempre muito ágil.',
        useful: 13,
        author: 'Ricardo Santos',
        company: 'Transportadora Santos'
    },
    {
        rating: 5,
        date: '01 fev. 2025',
        comment: 'A customização do sistema para nossa realidade foi perfeita. O time de suporte entendeu exatamente o que precisávamos.',
        useful: 8,
        author: 'Mariana Lima',
        company: 'Fábrica Lima'
    },
    {
        rating: 4,
        date: '29 jan. 2025',
        comment: 'Sistema muito confiável e seguro. O suporte técnico é excelente e sempre muito prestativo.',
        useful: 7,
        author: 'Paulo Soares',
        company: 'Atacado Mundial'
    },
    {
        rating: 5,
        date: '27 jan. 2025',
        comment: 'Impressionante a facilidade de uso! Nossa equipe se adaptou muito rápido ao sistema. O suporte é nota 10!',
        useful: 10,
        author: 'Camila Ferreira',
        company: 'Lojas Ferreira'
    },
    {
        rating: 5,
        date: '25 jan. 2025',
        comment: 'O dashboard é muito completo e nos ajuda muito na gestão. O suporte sempre nos auxilia com as dúvidas.',
        useful: 9,
        author: 'Diego Oliveira',
        company: 'Oliveira Comércio'
    },
    {
        rating: 4,
        date: '23 jan. 2025',
        comment: 'Muito satisfeito com o sistema. A equipe de suporte é muito competente e sempre nos atende bem.',
        useful: 5,
        author: 'Julia Castro',
        company: 'Restaurante Sabor'
    },
    {
        rating: 5,
        date: '20 jan. 2025',
        comment: 'Excelente relação custo-benefício! O sistema é muito completo e o suporte é sempre muito atencioso.',
        useful: 12,
        author: 'Fernando Silva',
        company: 'Distribuidora Silva'
    },
    {
        rating: 5,
        date: '18 jan. 2025',
        comment: 'A implantação foi muito tranquila e o suporte nos ajudou em todo o processo. Muito satisfeito com o resultado.',
        useful: 8,
        author: 'Beatriz Santos',
        company: 'Academia Vida'
    },
    {
        rating: 4,
        date: '15 jan. 2025',
        comment: 'O sistema é muito estável e raramente apresenta problemas. Quando precisamos, o suporte é sempre muito eficiente.',
        useful: 6,
        author: 'Gustavo Pereira',
        company: 'Auto Peças GP'
    },
    {
        rating: 5,
        date: '13 jan. 2025',
        comment: 'Melhor decisão que tomamos foi migrar para o RHiD. O suporte é excepcional e o sistema é muito completo.',
        useful: 11,
        author: 'Renata Souza',
        company: 'Escola Futuro'
    },
    {
        rating: 5,
        date: '10 jan. 2025',
        comment: 'Sistema muito intuitivo e fácil de usar. O suporte técnico é excelente e sempre muito prestativo.',
        useful: 7,
        author: 'Marcelo Lima',
        company: 'Consultoria ML'
    }
];

// Estado global para filtros e paginação
let currentSort = 'recent';
let currentStarFilter = 0;
let showAllOpinions = false;
const OPINIONS_PER_PAGE = 6;

// Função para gerar estrelas HTML
function generateStars(rating) {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

// Função para calcular média das avaliações
function calculateAverageRating() {
    const sum = opinions.reduce((acc, opinion) => acc + opinion.rating, 0);
    return (sum / opinions.length).toFixed(1);
}

// Função para contar distribuição de estrelas
function getStarDistribution() {
    const distribution = {5: 0, 4: 0, 3: 0, 2: 0, 1: 0};
    opinions.forEach(opinion => {
        distribution[opinion.rating]++;
    });
    return distribution;
}

// Função para filtrar opiniões
function filterOpinions() {
    let filteredOpinions = [...opinions];
    
    // Aplicar filtro de estrelas
    if (currentStarFilter > 0) {
        filteredOpinions = filteredOpinions.filter(opinion => opinion.rating === currentStarFilter);
    }

    // Aplicar ordenação
    switch(currentSort) {
        case 'recent':
            filteredOpinions.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'highest':
            filteredOpinions.sort((a, b) => b.rating - a.rating);
            break;
        case 'lowest':
            filteredOpinions.sort((a, b) => a.rating - b.rating);
            break;
        case 'useful':
            filteredOpinions.sort((a, b) => b.useful - a.useful);
            break;
    }

    return filteredOpinions;
}

// Função para renderizar opiniões
function renderOpinions() {
    const filteredOpinions = filterOpinions();
    const opinionsContainer = document.querySelector('.opinions-container');
    
    let opinionsToShow = showAllOpinions ? filteredOpinions : filteredOpinions.slice(0, OPINIONS_PER_PAGE);
    
    opinionsContainer.innerHTML = opinionsToShow.map(opinion => `
        <div class="opinion">
            <div class="opinion-header">
                <div class="stars">${generateStars(opinion.rating)}</div>
                <div class="date">${opinion.date}</div>
            </div>
            <p class="comment">${opinion.comment}</p>
            <div class="opinion-footer">
                <div class="author">
                    <strong>${opinion.author}</strong>
                    <span>${opinion.company}</span>
                </div>
                <button class="useful-button" onclick="incrementUseful(this)" data-count="${opinion.useful}">
                    É útil <span>${opinion.useful}</span>
                </button>
            </div>
        </div>
    `).join('');

    // Atualizar contadores
    document.querySelector('.total-opinions').textContent = `${filteredOpinions.length} avaliações`;
    document.querySelector('.average-rating').textContent = calculateAverageRating();
    
    // Atualizar distribuição de estrelas
    const distribution = getStarDistribution();
    Object.entries(distribution).reverse().forEach(([rating, count]) => {
        const element = document.querySelector(`.star-${rating}`);
        if (element) {
            element.textContent = `${rating}★ (${count})`;
        }
    });
}

// Função para alternar entre mostrar todas as opiniões ou apenas as primeiras
function toggleShowAll() {
    showAllOpinions = !showAllOpinions;
    renderOpinions();
}

// Função para incrementar contagem de "útil"
function incrementUseful(button) {
    const count = parseInt(button.dataset.count) + 1;
    button.dataset.count = count;
    button.querySelector('span').textContent = count;
}

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

    // Inicialização das opiniões
    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentSort = button.dataset.sort;
            renderOpinions();
        });
    });

    document.querySelectorAll('.star-button').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.star-button').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentStarFilter = parseInt(button.dataset.stars);
            renderOpinions();
        });
    });

    // Renderizar opiniões iniciais
    renderOpinions();
});
