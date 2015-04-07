function initialize() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(59.9373,30.3214)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
  var image = "img/map-point.png";
  var myLatLng = new google.maps.LatLng(59.9361947,30.3218419,17);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);