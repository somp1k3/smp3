<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub Projects</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            min-height: 100vh;
            background: linear-gradient(135deg, #6e8efb, #a777e3);
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 40px 20px;
            transition: background 0.5s ease;
        }

        .container {
            max-width: 1200px;
            width: 100%;
        }

        header {
            text-align: center;
            margin-bottom: 50px;
            color: white;
        }

        h1 {
            font-size: 2.8rem;
            margin-bottom: 15px;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .subtitle {
            font-size: 1.2rem;
            opacity: 0.9;
            max-width: 600px;
            margin: 0 auto;
        }

        .gradient-selector {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin: 30px 0;
            flex-wrap: wrap;
        }

        .gradient-option {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            border: 3px solid white;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease;
        }

        .gradient-option:hover {
            transform: scale(1.1);
        }

        .gradient-option.active {
            transform: scale(1.15);
            border: 3px solid #fff;
            box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);
        }

        .cards-container {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
        }

        .card {
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 30px;
            width: 100%;
            max-width: 350px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.18);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            color: white;
            display: flex;
            flex-direction: column;
        }

        .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        .card-icon {
            font-size: 2.5rem;
            margin-bottom: 20px;
            text-align: center;
        }

        .card-title {
            font-size: 1.5rem;
            margin-bottom: 15px;
            text-align: center;
        }

        .card-description {
            line-height: 1.6;
            margin-bottom: 25px;
            flex-grow: 1;
        }

        .card-link {
            display: inline-block;
            background: rgba(255, 255, 255, 0.25);
            padding: 12px 25px;
            border-radius: 50px;
            text-decoration: none;
            color: white;
            font-weight: 600;
            text-align: center;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .card-link:hover {
            background: rgba(255, 255, 255, 0.35);
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        footer {
            margin-top: 50px;
            text-align: center;
            color: white;
            opacity: 0.8;
            font-size: 0.9rem;
        }

        @media (max-width: 768px) {
            .cards-container {
                flex-direction: column;
                align-items: center;
            }
            
            .card {
                max-width: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>GitHub Projects</h1>
            <p class="subtitle">Откройте для себя интересные проекты с открытым исходным кодом и внесите свой вклад в развитие сообщества</p>
        </header>

        <div class="gradient-selector">
            <div class="gradient-option active" style="background: linear-gradient(135deg, #6e8efb, #a777e3);" data-gradient="gradient1"></div>
            <div class="gradient-option" style="background: linear-gradient(135deg, #ff7e5f, #feb47b);" data-gradient="gradient2"></div>
            <div class="gradient-option" style="background: linear-gradient(135deg, #43cea2, #185a9d);" data-gradient="gradient3"></div>
            <div class="gradient-option" style="background: linear-gradient(135deg, #654ea3, #eaafc8);" data-gradient="gradient4"></div>
            <div class="gradient-option" style="background: linear-gradient(135deg, #ff5e62, #ff9966);" data-gradient="gradient5"></div>
        </div>

        <div class="cards-container">
            <div class="card">
                <div class="card-icon">🚀</div>
                <h2 class="card-title">Популярные проекты</h2>
                <p class="card-description">Исследуйте самые популярные репозитории GitHub, которые активно развиваются и имеют большое сообщество контрибьюторов.</p>
                <a href="#" class="card-link">Перейти к проектам</a>
            </div>

            <div class="card">
                <div class="card-icon">💡</div>
                <h2 class="card-title">Новые идеи</h2>
                <p class="card-description">Откройте для себя инновационные проекты, которые меняют подход к разработке программного обеспечения.</p>
                <a href="#" class="card-link">Исследовать идеи</a>
            </div>

            <div class="card">
                <div class="card-icon">👥</div>
                <h2 class="card-title">Сообщество</h2>
                <p class="card-description">Присоединяйтесь к активным сообществам разработчиков, делитесь знаниями и находите единомышленников.</p>
                <a href="#" class="card-link">Присоединиться</a>
            </div>
        </div>

        <footer>
            <p>© 2023 GitHub Projects. Все права защищены.</p>
        </footer>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const gradientOptions = document.querySelectorAll('.gradient-option');
            
            gradientOptions.forEach(option => {
                option.addEventListener('click', function() {
                    // Удаляем активный класс у всех опций
                    gradientOptions.forEach(opt => opt.classList.remove('active'));
                    
                    // Добавляем активный класс к выбранной опции
                    this.classList.add('active');
                    
                    // Применяем выбранный градиент к body
                    const gradientStyle = this.getAttribute('style');
                    document.body.style.background = gradientStyle;
                });
            });
        });
    </script>
</body>
</html>
