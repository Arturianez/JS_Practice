import React, { useState } from 'react';
export function Greetings() {
    const [dayTime, setDayTime] = useState(true)
    const now = new Date()
    const hour = now.getHours()

    return (
        <div className="dayTime">
            <button onClick={() => setDayTime(!dayTime)}>Show date</button>
            {
                dayTime && (hour >= 5 && hour < 12) && <p>Good morning</p>
            }
            {
                dayTime && (hour >= 12 && hour < 18) && <p>Good afternoon</p>
            }
            {
                dayTime && (hour >= 18 && hour < 23) && <p>Good evening</p>
            }
        </div>
    )
}
// Отображение приветствия в зависимости от времени суток
// Создайте компонент, который отображает "Доброе утро", "Добрый день" или "Добрый вечер" в зависимости от текущего времени.