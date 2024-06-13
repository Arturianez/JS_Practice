// Default example
// const links = {
//     posts: 'https://jsonplaceholder.typicode.com/posts',
//     comments: 'https://jsonplaceholder.typicode.com/comments',
//     todo: 'https://jsonplaceholder.typicode.com/todos'
// }
// async function fetchApi(url) {
//     const directUrl = 'https://jsonplaceholder.typicode.com/users'
//     try {
//         const response = await fetch(url)
//         const data = await response.json()
//         return data
//     } catch {
//         throw new Error()
//     }
// } 
// const result = fetchApi(links.posts)
// const fetchTodo = fetchApi(links.todo)
// .then((res) => {
//     console.log(res)
// })

// result.then((res) => {
//     console.log(res)
// })



// Получение имен пользователей и сортировка их по алфавиту:
// Напишите функцию, которая запрашивает список всех пользователей и выводит их имена в алфавитном порядке.

// async function getNames() {
//     const linkNames = 'https://jsonplaceholder.typicode.com/users'
//     try {
//         const response = await fetch(linkNames)
//         const arrUsers = await response.json()

//         const arrNames = arrUsers.map((element) => {
//             return element.name
//         })
//         console.log(arrNames); // array of names
//         const sortNames = arrNames.sort()
//         console.log(sortNames); // sorted arraof names
//     } catch (error) {
//         console.error(error);
//     }
// }
// getNames()



// Получение постов всех пользователей и фильтрация по количеству слов:
// Напишите функцию, которая запрашивает все посты и выводит только те посты, 
// которые содержат более 100 слов.

// async function getPosts() {
//     const link = 'https://jsonplaceholder.typicode.com/posts'
//     try {
//         const response = await fetch(link)
//         const posts = await response.json()

//         const countWords = (text) => {
//             console.log(text.split(" ").length);
//             return text.split(/\s+/).length // "/\s+/" to split line on words
//         }

//         const fiterPosts = posts.filter(post => countWords(post.body) > 30)
//         console.log(fiterPosts);

//     } catch (error) {
//         console.error(error);
//     }
// }
// getPosts()


// Получение всех задач и фильтрация по статусу:
// Напишите функцию, которая запрашивает все задачи и выводит только завершенные задачи.

// async function getToDos() {
//     const link = 'https://jsonplaceholder.typicode.com/todos'
//     try {
//         const response = await fetch(link)
//         const todos = await response.json()
//         const filtredTodos = todos.filter((element) => {
//             if(element.completed === true) { 
//                 return element;
//             }
//         })
//         console.log(filtredTodos);
//     } catch (error) {
//         console.error(error);
//     }
// }
// getToDos()



// Получение фотографий из альбомов и фильтрация по длине названия:
// Напишите функцию, которая запрашивает все альбомы и фотографии, 
// затем выводит фотографии, название которых короче 20 символов.

// async function getPhotos() {
//     const link = 'https://jsonplaceholder.typicode.com/photos'
//     try {
//         const response = await fetch(link)
//         const photos = await response.json()
//         console.log(photos);

//         const filteredPhotos = photos.filter((element) => {
//             if(element.title.length > 20) {
//                 return element;
//             }
//         })
//         console.log(filteredPhotos);
//     } catch (error) {
//         console.error(error);
//     }
// }
// getPhotos()


// Получение первых 5 постов каждого пользователя:
// Напишите функцию, которая запрашивает список всех пользователей и их постов, 
// затем выводит первые 5 постов каждого пользователя.

// async function getPostsByUser(userId) {
//     const link = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
//     try {
//         const response = await fetch(link)
//         const posts = await response.json(link)
//         return posts.slice(0,5)
//     } catch (error) {
//         console.error(error);
//     }
// }

// async function getPostsFromUser() {
//     const userLink = 'https://jsonplaceholder.typicode.com/users'
//     try {
//         const response = await fetch(userLink)
//         const users = await response.json()

//         const userIds = users.map(user => user.id)
//         const postsByUser = await Promise.all(userIds.map(getPostsByUser))

//         const allPosts = postsByUser.flat()
//         console.log(allPosts);
//     } catch (error) {
//         console.error(error);
//     }
// }
// getPostsFromUser()



// Получение всех пользователей и их незавершенных задач:
// Напишите функцию, которая запрашивает всех пользователей и их задачи, 
// затем выводит пользователей и их незавершенные задачи.

// async function getTodos(userId) {
//     const todosLink = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
//     try {
//         const response = await fetch(todosLink)
//         const todos = await response.json()
//         // console.log("Tasks: ",todos);
//         const filteredArr = todos.filter((element) => {
//             if(element.completed === false) {
//                 return element
//             }
//         })
//         console.log(`Tasks need to do for user: ${userId}`,filteredArr);
//     } catch (error) {
//         console.error(error);
//     }
// }

// async function getUsers() {
//     const userLink = 'https://jsonplaceholder.typicode.com/users' 
//     try {
//         const response = await fetch(userLink)
//         const users = await response.json()
//         // console.log("Users",users);

//         const userIds = users.map(user => user.id)
//         // console.log("Users id: ",userIds);
//         await Promise.all(userIds.filter(getTodos))
//     } catch (error) {
//         console.error(error);
//     }
// }
// getUsers()


// Получение альбомов конкретного пользователя и их фотографий:
// Напишите функцию, которая запрашивает альбомы конкретного пользователя 
// и фотографии этих альбомов, затем выводит данные в виде объекта, где ключи — это ID альбомов, а значения — массивы фотографий.


// Получение пользователей, у которых больше 10 постов:
// Напишите функцию, которая запрашивает всех пользователей и их посты, затем выводит пользователей, у которых больше 10 постов.


// Фильтрация комментариев по длине тела и группировка по посту:
// Напишите функцию, которая запрашивает все комментарии, затем фильтрует те, 
// длина тела которых превышает 50 символов, и группирует их по ID постов.


// Получение всех постов и замена заголовков на заглавные буквы:
// Напишите функцию, которая запрашивает все посты, затем изменяет заголовки всех постов на заглавные буквы и выводит обновленные посты.


// Подсчет общего количества комментариев у каждого пользователя:
// Напишите функцию, которая запрашивает всех пользователей и их посты, 
// затем запрашивает комментарии к этим постам и выводит пользователей с общим количеством комментариев у каждого.


// Получение всех задач и их сортировка по дате завершения:
// Напишите функцию, которая запрашивает все задачи, затем сортирует их по дате завершения и выводит отсортированные задачи.


// Создание нового поста и добавление к существующим постам пользователя:
// Напишите функцию, которая создает новый пост для конкретного пользователя, 
// затем запрашивает все посты этого пользователя и выводит их вместе с новым постом.


// Обновление всех задач пользователя на завершенные:
// Напишите функцию, которая запрашивает все задачи конкретного пользователя, 
// затем обновляет их статус на завершенные и выводит обновленные задачи.


// Получение всех пользователей и фильтрация по количеству задач:
// Напишите функцию, которая запрашивает всех пользователей и их задачи, 
// затем выводит пользователей, у которых более 5 задач.


// Получение всех фотографий и создание массива URL:
// Напишите функцию, которая запрашивает все фотографии, затем создает массив их URL и выводит его.


// Получение всех альбомов и подсчет количества фотографий в каждом:
// Напишите функцию, которая запрашивает все альбомы и фотографии, 
// затем выводит альбомы с количеством фотографий в каждом.


// Получение всех постов и замена слов длиннее 6 символов на "****":
// Напишите функцию, которая запрашивает все посты, затем заменяет 
// в их содержании слова длиной более 6 символов на "****" и выводит обновленные посты.

