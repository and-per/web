const tabsBtn = document.querySelectorAll(".tab")
const articles = document.querySelectorAll(".content")

tabsBtn.forEach((tab) => {
    tab.addEventListener("click", function () {
            const currentTab = tab
        const id = currentTab.dataset.id
        console.log(id)


  tabsBtn.forEach((btn) => {
    btn.classList.remove("act")
})

currentTab.classList.add("act")

  articles.forEach((article) => {
    article.classList.remove("act")
  })

  let element = document.getElementById(id)
  element.classList.add("act")
  })  
}) 


