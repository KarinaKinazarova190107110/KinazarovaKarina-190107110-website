
ymaps.ready(init);
		
function init() {
	
	var myMap = new ymaps.Map("map", {
		center: [51.15891389152932, 71.45476532865392],
		zoom: 10
		
	}, { geolocationControlFloat: 'left',
	
}
,{
		searchControlProvider: 'yandex#search'
	});
	

	var myPlacemark = new ymaps.Placemark([51.15891389152932, 71.45476532865392], null, {
		preset: 'islands#blueDotIcon'
	});
	myMap.geoObjects.add(myPlacemark);
	
	
	
		
	
	

	 myMap.geoObjects.add(myPlacemark);

	 myGeoObject = new ymaps.GeoObject({
      
        geometry: {
            
            type: 'Rectangle',
           
            coordinates: [
                [51.169409506050805, 71.49234567890],
                [51.129944374882164, 71.42197800565589]
            ]
        },
      
       
    }, {
        
        draggable: true,
        
        fillColor: '#ffff0022',
        
        strokeColor: '#3caa3c88',
       
        strokeWidth: 7
    });

  
    myRectangle = new ymaps.Rectangle([
        
        [55.66, 37.60],
        [55.71, 37.69]
    ],  {
       
        fillColor: '#7df9ff33',
      
        fillOpacity: 0.5,
       
        strokeColor: '#0000FF',
      
        strokeOpacity: 0.5,
       
        strokeWidth: 2,
       
        borderRadius: 6
    });

    myMap.geoObjects
        .add(myRectangle)
        .add(myGeoObject);
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








  