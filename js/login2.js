document.addEventListener("DOMContentLoaded",function(){
    let previous = document.getElementById("submita");
    let lightBox2 = document.getElementById("lightbox2"); 
    let lightBox = document.getElementById("lightbox");
    let email1 = document.getElementById("emai(l)");
    let password1 = document.getElementById("password(1)");
    let password2 = document.getElementById("password(2)");
    let num1 = document.getElementsByClassName("num(1)")[0];
    let num_value = document.getElementsByClassName("num(1)")[0].nextElementSibling;
    let check1 = document.getElementsByClassName("checkbox")[0];
    let check2 = document.getElementsByClassName("checkbox")[1];
    let sublog = document.getElementById("submitb");
    let outbtn = document.getElementsByClassName("btn_modal_close")[1];

    // console.log(check2);

    // ------------------------------------------------------------

    num1.addEventListener("keydown",function(e){
        if(e.which>47 && e.which<58 || e.which == 8){
        }
        else{
            e.preventDefault();
        }
    num1.addEventListener("keyup", function(e){
        let str = (num1.value).replace(/\D/g,"");
        e.target.value=str
    })

    });  
    // ------------------------------------------------------------
    let h;
    function numnum(){
        h = ""
        for(let n=0;n<6;n++){
            h+=Math.floor(Math.random()*10);
         }
         num_value.innerHTML=h;
         return h ;
       };
       numnum()

        num_value.addEventListener("click",function(){
            // num_value.innerHTML=""; 
            num_value.innerHTML=numnum();
        });

        // check2.addEventListener("click",function(){
        //     console.log(check2.nextElementSibling);
            
        // })
    //-------------------------------------------------------------
    // sublog.addEventListener("click",function(e){
    //     if(email1.value == "" || !is.email(email1.value)){
    //         alert("請輸入email 或 email格式錯誤");
    //         email1.classList.add("error");
    //         e.preventDefault();
    //     }
    //     else{
    //         email1.classList.remove("error");
    //     }

    //     if(num1.value == num_value.innerHTML){
    //         num1.classList.remove("error");
    //     }
    //     else{
    //         alert("確認碼錯誤");
    //         num1.classList.add("error");
    //         num_value.innerHTML=numnum();
    //         e.preventDefault();
    //     }

    //     if(password1.value == password2.value && (!password1.value == "" && !password2.value == "")){
    //         password1.classList.remove("error");
    //         password2.classList.remove("error");
    //     }
    //     else{
    //         alert("密碼確認錯誤");
    //         password1.classList.add("error");
    //         password2.classList.add("error");
    //         e.preventDefault();
    //     }
    //     if(!check2.checked){
    //         alert("請勾選框同意 Blair's Poke 客戶隱私權政策與客戶服務條款");
    //         check2.nextElementSibling.classList.add("error");
    //     }


    //     if((!email1.value == "" || is.email(email1.value)) && (password1.value == password2.value && (!password1.value == "" && !password2.value == "")) && num1.value == num_value.innerHTML && check2.checked){
    //         alert("註冊成功");
    //     }
    //     else{
    //         e.preventDefault()
    //     }   

    // }); 

    // ------------------------------------------------------------
    previous.addEventListener("click",function(){
        lightBox2.classList.add("none");    
        lightBox.classList.remove("none");
    });

    outbtn.addEventListener("click", function(){
        lightBox2.classList.add("none"); 
    });
// ---------------------
});