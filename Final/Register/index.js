const allInputs = document.querySelectorAll("input");
const button = document.querySelector("button");

const users = localStorage.getItem("users")

button.addEventListener("click", (e) => {
    if (allInputs[1].checkValidity("form control")) {
        e.preventDefault();
        let newUser = {
            name: allInputs[0].value,
            phone: allInputs[1].value,
            email: allInputs[2].value,
        };

        users.push(newUser);

        localStorage.setItem('users', JSON.stringify(users));

        location.href = "../Login/index.html";
    } else {
        alert("Phone number is wrong");
    }
});