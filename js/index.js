var admin = {
    firstName: "Dias",
    lastName: "Kapanov",
    age: 19,
    instagramm: "@sol_kapanov",
};
var subadmin= {
    firstName:"Adiya",
    lastName:"Unknown",
    age:19,
    instagramm:"Confidential"
};
console.log("The website administration info: ");
console.log(admin,subadmin);

const playPause = document.getElementById('playP');
const stop1 = document.getElementById('stop');
var count = 0;
playPause.addEventListener("click", Muzika);
stop1.addEventListener("click",stop);
const audio = new Audio ('js/sounds/scipi.mp3')
function Muzika(){
    if(count == 0){
      
        count=1;
        audio.play();
    playPause.innerHTML = "Pause";}
    else {
        count=0;
        audio.pause();
        playPause.innerHTML = "Play";
    }
 }
 function stop(){
    Muzika();
     audio.pause();
   count=1;
     audio.currentTime=0;

 }





const buttonElement = document.getElementById('submit');
buttonElement.addEventListener("click", Submition);


function Submition(){
    const aud = new Audio('js/sounds/tuturu.mp3');
    aud.play();

}

