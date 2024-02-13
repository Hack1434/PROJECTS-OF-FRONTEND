const hourHand = document.querySelector("#hr");
const minHand = document.querySelector("#mn");
const secHand = document.querySelector("#sc");
 
 var date = new Date();

 let hr = date.getHours();
 let mn = date.getMinutes();
 let sc = date.getSeconds();
 let scPosition = sc*360/60;
 let mnPosition = (mn*360/60)+((sc*360/60)/60);
 let hrPosition = (hr*360/12)+((mn*360/60)/12);

function clock(){
  hrPosition =hrPosition+30/3600;
  mnPosition=mnPosition+6/60;
  scPosition=scPosition+6;

  hourHand.style.transform = "rotate(" + hrPosition + "deg)";
  minHand.style.transform = "rotate(" + mnPosition + "deg)";
  secHand.style.transform = "rotate(" + scPosition + "deg)";
}

const ck = document.querySelector('.clock');
const hrHand = document.querySelector('.hr');
const mnHand = document.querySelector('.mn');
const scHand = document.querySelector('.sc');
const darkbtn = document.querySelector('.darkbtn');
const lightbtn = document.querySelector('.lightbtn');

function dark() {
    if(document.body.classList.contains('light')){
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        ck.classList.remove('light');
        ck.classList.add('dark');
        hrHand.classList.remove('light');
        hrHand.classList.add('dark');
        mnHand.classList.remove('light');
        minHand.classList.add('dark');
        scHand.classList.remove('light');
        scHand.classList.add('dark');
        darkbtn.classList.add('dractive');
        lightbtn.classList.remove('lgactive');

    }
}

function light(){
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    ck.classList.remove('dark');
    ck.classList.add('light');
    hrHand.classList.remove('dark');
    hrHand.classList.add('light');
    mnHand.classList.remove('dark');
    mnHand.classList.add('light');
    scHand.classList.remove('dark');
    scHand.classList.add('light');
    darkbtn.classList.remove('dractive');
    lightbtn.classList.add('lgactive');

}

var checkbox = document.querySelector('input[name=theme');
checkbox.addEventListener('change',function(){
 if(this.checked){
    dark()
}else{
    light()
 }
})

var interval = setInterval(clock,1000);
light()