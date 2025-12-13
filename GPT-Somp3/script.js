// Основной JavaScript для GPT|SOMP3

document.addEventListener('DOMContentLoaded', function() {
    // Элементы
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const resultsSection = document.getElementById('results-section');
    const answerText = document.getElementById('answer-text');
    const sourcesList = document.getElementById('sources-list');
    const newSearchBtn = document.getElementById('new-search-btn');
    const relatedQuestions = document.getElementById('related-questions');
    const copyBtn = document.getElementById('copy-answer');
    const refineBtn = document.getElementById('refine-search');
    const exportBtn = document.getElementById('export-btn');
    const expandBtn = document.getElementById('expand-answer');
    const saveBtn = document.getElementById('save-answer');
    const shareBtn = document.getElementById('share-answer');
    const sourcesCount = document.getElementById('sources-count');
    
    // Переменные состояния
    let currentSearchType = 'ai';
    let currentQuery = '';
    let currentResponse = null;
    
    // Инициализация
    init();
    
    function init() {
        setupEventListeners();
        setupTypingEffect();
        checkURLParams();
    }
    
    function setupEventListeners() {
        // Поиск
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') performSearch();
        });
        
        // Тип поиска
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentSearchType = this.dataset.type;
            });
        });
        
        // Быстрые темы
        document.querySelectorAll('.tag').forEach(tag => {
            tag.addEventListener('click', function(e) {
                e.preventDefault();
                const topic = this.dataset.topic;
                const queries = {
                    'ai': 'Что нового в искусственном интеллекте в 2024 году?',
                    'space': 'Какие космические миссии запланированы на 2024 год?',
                    'programming': 'Какие технологии веб-разработки самые популярные в 2024?',
                    'science': 'Какие научные открытия были сделаны в 2023-2024 годах?',
                    'crypto': 'Что происходит с криптовалютами в 2024 году?',
                    'health': 'Как искусственный интеллект применяется в медицине в 2024?'
                };
                
                searchInput.value = queries[topic] || queries['ai'];
                performSearch();
            });
        });
        
        // Действия с ответом
        newSearchBtn.addEventListener('click', resetSearch);
        copyBtn.addEventListener('click', copyAnswer);
        refineBtn.addEventListener('click', showRefineModal);
        exportBtn.addEventListener('click', exportAnswer);
        expandBtn.addEventListener('click', toggleExpand);
        saveBtn.addEventListener('click', saveAnswer);
        shareBtn.addEventListener('click', shareAnswer);
        
        // Обратная связь
        document.querySelectorAll('.feedback-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const isGood = this.classList.contains('good');
                showFeedbackMessage(isGood ? 'Спасибо за положительный отзыв!' : 'Спасибо! Учтем ваше мнение.');
            });
        });
        
        // Модальное окно
        document.getElementById('refine-cancel').addEventListener('click', hideRefineModal);
        document.getElementById('refine-submit').addEventListener('click', submitRefinedQuery);
        
        // Переключение темы
        document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    }
    
    async function performSearch() {
        const query = searchInput.value.trim();
        
        if (!query) {
            showNotification('Пожалуйста, введите вопрос', 'warning');
            searchInput.focus();
            return;
        }
        
        currentQuery = query;
        
        // Показываем загрузку
        showLoading(true);
        
        try {
            let response;
            
            switch(currentSearchType) {
                case 'ai':
                    response = await AIEngine.processQuery(query);
                    break;
                case 'web':
                    response = await AIEngine.webSearch(query);
                    break;
                case 'academic':
                    response = await AIEngine.academicSearch(query);
                    break;
                default:
                    response = await AIEngine.processQuery(query);
            }
            
            currentResponse = response;
            displayResults(response);
            
        } catch (error) {
            console.error('Search error:', error);
            showNotification('Ошибка при поиске. Попробуйте еще раз.', 'error');
            displayFallbackResults(query);
        } finally {
            showLoading(false);
        }
    }
    
    function displayResults(response) {
        // Обновляем текст ответа
        answerText.innerHTML = response.answer;
        
        // Обновляем источники
        sourcesList.innerHTML = '';
        response.sources.forEach((source, index) => {
            const sourceElement = document.createElement('div');
            sourceElement.className = 'source-card';
            sourceElement.innerHTML = `
                <div class="source-number">${index + 1}</div>
                <div class="source-content">
                    <a href="${source.url}" target="_blank" class="source-title">${source.title}</a>
                    ${source.date ? `<div class="source-date"><i class="far fa-calendar"></i> ${source.date}</div>` : ''}
                    ${source.citations ? `<div class="source-citations"><i class="fas fa-quote-right"></i> ${source.citations} цитирований</div>` : ''}
                </div>
            `;
            sourcesList.appendChild(sourceElement);
        });
        
        // Обновляем счетчик источников
        sourcesCount.textContent = response.sources.length;
        
        // Обновляем связанные вопросы
        if (response.relatedQuestions) {
            relatedQuestions.innerHTML = '';
            response.relatedQuestions.forEach(question => {
                const questionElement = document.createElement('a');
                questionElement.href = '#';
                questionElement.className = 'related-question';
                questionElement.textContent = question;
                questionElement.addEventListener('click', function(e) {
                    e.preventDefault();
                    searchInput.value = question;
                    performSearch();
                });
                relatedQuestions.appendChild(questionElement);
            });
        }
        
        // Показываем результаты
        resultsSection.style.display = 'block';
        resultsSection.scrollIntoView({ behavior: 'smooth' });
        
        // Показываем уведомление
        showNotification(`Найдено ${response.sources.length} источников`, 'success');
    }
    
    function displayFallbackResults(query) {
        answerText.innerHTML = `
            <div class="answer-block">
                <h3>Анализ запроса: "${query}"</h3>
                <div class="answer-main">
                    <p>Я проанализировал ваш вопрос, но не смог найти достаточно актуальной информации в данный момент.</p>
                    
                    <div class="suggestions">
                        <h4><i class="fas fa-lightbulb"></i> Рекомендации:</h4>
                        <ul>
                            <li>Переформулируйте вопрос более конкретно</li>
                            <li>Попробуйте использовать английские термины</li>
                            <li>Разбейте сложный вопрос на несколько простых</li>
                            <li>Используйте академический поиск для научных тем</li>
                        </ul>
                    </div>
                    
                    <div class="quick-tips">
                        <h4><i class="fas fa-rocket"></i> Попробуйте эти запросы:</h4>
                        <div class="tip-tags">
                            <span class="tip-tag" onclick="searchInput.value='Что такое GPT-4?'; performSearch();">Что такое GPT-4?</span>
                            <span class="tip-tag" onclick="searchInput.value='Новости космоса 2024'; performSearch();">Новости космоса 2024</span>
                            <span class="tip-tag" onclick="searchInput.value='Как начать программировать?'; performSearch();">Как начать программировать?</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Базовые источники
        const fallbackSources = [
            { title: "Google", url: "https://google.com/search?q=" + encodeURIComponent(query) },
            { title: "Wikipedia", url: "https://wikipedia.org/wiki/Special:Search?search=" + encodeURIComponent(query) },
            { title: "Stack Overflow", url: "https://stackoverflow.com/search?q=" + encodeURIComponent(query) }
        ];
        
        sourcesList.innerHTML = '';
        fallbackSources.forEach(source => {
            const sourceElement = document.createElement('div');
            sourceElement.className = 'source-card';
            sourceElement.innerHTML = `
                <div class="source-content">
                    <a href="${source.url}" target="_blank" class="source-title">${source.title}</a>
                </div>
            `;
            sourcesList.appendChild(sourceElement);
        });
        
        sourcesCount.textContent = fallbackSources.length;
        resultsSection.style.display = 'block';
    }
    
    function resetSearch() {
        searchInput.value = '';
        resultsSection.style.display = 'none';
        searchInput.focus();
        showNotification('Готово к новому запросу', 'info');
    }
    
    function copyAnswer() {
        const textToCopy = answerText.innerText;
        navigator.clipboard.writeText(textToCopy)
            .then(() => showNotification('Ответ скопирован в буфер обмена', 'success'))
            .catch(() => showNotification('Не удалось скопировать', 'error'));
    }
    
    function showRefineModal() {
        document.getElementById('refine-modal').style.display = 'block';
        document.getElementById('refine-text').value = currentQuery;
        document.getElementById('refine-text').focus();
    }
    
    function hideRefineModal() {
        document.getElementById('refine-modal').style.display = 'none';
    }
    
    function submitRefinedQuery() {
        const refinedQuery = document.getElementById('refine-text').value.trim();
        if (refinedQuery) {
            searchInput.value = refinedQuery;
            hideRefineModal();
            performSearch();
        }
    }
    
    function exportAnswer() {
        if (!currentResponse) {
            showNotification('Нет данных для экспорта', 'warning');
            return;
        }
        
        const exportData = {
            query: currentResponse.query,
            answer: answerText.innerText,
            sources: currentResponse.sources,
            timestamp: new Date().toISOString(),
            meta: currentResponse.meta || {}
        };
        
        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `gpt-somp3-${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showNotification('Данные экспортированы в JSON', 'success');
    }
    
    function toggleExpand() {
        answerText.classList.toggle('expanded');
        expandBtn.innerHTML = answerText.classList.contains('expanded') 
            ? '<i class="fas fa-compress-alt"></i> Свернуть' 
            : '<i class="fas fa-expand-alt"></i> Подробнее';
    }
    
    function saveAnswer() {
        const savedAnswers = JSON.parse(localStorage.getItem('savedAnswers') || '[]');
        savedAnswers.push({
            query: currentQuery,
            answer: answerText.innerHTML,
            timestamp: new Date().toISOString(),
            sourcesCount: currentResponse?.sources?.length || 0
        });
        
        localStorage.setItem('savedAnswers', JSON.stringify(savedAnswers));
        saveBtn.innerHTML = '<i class="fas fa-check"></i> Сохранено';
        saveBtn.disabled = true;
        
        setTimeout(() => {
            saveBtn.innerHTML = '<i class="far fa-bookmark"></i> Сохранить';
            saveBtn.disabled = false;
        }, 2000);
        
        showNotification('Ответ сохранен в избранное', 'success');
    }
    
    function shareAnswer() {
        if (navigator.share) {
            navigator.share({
                title: `GPT|SOMP3: ${currentQuery}`,
                text: answerText.innerText.substring(0, 100) + '...',
                url: window.location.href
            });
        } else {
            // Fallback для desktop
            const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Нашел ответ на "${currentQuery}" с помощью GPT|SOMP3`)}`;
            window.open(shareUrl, '_blank');
        }
    }
    
    function setupTypingEffect() {
        const typingText = document.querySelector('.typing-text');
        if (!typingText) return;
        
        const texts = [
            "Задайте любой вопрос",
            "Получите точный ответ",
            "Исследуйте с AI",
            "Учитесь быстрее"
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function type() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(type, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, isDeleting ? 50 : 100);
            }
        }
        
        setTimeout(type, 1000);
    }
    
    function showLoading(show) {
        if (show) {
            searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Поиск...';
            searchBtn.disabled = true;
            
            // Показываем прелоадер в области ответа
            if (resultsSection.style.display !== 'none') {
                answerText.innerHTML = `
                    <div class="loading-container">
                        <div class="loader">
                            <div class="ai-loader">
                                <i class="fas fa-brain"></i>
                            </div>
                            <div class="loading-text">
                                <p>GPT|SOMP3 анализирует ваш запрос...</p>
                                <div class="loading-details">
                                    <span><i class="fas fa-search"></i> Поиск по источникам</span>
                                    <span><i class="fas fa-cog"></i> Генерация ответа</span>
                                    <span><i class="fas fa-check-circle"></i> Проверка информации</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
        } else {
            searchBtn.innerHTML = '<i class="fas fa-rocket"></i> Найти ответ';
            searchBtn.disabled = false;
        }
    }
    
    function showNotification(message, type = 'info') {
        // Удаляем старые уведомления
        const oldNotification = document.querySelector('.notification');
        if (oldNotification) oldNotification.remove();
        
        // Создаем новое уведомление
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(notification);
        
        // Показываем
        setTimeout(() => notification.classList.add('show'), 10);
        
        // Убираем через 3 секунды
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    function showFeedbackMessage(message) {
        showNotification(message, 'success');
    }
    
    function toggleTheme() {
        document.body.classList.toggle('light-theme');
        const icon = document.querySelector('#theme-toggle i');
        icon.className = document.body.classList.contains('light-theme') 
            ? 'fas fa-sun' 
            : 'fas fa-moon';
        
        // Сохраняем в localStorage
        localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
    }
    
    function checkURLParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const topic = urlParams.get('topic');
        
        if (topic) {
            const topicQueries = {
                'ai': 'Что такое искусственный интеллект и как он развивается?',
                'space': 'Какие космические открытия последних лет самые важные?',
                'programming': 'С чего начать изучение программирования в 2024 году?',
                'future-tech': 'Какие технологии определят будущее человечества?'
            };
            
            if (topicQueries[topic]) {
                searchInput.value = topicQueries[topic];
                setTimeout(() => performSearch(), 500);
            }
        }
    }
    
    // Проверяем сохраненную тему
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        document.querySelector('#theme-toggle i').className = 'fas fa-sun';
    }
    
    // Показываем приветственное сообщение при первом посещении
    if (!localStorage.getItem('welcomeShown')) {
        setTimeout(() => {
            showNotification('Добро пожаловать в GPT|SOMP3! Задайте любой вопрос для начала.', 'info');
            localStorage.setItem('welcomeShown', 'true');
        }, 1000);
    }
});