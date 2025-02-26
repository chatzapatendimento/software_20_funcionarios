// Dados das opiniões
const opinionsData = [
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
        comment: 'Sistema muito confiável e seguro. O suporte técnico é excelente e sempre nos ajuda quando precisamos.',
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
let showingAll = false;
const OPINIONS_PER_PAGE = 6;

// Função para gerar estrelas HTML
function generateStars(rating) {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

// Função para calcular média das avaliações
function calculateAverageRating() {
    const total = opinionsData.reduce((acc, curr) => acc + curr.rating, 0);
    return (total / opinionsData.length).toFixed(1);
}

// Função para contar distribuição de estrelas
function getStarDistribution() {
    // Inicializa com 0 para todas as estrelas
    const distribution = {5: 0, 4: 0, 3: 0, 2: 0, 1: 0};
    
    // Conta as avaliações
    opinionsData.forEach(opinion => {
        distribution[opinion.rating]++;
    });
    
    return distribution;
}

// Função para filtrar opiniões
function filterOpinions() {
    let filtered = [...opinionsData];

    if (currentStarFilter > 0) {
        filtered = filtered.filter(opinion => opinion.rating === currentStarFilter);
    }

    switch (currentSort) {
        case 'recent':
            filtered.sort((a, b) => new Date(b.date.split('.').reverse().join('-')) - new Date(a.date.split('.').reverse().join('-')));
            break;
        case 'highest':
            filtered.sort((a, b) => b.rating - a.rating || b.useful - a.useful);
            break;
        case 'lowest':
            filtered.sort((a, b) => a.rating - b.rating || b.useful - a.useful);
            break;
        case 'useful':
            filtered.sort((a, b) => b.useful - a.useful);
            break;
    }

    return filtered;
}

// Função para renderizar opiniões
function renderOpinions() {
    const container = document.querySelector('.review-container');
    const filtered = filterOpinions();
    const displayOpinions = showingAll ? filtered : filtered.slice(0, OPINIONS_PER_PAGE);

    // Atualiza o total de comentários
    document.querySelector('.total-comments').textContent = `${filtered.length} comentários`;

    container.innerHTML = displayOpinions.map(opinion => `
        <div class="review">
            <div class="review-header">
                <div class="stars">${generateStars(opinion.rating)}</div>
                <div class="review-date">${opinion.date}</div>
            </div>
            <p class="review-text">${opinion.comment}</p>
            <div class="review-footer">
                <div class="review-author">
                    <strong>${opinion.author}</strong>
                    <span>${opinion.company}</span>
                </div>
                <button class="useful-button" onclick="incrementUseful(this)" data-useful="${opinion.useful}">
                    👍 Útil (${opinion.useful})
                </button>
            </div>
        </div>
    `).join('');

    if (!showingAll && filtered.length > OPINIONS_PER_PAGE) {
        container.innerHTML += `
            <button class="show-more-button" onclick="toggleShowAll()">
                Ver mais opiniões (${filtered.length - OPINIONS_PER_PAGE} restantes)
            </button>
        `;
    }

    // Atualiza a média e distribuição de estrelas
    document.querySelector('.big-rating').textContent = calculateAverageRating();
    document.querySelector('.total-reviews').textContent = `${opinionsData.length} avaliações`;
    
    // Atualiza a distribuição de estrelas
    const distribution = getStarDistribution();
    const starsDistributionHtml = Object.entries(distribution)
        .sort(([a], [b]) => b - a) // Ordena de 5 para 1 estrela
        .map(([stars, count]) => `<div>${stars} ★ (${count})</div>`)
        .join('');
    document.querySelector('.stars-distribution').innerHTML = starsDistributionHtml;
}

// Função para alternar entre mostrar todas as opiniões ou apenas as primeiras
function toggleShowAll() {
    showingAll = !showingAll;
    renderOpinions();
}

// Função para incrementar contagem de "útil"
function incrementUseful(button) {
    const currentCount = parseInt(button.dataset.useful);
    button.dataset.useful = currentCount + 1;
    button.textContent = `👍 Útil (${currentCount + 1})`;
}

document.addEventListener('DOMContentLoaded', function() {
    // Navegação entre seções
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(sec => sec.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(button.dataset.section).classList.add('active');
        });
    });

    // Toggle de plano mensal/anual
    const planoToggle = document.getElementById('plano-toggle');
    const planoMensal = document.querySelector('.plano-mensal');
    const planoAnual = document.querySelector('.plano-anual');
    const valorMensal = document.querySelector('.valor-mensal');
    const valorAnual = document.querySelector('.valor-anual');
    const periodoAnual = document.querySelector('.plano-anual .periodo');
    const economiaAnual = document.querySelector('.plano-anual .economia');

    planoToggle.addEventListener('change', () => {
        if (planoToggle.checked) {
            planoMensal.style.display = 'none';
            planoAnual.style.display = 'block';
            valorAnual.textContent = 'R$ 950,40';
            periodoAnual.textContent = '/ano';
            economiaAnual.textContent = '(Economize 10% - apenas R$ 79,20/mês)';
        } else {
            planoMensal.style.display = 'block';
            planoAnual.style.display = 'none';
            valorMensal.textContent = 'R$ 88,00';
        }
    });

    // Inicialização das opiniões
    const filterButtons = document.querySelectorAll('.filter-button');
    const starButtons = document.querySelectorAll('.star-button');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentSort = button.dataset.sort;
            showingAll = false;
            renderOpinions();
        });
    });

    starButtons.forEach(button => {
        button.addEventListener('click', () => {
            starButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentStarFilter = parseInt(button.dataset.stars);
            showingAll = false;
            renderOpinions();
        });
    });

    // Inicialização do Swiper para os recursos
    const recursosSwiper = new Swiper('.recursos-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.recursos-nav-next',
            prevEl: '.recursos-nav-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });

    // Inicialização do Swiper para os diferenciais
    const diferenciaisSwiper = new Swiper('.diferenciais-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.diferenciais-nav-next',
            prevEl: '.diferenciais-nav-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });

    renderOpinions();
});
