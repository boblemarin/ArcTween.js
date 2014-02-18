function Arc( canvas, value ) {
	this.ctx = canvas.getContext("2d");
	this.width = canvas.width;
	this.height = canvas.height;
	this.radius = this.width * 0.416;
	this.strokeWidth = this.width * 0.083334;
	this.value = value;
	this.draw();
}

Arc.prototype.tween = function( value, time, delay ) {
	TweenLite.to( this, time, { 
					value: value, 
					delay: delay,
					onUpdate:this.draw, 
					onUpdateScope: this
				} );
}

Arc.prototype.setValue = function(value){
	this.value = value;
	this.draw();
}

Arc.prototype.draw = function(){
	this.ctx.clearRect(0,0,this.width,this.height);
	var h = this.height >> 1,
		w = this.width >> 1,
		q = -Math.PI * .5,
		TAU = Math.PI * 2;

	if ( this.value < 0 ) this.value = 0;
	if ( this.value > TAU ) this.value = TAU;

	this.ctx.strokeStyle = "#BBB";
	this.ctx.lineWidth = this.strokeWidth;
	this.ctx.beginPath();
	this.ctx.arc(w,h,this.radius,q,TAU,false);
	this.ctx.stroke();

	this.ctx.strokeStyle = "black";
	this.ctx.lineWidth = this.strokeWidth;
	this.ctx.beginPath();
	this.ctx.arc(w,h,this.radius,q,TAU*this.value+q,false);
	this.ctx.stroke();
}