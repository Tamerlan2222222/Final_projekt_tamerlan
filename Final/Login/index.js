const users = [
    {
        name: "ul1",
        password: "pl1",
        phone: "000-000-0000"
    }
];

const users = JSON.parse

if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users));
}

const allInputs = document.querySelectorAll("input");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(users);

    location.href = "../Slider/index.html";
});



