//Kecdiklerimizin praktikasi

// let btn = document.getElementById("btn")
// let ul=document.querySelector(".parent-li")
// let input=document.querySelector(".text-input")


// btn.onclick = function () {
//     let li=document.createElement("li")

//     li.className="list-group-item"
//     li.innerHTML=input.value
//     ul.append(li)
//     li.append(icon)
// }

// btn.addEventListener("click",function(){
//    let li=document.createElement("li")
//    li.className="list-group-item"
//    li.innerHTML=input.value
//    ul.append(li)
// })




/// Task cixma vurma toplama bolme

let btnYield = document.getElementById("yield")
let btnDivide = document.getElementById("divide")
let btnMinus = document.getElementById("minus")
let btnSum = document.getElementById("sum")

let number1 = document.getElementById("number1")
let number2 = document.getElementById("number2")
let result = document.getElementById("result")


btnYield.onclick = function () {
    result.value = number1.value * number2.value
    
}
btnDivide.onclick = function () {
    result.value = number1.value / number2.value
}
btnMinus.onclick = function () {
    result.value = number1.value - number2.value
}
btnSum.onclick = function () {
    result.value = parseInt(number1.value)+parseInt(number2.value)
}