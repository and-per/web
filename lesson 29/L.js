const slidescontainer = document.querySelector(".slides-container")
const slide = document.querySelector(".slide")
const prev = document.getElementById("prev")
const next = document.getElementById("next")

next.addEventListener("click", () => {
    console.log("Ы")
    const slidewidth = slide.clientWidth;
    console.log(slidewidth)
    slidescontainer.scrollLeft += slidewidth
})

prev.addEventListener("click", () => {
    console.log("Ы")
    const slidewidth = slide.clientWidth;
    console.log(slidewidth)
    slidescontainer.scrollLeft -= slidewidth
})