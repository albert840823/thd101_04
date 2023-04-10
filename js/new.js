document.addEventListener("DOMContentLoaded",function(){
    let btn = document.getElementsByClassName("nn")[0];
    let btn2 = btn.nextElementSibling;
    let block1 = document.getElementsByClassName("new")[0];
    let block2 = document.getElementsByClassName("new2")[0];
    console.log(btn);

    // ---------------------------------------------
    btn.addEventListener("click", function(){
        btn2.classList.remove("on");
        btn.classList.add("on");
       
        block2.classList.remove("off");
        block1.classList.add("off");
       
    })
    btn2.addEventListener("click",function(){
        btn.classList.remove("on");
        btn2.classList.add("on");
        
        block1.classList.remove("off");
        block2.classList.add("off");
        
    })
});