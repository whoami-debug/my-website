// ======================
// Основные игровые функции
// ======================

/**
 * Получает текущий город игрока
 */
function getCurrentCity() {
    return gameData.cities.find(c => c.id === player.currentCity) || gameData.cities[0];
}

/**
 * Обновляет статистику игрока в интерфейсе
 */
function updateStats() {
    // Основные показатели
    document.getElementById('gold').textContent = player.gold;
    document.getElementById('health').textContent = player.health;
    document.getElementById('reputation').textContent = player.reputation;
    document.getElementById('day').textContent = player.day;
    document.getElementById('current-city').textContent = getCurrentCity().name;
    document.getElementById('companions').textContent = player.companions.length;

    // Панель ресурсов
    const resourcesEl = document.getElementById('resources-display');
    resourcesEl.innerHTML = `
        <div class="resource-item">
            <span>Грузоподъемность:</span>
            <span>${getCurrentCaravanLoad()}/${player.caravanCapacity}</span>
        </div>
        <div class="resource-item">
            <span>Спутники:</span>
            <span>${player.companions.length} (${getCompanionUpkeep()} зол/день)</span>
        </div>
    `;

    // Инвентарь
    const inventoryEl = document.getElementById('inventory-items');
    inventoryEl.innerHTML = '';
    
    Object.keys(player.inventory).forEach(goodId => {
        const amount = player.inventory[goodId];
        if (amount > 0) {
            const good = gameData.goods.find(g => g.id === goodId);
            const itemEl = document.createElement('div');
            itemEl.className = 'inventory-item';
            itemEl.innerHTML = `
                <span class="good-name">${good.name}</span>
                <span class="good-amount">${amount} (${good.weight * amount} ед. веса)</span>
            `;
            inventoryEl.appendChild(itemEl);
        }
    });

    updateCaravanPosition();
}

/**
 * Рассчитывает текущую загрузку каравана
 */
function getCurrentCaravanLoad() {
    return Object.entries(player.inventory).reduce((total, [goodId, amount]) => {
        const good = gameData.goods.find(g => g.id === goodId);
        return total + (good ? good.weight * amount : 0);
    }, 0);
}

/**
 * Рассчитывает стоимость содержания спутников
 */
function getCompanionUpkeep() {
    return player.companions.reduce((total, companionId) => {
        const companion = gameData.companions.find(c => c.id === companionId);
        return total + (companion ? companion.upkeep : 0);
    }, 0);
}

/**
 * Добавляет запись в лог событий
 */
function addLog(message, type = 'neutral') {
    const colors = {
        success: '#388e3c',
        error: '#d32f2f',
        neutral: '#1976d2'
    };
    
    const logEl = document.getElementById('log');
    logEl.innerHTML += `<p style="color: ${colors[type]}">День ${player.day}: ${message}</p>`;
    logEl.scrollTop = logEl.scrollHeight;
}

// ======================
// Система сохранений
// ======================

function saveGame() {
    player.hasSavedGame = true;
    localStorage.setItem('silkRoadSave', JSON.stringify(player));
    addLog("Игра сохранена", "success");
}

function loadGame() {
    const savedData = localStorage.getItem('silkRoadSave');
    if (savedData) {
        try {
            Object.assign(player, JSON.parse(savedData));
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

// ======================
// Система торговли
// ======================

function openTradeMenu() {
    const city = getCurrentCity();
    const charClass = gameData.characterClasses.find(c => c.id === player.character);
    const discount = charClass?.stats?.tradeDiscount || 0;
    
    let html = `
        <h3>Торговля в ${city.name}</h3>
        <table>
            <tr>
                <th>Товар</th>
                <th>Купить за</th>
                <th>Продать за</th>
                <th>У вас</th>
                <th>Действие</th>
            </tr>
    `;
    
    Object.keys(city.buyPrices).forEach(goodId => {
        const good = gameData.goods.find(g => g.id === goodId);
        const playerAmount = player.inventory[goodId] || 0;
        const buyPrice = Math.floor(city.buyPrices[goodId] * (1 - discount));
        const sellPrice = city.sellPrices[goodId];
        
        html += `
            <tr>
                <td>${good.name}</td>
                <td>${buyPrice} золота</td>
                <td>${sellPrice} золота</td>
                <td>${playerAmount}</td>
                <td class="trade-actions">
                    <button onclick="buyGood('${goodId}', ${buyPrice})" 
                        ${getCurrentCaravanLoad() + good.weight > player.caravanCapacity ? 'disabled title="Не хватает места"' : ''}>
                        Купить
                    </button>
                    <button onclick="sellGood('${goodId}', ${sellPrice})" 
                        ${playerAmount === 0 ? 'disabled' : ''}>
                        Продать
                    </button>
                </td>
            </tr>
        `;
    });
    
    html += `</table>`;
    document.getElementById('trade-popup').querySelector('.popup-content').innerHTML = html;
    document.getElementById('trade-popup').classList.remove('hidden');
}

function buyGood(goodId, price) {
    const good = gameData.goods.find(g => g.id === goodId);
    
    if (player.gold >= price) {
        if (getCurrentCaravanLoad() + good.weight <= player.caravanCapacity) {
            player.gold -= price;
            player.inventory[goodId] = (player.inventory[goodId] || 0) + 1;
            addLog(`Куплен 1 ${good.name} за ${price} золота`, "success");
        } else {
            addLog("Не хватает места в караване!", "error");
        }
    } else {
        addLog("Не хватает золота!", "error");
    }
    
    updateStats();
    openTradeMenu();
}

function sellGood(goodId, price) {
    const good = gameData.goods.find(g => g.id === goodId);
    
    if ((player.inventory[goodId] || 0) > 0) {
        player.gold += price;
        player.inventory[goodId] -= 1;
        addLog(`Продан 1 ${good.name} за ${price} золота`, "success");
    }
    
    updateStats();
    openTradeMenu();
}

// ======================
// Система путешествий
// ======================

function openTravelMenu() {
    const currentCityIndex = gameData.cities.findIndex(c => c.id === player.currentCity);
    let html = `
        <h3>Выберите маршрут</h3>
        <div class="travel-options">
    `;
    
    // Основной маршрут
    if (currentCityIndex < gameData.cities.length - 1) {
        const nextCity = gameData.cities[currentCityIndex + 1];
        const route = gameData.routes.find(r => r.from === player.currentCity && r.to === nextCity.id);
        
        html += `
            <div class="travel-option">
                <h4>${nextCity.name}</h4>
                <p>${route.description}</p>
                <p>⏱️ ${route.length} дней | ☠️ Опасность: ${route.danger}%</p>
                <button onclick="travelTo('${nextCity.id}')">Отправиться</button>
            </div>
        `;
    }
    
    document.getElementById('travel-popup').querySelector('.popup-content').innerHTML = html;
    document.getElementById('travel-popup').classList.remove('hidden');
}

function travelTo(cityId) {
    const route = gameData.routes.find(r => r.from === player.currentCity && r.to === cityId);
    if (!route) return;
    
    closeAllPopups();
    player.day += route.length;
    
    // Обработка опасности
    const dangerReduction = player.companions.includes('guard') ? 0.2 : 0;
    const effectiveDanger = Math.max(0, route.danger - (dangerReduction * 100));
    player.health -= Math.floor(effectiveDanger / 10);
    
    // Расходы на спутников
    const upkeepCost = getCompanionUpkeep() * route.length;
    player.gold -= upkeepCost;
    if (upkeepCost > 0) {
        addLog(`Расходы на спутников: ${upkeepCost} золота`, "neutral");
    }
    
    player.currentCity = cityId;
    renderMap();
    updateStats();
    
    addLog(`Вы прибыли в ${getCurrentCity().name} после ${route.length} дней пути!`, "success");
    
    if (player.health <= 0) {
        addLog('Ваше здоровье истощено. Путешествие окончено.', 'error');
        gameOver();
    }
}

// ======================
// Взаимодействие с городами
// ======================

function openCityMenu() {
    const city = getCurrentCity();
    let html = `
        <h3>${city.name}</h3>
        <p>${city.description}</p>
        <div class="city-actions">
            <button onclick="openTradeMenu()">🏪 Торговать</button>
            <button onclick="rest()">🏨 Отдохнуть (-20 золота)</button>
            <button onclick="visitCaravanserai()">🏕️ Караван-сарай</button>
            <button onclick="showCityInfo('${city.id}')">📖 История города</button>
        </div>
    `;
    
    document.getElementById('city-popup').querySelector('.popup-content').innerHTML = html;
    document.getElementById('city-popup').classList.remove('hidden');
}

function rest() {
    if (player.gold >= 20) {
        player.gold -= 20;
        player.health = Math.min(100, player.health + 30);
        addLog("Вы отдохнули и восстановили здоровье (+30%).", "success");
    } else {
        addLog("Не хватает золота для отдыха (нужно 20 золота).", "error");
    }
    updateStats();
    closePopup('city-popup');
}

function visitCaravanserai() {
    let html = `<h3>Караван-сарай</h3><div class="companions-list">`;
    
    gameData.companions.forEach(companion => {
        const hasCompanion = player.companions.includes(companion.id);
        html += `
            <div class="companion">
                <h4>${companion.name}</h4>
                <p>${companion.description}</p>
                <p>Навык: ${companion.skill}</p>
                <p>Стоимость: ${companion.price} золота | Содержание: ${companion.upkeep} зол/день</p>
                <button onclick="${hasCompanion ? 'dismissCompanion' : 'hireCompanion'}('${companion.id}')" 
                    ${!hasCompanion && player.gold < companion.price ? 'disabled' : ''}>
                    ${hasCompanion ? 'Уволить' : 'Нанять'}
                </button>
            </div>
        `;
    });
    
    html += `</div>`;
    document.getElementById('event-popup').querySelector('.popup-content').innerHTML = html;
    document.getElementById('event-popup').classList.remove('hidden');
}

function hireCompanion(companionId) {
    const companion = gameData.companions.find(c => c.id === companionId);
    if (!companion) return;
    
    if (player.gold >= companion.price) {
        player.gold -= companion.price;
        player.companions.push(companionId);
        addLog(`Вы наняли ${companion.name}!`, "success");
    } else {
        addLog("Не хватает золота для найма!", "error");
    }
    
    updateStats();
    visitCaravanserai();
}

function dismissCompanion(companionId) {
    player.companions = player.companions.filter(id => id !== companionId);
    addLog(`Вы распрощались с ${gameData.companions.find(c => c.id === companionId).name}`, "neutral");
    updateStats();
    visitCaravanserai();
}

// ======================
// Вспомогательные функции
// ======================

function renderMap() {
    const mapEl = document.getElementById('map');
    mapEl.innerHTML = '';
    
    gameData.cities.forEach((city, index) => {
        const cityEl = document.createElement('div');
        cityEl.className = `city ${city.id === player.currentCity ? 'active' : ''}`;
        cityEl.textContent = city.name.split(' ')[0];
        cityEl.onclick = () => showCityInfo(city.id);
        mapEl.appendChild(cityEl);
        
        if (index < gameData.cities.length - 1) {
            const routeEl = document.createElement('div');
            routeEl.className = 'route';
            mapEl.appendChild(routeEl);
        }
    });
    
    updateCaravanPosition();
}

function updateCaravanPosition() {
    const caravan = document.querySelector('.caravan-icon');
    const activeCity = document.querySelector('.city.active');
    if (activeCity && caravan) {
        const rect = activeCity.getBoundingClientRect();
        const mapRect = document.getElementById('map').getBoundingClientRect();
        caravan.style.left = `${rect.left + rect.width/2 - mapRect.left - 15}px`;
    }
}

function closePopup(popupId) {
    document.getElementById(popupId).classList.add('hidden');
}

function closeAllPopups() {
    document.querySelectorAll('.popup').forEach(el => {
        el.classList.add('hidden');
    });
}

function showCityInfo(cityId) {
    const city = gameData.cities.find(c => c.id === cityId);
    if (!city) return;
    
    document.getElementById('history-title').textContent = city.name;
    document.getElementById('history-text').textContent = city.history;
    document.getElementById('history-popup').classList.remove('hidden');
}

function gameOver() {
    document.getElementById('actions-panel').innerHTML = '<button onclick="resetGame()">Новая игра</button>';
}

// ======================
// Инициализация игры
// ======================

function startGame() {
    document.getElementById('intro-screen').classList.add('hidden');
    document.getElementById('game-container').classList.remove('hidden');
    renderMap();
    updateStats();
    addLog(`Добро пожаловать в ${getCurrentCity().name}!`, "success");
}

function showCharacterSelect() {
    document.getElementById('intro-screen').classList.add('hidden');
    document.getElementById('character-select').classList.remove('hidden');
    
    const container = document.getElementById('characters-container');
    container.innerHTML = '';
    
    gameData.characterClasses.forEach(char => {
        const charEl = document.createElement('div');
        charEl.className = 'character-card';
        charEl.innerHTML = `
            <h3>${char.name}</h3>
            <p>${char.description}</p>
            <div class="char-stats">
                <p><strong>Золото:</strong> ${char.stats.gold}</p>
                <p><strong>Здоровье:</strong> ${char.stats.health}</p>
                <p><strong>Репутация:</strong> ${char.stats.reputation}</p>
            </div>
            <div class="char-inventory">
                <strong>Инвентарь:</strong> 
                ${Object.entries(char.inventory)
                    .filter(([_, count]) => count > 0)
                    .map(([id, count]) => `${count} ${gameData.goods.find(g => g.id === id)?.name || id}`)
                    .join(', ')}
            </div>
            <button onclick="selectCharacter('${char.id}')">Выбрать</button>
        `;
        container.appendChild(charEl);
    });
}

function selectCharacter(charId) {
    const char = gameData.characterClasses.find(c => c.id === charId);
    if (!char) return;
    
    player.character = charId;
    player.gold = char.stats.gold;
    player.health = char.stats.health;
    player.reputation = char.stats.reputation;
    player.inventory = {...char.inventory};
    player.caravanCapacity = charId === 'merchant' ? 30 : 20;
    
    document.getElementById('character-select').classList.add('hidden');
    startGame();
}

window.onload = function() {
    if (localStorage.getItem('silkRoadSave')) {
        document.getElementById('continue-btn').style.display = 'block';
    }
    renderMap();
    document.getElementById('intro-screen').classList.remove('hidden');
};

// Экспорт функций в глобальную область видимости
window.startGame = startGame;
window.showCharacterSelect = showCharacterSelect;
window.selectCharacter = selectCharacter;
window.openTradeMenu = openTradeMenu;
window.buyGood = buyGood;
window.sellGood = sellGood;
window.loadGame = loadGame;
window.resetGame = resetGame;
window.saveGame = saveGame;
window.openCityMenu = openCityMenu;
window.rest = rest;
window.visitCaravanserai = visitCaravanserai;
window.openTravelMenu = openTravelMenu;
window.travelTo = travelTo;
window.hireCompanion = hireCompanion;
window.dismissCompanion = dismissCompanion;
window.showCityInfo = showCityInfo;
window.closePopup = closePopup;
window.executeEventOption = executeEventOption;