// const age =  [1920, 2013, 2020, 1996, 1630]


// function age129 (age) {
// console.log(2023 - age[0])
// console.log(2023 - age[1])
// console.log(2023 - age[4])

// }

// age129(age)

// let aboba227 = ["antoshka","kartoshka"]
// aboba227.push("a")
// console.log(aboba227)

// aboba227.unshift("aaaargh")
// console.log(aboba227)

// console.log(aboba227.indexOf('antoshka'))

// console.log(aboba227.includes('antoshka'))

// let names = ["cool", "e"]

// console.log(names)
// function a() {
// let name3 = prompt('ваше имя')
// if (names.includes(name3)==false) {
//     names.push(name3)  
// }else{
//   a()
// }
// }

// a()

// let d = {
//     age: ["86"],
//     names: ["Атон"],
//     job: ["учитель веб-азработки"],
//     students: ["много"]

// }

// console.log(d.age)
// console.log(d["names"])

// teacher.location = "Новосибирск"

// const teacher = {
//     firstName : "Диана",
//     lastName: "Середа",
//     hasdriverlicense: false,
//     birthYear: 1999,
//     calcAge: function(birthYear) {
//         return 2023 - this.birthYear
//     }
// }

// console.log(teacher.calcAge())

const person1 = {
    fname: "Иван",
    weight: 72,
    height: 0,
    imt: function(){
        return this.weight / (this.height ** 2)
    }
};

const person2 = {
    fname: "Алексей",
    weight: 92,
    height: 1.95,
    imt: function(){
        return this.weight / (this.height ** 2)
    }
};


console.log(person1.imt())

console.log(person2.imt())


    if (person1.imt() > person2.imt()) {
        console.log("Иван жирнее!!!!1!")
    } else {
        console.log("Алексей жирнее!!!!1!")
    }








