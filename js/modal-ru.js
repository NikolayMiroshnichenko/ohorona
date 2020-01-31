$('.js-button-campaign').click(function() { 
	
	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
	$('.js-overlay-campaign').fadeOut();
	
});

//переключение меню
$('.js-slide-button').click(function() { 
	// alert($(this).attr("id"));
	// $(this).addClass('activated');

	var idNum = $(this).attr("id");
	switch(idNum){
		case 'first':
			$('#first').addClass('activated');
			$('#second').removeClass('activated');
			$('#third').removeClass('activated');
			$('#quarters').removeClass('activated');

			$('.first-slide').css("display", "flex");
			$('.second-slide').css("display", "none");
			$('.third-slide').css("display", "none");
			$('.quarters-slide').css("display", "none");
			break;
		case 'second':
			$('#first').removeClass('activated');
			$('#second').addClass('activated');
			$('#third').removeClass('activated');
			$('#quarters').removeClass('activated');

			$('.first-slide').css("display", "none");
			$('.second-slide').css("display", "flex");
			$('.third-slide').css("display", "none");
			$('.quarters-slide').css("display", "none");
			break;
		case 'third':
			$('#first').removeClass('activated');
			$('#second').removeClass('activated');
			$('#third').addClass('activated');
			$('#quarters').removeClass('activated');

			$('.first-slide').css("display", "none");
			$('.second-slide').css("display", "none");
			$('.third-slide').css("display", "flex");
			$('.quarters-slide').css("display", "none");
			break;
		case 'quarters':
			$('#first').removeClass('activated');
			$('#second').removeClass('activated');
			$('#third').removeClass('activated');
			$('#quarters').addClass('activated');

			$('.first-slide').css("display", "none");
			$('.second-slide').css("display", "none");
			$('.third-slide').css("display", "none");
			$('.quarters-slide').css("display", "flex");
			break;
	}
});

/*
отправка письма на почту, использовал бесплатный сторонний сервис https://www.smtpjs.com/
SecureToken генерируется у них на сайте, в него входят данные SMTP сервера 

*/
$('.popup-btn').click(function() { 
	var nameData = $('.popup-form__name').val(); //данные с формы
 	var telData = $('.popup-form__tel').val() // -//-
	var finalString = "Имя " + nameData + ", номер телефона: " + telData; //готовая строка в которую можно написать любой текст

	if(nameData && telData !== ""){ //проверка заполнение полей
		Email.send({
			SecureToken : "d91f5b19-33c1-4007-bdd7-029ad8a44fde",
			To : 'ohorona.kiev.ua@gmail.com',
			From : "order@ohorona.kiev.ua",
			Subject : "Заказ",
			Body : finalString,
		}).then(
			
		);
	}
	$('.js-overlay-campaign').fadeOut();
});

// закрыть по клику вне окна
$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();
		
	}
});
