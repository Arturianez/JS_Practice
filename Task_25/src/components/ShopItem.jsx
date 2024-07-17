


function ShopItem(props) {
    const {title,description,src} = props

  return (
    <li>
        <img src={src} />
        <h3>{title}</h3>
        <p>{description}</p>
        <button>Добавить в корзину</button>
    </li>
  )
}

export default ShopItem
