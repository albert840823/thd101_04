$(function(){

// let pho = document.getElementsByClassName("pho");




$(".menu_main>ul>li>a").click(function(e){
    let img = e.target.closest("li").querySelector("img.pho").getAttribute("src");  
    let name = e.target.closest("li").querySelector("h3").innerText; 
    let pc = e.target.closest("li").querySelector("h3+p").innerText;
    let pe = e.target.closest("li").querySelector("p+p").innerText;
    let p_sel = e.target.closest("li").querySelector("h4>p").innerText;

    e.preventDefault()
    $(".lightbox-overlay").fadeIn(700);
    $(".lightbox-image").attr("src",img);
    $(".name").text(name);
    $(".ppc").text(pc);
    $(".ppe").text(pe);
    $(".light_sel").text(p_sel);
    // console.log();
})

$(".lightbox-close").click(function(){
    $(".lightbox-overlay").fadeOut(700);
})
})