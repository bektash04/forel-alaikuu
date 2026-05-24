# 🐟 Форель Алайкуу — сайт форелевого хозяйства

Современный многостраничный сайт на React + Vite + Tailwind CSS с поддержкой 3 языков (Русский, Кыргызский, Английский).

## 🚀 Запуск проекта

### 1. Установка Node.js
Скачай и установи Node.js версии 18 или новее: https://nodejs.org

### 2. Установка зависимостей
Открой терминал в папке проекта и выполни:

```bash
npm install
```

### 3. Запуск в режиме разработки

```bash
npm run dev
```

Сайт откроется по адресу: **http://localhost:5173**

### 4. Сборка для продакшна

```bash
npm run build
```

Готовые файлы будут в папке `dist/` — их можно загрузить на любой хостинг.

## 📁 Структура проекта

```
forel-alaikuu/
├── index.html              # Главный HTML
├── package.json            # Зависимости проекта
├── vite.config.js          # Конфиг Vite
├── tailwind.config.js      # Конфиг Tailwind CSS
├── postcss.config.js       # Конфиг PostCSS
└── src/
    ├── main.jsx            # Точка входа
    ├── App.jsx             # Главный компонент (роутинг)
    ├── index.css           # Стили Tailwind
    ├── components/         # Компоненты
    │   ├── Header.jsx      # Шапка с навигацией
    │   ├── Footer.jsx      # Подвал
    │   ├── Logo.jsx        # Логотип
    │   └── FloatingActions.jsx # Плавающие кнопки WhatsApp/телефон
    ├── pages/              # Страницы сайта
    │   ├── Home.jsx        # Главная
    │   ├── About.jsx       # О нас
    │   ├── Products.jsx    # Продукция
    │   ├── Gallery.jsx     # Галерея
    │   ├── Delivery.jsx    # Доставка
    │   ├── Reviews.jsx     # Отзывы
    │   └── Contacts.jsx    # Контакты
    └── data/
        └── translations.js # Тексты на 3 языках
```

## ✏️ Как редактировать

### Изменить тексты
Открой `src/data/translations.js` — там все тексты на 3 языках.

### Изменить телефон
В `src/data/translations.js` найди строки внизу:
```js
export const PHONE = '+996 700 000 000';
export const PHONE_RAW = '+996700000000';
export const TELEGRAM = 'forelalaikuu';
```

### Изменить фото на главной
Открой `src/pages/Home.jsx` — там фото форели через URL. Замени URL на свои фото:
```jsx
<img src="https://images.unsplash.com/..." />
```

### Изменить цены
Открой `src/pages/Products.jsx` — найди объект `products` и измени `price`.

## 🎨 Что внутри

- ✅ 7 страниц (Главная, О нас, Продукция, Галерея, Доставка, Отзывы, Контакты)
- ✅ 3 языка (РУС / КЫР / ENG)
- ✅ Адаптивный дизайн (мобильный / планшет / ноутбук / ПК)
- ✅ Калькулятор заказа
- ✅ Форма заявки
- ✅ Плавающие кнопки WhatsApp и телефон
- ✅ Sticky навигация на десктопе
- ✅ Бургер-меню на мобильных

## 📞 Контакты в коде

Все контакты можно изменить в `src/data/translations.js`.

---

Сделано с ❤️ для **Форель Алайкуу**
