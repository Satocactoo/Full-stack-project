// База данных блюд азиатской кухни
const menuData = [
    {
        id: 1,
        title: "WOK с говядиной и овощами",
        category: "wok",
        price: "480 ₸",
        desc: "Лапша удон, нежная говядина, болгарский перец, стручковая фасоль в соусе терияки.",
        img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        title: "Ролл Филадельфия Классик",
        category: "sushi",
        price: "650 ₸",
        desc: "Свежайший лосось, сливочный сыр крем-чиз, авокадо, рис, нори.",
        img: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        title: "Суп Том Ям с креветками",
        category: "soup",
        price: "590 ₸",
        desc: "Традиционный тайский остро-кислый суп с тигровыми креветками, грибами и кокосовым молоком.",
        img: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        title: "WOK с курицей и грибами",
        category: "wok",
        price: "420 ₸",
        desc: "Лапша соба, куриное филе, древесные грибы, лук-порей, кунжут, устричный соус.",
        img: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        title: "Ролл Дракон Огненный",
        category: "sushi",
        price: "720 ₸",
        desc: "Угорь, авокадо, огурец, икра тобико, острый фирменный соус шрирача.",
        img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        title: "Рамен с курицей",
        category: "soup",
        price: "510 ₸",
        desc: "Насыщенный куриный бульон, пшеничная лапша, маринованное яйцо, нори, зелёный лук.",
        img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"
    }
];

const menuGrid = document.getElementById('menu-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

// Функция отрисовки карточек
function renderMenu(category = 'all') {
    menuGrid.innerHTML = '';
    
    // Фильтрация массива
    const filteredItems = category === 'all' 
        ? menuData 
        : menuData.filter(item => item.category === category);

    // Создание HTML для каждого блюда
    filteredItems.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('menu-card');
        // Небольшая задержка анимации для каскадного появления
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <img src="${item.img}" alt="${item.title}" class="card-img">
            <div class="card-content">
                <h3 class="card-title">${item.title}</h3>
                <p class="card-desc">${item.desc}</p>
                <div class="card-footer">
                    <span class="card-price">${item.price}</span>
                    <button class="order-btn" onclick="addToCart('${item.title}')">В корзину</button>
                </div>
            </div>
        `;
        menuGrid.appendChild(card);
    });
}

// Обработчики событий для кнопок фильтров
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Убираем активный класс у всех кнопок
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Добавляем текущей
        button.classList.add('active');
        
        const category = button.getAttribute('data-category');
        renderMenu(category);
    });
});

// Интерактив кнопки "В корзину" (можно расширить до полноценной корзины)
function addToCart(itemTitle) {
    // Создаем кастомное всплывающее уведомление
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '30px';
    notification.style.right = '30px';
    notification.style.backgroundColor = '#ff5500';
    notification.style.color = '#fff';
    notification.style.padding = '15px 25px';
    notification.style.borderRadius = '8px';
    notification.style.boxShadow = '0 0 15px rgba(255, 85, 0, 0.6)';
    notification.style.zIndex = '10000';
    notification.style.fontWeight = '600';
    notification.style.transition = 'all 0.3s ease';
    notification.innerText = `Блюдо "${itemTitle}" добавлено в корзину! 🥢`;

    document.body.appendChild(notification);

    // Удаляем уведомление через 2.5 секунды
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 2500);
}

// Первичная отрисовка при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    renderMenu('all');
});