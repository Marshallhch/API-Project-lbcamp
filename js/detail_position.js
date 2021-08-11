const mapxParam = new URLSearchParams(location.search).get('lon');
const mapyParam = new URLSearchParams(location.search).get('lat');
console.log(mapxParam);
console.log(mapyParam);
console.log(123);

$.ajax({
  url: `/lbcamp/php/location.php?lat=${lat}&lon=${lon}&radi=${radiVal}`, 
  type: 'GET',
  dataType : 'json',
  success: function(result){
    const item = result.body.items.item;
    let currentItems = "";

    item.forEach(function(data){
      console.log(data);
      currentItems = `
                      <div class="carousel_item">
                        <div class="item_card">
                          <a href="/lbcamp/detail_position.php?lon=${data.mapX}&lat=${data.mapY}">
                            <div class="sl_img">
                              <img src="${data.firstImageUrl}" alt="" onerror="this.src='/lbcamp/img/no_image.png'">
                            </div>
                          </a>
                          <div class="sl_txt">
                            <h2>${data.facltNm}</h2>
                            <p>${data.addr1}</p>
                          </div>
                          <div class="sl_icons">
                            <img src="img/ico_mart.png" alt="">
                            <em>${data.sbrsCl}</em>
                          </div>
                        </div>
                      </div>
                    `;
      contentsBox.innerHTML += currentItems;
    }); 

    //google map logics here..
    var map;

    function initMap() {
      var centerTarget = { lat: Number(lat) ,lng: Number(lon) };
      map = new google.maps.Map( document.getElementById('map'), {
          zoom: 10,
          center: centerTarget
        }
      );

      for(let i = 0; i < item.length; i++){
        new google.maps.Marker({
          position: new google.maps.LatLng(Number(item[i].mapY), Number(item[i].mapX)),
          map: map,
          icon: '/lbcamp/img/marker.png'
        });
      }
    }
    initMap();
  }
});




