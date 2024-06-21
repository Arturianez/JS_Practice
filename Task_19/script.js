const container = document.querySelector(".container")
const btnOpen = document.querySelector(".btn")
const btnClose = document.querySelector(".btn_close")
const modal = document.querySelector(".modal")
const textTitle = document.querySelector(".text_title")
const textBody = document.querySelector(".text_body")

const content1 = document.querySelector(".content1")
const content2 = document.querySelector(".content2")


btnOpen.addEventListener('click', openWindow)
btnClose.addEventListener('click', closeWindow)

function openWindow() {
    modal.style.display = "flex"
}
function closeWindow() {
    modal.style.display = "none"
}

async function getPosts() {
    const link = `https://jsonplaceholder.typicode.com/posts`

    try {
        const response = await fetch(link)
        const posts = await response.json()
        console.log(posts);


        posts.forEach((element, index) => {

            if (index === 0) {
                content1.querySelector('.text_title').textContent = element.title;
                content1.querySelector('.text_body').textContent = element.body;
              } else if (index === 1) {
                content2.querySelector('.text_title').textContent = element.title;
                content2.querySelector('.text_body').textContent = element.body;
              }

            // let randomIndex = Math.floor(Math.random()  *  100);
            // if (randomIndex === index) {
            //   content1.querySelector('.text_title').textContent = element.title;
            //   content1.querySelector('.text_body').textContent = element.body;
            //   content2.querySelector('.text_title').textContent = element.title;
            //   content2.querySelector('.text_body').textContent = element.body;
            // } else {
            //     console.log("Превышена длинна");
            // }

            // posts.forEach(element => {
            //     textTitle.textContent = element.title
            //     textBody.textContent = element.body
            // });

          });
    } catch (error) {
        console.error(error);
    }
}

getPosts()
