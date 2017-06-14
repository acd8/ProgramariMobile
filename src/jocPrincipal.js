
var canvas,ctx,width,height,alpha,beta,gamma;
window.addEventListener("deviceorientation", on_device_orientation);
window.addEventListener("touchstart",on_touch_start); 
function init(){	
	canvas = document.getElementById("canvas");
	width = canvas.width;
	height = canvas.height;
	ctx = canvas.getContext('2d');	      
	nava.x = width/2;
	nava.y = height/2;
	setInterval(function(){		
	actualizare(0.01);
	contextV1();			
	},10);
	
}

function actualizare(context){
	nava.actualizareNava(context,beta,gamma);
}

function contextV1(){
	nava.contextNava(ctx);
}
function on_device_orientation(evt){
     alpha=evt.alpha;
	 beta=evt.beta;
	 gamma=evt.gamma;
  document.getElementById("a").innerHTML ="Alpha="+Math.round(alpha).toString();
  document.getElementById("b").innerHTML = "Beta="+Math.round(beta).toString();
  document.getElementById("c").innerHTML = "Gamma="+Math.round(gamma).toString();
      
}
function on_touch_start(evt){ 

 
}