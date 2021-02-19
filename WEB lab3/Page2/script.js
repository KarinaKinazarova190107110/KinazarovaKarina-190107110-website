
 
var h_hght = 150;
var h_mrg = 0;

$(function(){

    var elem = $('#top_nav');
    var top = $(this).scrollTop();

    if(top > h_hght){
        elem.css('top', h_mrg);
    }

    $(window).scroll(function(){
        top = $(this).scrollTop();

        if (top+h_mrg < h_hght) {
            elem.css('top', (h_hght-top));
        } else {
            elem.css('top', h_mrg);
        }
    });

});




function change(element){
$("#img").animate({left:'+=100px',opacity:'0'},"slow");
	var a= element.innerHTML;
		switch(a){
		case "Menu":
	document.getElementById("img").src = "logo2.png"

		break;
		case "About me":
	document.getElementById("img").src = "logo3.png"
	document.getElementById("text1").innerHTML = "About me"

		break;
		case "Contact me":
	document.getElementById("img").src = "logo4.png"
	document.getElementById("text1").innerHTML = "Contact me"
		break;
	
		}

	    $("#img").animate({left:'-=100px',opacity:'1'},"slow");
	}
	function small(element){
	element.style.fontSize = "30px";
	}
	function load(){
	$(".text1").animate({opacity:'1'},"slow");
	}










$(window).keydown(function(e) {
	key = (e.keyCode) ? e.keyCode : e.which;
	$('.key.k' + key).addClass('active');
	console.log(key);
  });
$(window).keyup(function(e) {
	key = (e.keyCode) ? e.keyCode : e.which;
	$('.key.k' + key).removeClass('active');
});

var $menu, $body, $pages;

$(document).ready(function() {
	
	$menu = $(".menu a");
	$body = $("body,html");
	$pages = $(".pages > div");
	
  $menu.click(function(){
		
		var index = $menu.index(this);
		var offset = $pages.eq(index).offset().top;
		
		$body.animate({ scrollTop : offset }, 500);  
		
		return false; 
	
	});
  
	$(document).trigger("scroll");

}); 

$(document).scroll(function() {
  
	var index = Math.round($(this).scrollTop()/$(window).height());

	$menu.removeClass("active");
	$menu.eq(index).addClass("active");

});

$(".carousel").swipe({

	swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
  
	  if (direction == 'left') $(this).carousel('next');
	  if (direction == 'right') $(this).carousel('prev');
  
	},
	allowPageScroll:"vertical"
  
  });


  function redirect(){
    location.href="http://127.0.0.1:5500/Page3/index.html"
  }
  function redirect1(){
    location.href="http://127.0.0.1:5500/Page1/index.html"
  }

  function redirect2(){
    location.href="http://127.0.0.1:5500/Page2/index.html"
  }
