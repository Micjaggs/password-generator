const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let genButton = document.getElementById("generate")
let passA = document.getElementById("pass-1")
let passB = document.getElementById("pass-2")
genButton.addEventListener("click", getRandomChar1)
genButton.addEventListener("click", getRandomChar2)

function getRandomChar1() {
    let password = []
    for (let i = 0; i < 15; i++) {
        let random = Math.floor(Math.random() * characters.length)
        password.push(characters[random])  
    }
    let newPass = password.join("")
    passA.textContent = newPass
}

function getRandomChar2() {
    let password = []
    for (let i = 0; i < 15; i++) {
        let random = Math.floor(Math.random() * characters.length)
        password.push(characters[random])  
    }
    let newPass = password.join("")
    passB.textContent = newPass
}
