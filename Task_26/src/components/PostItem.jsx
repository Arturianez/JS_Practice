
export function PostItem(props) {
    const {title,description,src} = props
    return (
        <li>
            <div className="left_text">
                <p>{title}</p>
                <p>{description}</p>
            </div>
            <img src={src}/>
        </li>
    )
}