<!DOCTYPE html>
<html lang="en" id="detail_html">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
  <title>Go Camping</title>

  <!-- Favicon Link -->
  <link rel="shortcut icon" href="/lbcamp/img/favicon.ico" type="image/x-icon">
  <link rel="icon" href="/lbcamp/img/favicon.ico" type="image/x-icon">
  <link rel="apple-touch-icon" href="/lbcamp/img/favicon.ico">

  <!-- Font Awesome Link -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/v4-shims.css">

  <!-- Main Style Link -->
  <link rel="stylesheet" href="/lbcamp/css/style.css">

  <!-- Animation Style Link -->
  <link rel="stylesheet" href="/lbcamp/css/animation.css">
</head>
<body id="detail_page">
  
  <div class="wrap">

    <!-- Header -->
    <?php include $_SERVER["DOCUMENT_ROOT"].'/lbcamp/include/header.php'; ?>

    <div class="details">

      <div class="detail_bg">
        <!-- <img src="img/ex.jpg" alt=""> -->
        <!-- <span class="radi_bar"></span> -->
      </div>
      <div class="detail_contents">
        <!-- <div class="detail_wrap">
          <h2 class="detail_tit">캠핑장 이름</h2>
          <span class="line"></span>
          <div class="detail_info">
            <p>
              <span class="info_ico"><i class="fa fa-map-marker"></i></span>
              <span class="info_txt">서울시 서초구 에이비시로 80번길 어쩌구 저쩌구...</span>
            </p>
            <p>
              <span class="info_ico"><i class="fa fa-dog"></i></span>
              <span class="info_txt">서울시 서초구 에이비시로 80번길 어쩌구 저쩌구...</span>
            </p>
            <p>
              <span class="info_ico"><i class="fa fa-cutlery"></i></span>
              <span class="info_txt">서울시 서초구 에이비시로 80번길 어쩌구 저쩌구...</span>
            </p>
            <p>
              <span class="info_ico"><i class="fa fa-clock"></i></span>
              <span class="info_txt">서울시 서초구 에이비시로 80번길 어쩌구 저쩌구...</span>
            </p>
          </div>
          <span class="line"></span>
          <h2 class="detail_tit">캠핑장 소개</h2>
          <span class="line"></span>
          <div class="info_desc">
            의원을 제명하려면 국회재적의원 3분의 2 이상의 찬성이 있어야 한다. 감사위원은 원장의 제청으로 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다.
            국가안전보장에 관련되는 대외정책·군사정책과 국내정책의 수립에 관하여 국무회의의 심의에 앞서 대통령의 자문에 응하기 위하여 국가안전보장회의를 둔다.
          </div>
          <span class="line"></span>
          <h2 class="detail_tit">위치 지도</h2>
          <div class="detail_map"></div>
        </div> -->
        <!-- end of detail_wrap -->
      </div>

    </div>
    <!-- end of details -->
  </div>

  <!-- Jquery Framework Load -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBD-NNW6pg1bTBrAH_8cfU5V1mcPafzcdw&region=kr"></script>
  <script src="/lbcamp/js/main.js"></script>
  <script src="/lbcamp/js/detail_position.js"></script>
  <script>
    window.addEventListener('scroll', function(){
      const header = document.querySelector('header');
      if(window.pageYOffset > 0){
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
  </script>
</body>
</html>