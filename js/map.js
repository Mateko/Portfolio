
      function initMap() {
		var uluru = {lat: 53.0585079, lng: 21.60591899999997};
        var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15, 
		center: uluru
        });
		  var marker = new google.maps.Marker({position: uluru, map: map});
      }