<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SOMP3 - Музыкальная платформа</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        :root {
            --primary-color: #0f0f1e;
            --secondary-color: #1a1a2e;
            --accent-color: #6c42f5;
            --accent-secondary: #ff3366;
            --text-color: #ffffff;
            --text-secondary: #b3b3cc;
        }

        body {
            background-color: var(--primary-color);
            color: var(--text-color);
            line-height: 1.6;
            overflow-x: hidden;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header */
        header {
            background-color: rgba(15, 15, 30, 0.95);
            position: fixed;
            width: 100%;
            z-index: 1000;
            padding: 15px 0;
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(10px);
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 800;
            color: var(--text-color);
            text-decoration: none;
            display: flex;
            align-items: center;
        }

        .logo i {
            color: var(--accent-color);
            margin-right: 8px;
        }

        .logo span {
            color: var(--accent-secondary);
        }

        nav ul {
            display: flex;
            list-style: none;
        }

        nav ul li {
            margin-left: 30px;
        }

        nav ul li a {
            color: var(--text-color);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
            position: relative;
        }

        nav ul li a:hover {
            color: var(--accent-color);
        }

        nav ul li a::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -5px;
            left: 0;
            background: linear-gradient(90deg, var(--accent-color), var(--accent-secondary));
            transition: width 0.3s;
        }

        nav ul li a:hover::after {
            width: 100%;
        }

        .auth-buttons {
            display: flex;
            gap: 15px;
        }

        .auth-btn {
            padding: 8px 20px;
            border-radius: 20px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
        }

        .login {
            color: var(--text-color);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .login:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }

        .signup {
            background: linear-gradient(90deg, var(--accent-color), var(--accent-secondary));
            color: white;
        }

        .signup:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(108, 66, 245, 0.4);
        }

        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            color: var(--text-color);
            font-size: 1.5rem;
            cursor: pointer;
        }

        /* Hero Section */
        .hero {
            padding: 180px 0 100px;
            background: linear-gradient(135deg, var(--primary-color) 0%, #1e1b3d 100%);
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 70% 20%, rgba(108, 66, 245, 0.15) 0%, transparent 50%),
                        radial-gradient(circle at 20% 80%, rgba(255, 51, 102, 0.1) 0%, transparent 50%);
        }

        .hero-content {
            position: relative;
            z-index: 1;
        }

        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 20px;
            font-weight: 800;
            background: linear-gradient(90deg, var(--accent-color), var(--accent-secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .hero p {
            font-size: 1.2rem;
            max-width: 700px;
            margin: 0 auto 40px;
            color: var(--text-secondary);
        }

        .btn {
            display: inline-block;
            background: linear-gradient(90deg, var(--accent-color), var(--accent-secondary));
            color: white;
            padding: 12px 30px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
            border: none;
            cursor: pointer;
        }

        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(108, 66, 245, 0.4);
        }

        .btn-outline {
            background: transparent;
            border: 2px solid var(--accent-color);
            margin-left: 15px;
        }

        .btn-outline:hover {
            background: var(--accent-color);
        }

        /* Features Section */
        .features {
            padding: 100px 0;
            background-color: var(--secondary-color);
        }

        .section-title {
            text-align: center;
            margin-bottom: 60px;
        }

        .section-title h2 {
            font-size: 2.5rem;
            margin-bottom: 15px;
        }

        .section-title p {
            color: var(--text-secondary);
            max-width: 600px;
            margin: 0 auto;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .feature-card {
            background-color: rgba(255, 255, 255, 0.05);
            border-radius: 15px;
            padding: 30px;
            transition: transform 0.3s, box-shadow 0.3s;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
            border-color: rgba(108, 66, 245, 0.3);
        }

        .feature-icon {
            font-size: 2.5rem;
            margin-bottom: 20px;
            background: linear-gradient(90deg, var(--accent-color), var(--accent-secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .feature-card h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
        }

        .feature-card p {
            color: var(--text-secondary);
        }

        /* Music Player Section */
        .player-section {
            padding: 100px 0;
            background-color: var(--primary-color);
        }

        .player-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 800px;
            margin: 0 auto;
        }

        .album-art {
            width: 250px;
            height: 250px;
            border-radius: 15px;
            background: linear-gradient(135deg, var(--accent-color), var(--accent-secondary));
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
            color: white;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
        }

        .track-info {
            text-align: center;
            margin-bottom: 30px;
            width: 100%;
        }

        .track-title {
            font-size: 1.8rem;
            margin-bottom: 5px;
        }

        .track-artist {
            color: var(--text-secondary);
            font-size: 1.2rem;
        }

        .progress-container {
            width: 100%;
            margin-bottom: 20px;
        }

        .progress-bar {
            width: 100%;
            height: 6px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 3px;
            overflow: hidden;
            margin-bottom: 5px;
        }

        .progress {
            height: 100%;
            width: 30%;
            background: linear-gradient(90deg, var(--accent-color), var(--accent-secondary));
            border-radius: 3px;
        }

        .time-info {
            display: flex;
            justify-content: space-between;
            color: var(--text-secondary);
            font-size: 0.9rem;
        }

        .player-controls {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-top: 20px;
        }

        .control-btn {
            background: none;
            border: none;
            color: var(--text-color);
            font-size: 1.2rem;
            cursor: pointer;
            transition: color 0.3s;
        }

        .control-btn:hover {
            color: var(--accent-color);
        }

        .play-btn {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(90deg, var(--accent-color), var(--accent-secondary));
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
        }

        .play-btn:hover {
            transform: scale(1.1);
            color: white;
        }

        /* Playlists Section */
        .playlists {
            padding: 100px 0;
            background-color: var(--secondary-color);
        }

        .playlists-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
        }

        .playlist-card {
            border-radius: 15px;
            overflow: hidden;
            background-color: rgba(255, 255, 255, 0.05);
            transition: transform 0.3s;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .playlist-card:hover {
            transform: translateY(-10px);
            border-color: rgba(108, 66, 245, 0.3);
        }

        .playlist-img {
            height: 200px;
            background: linear-gradient(135deg, var(--accent-color), var(--accent-secondary));
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 3rem;
        }

        .playlist-content {
            padding: 20px;
        }

        .playlist-content h3 {
            font-size: 1.3rem;
            margin-bottom: 10px;
        }

        .playlist-content p {
            color: var(--text-secondary);
            margin-bottom: 15px;
            font-size: 0.9rem;
        }

        .playlist-stats {
            display: flex;
            justify-content: space-between;
            color: var(--text-secondary);
            font-size: 0.8rem;
        }

        /* Download Section */
        .download {
            padding: 100px 0;
            background: linear-gradient(135deg, var(--primary-color) 0%, #1e1b3d 100%);
            text-align: center;
        }

        .download-content {
            max-width: 700px;
            margin: 0 auto;
        }

        .download h2 {
            font-size: 2.5rem;
            margin-bottom: 20px;
        }

        .download p {
            color: var(--text-secondary);
            margin-bottom: 40px;
            font-size: 1.1rem;
        }

        .app-badges {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
        }

        .app-badge {
            display: flex;
            align-items: center;
            background-color: rgba(255, 255, 255, 0.1);
            padding: 12px 20px;
            border-radius: 10px;
            text-decoration: none;
            color: var(--text-color);
            transition: all 0.3s;
        }

        .app-badge:hover {
            background-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-5px);
        }

        .app-badge i {
            font-size: 2rem;
            margin-right: 10px;
        }

        .badge-text {
            text-align: left;
        }

        .badge-text span {
            display: block;
            font-size: 0.8rem;
            color: var(--text-secondary);
        }

        .badge-text strong {
            font-size: 1.1rem;
        }

        /* Footer */
        footer {
            background-color: #0a0a15;
            padding: 50px 0 20px;
        }

        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 40px;
            margin-bottom: 40px;
        }

        .footer-logo {
            font-size: 1.5rem;
            font-weight: 800;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }

        .footer-logo i {
            color: var(--accent-color);
            margin-right: 8px;
        }

        .footer-logo span {
            color: var(--accent-secondary);
        }

        .footer-links h4 {
            margin-bottom: 20px;
            font-size: 1.1rem;
        }

        .footer-links ul {
            list-style: none;
        }

        .footer-links ul li {
            margin-bottom: 10px;
        }

        .footer-links ul li a {
            color: var(--text-secondary);
            text-decoration: none;
            transition: color 0.3s;
        }

        .footer-links ul li a:hover {
            color: var(--accent-color);
        }

        .social-links {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }

        .social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            color: var(--text-color);
            text-decoration: none;
            transition: all 0.3s;
        }

        .social-link:hover {
            background: linear-gradient(90deg, var(--accent-color), var(--accent-secondary));
            transform: translateY(-5px);
        }

        .copyright {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            color: var(--text-secondary);
            font-size: 0.9rem;
        }

        /* Responsive */
        @media (max-width: 992px) {
            .hero h1 {
                font-size: 2.8rem;
            }
        }

        @media (max-width: 768px) {
            .mobile-menu-btn {
                display: block;
            }
            
            nav ul {
                position: fixed;
                top: 70px;
                left: -100%;
                width: 100%;
                height: calc(100vh - 70px);
                background-color: var(--primary-color);
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                padding-top: 50px;
                transition: left 0.3s;
            }
            
            nav ul.active {
                left: 0;
            }
            
            nav ul li {
                margin: 15px 0;
            }
            
            .auth-buttons {
                display: none;
            }
            
            .hero {
                padding: 150px 0 80px;
            }
            
            .hero h1 {
                font-size: 2.2rem;
            }
            
            .btn {
                display: block;
                margin: 10px auto;
                width: 200px;
            }
            
            .btn-outline {
                margin-left: 0;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container">
            <div class="header-content">
                <a href="#" class="logo"><i class="fas fa-music"></i>SOM<span>P3</span></a>
                <button class="mobile-menu-btn">
                    <i class="fas fa-bars"></i>
                </button>
                <nav>
                    <ul>
                        <li><a href="#home">Главная</a></li>
                        <li><a href="#features">Возможности</a></li>
                        <li><a href="#player">Плеер</a></li>
                        <li><a href="#playlists">Плейлисты</a></li>
                        <li><a href="#download">Скачать</a></li>
                    </ul>
                </nav>
                <div class="auth-buttons">
                    <a href="#" class="auth-btn login">Войти</a>
                    <a href="#" class="auth-btn signup">Регистрация</a>
                </div>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="container">
            <div class="hero-content">
                <h1>Слушайте музыку без ограничений</h1>
                <p>Миллионы треков, тысячи плейлистов и персональные рекомендации на одной платформе. Откройте для себя новый мир музыки с SOMP3.</p>
                <a href="#download" class="btn">Начать слушать</a>
                <a href="#features" class="btn btn-outline">Узнать больше</a>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="features" id="features">
        <div class="container">
            <div class="section-title">
                <h2>Почему SOMP3?</h2>
                <p>Мы предлагаем уникальный музыкальный опыт с передовыми функциями</p>
            </div>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-headphones"></i>
                    </div>
                    <h3>Высокое качество звука</h3>
                    <p>Наслаждайтесь музыкой в формате Hi-Fi с битрейтом до 320 kbps и поддержкой формата FLAC.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-magic"></i>
                    </div>
                    <h3>Умные рекомендации</h3>
                    <p>Персональные плейлисты и рекомендации на основе ваших предпочтений и истории прослушиваний.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-download"></i>
                    </div>
                    <h3>Оффлайн-прослушивание</h3>
                    <p>Скачивайте любимые треки и слушайте их без подключения к интернету в любое время.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Music Player Section -->
    <section class="player-section" id="player">
        <div class="container">
            <div class="section-title">
                <h2>Музыкальный плеер</h2>
                <p>Испытайте наш продвинутый плеер с интуитивным управлением</p>
            </div>
            <div class="player-container">
                <div class="album-art">
                    <i class="fas fa-compact-disc"></i>
                </div>
                <div class="track-info">
                    <h3 class="track-title">Electric Dreams</h3>
                    <p class="track-artist">Neon Waves</p>
                </div>
                <div class="progress-container">
                    <div class="progress-bar">
                        <div class="progress"></div>
                    </div>
                    <div class="time-info">
                        <span>1:25</span>
                        <span>4:30</span>
                    </div>
                </div>
                <div class="player-controls">
                    <button class="control-btn"><i class="fas fa-random"></i></button>
                    <button class="control-btn"><i class="fas fa-step-backward"></i></button>
                    <button class="control-btn play-btn"><i class="fas fa-play"></i></button>
                    <button class="control-btn"><i class="fas fa-step-forward"></i></button>
                    <button class="control-btn"><i class="fas fa-redo"></i></button>
                </div>
            </div>
        </div>
    </section>

    <!-- Playlists Section -->
    <section class="playlists" id="playlists">
        <div class="container">
            <div class="section-title">
                <h2>Популярные плейлисты</h2>
                <p>Откройте для себя коллекции треков, созданные нашими кураторами</p>
            </div>
            <div class="playlists-grid">
                <div class="playlist-card">
                    <div class="playlist-img">
                        <i class="fas fa-fire"></i>
                    </div>
                    <div class="playlist-content">
                        <h3>Топ-100 хитов</h3>
                        <p>Самые популярные треки этой недели со всего мира</p>
                        <div class="playlist-stats">
                            <span>125 треков</span>
                            <span>12 часов</span>
                        </div>
                    </div>
                </div>
                <div class="playlist-card">
                    <div class="playlist-img">
                        <i class="fas fa-wind"></i>
                    </div>
                    <div class="playlist-content">
                        <h3>Чиллаут волны</h3>
                        <p>Расслабляющие мелодии для отдыха и медитации</p>
                        <div class="playlist-stats">
                            <span>80 треков</span>
                            <span>8 часов</span>
                        </div>
                    </div>
                </div>
                <div class="playlist-card">
                    <div class="playlist-img">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <div class="playlist-content">
                        <h3>Энергия тренировки</h3>
                        <p>Мощные треки для ваших спортивных достижений</p>
                        <div class="playlist-stats">
                            <span>65 треков</span>
                            <span>6 часов</span>
                        </div>
                    </div>
                </div>
                <div class="playlist-card">
                    <div class="playlist-img">
                        <i class="fas fa-moon"></i>
                    </div>
                    <div class="playlist-content">
                        <h3>Ночные ритмы</h3>
                        <p>Электронная музыка для ночных вечеринок</p>
                        <div class="playlist-stats">
                            <span>95 треков</span>
                            <span>10 часов</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Download Section -->
    <section class="download" id="download">
        <div class="container">
            <div class="download-content">
                <h2>Скачайте SOMP3 бесплатно</h2>
                <p>Наслаждайтесь музыкой где угодно с нашими приложениями для iOS и Android</p>
                <div class="app-badges">
                    <a href="#" class="app-badge">
                        <i class="fab fa-apple"></i>
                        <div class="badge-text">
                            <span>Скачать в</span>
                            <strong>App Store</strong>
                        </div>
                    </a>
                    <a href="#" class="app-badge">
                        <i class="fab fa-google-play"></i>
                        <div class="badge-text">
                            <span>Доступно в</span>
                            <strong>Google Play</strong>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <div class="footer-logo"><i class="fas fa-music"></i>SOM<span>P3</span></div>
                    <p>Музыкальная платформа нового поколения с миллионами треков и персонализированными рекомендациями.</p>
                    <div class="social-links">
                        <a href="#" class="social-link"><i class="fab fa-vk"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-telegram"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div class="footer-links">
                    <h4>О нас</h4>
                    <ul>
                        <li><a href="#">О компании</a></li>
                        <li><a href="#">Вакансии</a></li>
                        <li><a href="#">Новости</a></li>
                        <li><a href="#">Партнёры</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Поддержка</h4>
                    <ul>
                        <li><a href="#">Справка</a></li>
                        <li><a href="#">Сообщество</a></li>
                        <li><a href="#">Контакты</a></li>
                        <li><a href="#">Статус системы</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Юридическая информация</h4>
                    <ul>
                        <li><a href="#">Условия использования</a></li>
                        <li><a href="#">Политика конфиденциальности</a></li>
                        <li><a href="#">Правила для авторов</a></li>
                        <li><a href="#">Cookie</a></li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2023 SOMP3 Music Platform. Все права защищены.</p>
            </div>
        </div>
    </footer>

    <script>
        // Mobile menu toggle
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.querySelector('nav ul').classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.addEventListener('click', function() {
                document.querySelector('nav ul').classList.remove('active');
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Music player functionality
        const playBtn = document.querySelector('.play-btn');
        const playIcon = playBtn.querySelector('i');
        
        playBtn.addEventListener('click', function() {
            if (playIcon.classList.contains('fa-play')) {
                playIcon.classList.remove('fa-play');
                playIcon.classList.add('fa-pause');
            } else {
                playIcon.classList.remove('fa-pause');
                playIcon.classList.add('fa-play');
            }
        });
    </script>
</body>
</html>
