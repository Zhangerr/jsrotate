//make cross-browser
var angle = 0; //in degrees
var angleX = 0; //degrees
var angleY = 0;
//jquery ui sliders or html5 and place to enter numerical value for angle with longer transition time in popup alerting instructions
if(typeof(jQuery) == 'undefined') { //load jquery if it doesnt exist
done = false;
var s = document.createElement('script');
s.type='text/javascript';document.body.appendChild(s);
s.src='http://code.jquery.com/jquery-latest.js';
console.log('jquery loaded');
    s.onload = s.onreadystatechange = function () {
            if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
                done = true;
                main();
                s.onload = s.onreadystatechange = null;
                
            }
        };
} else {
main();
}

function main() {
$("<style type='text/css'>.keys{padding:0.1em 0.6em;border:1px solid #ccc;font-size:11px;font-family:Arial,Helvetica,sans-serif;background-color:#f7f7f7;color:#333;-moz-box-shadow:0 1px 0px rgba(0, 0, 0, 0.2),0 0 0 2px #ffffff inset;-webkit-box-shadow:0 1px 0px rgba(0, 0, 0, 0.2),0 0 0 2px #ffffff inset;box-shadow:0 1px 0px rgba(0, 0, 0, 0.2),0 0 0 2px #ffffff inset;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;display:inline-block;margin:0 0.1em;text-shadow:0 1px 0 #fff;line-height:1.4;white-space:nowrap;} </style>").appendTo("head");
$("body").wrapInner("<div class='rotate-content' />")
$(".rotate-content").css({"-webkit-transition":"all 0.2s"}); 
$("body").append("<div style='position:fixed;left:5px;top:5px;background-color:#eee;border:1px solid grey;font-family:Tahoma,Arial; padding:5px;'>Press <kbd class='keys'>a</kbd> or <kbd class='keys'>d</kbd> to rotate me!</div>");
$("body").keydown(function(e) {
if(e.keyCode == 68) // a
angle+=2;
if(e.keyCode == 65) // d
angle-=2;
if(e.keyCode == 87) // w
angleX+=2;
if(e.keyCode == 83) // s
angleX-=2;
if(e.keyCode == 81) // q
angleY-=2;
if(e.keyCode == 69) // e
angleY+=2;
console.log(e);
$(".rotate-content").css({"-webkit-transform":"rotate("+angle+"deg) rotateX(" + angleX + "deg) rotateY(" + angleY +"deg)"}); 
 });
void(0); //dont return anything
}