const container = document.querySelector(".container")
const ulCat = document.querySelector(".ulCat")
const btn = document.querySelector(".btn")


function removeCat() {
    while (ulCat.firstChild) {
        ulCat.removeChild(ulCat.firstChild);
    }
    getCats()
}

btn.addEventListener("click", removeCat)


async function getCats() {
    const linkOfCats = `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1`

    try {
        const response = await fetch(linkOfCats)
        const cats = await response.json()
        console.log(cats);

            cats.forEach(element => {
                const liCat = document.createElement("li")
                const imgCat = document.createElement("img")
                const idCat = document.createElement("div")
                const urlCat = document.createElement("div")

                const description = document.createElement("div")
                description.classList = "description"

                imgCat.src = element.url
                idCat.textContent = `id котика: ${element.id}`
                urlCat.textContent = `Ссылка на картинку: ${element.url}`

                
                liCat.append(imgCat)
                liCat.append(description)
                description.append(idCat)
                description.append(urlCat)
                ulCat.append(liCat)

            });


    } catch (error) {
        console.error(error);
    }
}













