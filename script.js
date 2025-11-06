const greet = document.querySelector(".greet-val");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const box1=document.querySelector(".box-1");
const box2=document.querySelector(".box-2");
const box3=document.querySelector(".box-3");
const box4=document.querySelector(".box-4");
btn.addEventListener("click", () => {
    if(input.value!=""){
        greet.innerHTML = "Hello,"+input.value;
    }
});

box1.addEventListener("click",()=>{
    box1.style.backgroundColor="red";
    box1.style.color="white";
})
box2.addEventListener("click",()=>{
    box2.style.backgroundColor="blue";
    box2.style.color="white";
})
box3.addEventListener("click",()=>{
    box3.style.backgroundColor="green";
    box3.style.color="white";
})
box4.addEventListener("click",()=>{
    box4.style.backgroundColor="yellow";
    box4.style.color="black";
})


