const input = document.querySelector("#searchinput")
const usersList = document.querySelector("#users")
let users = []


window.addEventListener("DOMContentLoaded", async ()=>{
    usersList.innerHTML = "<h1>Loading</h1>"
    const data = await loadUsers()
    users = data.data
    renderUsers(users)
})

async function loadUsers(){
    const response = await fetch("https://fakerapi.it/api/v1/books?_quantity=100")
    return await response.json()
}

input.addEventListener("keyup",e=>{
    const newUsers = users.filter(user => `${user.title.toLowerCase()}`.includes(input.value.toLowerCase()))
    renderUsers(newUsers)
})

const createUsersItem = users => users.map(user=> `<li class="bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer">${user.title}</li>`).join(" ")

function renderUsers(users){
    const itemString = createUsersItem(users)
    usersList.innerHTML = itemString
}