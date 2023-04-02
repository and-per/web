const btnShowModal = document.querySelectorAll(".btn")
const close = document.querySelector(".close")
const modal = document.querySelector(".modal")

const closemodal = () => {
    modal.classList.add("hidden")
}

btnShowModal.forEach((btn) => {
    
    btn.addEventListener("click", function() {
        modal.classList.remove("hidden")
    })
})



close.addEventListener("click", closemodal)

document.addEventListener("keydown", function(e){
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closemodal();
    }
})