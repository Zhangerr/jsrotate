(var angleObj = {
    angle: 0
};
var angleXObj = {
    angle: 0
};
var angleYObj = {
    angle: 0
};
var readInput = true;
//jquery ui sliders or html5 and place to enter numerical value for angle with longer transition time in popup alerting instructions
if (true) { //load jquery if it doesnt exist (for now force true to get latest version)

    var s = document.createElement('script');
    s.type = 'text/javascript';
    document.head.appendChild(s); //if body re-executed
    s.src = 'http://code.jquery.com/jquery-latest.js';
    console.log('jquery loaded');
    s.onload = s.onreadystatechange = function () {
        if ((!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
            console.log(jQuery);
            jQuery.getScript('http://code.jquery.com/ui/1.9.2/jquery-ui.js', function (a, b, c) {
                if (c.status == 200) {
                    main();
                }
            });

            s.onload = s.onreadystatechange = null;

        }
    };
} else {
    if (!jQuery.ui) {
        $.getScript('http://code.jquery.com/ui/1.9.2/jquery-ui.js', function (a, b, c) {
            if (c.status == 200) {
                main();
            }
        });
    } else {
        main();
    }
}
function main() {
    $("<style type='text/css'>.keys{padding:0.1em 0.6em;border:1px solid #ccc;font-size:11px;font-family:Arial,Helvetica,sans-serif;background-color:#f7f7f7;color:#333;-moz-box-shadow:0 1px 0px rgba(0, 0, 0, 0.2),0 0 0 2px #ffffff inset;-webkit-box-shadow:0 1px 0px rgba(0, 0, 0, 0.2),0 0 0 2px #ffffff inset;box-shadow:0 1px 0px rgba(0, 0, 0, 0.2),0 0 0 2px #ffffff inset;-moz-border-radius:3px;-webkit-border-radius:3px;border-radius:3px;display:inline-block;margin:0 0.1em;text-shadow:0 1px 0 #fff;line-height:1.4;white-space:nowrap;} .rotate-ui{opacity:0.3;} .rotate-ui:hover{opacity:1;} .rotate-ui > div > div {margin-bottom:10px;margin-top:5px;} #slider .ui-slider-range { background: #ef2929;} #sliderX .ui-slider-range { background: #8ae234;}  #sliderY .ui-slider-range { background: #729fcf;} </style>").appendTo("head");
    $('<link rel="stylesheet" href="http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css" />').appendTo("head");
    $('body').find('script').remove(); //remove scripts in the body to prevent re-execution in wrapInner
    $("body").wrapInner("<div class='rotate-content' />")
    $(".rotate-content").css("transition", "all 0.2s");
	
    $("body").append("<div class='rotate-ui' style='font-size:13px;text-align:left;color:black;z-index:999999;position:fixed;left:5px;top:5px;background-color:#eee;border:1px solid grey;font-family:Tahoma,Arial; padding:5px;'><h3 class='ui-widget-header'>rotation controls <a href='http://zhanger.us' target='_blank'>by alex</a></h3><div class='input-state'>keyboard rotation enabled</div>Press <kbd class='keys'>a</kbd> or <kbd class='keys'>d</kbd> to rotate me!<br />Press <kbd class='keys'>w</kbd> or <kbd class='keys'>s</kbd> to rotate in the X axis. <br />Press <kbd class='keys'>q</kbd> or <kbd class='keys'>e</kbd> to rotate in the Y axis. <br /> Press <kbd class='keys'>alt</kbd> to toggle keyboard input. <br /> Press <kbd class='keys'>r</kbd> to reset all rotations <br /> note that rotating in the x or y axises may be glitchy <div style='padding:10px;'>Z axis: <span class='z-label angle-label'>0 deg</span><div id='slider' class='z-label angle-slider' style=''></div>X axis: <span class='x-label angle-label'>0 deg</span><div class='x-label angle-slider' id='sliderX' style=''></div>Y axis: <span class='y-label angle-label'>0 deg</span><div class='y-label angle-slider' id='sliderY' style=''></div></div></div>");
    $('.z-label').data('angle', angleObj);
    $('.y-label').data('angle', angleYObj);
    $('.x-label').data('angle', angleXObj);
    $('.angle-slider').slider({
        range: "min",
        slide: function (event, ui) {
            $(this).data('angle').angle = (ui.value / 100) * 360;
            $('.angle-label').each(function () {
                $(this).html(Math.round($(this).data('angle').angle) + " deg")
            });
            $(".rotate-content").css(
                "transform", "rotate(" + angleObj.angle + "deg) rotateX(" + angleXObj.angle + "deg) rotateY(" + angleYObj.angle + "deg)"
            );
        }
    });
    $(".rotate-ui").draggable();
	$(".rotate-ui").resizable();
	$(".rotate-ui").css({"position":"fixed","transition":"opacity 0.5s"});
    $(document).keydown(function (e) {
        //console.log(e);
        if (e.which == 18) { //right alt
            readInput = !readInput;
            console.log(readInput);
            $(".input-state").html("keyboard rotation " + (readInput ? "enabled" : "<span style='color:red;'>disabled</span>"));
        } else {
            if (readInput) {
                pD = true;
                if (e.which == 68) // a
                angleObj.angle += 2;
                else if (e.which == 65) // d
                angleObj.angle -= 2;
                else if (e.which == 87) // w
                angleXObj.angle += 2;
                else if (e.which == 83) // s
                angleXObj.angle -= 2;
                else if (e.which == 81) // q
                angleYObj.angle -= 2;
                else if (e.which == 69) // e
                angleYObj.angle += 2;
                else if (e.which == 82) { // r
                    angleObj.angle = 0;
                    angleYObj.angle = 0;
                    angleXObj.angle = 0;
                } else pD = false;
                if (pD) {
                    e.preventDefault(); //prevents keypress
                    console.log("default prevented");
                }

                $('.angle-slider').each(function () {
                    $(this).slider("value", $(this).data('angle').angle < 0 ? ((1 - Math.abs($(this).data('angle').angle / 360 % 1)) * 100) : (($(this).data('angle').angle / 360 % 1) * 100))
                });              
                $('.angle-label').each(function () {
                    $(this).html(Math.round($(this).data('angle').angle) + " deg")
                });
                $(".rotate-content").css(
                    "transform","rotate(" + angleObj.angle + "deg) rotateX(" + angleXObj.angle + "deg) rotateY(" + angleYObj.angle + "deg)"
                );

            }
        }
    });
    void(0); //dont return anything
})();