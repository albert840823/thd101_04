let div = document.getElementsByClassName("point")[0];
let a = div.querySelectorAll("a");

for(let h of a){   
    h.addEventListener("click",function(){          
    for(let n=0;n<a.length;n++){
         a[n].classList.remove("on");
        }
    h.classList.add("on"); 
    })          
}

// --------------------------------------------------------------下方列表
let list = document.getElementsByClassName("list_main");
// console.log(list);
for(let n =0 ; n<a.length ; n++){
    a[n].addEventListener("click",function(){
        // console.log(n);
        for(let n =0 ; n<list.length ; n++){
            list[n].classList.remove("remove");  
        }
         list[n].classList.add("remove");
    });
    
}