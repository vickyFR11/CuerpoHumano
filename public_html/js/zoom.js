/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nombre;

function lensIMG(){
    if($("#img").length){
       $("#img").remove();
       $("#lens").remove();
       return;
    }
    $("#contenido").imageLens({lensSize: 200, imageSrc: nombre}); 
}
  function cargaIMG(ruta, nomb){
       if($("#img").length){
          $("#img").remove();
          $("#lens").remove();
        }
       var parent = document.getElementById("contenido");
       var canvas = document.getElementById("canvas");
       var context = canvas.getContext("2d");
       context.clearRect(0,0,canvas.width, canvas.height);
       ScratchCard(document.querySelector('#sceatchable'));
      document.getElementById('sceatchable').setAttribute("style", 'background-image: url(../images/'+ruta+'); width:'+ parent.offsetWidth+';height:'+parent.offsetHeight+'; background-repeat: no-repeat;');
      nombre = nomb;
  }
