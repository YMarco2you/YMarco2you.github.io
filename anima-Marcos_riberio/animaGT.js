var larguraDaTela = window.screen.availWidth;
var position = -100;
var aumentar = true;
 
var i = 0;
 
var animacaGatito = [
    'spriteGT2/gatito1.png',
    'spriteGT2/gatito2.png',
    'spriteGT2/gatito3.png',
    'spriteGT2/gatito4.png',
    'spriteGT2/gatito5.png',
    'spriteGT2/gatito6.png',
    'spriteGT2/gatito7.png',
    'spriteGT2/gatito8.png',
];
 
setInterval(function(){
 
    if( position > (screen.availWidth = 1950 ) ) {
        position = -55;
    }
    
    document.getElementById("GT-img").src = animacaGatito[i];
    document.getElementById("GT-img").style = "left: " + position + "px;";
    position +=5;
 
    i++;
    if(i > 7) {
        i = 0;
    }
    
}, 60);