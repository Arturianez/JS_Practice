import logo from "../assets/logo_cat.png"

export function Header() {
    return (
        <header>
            <ul className="header_list">
                <li>Home</li>
                <li>About</li>
                <li>
                    <img src={logo} alt="" />
                </li>
                <li>Shop</li>
                <li>Contacts</li>
            </ul>
        </header>
    )
          
}