<!smp3 html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Сайт smp3</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #fff;
            min-height: 100vh;
            padding: 20px;
            background-attachment: fixed;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        header {
            text-align: center;
            margin-bottom: 40px;
            padding: 20px;
        }

        h1 {
            font-size: 2.8rem;
            margin-bottom: 10px;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .subtitle {
            font-size: 1.2rem;
            opacity: 0.9;
        }

        .tiles-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 25px;
            margin-bottom: 40px;
        }

        .tile {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 25px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.18);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .tile:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
        }

        .tile-icon {
            font-size: 2.5rem;
            margin-bottom: 15px;
            color: rgba(255, 255, 255, 0.9);
        }

        .tile h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
        }

        .tile p {
            line-height: 1.6;
            opacity: 0.9;
        }

        .large-tile {
            grid-column: span 2;
            display: flex;
            align-items: center;
            gap: 25px;
        }

        .large-tile .tile-icon {
            font-size: 3.5rem;
            flex-shrink: 0;
        }

        .stats {
            display: flex;
            justify-content: space-around;
            margin-top: 40px;
            flex-wrap: wrap;
            gap: 20px;
        }

        .stat-item {
            text-align: center;
            padding: 20px;
        }

        .stat-number {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 5px;
        }

        .stat-label {
            font-size: 1rem;
            opacity: 0.8;
        }

        footer {
            text-align: center;
            margin-top: 50px;
            padding: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 768px) {
            .large-tile {
                grid-column: span 1;
                flex-direction: column;
                text-align: center;
            }
            
            .tiles-container {
                grid-template-columns: 1fr;
            }
            
            h1 {
                font-size: 2.2rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Стеклянный дизайн</h1>
            <p class="subtitle">Современный подход к веб-дизайну с эффектом стекла</p>
        </header>

        <div class="tiles-container">
            <div class="tile">
                <div class="tile-icon">
                    <i class="fas fa-palette"></i>
                </div>
                <h3>Креативный дизайн</h3>
                <p>Современный подход к визуальному оформлению с использованием трендовых техник и стилей.</p>
            </div>

            <div class="tile">
                <div class="tile-icon">
                    <i class="fas fa-mobile-alt"></i>
                </div>
                <h3>Адаптивность</h3>
                <p>Идеальное отображение на всех устройствах - от смартфонов до настольных компьютеров.</p>
            </div>

            <div class="tile">
                <div class="tile-icon">
                    <i class="fas fa-bolt"></i>
                </div>
                <h3>Высокая скорость</h3>
                <p>Оптимизированная производительность для быстрой загрузки и плавной работы.</p>
            </div>

            <div class="tile large-tile">
                <div class="tile-icon">
                    <i class="fas fa-shield-alt"></i>
                </div>
                <div>
                    <h3>Безопасность и надежность</h3>
                    <p>Мы используем современные технологии для обеспечения максимальной защиты данных и стабильной работы вашего сайта. Все соединения защищены протоколом HTTPS.</p>
                </div>
            </div>

            <div class="tile">
                <div class="tile-icon">
                    <i class="fas fa-code"></i>
                </div>
                <h3>Чистый код</h3>
                <p>Структурированный и семантически правильный код для лучшей SEO-оптимизации.</p>
            </div>

            <div class="tile">
                <div class="tile-icon">
                    <i class="fas fa-users"></i>
                </div>
                <h3>Пользовательский опыт</h3>
                <p>Интуитивно понятный интерфейс, ориентированный на удобство пользователя.</p>
            </div>
        </div>

        <div class="stats">
            <div class="stat-item">
                <div class="stat-number">99.9%</div>
                <div class="stat-label">Доступность</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">2.5x</div>
                <div class="stat-label">Быстрее загрузка</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">500+</div>
                <div class="stat-label">Довольных клиентов</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">24/7</div>
                <div class="stat-label">Поддержка</div>
            </div>
        </div>

        <footer>
            <p>© 2023 Стеклянный дизайн. Все права защищены.</p>
        </footer>
    </div>
</body>
</html>
