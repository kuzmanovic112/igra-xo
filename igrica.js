
var osobaX = prompt("Unesi igraca X");
var osobaO = prompt("unesi igraca O");

var daLiJeIksNaRedu = true;

var ixs="X";
var oxs="O";
var brojac=0;
var brojacO=0;




function novaIgra(){
    document.getElementById("p1").innerHTML =""; 
    document.getElementById("p2").innerHTML ="";
    document.getElementById("p3").innerHTML ="";
    document.getElementById("p4").innerHTML ="";
    document.getElementById("p5").innerHTML ="";
    document.getElementById("p6").innerHTML ="";
    document.getElementById("p7").innerHTML ="";
    document.getElementById("p8").innerHTML ="";
    document.getElementById("p9").innerHTML ="";


}



// function igraci(){
//     document.write("igrac X:"+osobaX+"</br>");
//     document.write("igrac O:"+osobaO);
    
    
// }
// igraci();
var x=document.getElementById('igrac1');
var y=document.getElementById('igrac2');

x.innerHTML="X:"+osobaX;
y.innerHTML="O:"+osobaO;

var poljeX=document.getElementById('x');
var poljeY=document.getElementById('y');


function klik1() {
    if (document.getElementById("p1").innerHTML == "") {
        if (daLiJeIksNaRedu) {
            document.getElementById("p1").innerHTML =ixs;
            document.getElementById("p1").style.color="red";
            
            daLiJeIksNaRedu = false;
        }
        else {
            document.getElementById("p1").innerHTML =oxs;
            document.getElementById("p1").style.color="blue";
            daLiJeIksNaRedu = true;
             }provjera();
    }

}
function klik2() {
    if (document.getElementById("p2").innerHTML == "") {
        if (daLiJeIksNaRedu) {
            document.getElementById("p2").innerHTML = ixs;
            document.getElementById("p2").style.color="red";
            daLiJeIksNaRedu = false;
        }
        else {
            document.getElementById("p2").innerHTML = oxs;
            document.getElementById("p2").style.color="blue";
            daLiJeIksNaRedu = true;
            }provjera();
    }

}
function klik3() {
    if (document.getElementById("p3").innerHTML == "") {
        if (daLiJeIksNaRedu) {
            document.getElementById("p3").innerHTML = "X";
            document.getElementById("p3").style.color="red";
            
            daLiJeIksNaRedu = false;
            
           
        }
        else {
            document.getElementById("p3").innerHTML = "O";
            document.getElementById("p3").style.color="blue";
            daLiJeIksNaRedu = true;
            
            
            }
            
            
    }provjera();

}
function klik4() {
    if (document.getElementById("p4").innerHTML == "") {
        if (daLiJeIksNaRedu) {
            document.getElementById("p4").innerHTML = "X";
            document.getElementById("p4").style.color="red";
            daLiJeIksNaRedu = false;
        }
        else {
            document.getElementById("p4").innerHTML = "O";
            document.getElementById("p4").style.color="blue";
            daLiJeIksNaRedu = true;

            }
    }provjera();

}

function klik5() {
    if (document.getElementById("p5").innerHTML == "") {
        if (daLiJeIksNaRedu) {
            document.getElementById("p5").innerHTML = "X";
            document.getElementById("p5").style.color="red";
            daLiJeIksNaRedu = false;
        }
        else {
            document.getElementById("p5").innerHTML = "O";
            document.getElementById("p5").style.color="blue";
            daLiJeIksNaRedu = true;

         };
    }provjera();

}
function klik6() {
    if (document.getElementById("p6").innerHTML == "") {
        if (daLiJeIksNaRedu) {
            document.getElementById("p6").innerHTML = "X";
            document.getElementById("p6").style.color="red";
            daLiJeIksNaRedu = false;
        }
        else {
            document.getElementById("p6").innerHTML = "O";
            document.getElementById("p6").style.color="blue";
            daLiJeIksNaRedu = true;
         }
    }provjera();

} 
function klik7() {
    if (document.getElementById("p7").innerHTML == "") {
        if (daLiJeIksNaRedu) {
            document.getElementById("p7").innerHTML = "X";
            document.getElementById("p7").style.color="red";
            daLiJeIksNaRedu = false;
        }
        else {
            document.getElementById("p7").innerHTML = "O";
            document.getElementById("p7").style.color="blue";
            daLiJeIksNaRedu = true;
             }
    }provjera();

} 
function klik8() {
    if (document.getElementById("p8").innerHTML == "") {
        if (daLiJeIksNaRedu) {
            document.getElementById("p8").innerHTML = "X";
            document.getElementById("p8").style.color="red";
            daLiJeIksNaRedu = false;
        }
        else {
            document.getElementById("p8").innerHTML = "O";
            document.getElementById("p8").style.color="blue";
            daLiJeIksNaRedu = true;

            
        }
    
    }provjera();

}
function klik9() {

    if (document.getElementById("p9").innerHTML == "") {
        if (daLiJeIksNaRedu) {
            document.getElementById("p9").innerHTML = ixs;
            document.getElementById("p9").style.color="red";
            daLiJeIksNaRedu = false;
            
        }
        else {
            document.getElementById("p9").innerHTML = "O";
            document.getElementById("p9").style.color="blue";
            daLiJeIksNaRedu = true;

            



        }
        
        
    }provjera();
    
}




function provjera(){
    
    if(document.getElementById("p1").innerHTML=="X" && document.getElementById("p2").innerHTML=="X"&&document.getElementById("p3").innerHTML=="X"){
       
           brojac++;
        alert(osobaX+":"+brojac+"...."+osobaO+":"+brojacO);
        poljeX.innerHTML=brojac;
            novaIgra();
        }
        
    

    
    if(document.getElementById("p1").innerHTML=="O" && document.getElementById("p2").innerHTML=="O"&&document.getElementById("p3").innerHTML=="O"){
       brojacO++;
        alert(osobaX+":"+brojac+"...."+osobaO+":"+brojacO)
        poljeY.innerHTML=brojacO;
        novaIgra();
    }
    

    if(document.getElementById("p4").innerHTML=="O" && document.getElementById("p5").innerHTML=="O"&&document.getElementById("p6").innerHTML=="O"){
        brojacO++;
        alert(osobaX+":"+brojac+"...."+osobaO+":"+brojacO)
        poljeY.innerHTML=brojacO;
        novaIgra();
    }


if(document.getElementById("p4").innerHTML=="X" && document.getElementById("p5").innerHTML=="X"&&document.getElementById("p6").innerHTML=="X"){
    brojac++;
        alert(osobaX+":"+brojac+"...."+osobaO+":"+brojacO);
        poljeX.innerHTML=brojac;
            novaIgra();
}
if(document.getElementById("p7").innerHTML=="X" && document.getElementById("p8").innerHTML=="X"&&document.getElementById("p9").innerHTML=="X"){
    brojac++;
        alert(osobaX+":"+brojac+"...."+osobaO+":"+brojacO);;
        poljeX.innerHTML=brojac;
            novaIgra();
}
if(document.getElementById("p7").innerHTML=="O" && document.getElementById("p8").innerHTML=="O"&&document.getElementById("p9").innerHTML=="O"){
    brojacO++;
        alert(osobaX+":"+brojac+"...."+osobaO+":"+brojacO);
        poljeY.innerHTML=brojacO;
        novaIgra();
}
if(document.getElementById("p1").innerHTML=="X" && document.getElementById("p4").innerHTML=="X"&&document.getElementById("p7").innerHTML=="X"){
    brojac++;
        alert(osobaX+":"+brojac+"...."+osobaO+":"+brojacO);
        poljeX.innerHTML=brojac;
            novaIgra();
}
if(document.getElementById("p1").innerHTML=="O" && document.getElementById("p4").innerHTML=="O"&&document.getElementById("p7").innerHTML=="O"){
    brojacO++;
        alert(osobaX+":"+brojac+"...."+osobaO+":"+brojacO);
        poljeY.innerHTML=brojacO;
        novaIgra();
}
if(document.getElementById("p2").innerHTML=="X" && document.getElementById("p5").innerHTML=="X"&&document.getElementById("p8").innerHTML=="X"){
    brojac++;
        alert(osobaX+":"+brojac+"...."+osobaO+":"+brojacO);
        poljeX.innerHTML=brojac;
            novaIgra();
}
if(document.getElementById("p2").innerHTML=="O" && document.getElementById("p5").innerHTML=="O"&&document.getElementById("p8").innerHTML=="O"){
    brojacO++;
        alert(osobaX+":"+brojac+"...."+osobaO+":"+brojacO);
        poljeY.innerHTML=brojacO;
        novaIgra();
}
if(document.getElementById("p3").innerHTML=="X" && document.getElementById("p6").innerHTML=="X"&&document.getElementById("p9").innerHTML=="X"){
    brojac++;
        alert(osobaX+":"+brojac+"...."+osobaO+":"+brojacO);
        poljeX.innerHTML=brojac;
            novaIgra();
}
if(document.getElementById("p3").innerHTML=="O" && document.getElementById("p6").innerHTML=="O"&&document.getElementById("p9").innerHTML=="O"){
    brojacO++;
        alert(osobaX+":"+brojac+"...."+osobaO+":"+brojacO);
        poljeY.innerHTML=brojacO;
        novaIgra();
}
if(document.getElementById("p1").innerHTML=="X" && document.getElementById("p5").innerHTML=="X"&&document.getElementById("p9").innerHTML=="X"){
    brojac++;
        alert(osobaX+":"+brojac+"...."+osobaO+":"+brojacO);
        poljeX.innerHTML=brojac;
            novaIgra();
}
if(document.getElementById("p1").innerHTML=="O" && document.getElementById("p5").innerHTML=="O"&&document.getElementById("p9").innerHTML=="O"){
    brojacO++;
        alert(osobaX+":"+brojac+"...."+osobaO+":"+brojacO);
        poljeY.innerHTML=brojacO;
        novaIgra();
}
if(document.getElementById("p3").innerHTML=="X" && document.getElementById("p5").innerHTML=="X"&&document.getElementById("p7").innerHTML=="X"){
    brojac++;
        alert(osobaX+":"+brojac+"...."+osobaO+":"+brojacO);
        poljeX.innerHTML=brojac;
            novaIgra();
}
if(document.getElementById("p3").innerHTML=="O" && document.getElementById("p5").innerHTML=="O"&&document.getElementById("p7").innerHTML=="O"){
    brojacO++;
        alert(osobaX+":"+brojac+"...."+osobaO+":"+brojacO);
        poljeY.innerHTML=brojacO;
        novaIgra();

        
}




}


var adX=document.getElementById('klickX');
var adY=document.getElementById('klickY');


var p1=document.getElementById('p1');
var p2=document.getElementById('p2');
var p3=document.getElementById('p3');
var p4=document.getElementById('p4');
var p5=document.getElementById('p5');
var p6=document.getElementById('p6');
var p7=document.getElementById('p7');
var p8=document.getElementById('p8');
var p9=document.getElementById('p9');


p1.addEventListener('click',function(){
    if(p1.innerHTML=='X'){
        adX.play();
    }else if(p1.innerHTML=='O'){
        adY.play();
    }
})
p2.addEventListener('click',function(){
    if(p2.innerHTML=='X'){
        adX.play();
    }else if(p2.innerHTML=='O'){
        adY.play();
    }
})
p3.addEventListener('click',function(){
    if(p3.innerHTML=='X'){
        adX.play();
    }else if(p3.innerHTML=='O'){
        adY.play();
    }
})
p4.addEventListener('click',function(){
    if(p4.innerHTML=='X'){
        adX.play();
    }else if(p4.innerHTML=='O'){
        adY.play();
    }
})
p5.addEventListener('click',function(){
    if(p5.innerHTML=='X'){
        adX.play();
    }else if(p5.innerHTML=='O'){
        adY.play();
    }
})
p6.addEventListener('click',function(){
    if(p6.innerHTML=='X'){
        adX.play();
    }else if(p6.innerHTML=='O'){
        adY.play();
    }
})
p7.addEventListener('click',function(){
    if(p7.innerHTML=='X'){
        adX.play();
    }else if(p7.innerHTML=='O'){
        adY.play();
    }
})
p8.addEventListener('click',function(){
    if(p8.innerHTML=='X'){
        adX.play();
    }else if(p8.innerHTML=='O'){
        adY.play();
    }
})
p9.addEventListener('click',function(){
    if(p9.innerHTML=='X'){
        adX.play();
    }else if(p9.innerHTML=='O'){
        adY.play();
    }
})









