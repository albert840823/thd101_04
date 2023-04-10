// --------------------------------------------------------------------------限只能勾選三個
let check = document.getElementsByClassName("check");
let bloo = document.getElementsByClassName("a");
var checkedCount = 0;
// console.log(check);

function countCK(ck) {  
    
    if (ck.checked) { 
        checkedCount++;
        console.log(checkedCount)
            if(checkedCount == 3){
                for(let n of check){
                    if(!n.checked){
                        n.setAttribute("disabled","true");
                    }
                }
            }
    }else{
        checkedCount--; 
        if(checkedCount < 3){
        for(let n of check){
                n.removeAttribute("disabled")
        }
  }
 } };

// -------------------------------------------------------------------------------------

let c1 = document.getElementsByClassName("r1");
let c2 = document.getElementsByClassName("r2");
let c3 = document.getElementsByClassName("r3");
let c4 = document.getElementsByClassName("r4");
let sab = document.getElementsByClassName("sab")[0];
console.log(c2);

// localStorage.clear()
// localStorage.removeItem("fr2");

var free ;

function order(){
    free ={};
for(n of c1){
    if(n.checked){
    var n1 = n.closest("li").querySelector("h3").innerText
    };};
var n2 = "";
for(n of check){  
    if(n.checked){ 
    var a2 = n.closest("li").querySelector("h3").innerText
    n2 = n2+ a2+ " , "
    // console.log(typeof a2);
    };};



for(n of c2){
    if(n.checked){
        var n3 = n.closest("li").querySelector("h3").innerText
    };};


for(n of c3){
    if(n.checked){
        var n4 = n.closest("li").querySelector("h3").innerText        
    };};

  
for(n of c4){
    if(n.checked){
        var n5 = n.closest("li").querySelector("h3").innerText
    };}; 
    
    free = {
    "n1":n1,
    "n2":n2,
    "n3":n3,
    "n4":n4,
    "n5":n5
}

    console.log(free);  
};


sab.addEventListener("click",function(){
    var all = this.closest("div.menu").querySelectorAll("input");
    order();
    // console.log(free.n2)
    


    if(free.n1 != undefined){
    if(free.n2 != undefined && free.n2 != "" ){
    if(free.n3 != undefined){
    if(free.n4 != undefined){
    if(free.n5 != undefined){



                        for(n=0;true;n++){
                            if(localStorage.getItem(`fr${n}`) == null){
                            localStorage.setItem(`fr${n}`, JSON.stringify(free));
                            break;
                            }    
                        }

                        if(window.innerWidth < 872){
                            // console.log("2222");
                            window.scrollTo({        
                              top:block[0].offsetTop - 350,
                              behavior:"smooth"
                              
                          });
                  
                          }else{
                          window.scrollTo({          //官方內建滑動函式
                              top:block[0].offsetTop -80,
                              behavior:"smooth"
                          });} 

    }else{
        alert('請選擇一項飲品');
        window.scrollTo({          //官方內建滑動函式
            top:bloo[4].offsetTop +130,
            behavior:"smooth"
        }); 
    }
    }else{
        alert('請選擇一項醬料');
        window.scrollTo({          //官方內建滑動函式
            top:bloo[3].offsetTop +130,
            behavior:"smooth"
        });
    }
    }else{
        alert('請選擇一項蛋白質');
        window.scrollTo({          //官方內建滑動函式
            top:bloo[2].offsetTop +130,
            behavior:"smooth"
        });
    }
    }else{
        alert('請選擇至少一項佐料');
        window.scrollTo({          //官方內建滑動函式
            top:bloo[1].offsetTop +130,
            behavior:"smooth"
        });   
    }
    }else{
        alert('請選擇一項基底');
        window.scrollTo({          //官方內建滑動函式
            top:bloo[0].offsetTop +130,
            behavior:"smooth"
        });
    };
    

});








