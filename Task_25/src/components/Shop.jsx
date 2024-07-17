import ShopItem from "./ShopItem";
import girl_1 from "../assets/girl_1.jpg"
import girl_2 from "../assets/girl_2.png"


export function Shop() {
    const shopList = [
        {
            id: 1,
            title: "Футболка №1",
            description: "Описание Описание Описание Описание Описание Описание Описание Описание",
            src: girl_1,
        },
        {
            id: 2,
            title: "Футболка №2",
            description: "Описание Описание Описание Описание Описание Описание Описание Описание",
            src: girl_2,
        },
        {
            id: 3,
            title: "Футболка №3",
            description: "Описание Описание Описание Описание Описание Описание Описание Описание",
            src: girl_1,
        },
        {
            id: 4,
            title: "Футболка №4",
            description: "Описание Описание Описание Описание Описание Описание Описание Описание",
            src: girl_2,
        },

    ]
  return (
    <div className="about">
      <h2>Shop</h2>
      <ul className="shop_list">
        {
            shopList.map(item => (
                <ShopItem key={item.id} title={item.title} description={item.description} src={item.src}/>
            ))
        }
        </ul>;
    </div>
  );
}
