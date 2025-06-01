document.getElementById('booking-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // предотвращаем перезагрузку страницы

    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const people = document.getElementById('people').value;

    // Проверка, что все поля заполнены
    if (!date || !time || !people) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    // Отправка данных на сервер
    try {
        const response = await fetch('http://localhost:3000/api/reservations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ date, time, people })
        });

        const data = await response.json();

        if (response.ok) {
            document.getElementById('response-message').textContent = 'Бронирование подтверждено!';
            document.getElementById('response-message').style.color = 'green';

            // Очистка формы после успешного бронирования
            document.getElementById('booking-form').reset();
        } else {
            document.getElementById('response-message').textContent = data.error;
            document.getElementById('response-message').style.color = 'red';
        }
    } catch (error) {
        console.error('Ошибка при бронировании:', error);
        document.getElementById('response-message').textContent = 'Ошибка при бронировании.';
        document.getElementById('response-message').style.color = 'red';
    }
});
