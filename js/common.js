$(document).ready(function() {

  $(".header__menu a, .subMenu a, .arrowUp").mPageScroll2id({
     offset : 65
  });

});

function initMap() {
        var mapCoordinates = {lat: 48.6635, lng: 25.501248};
        var markerCoordinates = {lat: 48.663028, lng: 25.501248};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: mapCoordinates
        });
        var marker = new google.maps.Marker({
          position: markerCoordinates,
          map: map,
          title: 'SIMnet Провайдер №1 в м.Городенка',
          animation: google.maps.Animation.BOUNCE,
          icon: 'img/mapIcon.png'
        });
        var contentString = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">SIMnet - Провайдер №1 в м.Городенка</h1>'+
          '<div id="bodyContent">'+
          '<p>Наш офіс знаходиться на вулиці Братів Окуневських, будинок 00; Завжди чекаємо Вас і готові реалізувати ваші запити та доставити інформацію до Вашого дому чи офісу</p>'+
          '<p><b>Веб-сайт:</b> <a href="http://www.simnet.if.ua/" target="_blank">simnet.if.ua</a>'+
          '</p>'+
          '</div>'+
          '</div>';
        var infowindow = new google.maps.InfoWindow({
           content: contentString,
           maxWidth: 400
        });
           marker.addListener('click', function() {
           infowindow.open(map, marker);
        });
      }
