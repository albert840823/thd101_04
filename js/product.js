let btn1 = document.getElementsByClassName("-");
let btn2 = document.getElementsByClassName("+");
let put = document.getElementsByClassName('main');

for(let n of btn1){
    n.addEventListener("click",function(){
    var h = n.nextElementSibling;
    // console.log(h);
    if(h.value>0){
        h.value--;
    }
    else{
        alert("無法再刪減品項了");
    }
    });
}


for(let n of btn2){  
    n.addEventListener("click",function(){
    var h = n.previousElementSibling; 
        if(h.value>=0){
            h.value++;
        }
    });


}

