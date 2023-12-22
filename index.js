//created root -->> created child -->> appended the child

const root = document.getElementById("root")
const p = document.createElement('p')
p.innerText = "Bruce Wayne of Gotham"      //innerText because we are not injecting any text, just text
root.appendChild(p)