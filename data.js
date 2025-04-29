const gameData = {
    cities: [
        {
            id: "xian",
            name: "Сиань (Чанъань)",
            description: "Древняя столица Китая, отправной пункт Шёлкового пути",
            buyPrices: { 
                silk: 8,     // Шёлк дешевле в Китае
                spices: 35,   // Пряности дорогие (импортные)
                porcelain: 12,// Фарфор местного производства
                tea: 5       // Чай растёт в регионе
            },
            sellPrices: { 
                silk: 15, 
                spices: 45, 
                porcelain: 25, 
                tea: 10 
            },
            history: "Чанъань был крупнейшим городом мира в VIII веке...",
            quests: ["find_silk_merchant", "learn_route"],
            image: "images/cities/xian.jpg",
            economy: "manufacturing" // Тип экономики города
        },
        {
            id: "dunhuang",
            name: "Дуньхуан",
            description: "Ключевой оазис на краю пустыни Такла-Макан",
            buyPrices: { 
                silk: 15, 
                spices: 30, 
                porcelain: 20, 
                tea: 8 
            },
            sellPrices: { 
                silk: 25, 
                spices: 40, 
                porcelain: 35, 
                tea: 15 
            },
            history: "В пещерах Могао хранится 45000 буддийских рукописей...",
            quests: ["protect_caravan", "find_guide"],
            image: "images/cities/dunhuang.jpg",
            economy: "trade"
        },
        {
            id: "samarkand",
            name: "Самарканд",
            description: "Жемчужина Великого Шёлкового пути",
            buyPrices: { 
                silk: 30, 
                spices: 15,  // Пряности дешевле в Средней Азии
                porcelain: 40, 
                tea: 20 
            },
            sellPrices: { 
                silk: 45, 
                spices: 25, 
                porcelain: 55, 
                tea: 30 
            },
            history: "Основан в VIII веке до н.э. При Тамерлане стал столицей...",
            quests: ["meet_ambassador", "solve_conflict"],
            image: "images/cities/samarkand.jpg",
            economy: "trade"
        },
        {
            id: "baghdad",
            name: "Багдад",
            description: "Город мира, столица Аббасидского халифата",
            buyPrices: { 
                silk: 50, 
                spices: 12,  // Ближний Восток - центр торговли пряностями
                porcelain: 60, 
                tea: 35 
            },
            sellPrices: { 
                silk: 65, 
                spices: 25, 
                porcelain: 75, 
                tea: 45 
            },
            history: "Основан в 762 году халифом Аль-Мансуром...",
            quests: ["visit_house_of_wisdom"],
            image: "images/cities/baghdad.jpg",
            economy: "knowledge"
        },
        {
            id: "antioch",
            name: "Антиохия",
            description: "Ворота между Востоком и Западом",
            buyPrices: { 
                silk: 70, 
                spices: 20, 
                porcelain: 80, 
                tea: 50 
            },
            sellPrices: { 
                silk: 90, 
                spices: 35, 
                porcelain: 100, 
                tea: 65 
            },
            history: "Третий по величине город Римской империи...",
            quests: ["final_sale"],
            image: "images/cities/antioch.jpg",
            economy: "trade"
        }
    ],
    
    routes: [
        { 
            from: "xian", 
            to: "dunhuang", 
            length: 2, 
            danger: 20, 
            description: "Путь через плодородные долины",
            terrain: "plains" 
        },
        { 
            from: "dunhuang", 
            to: "samarkand", 
            length: 4, 
            danger: 40, 
            description: "Опасный переход через пустыню",
            terrain: "desert" 
        },
        { 
            from: "samarkand", 
            to: "baghdad", 
            length: 3, 
            danger: 30, 
            description: "Дорога через горные перевалы",
            terrain: "mountains" 
        },
        { 
            from: "baghdad", 
            to: "antioch", 
            length: 2, 
            danger: 25, 
            description: "Последний отрезок пути",
            terrain: "hills" 
        },
        { 
            from: "dunhuang", 
            to: "baghdad", 
            length: 5, 
            danger: 60, 
            description: "Опасный прямой путь через пустыни",
            terrain: "desert" 
        }
    ],
    
    characterClasses: [
        {
            id: "merchant",
            name: "Купец",
            description: "Ваша цель — разбогатеть на торговле между Востоком и Западом.",
            stats: { 
                gold: 200, 
                health: 80, 
                reputation: 10,
                tradeDiscount: 0.1 // 10% скидка на покупку товаров
            },
            inventory: { silk: 3, spices: 1 },
            perks: ["Торговая скидка 10%", "Больше места для товаров"],
            image: "images/characters/merchant.png"
        },
        {
            id: "monk",
            name: "Монах",
            description: "Вы буддийский монах, несущий учение на Запад.",
            stats: { 
                gold: 50, 
                health: 100, 
                reputation: 30,
                freeLodging: true 
            },
            inventory: { tea: 2, scriptures: 1 },
            perks: ["Бесплатный ночлег", "Уважение местных жителей"],
            image: "images/characters/monk.png"
        },
        {
            id: "diplomat",
            name: "Дипломат",
            description: "Вы посланник императора с важной миссией.",
            stats: { 
                gold: 150, 
                health: 90, 
                reputation: 50,
                accessToRulers: true 
            },
            inventory: { silk: 1, porcelain: 1, tea: 1 },
            perks: ["Доступ к правителям", "Дипломатическая неприкосновенность"],
            image: "images/characters/diplomat.png"
        }
    ],
    
    goods: [
        { 
            id: "silk", 
            name: "Шёлк", 
            basePrice: 15, 
            description: "Роскошная ткань, ценимая на Западе.",
            weight: 1,
            origin: "xian" 
        },
        { 
            id: "spices", 
            name: "Пряности", 
            basePrice: 20, 
            description: "Экзотические специи с Востока.",
            weight: 0.5,
            origin: "baghdad" 
        },
        { 
            id: "porcelain", 
            name: "Фарфор", 
            basePrice: 25, 
            description: "Тончайший китайский фарфор.",
            weight: 2,
            origin: "xian" 
        },
        { 
            id: "tea", 
            name: "Чай", 
            basePrice: 12, 
            description: "Ароматные чайные листья.",
            weight: 0.3,
            origin: "xian" 
        },
        {
            id: "scriptures",
            name: "Буддийские сутры",
            basePrice: 40,
            description: "Священные тексты для распространения учения.",
            weight: 0.2,
            origin: "dunhuang"
        }
    ],
    
    companions: [
        { 
            id: "guard", 
            name: "Охранник", 
            price: 50, 
            skill: "Уменьшает опасность в пути на 20%", 
            description: "Опытный воин с собственным оружием",
            upkeep: 5 // Золото в день на содержание
        },
        { 
            id: "translator", 
            name: "Переводчик", 
            price: 40, 
            skill: "Увеличивает доход от торговли на 15%", 
            description: "Знает языки всех народов Шёлкового пути",
            upkeep: 3
        },
        { 
            id: "doctor", 
            name: "Врач", 
            price: 60, 
            skill: "Уменьшает потерю здоровья на 30%", 
            description: "Лечит болезни и травмы в пути",
            upkeep: 4
        }
    ],
    
    randomEvents: [
        {
            id: "bandits",
            text: "Ваш караван атаковали разбойники!",
            options: [
                {
                    text: "Заплатить выкуп (30 золота)",
                    action: (player) => {
                        player.gold -= 30;
                        return { message: "Вы заплатили выкуп и продолжили путь", type: "neutral" };
                    }
                },
                {
                    text: "Попытаться проехать",
                    action: (player) => {
                        const guardBonus = player.companions.includes("guard") ? 0.2 : 0;
                        const successChance = 0.4 + guardBonus;
                        
                        if (Math.random() < successChance) {
                            return { message: "Вы успешно проехали мимо разбойников!", type: "success" };
                        } else {
                            const lostGold = Math.floor(20 + Math.random() * 30);
                            player.gold -= lostGold;
                            player.health -= 15;
                            return { 
                                message: `Разбойники ограбили вас! Потеряно ${lostGold} золота и 15% здоровья`, 
                                type: "error" 
                            };
                        }
                    }
                }
            ]
        }
    ]
};

// Инициализация игрока
let player = {
    character: null,
    gold: 0,
    health: 100,
    reputation: 0,
    day: 1,
    currentCity: "xian",
    inventory: {},
    companions: [],
    completedQuests: [],
    caravanCapacity: 20,
    hasSavedGame: false
};

// Система сохранений
function saveGame() {
    player.hasSavedGame = true;
    localStorage.setItem('silkRoadSave', JSON.stringify(player));
    addLog("Игра сохранена", "success");
}

function loadGame() {
    const savedData = localStorage.getItem('silkRoadSave');
    if (savedData) {
        try {
            const parsed = JSON.parse(savedData);
            Object.assign(player, parsed);
            startGame();
            addLog("Сохранение загружено", "success");
        } catch (e) {
            addLog("Ошибка загрузки сохранения", "error");
            showCharacterSelect();
        }
    } else {
        addLog("Сохранение не найдено", "error");
        showCharacterSelect();
    }
}

function resetGame() {
    if (confirm("Начать новую игру? Текущий прогресс будет потерян.")) {
        localStorage.removeItem('silkRoadSave');
        player = {
            character: null,
            gold: 0,
            health: 100,
            reputation: 0,
            day: 1,
            currentCity: "xian",
            inventory: {},
            companions: [],
            completedQuests: [],
            caravanCapacity: 20,
            hasSavedGame: false
        };
        document.getElementById('game-container').classList.add('hidden');
        document.getElementById('intro-screen').classList.remove('hidden');
    }
}