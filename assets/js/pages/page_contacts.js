var ContactPage = function () {

	var lat = 36.1514613;
    var lng = -86.7851693;
    	
    return {
        
        //Basic Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				lat: lat,
				lng: lng
			  });
			  
			  var marker = map.addMarker({
				lat: lat,
				lng: lng,
	            title: 'Acklen Avenue'
		       });
			});
        },

        //Panorama Map
        initPanorama: function () {
		    var panorama;
		    $(document).ready(function(){
		      panorama = GMaps.createPanorama({
		        el: '#panorama',
		        lat : lat,
		        lng : lng
		      });
		    });
		}        

    };
}();