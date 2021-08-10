// navigator.geolocation.getCurrentPosition((position) => {
//   const lat = position.coords.latitude;
//   const lon = position.coords.longitude;
//   // console.log(lat, lon);
//   const radiVal = 20000;

//   $.ajax({
//     url: `/lbcamp/php/location.php?lat=${lat}&lon=${lon}&radi=${radiVal}`, 
//     type: 'GET',
//     dataType : 'json',
//     success: function(result){
//       // console.log(result);
//       const item = result.body.items.item;
//       console.log(item);
//     }
//   });
// });

navigator.geolocation.getCurrentPosition((position) => {

  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // console.log(lat, lon);
  const radiVal = 10000;

  $.ajax({
    url: `/lbcamp/php/location.php?lat=${lat}&lon=${lon}&radi=${radiVal}`, 
    type: 'GET',
    dataType : 'json',
    success: function(result){
      // console.log(result);
      const item = result.body.items.item;
      console.log(item);

      // script.js
      var map;

      function initMap() {
        var seoul = { lat: Number(lat) ,lng: Number(lon) };
        map = new google.maps.Map( document.getElementById('map'), {
            zoom: 12,
            center: seoul
          });

        new google.maps.Marker({
          position: seoul,
          map: map,
          icon: '/lbcamp/img/marker.png'
        });
      }
      initMap();
    }
  });

});
