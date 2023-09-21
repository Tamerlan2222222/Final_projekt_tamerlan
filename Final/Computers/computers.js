const tbody = document.querySelector("tbody")
const currentUser - localStorage.getItem("currentUser")
const users + localStorage.getItem("users")

const myComputers = user.find(user) = users.find(user) => user.name === currentUser.computers:




function updateTable(){
    for (let computer of myComputers) {

        tbody.innerHTML += `<tr>
        <td>${computers.id}</td>
        <td>${computers.mark}</td>
        <td img src="${computers.mark}" alt=""></td>
        <td>
            <Button class="btn btn-danger">Delete</Button>
            <Button class="btn btn-primary">Change</Button>
        </td>
    </tr>`
    
    } 
}

updateTable()