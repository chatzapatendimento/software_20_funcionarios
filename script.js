// Dados das opiniões
const opinionsData = [
    {
        rating: 5,
        date: '25 fev. 2025',
        comment: 'A nossa experiência com a Araponto está sendo ótima, equipe muito prestativa, ótimo atendimento, sempre que tenho uma dúvida tenho retorno imediato. Produtos de qualidade e preço justo, o melhor da cidade, muito obrigada!',
        useful: 12,
        author: 'RH',
        company: 'SR Atacadista'
    },
    {
        rating: 5,
        date: '23 fev. 2025',
        comment: 'Experiência muito boa sempre muito bem atendida, solucionando sempre o que é pedido.',
        useful: 8,
        author: 'Valeria',
        company: 'Golden Transposrtes'
    },
    {
        rating: 4,
        date: '20 fev. 2025',
        comment: 'Quero agradecer pelo apoio do pessoal da empresa Araponto Relógios. Sempre que precisei dos serviços referente ao ponto eletrônico, a empresa sempre esteve a disposição para resolver o problema, atendimento nota 10. Agradeço o Edson pela paciência. A empresa Araponto Relógios eu indico.',
        useful: 5,
        author: 'André Cardoso',
        company: 'Agicargo'
    },
    {
        rating: 5,
        date: '18 fev. 2025',
        comment: 'Muito atenciosos, pacientes e oferecem um ótimo serviço, além de prestarem um ótimo suporte também. Super recomendo!',
        useful: 15,
        author: 'Brenda',
        company: 'RH Moura'
    },
    {
        rating: 5,
        date: '15 fev. 2025',
        comment: 'Atendimento excelente!! Sempre prontos a nos atender, de maneira ágil e proativa.',
        useful: 7,
        author: 'Renata Santos',
        company: 'Novas Midias Digitais'
    },
    {
        rating: 4,
        date: '12 fev. 2025',
        comment: 'Nossa experiência com a Araponto está sendo muito boa, equipe muito prestativa, ótimo atendimento, serviço de boa qualidade, sempre que preciso tenho retorno muito rápido, equipamentos são de ótima qualidade e os preços são bem justos. Estamos muito satisfeitos!',
        useful: 4,
        author: 'Flavia Alves',
        company: 'Holtel Golden Tower'
    },
    {
        rating: 5,
        date: '10 fev. 2025',
        comment: 'Empresa responsável, produto de qualidade e ótimos profissionais que estão sempre acompanhado e nos orientando. Recomendo!!!!',
        useful: 9,
        author: 'Rafaela Barcelloss Leit',
        company: 'Kambe Embalagens'
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
        comment: 'Ótima empresa, ótimo atendimento e principalmente um ótimo suporte para duvidas e esclarecimentos.',
        useful: 13,
        author: 'Aron Oliveira',
        company: 'Tambores e Sucatas'
    },
    {
        rating: 5,
        date: '01 fev. 2025',
        comment: 'Sempre atenciosos, de prontidão para poder auxiliar nas dúvidas e demais situações.',
        useful: 8,
        author: 'Isabela Bazona',
        company: 'Transribeiro'
    },
    {
        rating: 4,
        date: '29 jan. 2025',
        comment: 'Empresa com atendimento sensacional...',
        useful: 7,
        author: 'Comercial Eletro Félix',
        company: 'Eletro Félixl'
    },
    {
        rating: 5,
        date: '27 jan. 2025',
        comment: 'Ótima empresa, ofereceu todo o suporte pra nós do Ja1000!!! Recomendo',
        useful: 10,
        author: 'Nando Souzza',
        company: 'Já1000'
    },
    {
        rating: 5,
        date: '25 jan. 2025',
        comment: 'Ótima empresa, nos proporciona um ótimo atendimento e o sistema de ponto RHiD é execelente!!! Super recomendo!!!',
        useful: 9,
        author: 'Mariana Rodrigues',
        company: 'Pães Rodrigues Rodrigues'
    },
    {
        rating: 4,
        date: '23 jan. 2025',
        comment: 'Empresa muito responsável, produto de qualidade e profissional que está sempre disposto a acompanhar e orientar.... Recomendo!!!!',
        useful: 5,
        author: 'Pedro Texeira',
        company: 'Rodonaves'
    },
    {
        rating: 5,
        date: '20 jan. 2025',
        comment: 'Atendimento impecável, cheguei cotar valores em outros lugares, mas fui tão bem atendida, e isso foi o que me fez optar pela Araponto',
        useful: 12,
        author: 'Beatriz Cotrin',
        company: 'AG2 Engeharia'
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
        author: 'Regina',
        company: 'Iza\'s Variedades'
    },
    {
        rating: 5,
        date: '13 jan. 2025',
        comment: 'Uma das melhores empresas que atua com Relógios de Ponto. Atendimento rápido e com qualidade. Valorizam seu cliente e estão sempre dispostos a sanar quaisquer dúvidas. A entrega é rápida e o preço é justo... recomendo!',
        useful: 11,
        author: 'Carina Pires',
        company: 'Pão da Terra'
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

// Função para renderizar opiniões
function renderOpinions() {
    const container = document.querySelector('.review-container');
    if (!container) {
        console.error('Container de reviews não encontrado');
        return;
    }

    const filtered = filterOpinions();
    const displayOpinions = showingAll ? filtered : filtered.slice(0, OPINIONS_PER_PAGE);

    // Atualiza o total de comentários
    const totalCommentsElement = document.querySelector('.total-comments');
    if (totalCommentsElement) {
        totalCommentsElement.textContent = `${filtered.length} comentários`;
    }

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
                    Útil (${opinion.useful})
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
    const bigRatingElement = document.querySelector('.big-rating');
    const totalReviewsElement = document.querySelector('.total-reviews');
    const starsDistributionElement = document.querySelector('.stars-distribution');

    if (bigRatingElement) {
        bigRatingElement.textContent = calculateAverageRating();
    }
    if (totalReviewsElement) {
        totalReviewsElement.textContent = `${opinionsData.length} avaliações`;
    }
    
    // Atualiza a distribuição de estrelas
    if (starsDistributionElement) {
        const distribution = getStarDistribution();
        const starsDistributionHtml = Object.entries(distribution)
            .sort(([a], [b]) => b - a) // Ordena de 5 para 1 estrela
            .map(([stars, count]) => `<div>${stars} ★ (${count})</div>`)
            .join('');
        starsDistributionElement.innerHTML = starsDistributionHtml;
    }
}

// Função para filtrar opiniões
function filterOpinions() {
    let filtered = [...opinionsData];

    // Filtro por estrelas
    if (currentStarFilter > 0) {
        filtered = filtered.filter(opinion => opinion.rating === currentStarFilter);
    }

    // Ordenação
    switch (currentSort) {
        case 'recent':
            // Já está ordenado por data (mais recente primeiro)
            break;
        case 'highest':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        case 'lowest':
            filtered.sort((a, b) => a.rating - b.rating);
            break;
        case 'useful':
            filtered.sort((a, b) => b.useful - a.useful);
            break;
    }

    return filtered;
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
    button.textContent = `Útil (${currentCount + 1})`;
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
