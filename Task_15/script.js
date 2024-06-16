const container = document.querySelector('.container')
const list = document.createElement('ul')
container.append(list)


async function getPost() {
    const linkPosts = 'https://jsonplaceholder.typicode.com/posts'
    try {
        const response = await fetch(linkPosts)
        const posts = await response.json()
        console.log(posts);

        posts.forEach(element => {
            const listItem = document.createElement('li')
            const pH4 = document.createElement('div')
            const titleInfo = document.createElement('h4')
            const bodyInfo = document.createElement("p")
            const cat_girl_img = document.createElement('img')
            

            
            list.append(listItem)
            pH4.append(titleInfo,bodyInfo)
            listItem.append(pH4,cat_girl_img)  
            pH4.classList.add("li_left")
            listItem.classList.add('item')
            cat_girl_img.setAttribute("src","./img/cat_girl.jpg")
            titleInfo.textContent = element.title
            bodyInfo.textContent = element.body

  

        });
    } catch (error) {
        console.error(error);
    }
}
getPost()