document.addEventListener("DOMContentLoaded",function(){
    let close_login = document.getElementsByClassName("btn_modal_close")[0];
    let login = document.getElementsByClassName("login")[0];    
    let submit = document.getElementById("submit");
    let num = document.getElementsByClassName("num")[0];
    let num_list = document.getElementsByClassName("num")[0].nextElementSibling;
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let log = document.getElementsByClassName("log")[0];
    let lightBox2 = document.getElementById("lightbox2");
    let lightBox = document.getElementById("lightbox"); 
    console.log(login);

login.addEventListener("click",function(){
    lightBox.classList.remove("none");
});
close_login.addEventListener("click",function(){
    lightBox.classList.add("none");
});
// -----------------------------------------------------
num.addEventListener("keydown",function(e){
    // console.log(e.which);
    if(e.which >47 && e.which < 58 || e.which == 8){
    }
    else{
        e.preventDefault();
    }
});
// -----------------------------------------------------
let h;
function numnum(){
    h=""
    for(let n=1; n<=6;n++){
        let str_num = Math.floor(Math.random()*10) ;
        h += str_num+""
    }
    return h ;
}
num_list.innerHTML=numnum();

console.log(num_list.innerHTML);
num_list.addEventListener("click",function(){
    num_list.innerHTML=numnum();    
});

num.addEventListener("keyup",function(e){
    //濾掉非數字字元-------------------------------------------------
    let str = (num.value).replace( /\D/g,"");
    // console.log(str)
    e.target.value=str;});

// console.log(num_list.innerHTML);
// ------------------------------------------------------

submit.addEventListener("click",function(e){

    if(email.value == "" || !is.email(email.value) ){
        email.classList.add("error");
        alert("email輸入錯誤");
    }
    else{
        email.classList.remove("error");
        
    }

    if(password.value == ""){
        password.classList.add("error");
        alert("請輸入密碼");
    }
    else{
        password.classList.remove("error");
    }

    if(num.value == num_list.innerHTML){
        num.classList.remove("error");
    }
    else{
        num.classList.add("error");
        num_list.innerHTML=numnum();
        alert("輸入錯誤");
        
    }

if((!email.value == "" || is.email(email.value)) && !password.value == "" && num.value == num_list.innerHTML){
    alert("登入成功");
}
else{
    e.preventDefault()
}   
});

log.addEventListener("click",function(){
lightBox.classList.add("none");
lightBox2.classList.remove("none");

});


// -------------------------------------------------------------------------------------------------------------------

let close_login2 = document.getElementsByClassName("btn_modal_close")[1];
// console.log(close_login2)

close_login2.addEventListener("click",function(){
    lightBox2.classList.add("none");
})























































// -----------------------------------------------------------------------------------------------------------------------------

let bi = document.getElementsByClassName("bi-list")[0];
let li = document.getElementsByClassName("two")[0].querySelectorAll("li.lii");
let li2 = document.getElementsByClassName("two")[0].querySelectorAll("li.lii2");
let li_1 = document.getElementsByClassName("two")[0].querySelectorAll("li.d")[0];









bi.addEventListener("click",function(){
    for(let n of li){
        n.classList.toggle("on");
    }

})

li_1.addEventListener("click",function(e){
    e.preventDefault();
    for(let n of li2){
        n.classList.toggle("on");
    }
})


});

