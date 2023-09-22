
const tbody = document.querySelector("tbody"); const currentUser = localStorage.getItem("currentUser"); const users = localStorage.getItem("users"); const addBtn = document.querySelector("#add"); const table = document.querySelector("table");

const myComputers = user.find(user => user.name === currentUser).computers; let change = false;

function updateTable() {

    for (let computer of myComputers) {
        tbody.innerHTML += `<tr>
<td>${computer.id}</td>
<td>${computer.mark}</td>
<td><img src="${computer.img}" alt=""></td>
<td>
  <Button id="${computer.id}d" class="btn btn-danger">Delete</Button>
  <Button class="btn btn-primary">Change</Button>
</td>
</tr>`;
    }
}
function addComputer() {

    if (!change) {
        const newComputer = {
            id: myComputers.length === 0 ? 1 : myComputers.at(-1).id + 1,
            mark: allInputs[0].value,
            ram: allInputs[1].value,
            gpu: allInputs[2].value,
            img: allInputs[3].value,
            cpu: allInputs[4].value,
            rom: allInputs[5].value,
            os: allInputs[6].value,
            new: allInputs[7].value,
        };
        myComputers.push(newComputer);
        for (let user of users) {
            if (user.name === currentUser) {
                user.computers = myComputers;
            }
        }
        localStorage.setItem("user", JSON.stringify(users));
        updateTable();
    }
}
function deleteComputer(id) {

    myComputers = myComputers.filter(comp => comp.id !== id);
}
table.addEventListener("click", (e) => {

    if (e.target.innerHTML === "Delete") {
        console.log(parseInt(e.target.id));
        deleteComputer(parseInt(e.target.id));
    } else if (e.target.innerHTML === "Change") {
        // ToDo: Add change computer logic
    }
});
addBtn.addEventListener("click", addComputer);


copy
