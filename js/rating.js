//1
const buttonElement = document.getElementById('uchiha');
buttonElement.addEventListener("click", TheBestOne);


function TheBestOne(){
    const aud = new Audio('js/sounds/itachi_uchiha.mp3');
    aud.play();

}
//2
const Bmw = document.getElementById('BMW');
Bmw.addEventListener("mouseover", Vroom);

function Vroom(){
    const aud = new Audio('js/sounds/vroom.mp3');
    aud.play();

}
//3
$(document).keypress(function (s) {
    const sharingan = new Audio('js/sounds/genj.mp3');

    if (s.which == 83) {
       sharingan.play();
     
    }
});
//4
var img = document.getElementById("banner");
var anim = document.getElementById("anim");
$(document).keypress(function (s) {

    if (s.which == 83) {
        img.hidden = true;
        anim.hidden = false;
        $(function () {
            $(".banner").show(20);
            $(".anim").hide(20);
            setTimeout(Return, 1580);

        });

    }
});
function Return (){
 
    anim.hidden=true;
    img.hidden=false;
}



//5
