

// console.log(Math.ceil(5.0000000001)) //3.3 => 4

// console.log(Math.floor(5.999999999)) // 5.99 =>

// console.log(Math.round(5.4))

// console.log(Math.trunc(5.9999999999))

// console.log(5.234.toFixed(2))





// let chislo = Math.trunc(Math.random() * 6) + 1;
// console.log(chislo)


// // let inp = document.querySelector("Value")
// // inp.value = "aa"

// function a() {
//     document.querySelector(".myText").value = "AAAARGH"
// }



function again1() {
    let q = Math.floor(Math.random() * 100 + 1)

    console.log(q)
}

again1()

function a() {
again1()
}



function play(q) {
let w = document.querySelector(".inp").value
    if (w == q) {
        console.log(`:like:`)
    } else {
        console.log(`:dislike:`)
    }
}
