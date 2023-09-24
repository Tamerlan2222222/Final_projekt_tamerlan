const userss = JSON.parse(localStorage.getItem("users"))
const nav

let mask = []
let computers = []

for (let user of users) {
    for (let comp of user.computers) {
        computers.push(comp)
        if (!marks.includes(comp.mark)) {
            marks.push(comp.mark)
        }

    }

}


for (let mark of marks) {
    nav.innetHTML += "    <div class="nav flex - column nav - pills me - 3" id="v - pills - tab" role="tablist" aria-orientation="vertical">
        < button class="nav-link active" id = "$(mark)" data - bs - toggle="pill" data - bs - target="#$(mark)" type = "button" role = "tab" aria - controls="$(mark)" aria - selected="true" > Home</button >
  </div > "
}