// let scrol = document.getElementById("main_block");
let link = document.getElementsByClassName("scroll_linK");
let block = document.getElementsByClassName("a");

// ------------------------------------------------------按鈕跟隨滑動變化
window.addEventListener("scroll", function(){
    for(let n of link){
        n.classList.remove("on");
        for(let n=0;n<block.length;n++){
        if(block[n].getBoundingClientRect().top < 50 && 
           block[n].getBoundingClientRect().bottom  > -20 ){
            link[n].classList.add("on");
          }}
    }
  });
// -------------------------------------------------------滑動索引
  for(let n =0; n<link.length ; n++){
    link[n].addEventListener("click",function(){
        if(window.innerWidth < 872){
          console.log("2222");
          window.scrollTo({        
            top:block[n].offsetTop - 350,
            behavior:"smooth"
            
        });

        }else{
        window.scrollTo({          //官方內建滑動函式
            top:block[n].offsetTop -80,
            behavior:"smooth"
        });}
        });
    }

  console.log(window.innerWidth);
// 






    
// let btn = document.getElementsByClassName("scroll_linK");
// let product_hight = this.querySelectorAll("div.menu_main")
// for(let n of btn){
//     n.addEventListener("click",function(){

//         console.log(scrool_block);
//     })
// }