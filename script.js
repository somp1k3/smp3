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
    // Уведомление о разработке исчезает через 15 секунд
    setTimeout(() => {
        closeNotification('devNotification');
    }, 15000);
    
    // Уведомление с благодарностью исчезает через 10 секунд
    setTimeout(() => {
        closeNotification('thanksNotification');
    }, 10000);
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
    
    // Применяем настройки
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
    
    // Применяем настройки
    toggleRGB(settings.rgb);
    toggleBrightMode(settings.brightMode);
    toggleAnimations(settings.animations);
}

// Функции настроек
function toggleRGB(enabled) {
    if (enabled) {
        rgbBg.style.display = 'block';
    } else {
        rgbBg.style.display = 'none';
    }
}

function toggleBrightMode(enabled) {
    const root = document.documentElement;
    if (enabled) {
        // Яркая тема
        root.style.setProperty('--dark', 'rgba(240, 240, 240, 0.9)');
        root.style.setProperty('--text', '#333333');
        root.style.setProperty('--card-bg', 'rgba(255, 255, 255, 0.8)');
        document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    } else {
        // Темная тема
        root.style.setProperty('--dark', 'rgba(0, 0, 0, 0.9)');
        root.style.setProperty('--text', '#ffffff');
        root.style.setProperty('--card-bg', 'rgba(20, 20, 30, 0.8)');
        document.body.style.background = 'linear-gradient(135deg, #000033 0%, #330066 30%, #6600cc 60%, #9900ff 100%)';
    }
}

function toggleAnimations(enabled) {
    const animatedElements = document.querySelectorAll('.social-icon, .info-item, .activity-card, .settings-btn, .website-widget-link');
    animatedElements.forEach(el => {
        if (enabled) {
            el.style.transition = 'all 0.3s ease';
        } else {
            el.style.transition = 'none';
        }
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
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
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

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Автоматическое закрытие уведомлений
    autoCloseNotifications();
    
    // Загружаем настройки
    loadSettings();
    
    // Обновляем время
    updateDateTime();
    setInterval(updateDateTime, 1000);
    
    // Открытие/закрытие настроек
    settingsBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        settingsContainer.classList.toggle('active');
    });
    
    // Закрытие настроек при клике вне
    document.addEventListener('click', function(e) {
        if (!settingsContainer.contains(e.target)) {
            settingsContainer.classList.remove('active');
        }
    });
    
    // Сохранение настроек при изменении
    const settingInputs = document.querySelectorAll('#settingsPanel input');
    settingInputs.forEach(input => {
        input.addEventListener('change', function() {
            setTimeout(saveSettings, 100);
        });
    });
    
    // Анимация иконок при загрузке
    setTimeout(() => {
        const icons = document.querySelectorAll('.social-icon');
        icons.forEach((icon, index) => {
            setTimeout(() => {
                icon.style.transform = 'translateY(0)';
                icon.style.opacity = '1';
            }, index * 100);
        });
    }, 500);
});