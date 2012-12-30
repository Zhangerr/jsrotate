var angle = 0; //in degrees
//jquery ui slider, popup alerting instructions
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
$("<style type='text/css'>kbd{padding:0.1em 0.6em;border:1px solid #ccc;font-size:11px;font-family:Arial,Helvetica,sans-serif;background-color:#f7f7f7;color:#333;-moz-box-shadow:0 1px 0px rgba(0, 0, 0, 0.2),0 0 0 2px #ffffff inset;-webkit-box-shadow:0 1px 0px rgba(0, 0, 0, 0.2),0 0 0 2px #ffffff inset;box-shadow:0 1px 0px rgba(0, 0, 0, 0.2),0 0 0 2px #ffffff inset;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;display:inline-block;margin:0 0.1em;text-shadow:0 1px 0 #fff;line-height:1.4;white-space:nowrap;} </style>").appendTo("head");
$("body").wrapInner("<div class='rotate-content' />")
$(".rotate-content").css({"-webkit-transition":"all 0.2s"}); 
$("body").append("<div style='position:fixed;left:5px;top:5px;background-color:#eee;border:1px solid grey; padding:5px;'>Press <kbd>a</kbd> or <kbd>d</kbd> to rotate me!</div>");
$("body").keydown(function(e) {
if(e.keyCode == 68) // a
angle+=2;
else if(e.keyCode == 65) // d
angle-=2;
$(".rotate-content").css({"-webkit-transform":"rotate("+angle+"deg)"}); 
 });
void(0); //dont return anything
}