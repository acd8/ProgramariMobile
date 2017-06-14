var nava = new NavaSpatiala();
var pozaNava=new Image();
pozaNava.src="millennium_falcon.png";
function NavaSpatiala(){
	this.x = 0;
	this.y = 0;
	this.vitezaX = 0;
	this.vitezaY = 0;
	this.v = 0;
	this.unghi = 0;	
	this.stareNava = {vitezaMaxima:100,
						dunghi:0.03,
						acceleratie:10};
	
	this.actualizareNava = function(dt,beta,gamma){
                this.unghi =gamma/Math.PI;
		var mergeFata=false;
                var mergeSpate=false;
                var directie=beta;
		if(directie<=0){
		this.v += this.stareNava.acceleratie;
		if(this.v > this.stareNava.vitezaMaxima)
			this.v = this.stareNava.vitezaMaxima;
                    mergeFata=true;
		}
		if(directie>=0){
			this.v -= this.stareNava.acceleratie;
			if(this.v < -this.stareNava.vitezaMaxima)
				this.v = -this.stareNava.vitezaMaxima;
                            mergeSpate=true;
		}
                if(mergeFata==true || mergeSpate==true){
	        this.v *= 0.99;
		this.vitezaX = this.v * Math.cos(this.unghi);
		this.vitezaY = this.v * Math.sin(this.unghi);
		
		this.x += this.vitezaX * dt;
		this.y += this.vitezaY * dt;          
            
            
            }        
              
           };
	
	this.contextNava = function(ctx){	
          ctx.clearRect(0, 0, 800, 800);      
         ctx.save();
         var pointerLength = 25;
	ctx.translate(this.x, this.y);
	ctx.rotate(Math.PI/180 * (this.unghi*50));
	ctx.drawImage(pozaNava, -(pozaNava.width/2), -(pozaNava.height/2));   
	ctx.restore();
                
                
                
	};
	
}