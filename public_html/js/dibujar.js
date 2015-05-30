/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function(){
        var  canvas;
	// Create the canvas (Neccessary for IE because it doesn't know what a canvas element is)
        var canvas = document.getElementById("canvass");
	var context = document.getElementById('canvass').getContext("2d"); 
        var pet = ["../images/pet/pet1.png","../images/pet/pet2.png","../images/pet/pet3.png","../images/pet/pet4.png","../images/pet/pet5.png"];
        var totalResources = pet.length; 
        var moving;
        var mov;
        var stopIt;
        var i=0;
        var pika = document.createElement("img"); 
            setInterval(function() { 
            i==totalResources || i==-1 ? i=0 : i;
             pika.src = pet[i];
             pika.onload = function(){
                context.clearRect(0,0,canvas.width, canvas.height); 
                context.drawImage(pika,0,0);}
            i++; 
            }, 1000 / 8);
//        }
//        stopIt = function(){
//            clearInterval(moving);
//        };
//         front.addEventListener("click", mov, false);

})();