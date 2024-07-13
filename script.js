const cards = [
    'url(karta1.jpeg)',
    'url(karta2.jpeg)',
    'url(karta3.jpeg)',
    'url(karta4.jpeg)',
    'url(karta5.jpeg)',
    'url(karta6.jpeg)',
    'url(karta7.jpeg)',
    'url(karta8.jpeg)',
    'url(karta9.jpeg)',
    'url(karta10.jpeg)',
    'url(karta11.jpeg)',
    'url(karta12.jpeg)',
    'url(karta13.jpeg)',
    'url(karta14.jpeg)',
    'url(karta15.jpeg)',
    'url(karta16.jpeg)',
    'url(karta17.jpeg)',
    'url(karta18.jpeg)',
    'url(karta19.jpeg)',
    'url(karta20.jpeg)',
    'url(karta21.jpeg)',
    'url(karta22.jpeg)',
    'url(karta23.jpeg)',
    'url(karta24.jpeg)',
    'url(karta25.jpeg)',
    'url(karta26.jpeg)',
    'url(karta27.jpeg)',
    'url(karta28.jpeg)',
    'url(karta29.jpeg)',
    'url(karta30.jpeg)',
    'url(karta31.jpeg)',
    'url(karta32.jpeg)',
    'url(karta33.jpeg)',
    'url(karta34.jpeg)',
    'url(karta35.jpeg)',
    'url(karta36.jpeg)',
    'url(karta37.jpeg)',
    'url(karta38.jpeg)',
    'url(karta39.jpeg)',
    'url(karta40.jpeg)',
    'url(karta41.jpeg)',
    'url(karta42.jpeg)',
    'url(karta43.jpeg)',
    'url(karta44.jpeg)',
    'url(karta45.jpeg)',
    'url(karta46.jpeg)',
    'url(karta47.jpeg)',
    'url(karta48.jpeg)',
    'url(karta49.jpeg)',
    'url(karta50.jpeg)',
    'url(karta51.jpeg)',
    'url(karta52.jpeg)',
    'url(karta53.jpeg)',
    'url(karta54.jpeg)',
    'url(karta55.jpeg)',
    'url(karta56.jpeg)',
    'url(karta57.jpeg)',
    'url(karta58.jpeg)',
    'url(karta59.jpeg)',
    'url(karta60.jpeg)',
];

function getRandomCards() {
    let selectedCards = [];
    while (selectedCards.length < 7) {
        const randomIndex = Math.floor(Math.random() * cards.length);
        const card = cards[randomIndex];
        if (!selectedCards.includes(card)) {
            selectedCards.push(card);
        }
    }
    return selectedCards;
}

function displayCards() {
    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.innerHTML = '';  // очищаємо контейнер
    const randomCards = getRandomCards();
    randomCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.style.backgroundImage = card;
        cardsContainer.appendChild(cardElement);
    });
}

document.getElementById('gadatButton').addEventListener('click', displayCards);

// Показуємо перший набір карт при завантаженні сторінки
displayCards();
