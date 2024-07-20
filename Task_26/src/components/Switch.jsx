import { useState } from "react"

export function Switch() {
    const [turnOn, setTurnOn] = useState(true)
    return (
        <div className="switch">
            <button onClick={() => setTurnOn(!turnOn)}>Turn On/Off</button>
            {
                turnOn && <p>On</p>
            }
            {
                !turnOn && <p>Off</p>
            }
            
        </div>
    )
}

// Переключатель
// Создайте компонент, который отображает текст "On" или "Off" и кнопку для переключения состояния.