import { useState } from "react"

export function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div className="counter">
            <button onClick={() => setCount(count + 1)}>Add +1</button>
            <button onClick={() => setCount(count - 1)}>Add -1</button>
            <p>Count: {count}</p>
        </div>
    )
}

// Счетчик
// Создайте компонент, который отображает счетчик и кнопку для увеличения значения счетчика при каждом нажатии на кнопку.