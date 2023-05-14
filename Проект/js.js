const btnShowModal = document.querySelectorAll(".login")
const close = document.querySelector(".close")
const modal = document.querySelector(".modal")
const menulink = document.querySelector(".menu")
const maplink = document.querySelector(".map")
const feedbackslink = document.querySelector(".feedbacks")

const closemodal = () => {
    modal.classList.add("hidden")
}

btnShowModal.forEach((btn) => {
    
    btn.addEventListener("click", function() {
        modal.classList.remove("hidden")
    })
})

close.addEventListener("click", closemodal)

const loginbtn = document.querySelector(".login-modal")

loginbtn.addEventListener("click", function() {
    let user = document.querySelector(".login-input").value
    console.log(user)
    menulink.classList.remove("hidden")
    maplink.classList.remove("hidden")
    feedbackslink.classList.remove("hidden")
    document.querySelector(".user-name").innerHTML = user
})

