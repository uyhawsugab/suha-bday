check = false;
tombol = false;


function init(){
  init_auto();
  Mode();
}

baffleEffect = baffle('.tes1', {
  characters: 
    'supercalifragilisticexpialidocious',
	speed: 150
});



function Mode(){
  if(localStorage.getItem("mode")!= null){

  }
  switch(localStorage.getItem("mode")){
    case 'subuh':
      $('.kontrol input').prop('checked', false);
      $('#customRadio2').prop('checked', true);
      subuh();
      break;
    case 'pagi':
      $('.kontrol input').prop('checked', false);
      $('#customRadio3').prop('checked', true);
      pagi();
      break;
    case 'siang':
      $('.kontrol input').prop('checked', false);
      $('#customRadio4').prop('checked', true);
      siang();
      break;
    case 'sore':
      $('.kontrol input').prop('checked', false);
      $('#customRadio5').prop('checked', true);
      sore();
      break;
    case 'terbenam':
      $('.kontrol input').prop('checked', false);
      $('#customRadio6').prop('checked', true);
      terbenam();
      break;
    case 'malem':
      $('.kontrol input').prop('checked', false);
      $('#customRadio7').prop('checked', true);
      malem();
      break;
    case 'tengahmlem':
      $('.kontrol input').prop('checked', false);
      $('#customRadio8').prop('checked', true);
      tengahmlem();
      break;
    case 'rgbgaming':
      $('.kontrol input').prop('checked', false);
      $('#customRadio9').prop('checked', true);
      rgbgaming();
      check = true;
      break;
    default:
  }
}



function createNote(isi){
  $(".hitung").css("font-size", "30pt").css("bottom", "calc(50% - 50px)");
  $(".bulat").css("opacity","0");
  $(".kotak li").css("opacity","0");
  $(".pesan").css("opacity","0");
  setTimeout(function(){
    writeNote(isi);
  }, 3000);
}


function writeNote(isi){
  $(".tes1").text(isi).css("opacity","1");

  baffle('.tes1')
    .reveal(2000)
      .start()
      .set({
          characters: '░░█ /<▒▓▒ ▒░▒█/ █/▒ ▒▓/█▒ ▓▒░▓ ██░ ▒░▓░ ▒░▓█',
          speed: 150
      });
      localStorage.setItem("manualColor", "#0079FF");
}

$(".panah").click(function(){
  if(tombol==false){
    $(".panah").css("transform","rotate(225deg)");
    $(".kontrol").animate({left: "0px"});
    tombol=true;
  }else if(tombol==true){
    $(".panah").css("transform","rotate(45deg)");
    $(".kontrol").animate({left:"-220px"});
    tombol=false;
  }
});

auto = true;
pass = false;

$(".kontrol").click(function(){
  check=false;
  if($("#customRadio0").prop('checked')){
    if(!pass){
      init_auto();
    }
    auto=true;
    localStorage.setItem("mode", "auto");
    pass=true;
  }
  else{
    auto=false;
    pass=false;
  }
  if($("#customRadio2").prop('checked')){
    subuh();
    localStorage.setItem("mode","subuh");
  }
  else if($("#customRadio3").prop('checked')){
    pagi();
    localStorage.setItem("mode", "pagi");
  }
  else if($("#customRadio4").prop('checked')){
    siang();
    localStorage.setItem("mode","siang");
  }
  else if($("#customRadio5").prop('checked')){
    sore();
    localStorage.setItem("mode", "sore");
  }
  else if($("#customRadio6").prop('checked')){
    terbenam();
    localStorage.setItem("mode", "terbenam");
  }
  else if($("#customRadio7").prop('checked')){
    malem();
    localStorage.setItem("mode", "malem");
  }
  else if($("#customRadio8").prop('checked')){
    tengahmlem();
    localStorage.setItem("mode", "tengahmlem");
  }
  else if($("#customRadio9").prop('checked')){
    rgbgaming();
    localStorage.setItem("mode", "rgbgaming");
    check=true;
  }
  if (check==false){
    nofill();
  }
});

function subuh(){
  $(".dawn").animate({opacity:"1"},1000);
  $(".morning").animate({opacity:"0"},500);
  $(".noon").animate({opacity:"0"},500);
  $(".afternoon").animate({opacity:"0"},500);
  $(".sunset").animate({opacity:"0"},500);
  $(".evening").animate({opacity:"0"},500);
  $(".midnight").animate({opacity:"0"},500);
  $(".red").animate({opacity:"0"},500);
  $(".green").animate({opacity:"0"},500);
  $(".blue").animate({opacity:"0"},500);
  black();
}
function pagi(){
  $(".morning").animate({opacity:"1"},1000);
  $(".dawn").animate({opacity:"0"},500);
  $(".noon").animate({opacity:"0"},500);
  $(".afternoon").animate({opacity:"0"},500);
  $(".sunset").animate({opacity:"0"},500);
  $(".evening").animate({opacity:"0"},500);
  $(".midnight").animate({opacity:"0"},500);
  $(".red").animate({opacity:"0"},500);
  $(".green").animate({opacity:"0"},500);
  $(".blue").animate({opacity:"0"},500);
  black();
}
function siang(){
  $(".noon").animate({opacity:"1"},1000);
  $(".dawn").animate({opacity:"0"},500);
  $(".morning").animate({opacity:"0"},500);
  $(".afternoon").animate({opacity:"0"},500);
  $(".sunset").animate({opacity:"0"},500);
  $(".evening").animate({opacity:"0"},500);
  $(".midnight").animate({opacity:"0"},500);
  $(".red").animate({opacity:"0"},500);
  $(".green").animate({opacity:"0"},500);
  $(".blue").animate({opacity:"0"},500);
  black();
}
function sore(){
  $(".afternoon").animate({opacity:"1"},1000);
  $(".dawn").animate({opacity:"0"},500);
  $(".morning").animate({opacity:"0"},500);
  $(".noon").animate({opacity:"0"},500);
  $(".sunset").animate({opacity:"0"},500);
  $(".evening").animate({opacity:"0"},500);
  $(".midnight").animate({opacity:"0"},500);
  $(".red").animate({opacity:"0"},500);
  $(".green").animate({opacity:"0"},500);
  $(".blue").animate({opacity:"0"},500);
  black();
}
function terbenam(){
  $(".sunset").animate({opacity:"1"},1000);
  $(".dawn").animate({opacity:"0"},500);
  $(".morning").animate({opacity:"0"},500);
  $(".noon").animate({opacity:"0"},500);
  $(".afternoon").animate({opacity:"0"},500);
  $(".evening").animate({opacity:"0"},500);
  $(".midnight").animate({opacity:"0"},500);
  $(".red").animate({opacity:"0"},500);
  $(".green").animate({opacity:"0"},500);
  $(".blue").animate({opacity:"0"},500);
  white();
}
function malem(){
  $(".evening").animate({opacity:"1"},1000);
  $(".dawn").animate({opacity:"0"},500);
  $(".morning").animate({opacity:"0"},500);
  $(".noon").animate({opacity:"0"},500);
  $(".afternoon").animate({opacity:"0"},500);
  $(".sunset").animate({opacity:"0"},500);
  $(".midnight").animate({opacity:"0"},500);
  $(".red").animate({opacity:"0"},500);
  $(".green").animate({opacity:"0"},500);
  $(".blue").animate({opacity:"0"},500);
  white();
}
function tengahmlem(){
  $(".midnight").animate({opacity:"1"},1000);
  $(".dawn").animate({opacity:"0"},500);
  $(".morning").animate({opacity:"0"},500);
  $(".noon").animate({opacity:"0"},500);
  $(".afternoon").animate({opacity:"0"},500);
  $(".sunset").animate({opacity:"0"},500);
  $(".evening").animate({opacity:"0"},500);
  $(".red").animate({opacity:"0"},500);
  $(".green").animate({opacity:"0"},500);
  $(".blue").animate({opacity:"0"},500);
  white();
}
function red(){
  $(".hitung").css("color","#F00");
  $(".pesan").css("color","#F00"); 
  $(".curr").css("color","#F00"); 
  $(".tes2").css("color","#F00");
  $(".bulat span").css("border-color","#F00");
  $(".kotak li").css("background","#000");
  $(".red").animate({opacity:"1"},1000);
  $(".midnight").animate({opacity:"0"},500);
  $(".dawn").animate({opacity:"0"},500);
  $(".morning").animate({opacity:"0"},500);
  $(".noon").animate({opacity:"0"},500);
  $(".afternoon").animate({opacity:"0"},500);
  $(".sunset").animate({opacity:"0"},500);
  $(".evening").animate({opacity:"0"},500);
  $(".green").animate({opacity:"0"},500);
  $(".blue").animate({opacity:"0"},500);
  white();
}
function green(){
  $(".hitung").css("color","#0F0");
  $(".pesan").css("color","#0F0");
  $(".tes2").css("color","#0F0");
  $(".curr").css("color","#0F0");
  $(".bulat span").css("border-color","#0F0");
  $(".kotak li").css("background","#000");
  $(".green").animate({opacity:"1"},1000);
  $(".midnight").animate({opacity:"0"},500);
  $(".dawn").animate({opacity:"0"},500);
  $(".morning").animate({opacity:"0"},500);
  $(".noon").animate({opacity:"0"},500);
  $(".afternoon").animate({opacity:"0"},500);
  $(".sunset").animate({opacity:"0"},500);
  $(".evening").animate({opacity:"0"},500);
  $(".red").animate({opacity:"0"},500);
  $(".blue").animate({opacity:"0"},500);
  white();
}
function blue(){
  $(".hitung").css("color","#00F");
  $(".tes2").css("color","#00F");
  $(".pesan").css("color","#00F");
  $(".curr").css("color","#00F");
  $(".bulat span").css("border-color","#00F");
  $(".kotak li").css("background","#000");
  $(".blue").animate({opacity:"1"},1000);
  $(".midnight").animate({opacity:"0"},500);
  $(".dawn").animate({opacity:"0"},500);
  $(".morning").animate({opacity:"0"},500);
  $(".noon").animate({opacity:"0"},500);
  $(".afternoon").animate({opacity:"0"},500);
  $(".sunset").animate({opacity:"0"},500);
  $(".evening").animate({opacity:"0"},500);
  $(".green").animate({opacity:"0"},500);
  $(".red").animate({opacity:"0"},500);
  white();
}

color = 1;
function rgbgaming(){
  if(check){
    fillblack();
    if(color == 1){
      red();
    }
    else if (color == 2){
      green();
    }
    else if (color == 3){
      blue();
    }
    color += 1;
    if (color == 4){
      color = 1;
    }
  }
}
setInterval(rgbgaming, 4000);

function black(){
  $(".hitung").css("color","#000");
  $(".tes2").css("color","#000");
  $(".curr").css("color","#000");
	$(".pesan").css("color","#000");
	$(".bulat span").css("border-color","#000");
	$(".kotak li").css("background","#000");
}
function fillblack(){
  $(".bulat span").css("background","#000");
}
function nofill(){
  $(".bulat span").css("background","unset");
}
function white(){
  $(".hitung").css("color","#FFF");
  $(".tes2").css("color","#FFF");
  $(".curr").css("color","#FFF");
  $(".pesan").css("color","#FFF");
  $(".bulat span").css("border-color","#FFF");
  $(".kotak li").css("background","#FFF");
}

function debug(){
  console.log('debug');
}

function checkTime(i){
  if ( i < 10){
    i = "0" + i;
  }
  return i;
}


var starting=true;
const detik = 1000;
const menit = detik * 60;
const jam = menit * 60;
const hari = jam * 24;
var H,M,S;

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
	var s = today.getSeconds();

  H = h;
  M=m;
	S=s;


  var birthday = "Nov 10, 2020 17:55:00";
  countDown = new Date(birthday).getTime();
  

    var now = new Date().getTime();
    jarak = countDown - now;

    var hari1 = Math.floor(jarak / (hari));
    var jam1 = Math.floor((jarak % (hari)) / (jam));
    var menit1 = Math.floor((jarak % (jam)) / (menit));
    var detik1 = Math.floor((jarak % (menit)) / detik);

    document.getElementById("countdown").innerHTML = hari1 + "<sub>D</sub>" + jam1 + "<sub>H</sub>" + menit1 + "<sub>M</sub>" + detik1 + "<sub>S</sub>";
    m = checkTime(m);
		s = checkTime(s);
    document.getElementById("time").innerHTML ="current time : " + h + ":" + m + ":" + s;
    t = setTimeout(function() {
      startTime()
    }, 500);
    
    if(jarak < 0) {

      
      document.getElementById("my_audio").play();
      

      let countdown = document.getElementById("countdown");
      let kata = document.getElementById("kata");
      let time = document.getElementById("time");
      let headline = document.getElementById("headline");
      
      countdown.style.display = "none";
      time.style.display = "none";
      headline.style.display = "none";

     

      kata.innerHTML = "HBD NJENG :)"+"<br/>"
      +"<img src='ppp2.jpg' /width='200px' height='250px' style='margin-left:100px'></img>";
      

      
    }
    
  
}
startTime();
function init_auto(){
	if ((H>23) || (H<4)){
		tengahmlem();
	}
	else if(H<6){
		subuh();
	}
	else if(H<9){
		pagi();
	}
	else if(H<17){
		siang();
	}
	else if(H<18){
		sore();
	}
	else if(H<19){
		terbenam();
	}
	else if(jam<23){
		malem();
	}
	else{
		tengahmlem();
  }
  var p = "translate(-50%,50%) scale("+1.35+")";
  
  $(".hitung").css("opacity",2);
  $(".curr").css("opacity",2);
  $(".tes2").css("opacity",2);
  $(".bulat").css("transform", p).css("opacity",2);
}
