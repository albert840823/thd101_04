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