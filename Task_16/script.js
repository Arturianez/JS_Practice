const container = document.querySelector('.container')
const listUsers = document.createElement("ul")
container.append(listUsers)

async function getUsers() {
    const link = 'https://jsonplaceholder.typicode.com/users'

    try {
        const response = await fetch(link)
        const users = await response.json()
        console.log(users);

        users.forEach((element) => {
            
            const userLi = document.createElement("li")
            const userImg = document.createElement("img")
            const name = document.createElement("h3")
            const userName = document.createElement("div")
            const userEmail = document.createElement("div")
            const userAddress = document.createElement("div")


            listUsers.append(userLi)
            userLi.append(userImg)


            userLi.append(name)
            userLi.append(userName)
            userLi.append(userEmail)
            userLi.append(userAddress)



            userImg.setAttribute("src", "./img/user_img.png")
            name.textContent = `name: ${element.name}`
            userName.textContent = `username: ${element.username}`
            userEmail.textContent = `email: ${element.email}`

            const { street, suite, city, zipcode } = element.address;
            const addressItem = document.createElement("div");
            addressItem.textContent = `Street: ${street}, Suite: ${suite}, City: ${city}, ZipCode: ${zipcode}`;
            userAddress.append(addressItem);


        })
        
    } catch (error) {
        console.error(error);
    }
}
getUsers()