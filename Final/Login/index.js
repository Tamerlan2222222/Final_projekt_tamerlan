const user = [
    {
        name: "ul1",
        password: "pl1",
        phone: "000-000-0000"
    }
];

const users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : users;

if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users));
}

const allInputs = document.querySelectorAll("input");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(users);
    localStorage.setItem("users", JSON.stringify(users));
    location.href = "../Slider/main.html";
});