$(document).ready(function() {

  $(".header__menu a, .arrowUp").mPageScroll2id({
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

// Віджет Easypay початок
  $(function (){
	  var ServiceId=788;										//ID сервиса
	  var AccountLabel='Запрошення для введення № рахунку'; 	//Подпись приглашения для ввода номера счета
    var AccountLengthMin = 1; 								//Минимальная длина приглашения для ввода номера счета
    var AccountLength = 4; 									//Длина приглашения для ввода номера счета
	  var AccountDefValue='0678888888';							//Значение по-умолчанию приглашения для ввода номера счета
	  var AmountLabel='Запрошення для введення суми';			//Подпись приглашения для ввода суммы
	  var AmountDefValue='5.0';									//Значение по-умолчанию приглашения для ввода суммы
	  var AmountMin=2;											//Минимальное значение суммы
	  var AmountMax=5000;										//Максимальное значение суммы
	  var Locale='ru'; 											//Локаль(ru|ua|en)
	  var ButtonPayLabel='Сплатити'; 							//Подпись кнопки

	  var Error_Mgs_Account_Is_Empty='Приглашение для ввода номера счета не может быть пустым!';

	  var Error_Mgs_Account_Length_Not_Right='Длина приглашения для ввода номера счета должна быть больше ' + AccountLengthMin +' и меньше ' + AccountLength + '!';
	  if (AccountLengthMin===AccountLength) {Error_Mgs_Account_Length_Not_Right='Длина приглашения для ввода номера счета должна быть равна ' + AccountLength + '!';}
	  var Error_Mgs_Amount_Is_Empty='Приглашение для ввода суммы не может быть пустым!';
	  var Error_Mgs_Amount_Bounds='Сумма должна быть больше ' + AmountMin + ' и меньше ' + AmountMax + '!';


	  //-----------------------------------------------------------------------------------------------------------------
	  $('#service_id').val(ServiceId);
	  $('#account_label').html(AccountLabel);
	  $('#account').val(AccountDefValue);
	  $('#amount_label').html(AmountLabel);
	  $('#amount').val(AmountDefValue);
	  $('#lang').val(Locale);
	  $('#button_pay').html(ButtonPayLabel);

	  $('#account').keyup(function (){
      var pattern=/[^0-9]/gim;
	  var newstr=$(this).val().replace(pattern,'');
	  if (newstr.length > AccountLength) newstr=newstr.slice(0,AccountLength);
      $(this).val(newstr);
	  });

	  $('#amount').keyup(function (){
      var pattern=/^\.|\d+\..*\.|[^\d\.{1}]/;
      $(this).val($(this).val().replace(pattern,''));
	  });

	  $('#EasypayWidget').submit(function (){
	  if ($('#account').val()==''){
	   $('#error_cell').html(Error_Mgs_Account_Is_Empty);
	   $('#error_cell').show();
	   return false;
	  }
	  else if ($('#account').val().length < AccountLengthMin || $('#account').val().length > AccountLength){
	   $('#error_cell').html(Error_Mgs_Account_Length_Not_Right);
	   $('#error_cell').show();
	   return false;
	  }
      else if ($('#amount').val()=='') {
	   $('#error_cell').html(Error_Mgs_Amount_Is_Empty);
	   $('#error_cell').show();
	   return false;
	  }
      else if ($('#amount').val()<=AmountMin) {
	   $('#error_cell').html(Error_Mgs_Amount_Bounds);
	   $('#error_cell').show();
	   return false;
	  }
      else if ($('#amount').val()>AmountMax) {
	   $('#error_cell').html(Error_Mgs_Amount_Bounds);
	   $('#error_cell').show();
	   return false;
	  }
	  });
	  });

// Віджет Easypay кінець
