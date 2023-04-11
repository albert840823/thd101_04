    let cart = document.getElementById("cart");
    let del = document.getElementsByClassName("delete");
    let close = document.getElementsByClassName("btn_modal_close3")[0];
    // let li = document.getElementsByClassName("pd");
    let nt = document.getElementsByClassName("NT");
    let pro = document.getElementsByClassName("pro")[0];
    let pro2 = document.getElementsByClassName("pro2")[0];
    let pro3 = document.getElementsByClassName("pro3")[0];
    let shopcar = document.getElementsByClassName("shopcar")[0];
    let mai_value = document.getElementsByClassName("mai_value");
    let one = document.getElementsByClassName("one")[0];
    let plus = document.getElementsByClassName("2");
    let minus = document.getElementsByClassName("1"); 
    let sin = document.getElementsByClassName("cingle");
    let pd = document.getElementsByClassName("pd");
    let ul = document.getElementsByClassName("ul_main")[0];    
    let rd = document.getElementsByClassName("rd")[0];
    let rd_v= rd.innerText;

// ----------------------------------------------------------


function add(){
ul.innerHTML="";
for(let n = 0 ; n< 5 ; n++ ){
var a1 = JSON.parse(localStorage.getItem(`pt${n}`));
// console.log(a1.name)
if(a1 !== null){
var ttle = a1.sel*a1.value

ul.innerHTML=ul.innerHTML+` 
<li class="pd" dlta-id=${a1.id}>
<img src="img/Group 30.png">
<h3>${a1.name}</h3>
<p class="cingle" style="display: none;">${a1.sel}</p>
<h5 class="NT">${ttle}</h5>

<div class="cart_num">
    <button class="dw 1">-</button>
    <input type="text" value=${a1.value} class="main mai_value" disabled>
    <button class="up 2">+</button>
</div>
<span class=""><i class="bi bi-trash3-fill delete"></i></span>
</li>`
    rd.classList.remove("off");
    rd.innerText=pd.length;
}else{
    continue;
}}

for(let n = 0 ;true; n++ ){
    var fre = JSON.parse(localStorage.getItem(`fr${n}`));
    if(fre !== null){
    
    g=` 
    <li class="pd" dlta-id=${n}>
    <img src="img/Group 30.png">
    <h3>自選 Poke</h3>
    <p class="p">基底 : ${fre.n1} 
       佐料 : ${fre.n2}
       蛋白質 : ${fre.n3} 
       醬料 : ${fre.n4}
       飲品 : ${fre.n5}
    </p>
    <p class="cingle" style="display: none;">210</p>
    <h5 class="NT">210</h5>
    
    <div class="cart_num">
        <button class="dw 1">-</button>
        <input type="text" value=1 class="main mai_value" disabled>
        <button class="up 2">+</button>
    </div>
    <span ><i class="bi bi-trash3-fill delete2"></i></span>
    </li>`
    
    ul.insertAdjacentHTML("afterbegin", g);

    rd.classList.remove("off");
    rd.innerText=pd.length;

    if(pd.length === 0){
        rd.classList.add("off");
    }else{
        rd.classList.remove("off");
        rd.innerText=pd.length;
    }
    
    }else{
        if(n >= 20){
            break;
        }
        continue;
    }}

};


add();

// -------------------------------------------------------
function total(){
    let h=0;
    for(let n of nt){
        // h = 0;
        h+=Number(n.innerText);
    }
    pro.innerText=h;
    if(h>200){
        pro2.innerText= 60;
    }
    else{
        pro2.innerText= 0;
    }
    pro3.innerText=Number(pro.innerText)+Number(pro2.innerText)
    // console.log(h);
    // console.log(h);
}

total();

// console.log(pd.length);
function rdd(){
if(pd.length === 0){
    rd.classList.add("off");
}else{
    rd.classList.remove("off");
    rd.innerText=pd.length;
}
};
 rdd();






document.addEventListener("DOMContentLoaded",function(){



    document.addEventListener("click",function(e){

        // console.log(e.target)
        if(e.target.classList.contains("delete")){
            var a = e.target.closest("li");
            a.classList.add("off");
            var id = a.getAttribute("dlta-id");
            console.log
            setTimeout(function(){
                // console.log(a);
                a.remove()
                localStorage.removeItem(`pt${id}`);
                total();
                rdd();
            },1000)
        }

        //    total();



        if(e.target.classList.contains("delete2")){
            var a = e.target.closest("li");
            a.classList.add("off");
            var id = a.getAttribute("dlta-id");
        console.log(a);
            setTimeout(function(){
                console.log(id);
                a.remove()
                localStorage.removeItem(`fr${id}`);
                total();
                rdd();
            },1000)
        }






        
        if(e.target.classList.contains("up")){
            var va = e.target.previousElementSibling;
            va.setAttribute("value", Number(va.value) + 1);
            var sel = e.target.closest("li").querySelector("h5.NT");
            var nt = e.target.closest("li").querySelector("p.cingle");
            sel.innerText = Number(nt.innerText)*Number(va.value);
            // console.log(Number(va.value));
            // console.log("123")
            total();
        }

        if(e.target.classList.contains("dw")){
            var va = e.target.nextElementSibling;
            if(Number(va.value) > 1){
            va.setAttribute("value",Number(va.value)- 1);
            var sel = e.target.closest("li").querySelector("h5.NT");
            var nt = e.target.closest("li").querySelector("p.cingle");
            sel.innerText = Number(nt.innerText)*Number(va.value);
            total();
            }
        }
    })


// -----------------------------------------------------------

shopcar.addEventListener("click",function(){
        cart.classList.remove("none");
        console.log("345");
        add();
        total();
    });

    close.addEventListener("click",function(){
        cart.classList.add("none");        
    });

})

// -----------------------------------------------------------------
let btn= document.getElementsByClassName("sel");


// localStorage.clear()

for(let n = 0 ; n<btn.length ; n++){
btn[n].addEventListener("click",function(){
    var va = btn[n].closest("div.prductfoot").querySelector("input.main");
    var value = va.value;
    var name = btn[n].closest("li").querySelector("h3").innerText;
    var sel = btn[n].closest("li").querySelector("h4>p").innerText;
    var num = n;
    // console.log(sel);
   
    const pt={
        "id":n,
        "name":name,
        "value":Number(value),
        "sel":sel
    }
    if(pt.value >0){
        // alert();
    localStorage.setItem(`pt${n}`, JSON.stringify(pt));
    add();
    rdd();
    // arr.push(n)
    va.value = 0;
}})};


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
                            add();
                            rdd();
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
                          window.scrollTo({      
                              top:block[0].offsetTop -80,
                              behavior:"smooth"
                          });} 

    }else{
        alert('請選擇一項飲品');
        window.scrollTo({         
            top:bloo[4].offsetTop -350,
            behavior:"smooth"
        }); 
    }
    }else{
        alert('請選擇一項醬料');
        window.scrollTo({        
            top:bloo[3].offsetTop -350,
            behavior:"smooth"
        });
    }
    }else{
        alert('請選擇一項蛋白質');
        window.scrollTo({        
            top:bloo[2].offsetTop -350,
            behavior:"smooth"
        });
    }
    }else{
        alert('請選擇至少一項佐料');
        window.scrollTo({      
            top:bloo[1].offsetTop -350,
            behavior:"smooth"
        });   
    }
    }else{
        alert('請選擇一項基底');
        window.scrollTo({          
            top:bloo[0].offsetTop -350,
            behavior:"smooth"
        });
    };
    

});








