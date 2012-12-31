console.log("run");
//make cross-browser
var angle = 0; //in degrees
var angleX = 0; //degrees
var angleY = 0;
var readInput = true;
//jquery ui sliders or html5 and place to enter numerical value for angle with longer transition time in popup alerting instructions
if(typeof(jQuery)) { //load jquery if it doesnt exist
done = false; //orz
var s = document.createElement('script');
s.type='text/javascript';document.body.appendChild(s);
s.src='http://code.jquery.com/jquery-latest.js';
console.log('jquery loaded');
s.onload = s.onreadystatechange = function () {
            if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
                done = true;
				$.getScript('http://code.jquery.com/ui/1.9.2/jquery-ui.js',function(a,b,c){
					if(c.status==200) {
					console.log(a.data);
						main();
					}
				});
                
                s.onload = s.onreadystatechange = null;
                
            }
        };
} else {

$.getScript('http://code.jquery.com/ui/1.9.2/jquery-ui.js',function(a,b,c){
if(c.status==200) {
	main();
}
});
}

function main() {
$("<style type='text/css'>.keys{padding:0.1em 0.6em;border:1px solid #ccc;font-size:11px;font-family:Arial,Helvetica,sans-serif;background-color:#f7f7f7;color:#333;-moz-box-shadow:0 1px 0px rgba(0, 0, 0, 0.2),0 0 0 2px #ffffff inset;-webkit-box-shadow:0 1px 0px rgba(0, 0, 0, 0.2),0 0 0 2px #ffffff inset;box-shadow:0 1px 0px rgba(0, 0, 0, 0.2),0 0 0 2px #ffffff inset;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;display:inline-block;margin:0 0.1em;text-shadow:0 1px 0 #fff;line-height:1.4;white-space:nowrap;} .rotate-ui{opacity:0.3;-webkit-transition:all 0.5s;} .rotate-ui:hover{opacity:1;} .rotate-ui > div > div {margin-bottom:10px;margin-top:5px;} #slider .ui-slider-range { background: #ef2929;} #sliderX .ui-slider-range { background: #8ae234;}  #sliderY .ui-slider-range { background: #729fcf;} </style>").appendTo("head");
$('<link rel="stylesheet" href="http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css" />').appendTo("head");
$("body").wrapInner("<div class='rotate-content' />")
$(".rotate-content").css({"-webkit-transition":"all 0.2s"}); 
$("body").append("<div class='rotate-ui' style='z-index:999999;position:fixed;left:5px;top:5px;background-color:#eee;border:1px solid grey;font-family:Tahoma,Arial; padding:5px;'><h3>rotation controls <a href='http://zhanger.us' target='_blank'>by alex</a></h3><div class='input-state'>keyboard rotation enabled</div>Press <kbd class='keys'>a</kbd> or <kbd class='keys'>d</kbd> to rotate me!<br />Press <kbd class='keys'>w</kbd> or <kbd class='keys'>s</kbd> to rotate in the X axis. <br />Press <kbd class='keys'>q</kbd> or <kbd class='keys'>e</kbd> to rotate in the Y axis. <br /> Press <kbd class='keys'>alt</kbd> to toggle keyboard input. <br /> Press <kbd class='keys'>r</kbd> to reset all rotations <br /> note that rotating in the x or y axises may be glitchy <div style='padding:10px;'>Z axis:<div id='slider' style=''></div>X axis:<div id='sliderX' style=''></div>Y axis:<div id='sliderY' style=''></div></div></div>");
$( "#slider" ).slider({range: "min",
    slide: function( event, ui ) {angle = (ui.value/100) * 360;
	$(".rotate-content").css({"-webkit-transform":"rotate("+angle+"deg) rotateX(" + angleX + "deg) rotateY(" + angleY +"deg)"}); }
});
$( "#sliderX" ).slider({range: "min",
    slide: function( event, ui ) {angleX = (ui.value/100) * 360;
	$(".rotate-content").css({"-webkit-transform":"rotate("+angle+"deg) rotateX(" + angleX + "deg) rotateY(" + angleY +"deg)"}); }
});
$( "#sliderY" ).slider({range: "min",
    slide: function( event, ui ) {angleY = (ui.value/100) * 360;
	$(".rotate-content").css({"-webkit-transform":"rotate("+angle+"deg) rotateX(" + angleX + "deg) rotateY(" + angleY +"deg)"}); }
});
/*$(document).keypress(function(e) {
console.log(e);
});*/

$(document).keydown(function(e) {
console.log(e);
if(e.which == 18) { //right alt
readInput = !readInput;
console.log(readInput);
$(".input-state").html("keyboard rotation " + (readInput?"enabled":"<span style='color:red;'>disabled</span>"));
} else {
if(readInput) {
pD = true;
if(e.which == 68) // a
angle+=2;
else if(e.which == 65) // d
angle-=2;
else if(e.which == 87) // w
angleX+=2;
else if(e.which == 83) // s
angleX-=2;
else if(e.which == 81) // q
angleY-=2;
else if(e.which == 69) // e
angleY+=2;
else if(e.which == 82) { // r
angle=0;
angleY=0;
angleX=0;
}
else 
pD = false;
if(pD) {
e.preventDefault();
console.log("default prevented");
}


$("#slider").slider("value", angle < 0? ((1 - Math.abs(angle/360 % 1)) * 100) : ((angle/360 % 1) * 100));
$("#sliderX").slider("value", angleX < 0? ((1 - Math.abs(angleX/360 % 1)) * 100) : ((angleX/360 % 1) * 100));
$("#sliderY").slider("value", angleY < 0? ((1 - Math.abs(angleY/360 % 1)) * 100) : ((angleY/360 % 1) * 100));
$(".rotate-content").css({"-webkit-transform":"rotate("+angle+"deg) rotateX(" + angleX + "deg) rotateY(" + angleY +"deg)"}); 

 }
 }
 });
void(0); //dont return anything
}
