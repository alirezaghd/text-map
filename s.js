var lat =36.1428353;
var lng =59.7408658;
function myMap() {
var mapProp= {
 center:new google.maps.LatLng(lat,lng),
 zoom:15,
};
map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
if (navigator.geolocation) {
 navigator.geolocation.getCurrentPosition(function(position){
   lat =position.coords.latitude;
   lng =position.coords.longitude;
   
var myCenter = new google.maps.LatLng(lat,lng);
map.setcenter(myCenter);

var marker = new google.maps.Marker({   
position: myCenter,
draggable:true,
animation:google.maps.Animation.BOUNCE,
icon:'3915752_gps_location_maps_navigation_pin_icon (1).png',

});
marker.setMap(map);

google.map.event.addlistener(marker,'click',function(){
   var tag_p_lat =document.getElementById("lat")
   var tag_p_lng =document.getElementById("lng");
  
   var selected_location = marker.getposition()
   tag_p_lat.innerHTML = selected_location.lat();
   tag_p_lng.innerHTML = selected_location.lng();
});
});
}else{
alert("geolocation is not supported by this browser .")
}

