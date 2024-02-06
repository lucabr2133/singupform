const password=document.querySelector("#password");
const confirms=document.querySelector("#confirmps");
const h6=document.querySelector(".h6")
confirms.addEventListener("input",()=>{
    if(password.value==confirms.value){
        password.classList.remove("error");
        confirms.classList.remove("error");
        h6.style.display="none"
        
    }else{
        password.classList.add("error");
        confirms.classList.add("error");
        h6.style.display="block"
    }
})
password.addEventListener("input",()=>{
    if(password.value==confirms.value){
        password.classList.remove("error");
        confirms.classList.remove("error");
        h6.style.display="none"
    }else{
        password.classList.add("error");
        confirms.classList.add("error");
        h6.style.display="block"
    }
})