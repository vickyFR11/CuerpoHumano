/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(main);
 function cargaIMG(ruta){
       var parent = document.getElementById("rellenar");
       document.getElementById('rellenar').setAttribute("style", 'background-image: url(../images/'+ruta+'); width:'+ parent.offsetWidth+';height:'+parent.offsetHeight+'; background-repeat: no-repeat;');
  }
  
var numCorrectas=0;
var numIncorrectas=0;
function main(){
  	establecerPropiedades();
}

function establecerPropiedades(){
    
	var res =$(".respuesta");
        
	res.draggable({cursor: "crosshair", opacity: 0.7, revert: "invalid", helper: 'clone', appendTo: 'div #respuestas' });
	res.mousedown(downRespuesta);
	$(".preg, .pregMonumento").droppable({drop:dropPregunta});

}

function dropPregunta(event,ui){
	var contPregunta =$(this);
	var respuesta = ui.draggable;

	var correcta = contPregunta.text().toLowerCase();
	correcta = correcta.trim();
	var pos = contPregunta.position();
	contPregunta.css("background","#B3F9FC");
	contPregunta.css("box-shadow",".2px .2px .2em #000");
	contPregunta.css("border","1px dashed #333")
	respuesta.css("cursor","default");

	if(correcta==respuesta.attr("alt")){
		contPregunta.addClass("resCorrecta");
		contPregunta.append("<img src='../images/correcta.png' class='ok' style='width:20px; height:20px;' />" +"<img src='"+respuesta.attr("src")+"' class='rDrop' style='width:50px; height:40px;' />" );
		numCorrectas++;
	//	respuesta.remove();

	}else{
		contPregunta.addClass("resIncorrecta");
		contPregunta.append("<img src='../images/inCorrecta.png' class='inco' style='width:20px; height:20px;' />"+"<img src='"+respuesta.attr("src")+"' class='rDrop' style='width:50px; height:40px;' />");
		numIncorrectas++;
	}
	respuesta.draggable("destroy");
	contPregunta.droppable("destroy");
	comprobarFinal();
	respuesta.remove();
}

function comprobarResultados(){
	$(".ok,.inco").fadeIn("slow");
	$("#resultados").html("Correct answers:     "+numCorrectas+"<br />"+"Incorrect answers:    "+numIncorrectas);

}

function comprobarFinal(){
	resul = numCorrectas+numIncorrectas;
//	if(resul ==1){
		
		comprobarResultados();
//	}
}

function downRespuesta(){
	$(".respuesta").css("z-index","0");
	$(this).css("z-index","100");
}