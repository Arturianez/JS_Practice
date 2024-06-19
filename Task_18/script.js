// объединяем в один объект чак норрис апи с кенье уэст и выводим на страницу в формате 
// kanye said: ''
// chuck said:

const container = document.querySelector(".container")
const smartPhrase = document.querySelector(".smartPhrase")
const ChuckPhrase = document.querySelector(".ChuckPhrase")
const btn = document.querySelector(".btn")
const sumPhrase = document.querySelector(".sumPhrase")

btn.addEventListener('click', getPhrase)

async function getPhrase() {
    const linkKanye = `https://api.kanye.rest`
    const linkChuck = `https://api.chucknorris.io/jokes/random`

    try {
        const response = await fetch(linkKanye)
        const phrasesKanye = await response.json()
        console.log("Kanye: ", phrasesKanye);

        const responseChuck = await fetch(linkChuck)
        const phrasesChuck = await responseChuck.json()
        console.log("Chuck: ",phrasesChuck);

        smartPhrase.textContent = " Kanye said: " + phrasesKanye.quote
        ChuckPhrase.textContent = " Chuck said: " + phrasesChuck.value


        let guysSaid = [smartPhrase.textContent, ChuckPhrase.textContent]
        console.log("Both guys said: ",guysSaid);

        sumPhrase.innerHTML = ''
        const bothPhrase = document.createElement("div")
        bothPhrase.classList.add("equal")
        bothPhrase.append(guysSaid)
        sumPhrase.append(bothPhrase)

    } catch (error) {
        console.error(error);
    }
}
getPhrase()