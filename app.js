var firstInput=document.querySelector(".firstInput")
var rangeInput=document.querySelector(".rangeInput")
var rangeValue=document.querySelector(".rangeValue")
var amountValue=document.querySelector(".amountValue")
var billValue=document.querySelector(".billValue")

rangeInput.addEventListener("change",()=>{
    rangeValue.innerText=`${rangeInput.value}%`
    amountValue.innerText=`${rangeInput.value},00`
    billValue.innerText=`${+firstInput.value+(+rangeInput.value)},00`
   
})