<!DOCTYPE html>
<html lang="en">
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

  <!-- Main Style Link -->
  <link rel="stylesheet" href="/lbcamp/css/style.css">

  <!-- Animation Style Link -->
  <link rel="stylesheet" href="/lbcamp/css/animation.css">
</head>
<body>
  
  <div class="wrap">
    <!-- Header -->
    <?php include $_SERVER["DOCUMENT_ROOT"].'/lbcamp/include/header.php'; ?>

    <!-- Map Box -->
    <div class="map_img" id="map"></div>

    <!-- Search and Select Bar -->
    <div class="contents_bar search_position">
      <div class="center">
        <div class="drop_bar">
          <div class="dropdown">
            <div class="select">
              <span>내 주변 캠핑장 검색</span>
              <i class="fa fa-chevron-down"></i>
            </div>
            <ul class="dropdown_menu">
              <li><a href="#">반경 10KM 검색</a></li>
              <li><a href="#">반경 20KM 검색</a></li>
              <li><a href="#">반경 30KM 검색</a></li>
              <li><a href="#">반경 40KM 검색</a></li>
              <li><a href="#">반경 50KM 검색</a></li>
            </ul>
          </div>    
        </div>
      </div>
    </div>
  </div>

  <!-- Jquery Framework Load -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBD-NNW6pg1bTBrAH_8cfU5V1mcPafzcdw&region=kr"></script>
  <script src="/lbcamp/js/main.js"></script>
  <script src="/lbcamp/js/current_position.js"></script>
</body>
</html>