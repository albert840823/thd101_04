document.addEventListener("DOMContentLoaded",function(){
    let a = document.getElementById("a");
    let b = document.getElementById("b");
    let d = document.getElementById("d");
    let f = document.getElementById("f");
    let btn = document.getElementById("mesbtn");
    let boa = document.getElementsByClassName("new2")[0];
    let board = boa.querySelector("ul");
    var day_list = ['日', '一', '二', '三', '四', '五', '六'];
    let textnum = 0 ;
    // console.log(board.innerHTML);



btn.addEventListener("click",function(){
    var Today=new Date();
    board.innerHTML+=`
    <li>
    <h2>${a.value}</h2><h4>${b.value}</h4>  
    <h3>${d.value}</h3>
    <p class="main">${f.value}</p>
    <p class="time">${Today.getFullYear()+ " 年 " + (Today.getMonth()+1) + " 月 " + Today.getDate() + " 日"+" ("+day_list[Today.getDay()]+")"+" "+Today.getHours()+ " 點 " + (Today.getSeconds()+1) + " 分 "}</p>
</li>
`;
});
// --------------------------------------------------------------------
function check(){
    textnum = f.value.length ;
    return ;
}

f.addEventListener("keydown",function(e){
    check()  
    console.log(e.which);
    if(textnum<160 || e.which == 8 || e.which == 46){
    }
    else {
        alert("不能再輸入了");
        e.preventDefault();
    } 
});


});