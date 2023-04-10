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

// console.log(num_list.innerHTML);
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
let num2 = document.getElementsByClassName("num(1)")[0];
let num2_random =num2.nextElementSibling ;
let previous = document.getElementById("submita");
let email1 = document.getElementById("emai(l)");
let password1 = document.getElementById("password(1)");
let password2 = document.getElementById("password(2)");
let check1 = document.getElementsByClassName("checkbox")[0];
let check2 = document.getElementsByClassName("checkbox")[1];
let sublog = document.getElementById("submitb");
console.log(num2_random)

close_login2.addEventListener("click",function(){
    lightBox2.classList.add("none");
})



previous.addEventListener("click",function(){
    lightBox2.classList.add("none");    
    lightBox.classList.remove("none");
});










num2_random.innerHTML=numnum();

num2_random.addEventListener("click",function(){
    num2_random.innerHTML=numnum();    
});


num2.addEventListener("keydown",function(e){
    if(e.which>47 && e.which<58 || e.which == 8){
    }
    else{
        e.preventDefault();
    }
});

num2.addEventListener("keyup", function(e){
    let str = (num2.value).replace(/\D/g,"");
    e.target.value=str;
});





sublog.addEventListener("click",function(e){
    if(email1.value == "" || !is.email(email1.value)){
        alert("請輸入email 或 email格式錯誤");
        email1.classList.add("error");
        e.preventDefault();
    }
    else{
        email1.classList.remove("error");
    }

    if(num2.value == num2_random.innerHTML){
        num2.classList.remove("error");
    }
    else{
        alert("確認碼錯誤");
        num2.classList.add("error");
        num2_random.innerHTML=numnum();
        e.preventDefault();
    }

    if(password1.value == password2.value && (!password1.value == "" && !password2.value == "")){
        password1.classList.remove("error");
        password2.classList.remove("error");
    }
    else{
        alert("密碼確認錯誤");
        password1.classList.add("error");
        password2.classList.add("error");
        e.preventDefault();
    }
    if(!check2.checked){
        alert("請勾選框同意 Blair's Poke 客戶隱私權政策與客戶服務條款");
        check2.nextElementSibling.classList.add("error");
    }


    if((!email1.value == "" || is.email(email1.value)) && (password1.value == password2.value && (!password1.value == "" && !password2.value == "")) && num1.value == num_value.innerHTML && check2.checked){
        alert("註冊成功");
    }
    else{
        e.preventDefault()
    }   

}); 











































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

