const $ =require('jquery');
const {BrowserWindow}=require('electron').remote
const app=require('electron').app
const path= require('path')
const url= require('url')

var inicia= function(){
	var nuevo= function(){
		$.ajax({
  url: 'http://itculiacan.edu.mx/dadm/apipaselista/data/validausuario.php?usuario='+user+'&clave='+clave+'',
  dataType: 'json',
  success: function(data) {
    $("#nombre").html(data.results[0].name.first+""+data.results[0].name.last);
    $("#foto").attr("src",data.results[0].picture.large);
  }
});  
	}
	$("#btnNuevo").on("click",nuevo);
}


$(document).ready(inicia);