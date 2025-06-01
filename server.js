const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Разрешаем обработку JSON данных
app.use(express.json());

// Разрешаем CORS для всех источников
app.use(cors());

// Обработка POST-запроса на бронирование
app.post('/api/reservations', (req, res) => {
    const { date, time, people } = req.body;

    // Проверяем, что все данные отправлены
    if (!date || !time || !people) {
        return res.status(400).json({ error: 'Все поля обязательны для заполнения' });
    }

    // Если все данные корректны, возвращаем успешный ответ
    res.status(200).json({ message: 'Бронирование успешно!' });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
