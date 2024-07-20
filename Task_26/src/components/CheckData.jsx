import { useState } from "react"

export function CheckData() {
    const [data, setData] = useState([2,3,56,777,1099])

    return (
        <div className="dataList">
        <p>Data:</p>
            {
                data.length > 0 ? (
                    data.map((item, index) => {
                        return <p key={index}>{item}</p>
                    })
                ) : (
                    <p>Нет Данных</p>
                )
                
            }
        </div>
    )
}

// Отображение сообщения в зависимости от наличия данных
// Создайте компонент, который отображает сообщение "Нет данных" или список элементов, если данные доступны.