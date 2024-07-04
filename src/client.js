var cirnos = 0

const createCirno = function() {
    const cirno = document.createElement("img")
    cirno.src = "assets/CirnoLaugh.gif"
    cirno.className = "mini-cirno funky"
    
    cirno.style.left = (Math.random() * 100) + "vw"
    cirno.style.position = "absolute"

    cirno.addEventListener("animationend", () => {
        cirno.remove()
    })

    document.getElementById("cirno-container").appendChild(cirno)
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("cirno").addEventListener("click", () => {
        cirnos += 1
        document.getElementById("counter").textContent = cirnos + " Cirnos"
        createCirno()
    })
})