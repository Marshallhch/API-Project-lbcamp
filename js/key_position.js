const key_val = document.location.href.split('=')[1];
const decord_val = decodeURI(key_val);
const contentsBox = document.querySelector("#contents_box");
// console.log(decord_val);

$.ajax({
  url: `/lbcamp/php/key.php?key=${decord_val}`, 
  type: 'GET',
  dataType : 'json',
  success: function(result){
    const item = result.body.items.item;
    let currentItems = "";
    // console.log(Array.isArray(item));

    function itemDOM(el){
      currentItems = `
                        <div class="carousel_item">
                          <div class="item_card">
                            <a href="/lbcamp/detail_position.php?lon=${el.mapX}&lat=${el.mapY}">
                              <div class="sl_img">
                                <img src="${el.firstImageUrl}" alt="" onerror="this.src='/lbcamp/img/no_image.png'">
                              </div>
                            </a>
                            <div class="sl_txt">
                              <h2>${el.facltNm}</h2>
                              <p>${el.addr1}</p>
                            </div>
                            <div class="sl_icons">
                              <img src="img/ico_mart.png" alt="">
                              <em>${el.sbrsCl}</em>
                            </div>
                          </div>
                        </div>
                      `;
        contentsBox.innerHTML += currentItems;
    }

    if(Array.isArray(item)){
      item.forEach(function(data){
        console.log(data);
        itemDOM(data);

        //google map logics here..
        var map;

        function initMap() {
          var centerTarget = { lat: Number(item[0].mapY) ,lng: Number(item[0].mapX) };
          map = new google.maps.Map( document.getElementById('map'), {
              zoom: 7,
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
      });
    } else {
      itemDOM(item);

      //google map logics here..
      var map;

      function initMap() {
        var centerTarget = { lat: Number(item.mapY), lng: Number(item.mapX) };
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

    // google map logics here..
    // var map;

    // function initMap() {
    //   var centerTarget = { lat: numMapy, lng: numMapx };
    //   map = new google.maps.Map( document.getElementById('map'), {
    //       zoom: 12,
    //       center: centerTarget
    //     }
    //   );

    //   new google.maps.Marker({
    //     position: centerTarget,
    //     map: map,
    //     icon: '/lbcamp/img/marker.png'
    //   });

    // }
    // initMap();
  }
});

//carousel slide
$(document).ajaxComplete(function(){// ajax 데이터가 DOM으로 모두 로드된 이후 실행되는 함수
  let slider = $('.owl-carousel');
  slider.each(function () {
    $(this).owlCarousel({
      loop:false,
      margin: 5,
      autoHeight: false,
      responsive:{
        0:{
          items: 1,
          stagePadding: 20,
          margin: 15,
        }
      }
    });
  });
});