// Элементы DOM
const timeElement = document.getElementById('currentTime');
const dateElement = document.getElementById('currentDate');

// Уведомления
const devNotification = document.getElementById('devNotification');
const thanksNotification = document.getElementById('thanksNotification');

// Настройки элементы
const settingsContainer = document.getElementById('settingsContainer');
const settingsBtn = document.getElementById('settingsBtn');
const settingsPanel = document.getElementById('settingsPanel');
const rgbToggle = document.getElementById('rgbToggle');
const brightModeToggle = document.getElementById('brightModeToggle');
const animationsToggle = document.getElementById('animationsToggle');
const rgbBg = document.getElementById('rgbBg');

// PWA элементы
const pwaInstallBtn = document.getElementById('pwaInstallBtn');
let deferredPrompt;

// Модальные элементы
const activityModalOverlay = document.getElementById('activityModalOverlay');
const activityModal = document.getElementById('activityModal');
const modalActivityTitle = document.getElementById('modalActivityTitle');
const modalActivityContent = document.getElementById('modalActivityContent');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalVisitSiteBtn = document.getElementById('modalVisitSiteBtn');
const modalCloseActionBtn = document.getElementById('modalCloseActionBtn');

// Данные для модальных окон
const activitiesData = {
    webdev: {
        title: "Веб-разработка",
        siteUrl: "https://somp1k3.github.io/smp3/pr/",
        content: `
            <h3>Мой стек технологий</h3>
            <p>Я специализируюсь на создании современных, отзывчивых веб-приложений с использованием:</p>
            <ul>
                <li><strong>Frontend:</strong> React, Vue.js, TypeScript, HTML5, CSS3/Sass</li>
                <li><strong>Backend:</strong> Node.js, Express, PHP (Laravel)</li>
                <li><strong>Базы данных:</strong> MySQL, PostgreSQL, MongoDB</li>
                <li><strong>DevOps:</strong> Docker, Nginx, CI/CD (GitHub Actions)</li>
            </ul>
            
            <h3>Ключевые проекты</h3>
            <p>Разработал более 10+ коммерческих проектов, включая:</p>
            <ul>
                <li>Системы управления контентом (CMS)</li>
                <li>Интернет-магазины и платформы электронной коммерции</li>
                <li>Корпоративные порталы и административные панели</li>
                <li>Веб-приложения реального времени с WebSocket</li>
            </ul>
            
            <h3>Особый подход</h3>
            <p>Моя философия разработки основана на:</p>
            <ul>
                <li>Чистом, поддерживаемом коде</li>
                <li>Оптимизации производительности</li>
                <li>Кросс-браузерной совместимости</li>
                <li>Доступности (accessibility)</li>
                <li>SEO-friendly архитектуре</li>
            </ul>
        `
    },
    python: {
        title: "Python разработка",
        siteUrl: "https://github.com/somp1k3",
        content: `
            <h3>Области применения Python</h3>
            <p>Использую Python для решения широкого спектра задач:</p>
            <ul>
                <li><strong>Веб-разработка:</strong> Django, Flask, FastAPI</li>
                <li><strong>Автоматизация:</strong> Скрипты для CI/CD, администрирования</li>
                <li><strong>Боты:</strong> Telegram боты, Discord боты, парсеры</li>
                <li><strong>Аналитика данных:</strong> Pandas, NumPy, Matplotlib</li>
                <li><strong>ИИ и ML:</strong> TensorFlow, Scikit-learn (базовые знания)</li>
            </ul>
            
            <h3>Примеры проектов</h3>
            <ul>
                <li>Автоматическая система мониторинга серверов</li>
                <li>Парсеры данных для аналитических систем</li>
                <li>Telegram боты с интеграцией внешних API</li>
                <li>Микросервисная архитектура на FastAPI</li>
                <li>Инструменты для автоматизации разработки</li>
            </ul>
            
            <h3>Преимущества Python в моих проектах</h3>
            <ul>
                <li>Высокая скорость разработки</li>
                <li>Читаемость и поддерживаемость кода</li>
                <li>Богатая экосистема библиотек</li>
                <li>Кроссплатформенность</li>
                <li>Отличная документация</li>
            </ul>
        `
    },
    gamedev: {
        title: "Игровые проекты",
        siteUrl: "https://steamcommunity.com/id/somp1k3/",
        content: `
            <h3>Игровые технологии</h3>
            <p>Работа с современными игровыми движками и технологиями:</p>
            <ul>
                <li><strong>Движки:</strong> Unity, Godot, Unreal Engine (базово)</li>
                <li><strong>Языки:</strong> C#, C++, GDScript</li>
                <li><strong>Графика:</strong> OpenGL (базово), Shader Graph</li>
                <li><strong>Сетевые технологии:</strong> Photon, Mirror, Socket.IO</li>
            </ul>
            
            <h3>Типы проектов</h3>
            <ul>
                <li><strong>Инди-игры:</strong> 2D/3D игры для PC и мобильных платформ</li>
                <li><strong>Модификации:</strong> Моды для популярных игр (GTA V, Minecraft)</li>
                <li><strong>Игровые механики:</strong> Разработка уникальных игровых систем</li>
                <li><strong>Прототипы:</strong> Быстрое прототипирование игровых концепций</li>
            </ul>
            
            <h3>Геймдизайн подход</h3>
            <p>Как геймер, я уделяю особое внимание:</p>
            <ul>
                <li>Балансу игровых механик</li>
                <li>Плавности и отзывчивости управления</li>
                <li>Интуитивному UX/UI в играх</li>
                <li>Игровому прогрессу и системе наград</li>
                <li>Мультиплеерным возможностям</li>
            </ul>
        `
    },
    design: {
        title: "UI/UX дизайн",
        siteUrl: "https://somp1k3.github.io/smp3/portfolio/",
        content: `
            <h3>Дизайн-процесс</h3>
            <p>Полный цикл проектирования пользовательских интерфейсов:</p>
            <ul>
                <li><strong>Research:</strong> Анализ аудитории, конкурентов</li>
                <li><strong>Wireframing:</strong> Создание каркасов и прототипов</li>
                <li><strong>UI Design:</strong> Визуальный дизайн в Figma/Adobe XD</li>
                <li><strong>Prototyping:</strong> Интерактивные прототипы</li>
                <li><strong>Testing:</strong> Юзабилити-тестирование</li>
            </ul>
            
            <h3>Инструменты</h3>
            <ul>
                <li><strong>Дизайн:</strong> Figma, Adobe XD, Photoshop, Illustrator</li>
                <li><strong>Прототипирование:</strong> Principle, Framer</li>
                <li><strong>Анимация:</strong> After Effects, Lottie</li>
                <li><strong>Коллаборация:</strong> Miro, Notion, Zeplin</li>
            </ul>
            
            <h3>Принципы дизайна</h3>
            <ul>
                <li><strong>Простота:</strong> Минимализм и ясность интерфейса</li>
                <li><strong>Консистентность:</strong> Единый стиль и паттерны</li>
                <li><strong>Доступность:</strong> WCAG 2.1 стандарты</li>
                <li><strong>Адаптивность:</strong> Mobile-first подход</li>
                <li><strong>Эмоции:</strong> Создание позитивного пользовательского опыта</li>
            </ul>
            
            <h3>Дизайн-системы</h3>
            <p>Создание и поддержка дизайн-систем, включая:</p>
            <ul>
                <li>Библиотеки компонентов</li>
                <li>Гайдлайны по использованию</li>
                <li>Токены дизайна (цвета, типографика, spacing)</li>
                <li>Документация для разработчиков</li>
            </ul>
        `
    }
};

// Состояние
let settings = {};

// Функции для уведомлений
function closeNotification(notificationId) {
    const notification = document.getElementById(notificationId);
    notification.style.animation = 'slideOut 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 500);
}

function autoCloseNotifications() {
    setTimeout(() => closeNotification('devNotification'), 15000);
    setTimeout(() => closeNotification('thanksNotification'), 10000);
}

// Время и дата
function updateDateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('ru-RU');
    const dateString = now.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
    
    timeElement.textContent = timeString;
    dateElement.textContent = dateString;
}

// Загрузка настроек
function loadSettings() {
    const savedSettings = JSON.parse(localStorage.getItem('somp3_settings') || '{}');
    settings = { ...savedSettings };
    
    if (settings.rgb !== undefined) {
        rgbToggle.checked = settings.rgb;
        toggleRGB(settings.rgb);
    }
    
    if (settings.brightMode !== undefined) {
        brightModeToggle.checked = settings.brightMode;
        toggleBrightMode(settings.brightMode);
    }
    
    if (settings.animations !== undefined) {
        animationsToggle.checked = settings.animations;
        toggleAnimations(settings.animations);
    }
}

// Сохранение настроек
function saveSettings() {
    settings = {
        rgb: rgbToggle.checked,
        brightMode: brightModeToggle.checked,
        animations: animationsToggle.checked
    };
    
    localStorage.setItem('somp3_settings', JSON.stringify(settings));
    showNotification('Настройки сохранены!');
    
    toggleRGB(settings.rgb);
    toggleBrightMode(settings.brightMode);
    toggleAnimations(settings.animations);
}

// Функции настроек
function toggleRGB(enabled) {
    rgbBg.style.display = enabled ? 'block' : 'none';
}

function toggleBrightMode(enabled) {
    const root = document.documentElement;
    if (enabled) {
        root.style.setProperty('--dark', 'rgba(240, 240, 240, 0.9)');
        root.style.setProperty('--text', '#333333');
        root.style.setProperty('--card-bg', 'rgba(255, 255, 255, 0.8)');
        document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    } else {
        root.style.setProperty('--dark', 'rgba(0, 0, 0, 0.9)');
        root.style.setProperty('--text', '#ffffff');
        root.style.setProperty('--card-bg', 'rgba(20, 20, 30, 0.8)');
        document.body.style.background = 'linear-gradient(135deg, #000033 0%, #330066 30%, #6600cc 60%, #9900ff 100%)';
    }
}

function toggleAnimations(enabled) {
    const animatedElements = document.querySelectorAll('.social-icon, .info-item, .activity-card, .settings-btn, .website-widget-link');
    animatedElements.forEach(el => {
        el.style.transition = enabled ? 'all 0.3s ease' : 'none';
    });
}

// Модальные окна
function openActivityModal(activityType) {
    const activity = activitiesData[activityType];
    if (!activity) return;
    
    modalActivityTitle.textContent = activity.title;
    modalActivityContent.innerHTML = activity.content;
    modalVisitSiteBtn.onclick = () => window.open(activity.siteUrl, '_blank');
    
    activityModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeActivityModal() {
    activityModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// PWA функциональность
function initPWA() {
    // Проверяем, поддерживается ли PWA
    if ('serviceWorker' in navigator && 'PushManager' in window) {
        navigator.serviceWorker.register('sw.js').then(() => {
            console.log('Service Worker зарегистрирован');
        }).catch(err => {
            console.error('Ошибка регистрации Service Worker:', err);
        });
    }
    
    // Отложенное событие установки
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        pwaInstallBtn.style.display = 'flex';
    });
    
    // Обработчик клика по кнопке установки
    pwaInstallBtn.addEventListener('click', async () => {
        if (!deferredPrompt) {
            showNotification('Приложение уже установлено или установка недоступна');
            return;
        }
        
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        
        if (outcome === 'accepted') {
            showNotification('Приложение успешно установлено!');
            pwaInstallBtn.style.display = 'none';
        } else {
            showNotification('Установка отменена пользователем');
        }
        
        deferredPrompt = null;
    });
    
    // Скрываем кнопку, если приложение уже установлено
    window.addEventListener('appinstalled', () => {
        pwaInstallBtn.style.display = 'none';
        deferredPrompt = null;
    });
}

// Уведомления (всплывающие)
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 250px;
        right: 20px;
        background: linear-gradient(135deg, var(--primary), var(--secondary));
        color: white;
        padding: 12px 24px;
        border-radius: 10px;
        backdrop-filter: blur(10px);
        border: 2px solid rgba(255, 255, 255, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-weight: 600;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
    
    // Стили для анимации
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// SEO оптимизация - динамическое обновление заголовка для активности
function updateTitleForActivity(activityTitle) {
    const baseTitle = "SOMP3 - Разработчик, Геймер, Создатель проектов";
    document.title = activityTitle ? `${activityTitle} | ${baseTitle}` : baseTitle;
    
    // Обновляем Open Graph метатеги
    updateMetaTags(activityTitle);
}

function updateMetaTags(activityTitle) {
    const title = activityTitle ? `${activityTitle} - SOMP3` : "SOMP3 - Разработчик, Геймер, Создатель проектов";
    const description = activityTitle 
        ? `Узнайте подробности о ${activityTitle.toLowerCase()} от разработчика SOMP3`
        : "Персональный сайт разработчика SOMP3 с портфолио и проектами";
    
    // Обновляем стандартные метатеги
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.content = description;
    
    // Обновляем Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogTitle) ogTitle.content = title;
    if (ogDescription) ogDescription.content = description;
    
    // Обновляем Twitter карточки
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterTitle) twitterTitle.content = title;
    if (twitterDescription) twitterDescription.content = description;
}

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    autoCloseNotifications();
    loadSettings();
    updateDateTime();
    setInterval(updateDateTime, 1000);
    initPWA();
    
    // Настройки
    settingsBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        settingsContainer.classList.toggle('active');
    });
    
    document.addEventListener('click', function(e) {
        if (!settingsContainer.contains(e.target)) {
            settingsContainer.classList.remove('active');
        }
    });
    
    const settingInputs = document.querySelectorAll('#settingsPanel input');
    settingInputs.forEach(input => {
        input.addEventListener('change', () => setTimeout(saveSettings, 100));
    });
    
    // Анимация иконок
    setTimeout(() => {
        const icons = document.querySelectorAll('.social-icon');
        icons.forEach((icon, index) => {
            setTimeout(() => {
                icon.style.transform = 'translateY(0)';
                icon.style.opacity = '1';
            }, index * 100);
        });
    }, 500);
    
    // Обработчики для карточек "Что я делаю"
    const activityCards = document.querySelectorAll('.activity-card');
    activityCards.forEach(card => {
        card.addEventListener('click', function() {
            const activityType = this.dataset.activity;
            openActivityModal(activityType);
            updateTitleForActivity(activitiesData[activityType].title);
        });
        
        // Добавляем поддержку клавиатуры
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const activityType = this.dataset.activity;
                openActivityModal(activityType);
                updateTitleForActivity(activitiesData[activityType].title);
            }
        });
        
        // Делаем карточки доступными для клавиатуры
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `Открыть подробности о ${card.querySelector('.activity-title').textContent}`);
    });
    
    // Закрытие модального окна
    modalCloseBtn.addEventListener('click', closeActivityModal);
    modalCloseActionBtn.addEventListener('click', closeActivityModal);
    activityModalOverlay.addEventListener('click', function(e) {
        if (e.target === this) closeActivityModal();
    });
    
    // Закрытие по Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && activityModalOverlay.classList.contains('active')) {
            closeActivityModal();
            updateTitleForActivity();
        }
    });
    
    // При закрытии модалки восстанавливаем заголовок
    modalCloseBtn.addEventListener('click', () => updateTitleForActivity());
    modalCloseActionBtn.addEventListener('click', () => updateTitleForActivity());
    activityModalOverlay.addEventListener('click', function(e) {
        if (e.target === this) updateTitleForActivity();
    });
});