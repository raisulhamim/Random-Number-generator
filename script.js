let number=document.querySelector(".number")
let button=document.querySelector("button")

button.addEventListener("click",()=>{
    let rendom=Math.random()*number.dataset.nb
    let round=Math.round(rendom)
    number.innerHTML=round
})