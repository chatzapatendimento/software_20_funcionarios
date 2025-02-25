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
            filteredOpinions.sort((a, b) => new Date(b.date.split('.').reverse().join('-')) - new Date(a.date.split('.').reverse().join('-')));
            break;
        case 'highest':
            filteredOpinions.sort((a, b) => b.rating - a.rating || b.useful - a.useful);
            break;
        case 'lowest':
            filteredOpinions.sort((a, b) => a.rating - b.rating || b.useful - a.useful);
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
    const averageRating = calculateAverageRating();
    const starDistribution = getStarDistribution();

    // Atualiza média geral
    document.querySelector('.big-rating').textContent = averageRating;
    document.querySelector('.total-reviews').textContent = `${opinions.length} avaliações`;

    // Atualiza distribuição de estrelas
    const distributionHtml = Object.entries(starDistribution).reverse()
        .map(([stars, count]) => `<div>${stars} ★ (${count})</div>`).join('');
    document.querySelector('.stars-distribution').innerHTML = distributionHtml;

    // Atualiza total de comentários filtrados
    document.querySelector('.total-comments').textContent = `${filteredOpinions.length} comentários`;

    // Determina quantas opiniões mostrar
    const opinionsToShow = showAllOpinions ? filteredOpinions : filteredOpinions.slice(0, OPINIONS_PER_PAGE);

    // Renderiza opiniões
    const opinionsHtml = opinionsToShow.map(opinion => `
        <div class="review">
            <div class="review-header">
                <div>${generateStars(opinion.rating)}</div>
                <div>${opinion.date}</div>
            </div>
            <strong>${opinion.author}</strong> - <em>${opinion.company}</em>
            <p>${opinion.comment}</p>
            <button class="useful-button" onclick="incrementUseful(this)" data-useful="${opinion.useful}">
                É útil <span>${opinion.useful}</span>
            </button>
        </div>
    `).join('');

    // Adiciona o botão "Mostrar mais" se necessário
    const showMoreHtml = !showAllOpinions && filteredOpinions.length > OPINIONS_PER_PAGE
        ? `<div class="show-more-container">
            <button class="show-more-button" onclick="toggleShowAll()">
                Mostrar todas as opiniões (${filteredOpinions.length - OPINIONS_PER_PAGE} restantes)
            </button>
           </div>`
        : '';

    document.querySelector('.review-container').innerHTML = opinionsHtml + showMoreHtml;
}

// Função para alternar entre mostrar todas as opiniões ou apenas as primeiras
function toggleShowAll() {
    showAllOpinions = !showAllOpinions;
    renderOpinions();
}

// Função para incrementar contagem de "útil"
function incrementUseful(button) {
    const span = button.querySelector('span');
    let count = parseInt(span.textContent);
    span.textContent = count + 1;
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Adiciona listeners para os botões de ordenação
    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', (e) => {
            // Remove classe active de todos os botões
            document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
            // Adiciona classe active ao botão clicado
            e.target.classList.add('active');
            
            currentSort = e.target.dataset.sort;
            showAllOpinions = false; // Reset para mostrar apenas as primeiras opiniões
            renderOpinions();
        });
    });

    // Adiciona listeners para os botões de filtro por estrelas
    document.querySelectorAll('.star-button').forEach(button => {
        button.addEventListener('click', (e) => {
            // Remove classe active de todos os botões
            document.querySelectorAll('.star-button').forEach(btn => btn.classList.remove('active'));
            // Adiciona classe active ao botão clicado
            e.target.classList.add('active');
            
            currentStarFilter = parseInt(e.target.dataset.stars);
            showAllOpinions = false; // Reset para mostrar apenas as primeiras opiniões
            renderOpinions();
        });
    });

    // Renderiza opiniões iniciais
    renderOpinions();
});
