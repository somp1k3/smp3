const mockAnswer = `GPT|SOMP3 анализирует ваш вопрос и генерирует ответ на основе множества источников. Это демонстрация работы, вдохновленная Perplexity AI. В реальной системе здесь был бы развернутый ответ, полученный с помощью языковой модели и поиска в интернете.`;

const mockSources = [
    { title: "Официальная документация по ИИ", url: "#" },
    { title: "Исследование: будущее поисковых систем", url: "#" },
    { title: "Технический блог о GPT-архитектурах", url: "#" }
];

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const resultsSection = document.getElementById('results-section');
const answerText = document.getElementById('answer-text');
const sourcesList = document.getElementById('sources-list');
const newSearchBtn = document.getElementById('new-search-btn');

function showResults(question) {
    answerText.textContent = `По вашему запросу "${question}" найдено следующее:\n\n${mockAnswer}`;
    
    sourcesList.innerHTML = '';
    mockSources.forEach(source => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = source.url;
        a.textContent = source.title;
        a.target = '_blank';
        li.appendChild(a);
        sourcesList.appendChild(li);
    });
    
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function resetSearch() {
    searchInput.value = '';
    resultsSection.style.display = 'none';
    searchInput.focus();
}

searchBtn.addEventListener('click', () => {
    const question = searchInput.value.trim();
    if (question) {
        searchBtn.textContent = 'Поиск...';
        setTimeout(() => {
            showResults(question);
            searchBtn.textContent = 'Найти ответ';
        }, 800);
    } else {
        alert('Пожалуйста, введите ваш вопрос.');
    }
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

newSearchBtn.addEventListener('click', resetSearch);

document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', (e) => {
        e.preventDefault();
        const topic = e.target.textContent;
        searchInput.value = `Что такое ${topic}?`;
        searchBtn.click();
    });
});