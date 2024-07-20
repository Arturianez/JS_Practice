import cat_girl1 from "../assets/cat_girl1.jpg"
import { PostItem } from "./PostItem"

export function Post() {
    const postsList = [
        {
            id:1,
            title: "title: 'first'",
            description: "description: 'first'",
            src: cat_girl1
        },
        {
            id:2,
            title: "title: second",
            description: "description: 'first'",
            src: cat_girl1
        },
        {
            id:3,
            title: "title: third",
            description: "description: 'first'",
            src: cat_girl1
        },
        {
            id:4,
            title: "title: 4th",
            description: "description: 'first'",
            src: cat_girl1
        }
    ]
    return (

       
        <div className="posts">
            <h2>Posts</h2>
            <button>Create</button>
            <ul>
                {
                    postsList.map(item => (
                        <PostItem key={item.id} title={item.title} description={item.description} src={item.src}/>
                    ))
                }
            </ul>
            <button>Render</button>
        </div>
    )
}