const mapxParam = new URLSearchParams(location.search).get('lon');
const mapyParam = new URLSearchParams(location.search).get('lat');
const numMapx = Number(mapxParam);
const numMapy = Number(mapyParam);
const detailBox = document.querySelector('.detail_contents');
const imgBox = document.querySelector('.detail_bg');

$.ajax({
  url: `/lbcamp/php/detail.php?lat=${numMapy}&lon=${numMapx}`, 
  type: 'GET',
  dataType : 'json',
  success: function(result){
    const item = result.body.items.item;
    console.log(item);
    let imgItem = "";
    let detailItem = "";
  
    imgItem = `<img src="${item.firstImageUrl}" alt="" onerror="this.src='/lbcamp/img/no_image.png'"><span class="radi_bar"></span>`;

    imgBox.innerHTML = imgItem;

    detailItem = `
                  <div class="detail_wrap">
                    <h2 class="detail_tit">${item.addr2}</h2>
                    <span class="line"></span>
                    <div class="detail_info">
                      <p>
                        <span class="info_ico"><i class="fa fa-map-marker"></i></span>
                        <span class="info_txt">${item.addr1}</span>
                      </p>
                      <p>
                        <span class="info_ico"><i class="fa fa-dog"></i></span>
                        <span class="info_txt">${item.animalCmgCl}</span>
                      </p>
                      <p>
                        <span class="info_ico"><i class="fa fa-cutlery"></i></span>
                        <span class="info_txt">${item.sbrsCl}</span>
                      </p>
                      <p>
                        <span class="info_ico"><i class="fa fa-clock"></i></span>
                        <span class="info_txt">${item.operDeCl}, ${item.operPdCl}</span>
                      </p>
                    </div>
                    <span class="line"></span>
                    <h2 class="detail_tit">캠핑장 소개</h2>
                    <span class="line"></span>
                    <div class="info_desc">
                      ${item.intro}
                    </div>
                    <span class="line"></span>
                    <h2 class="detail_tit">위치 지도</h2>
                    <div class="detail_map" id="map"></div>
                  </div>
                  `;
      detailBox.innerHTML = detailItem;

    //google map logics here..
    var map;

    function initMap() {
      var centerTarget = { lat: numMapy, lng: numMapx };
      map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: centerTarget
        }
      );

      new google.maps.Marker({
        position: centerTarget,
        map: map,
        icon: '/lbcamp/img/marker.png'
      });

    }
    initMap();
  }
});






