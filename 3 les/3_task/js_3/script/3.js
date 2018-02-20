'use strict';

(function feedBack() {
//создаю элементы формы
	var doc = document,
	form = doc.createElement('form'),
	title = doc.createElement('legend'),
	name = doc.createElement('input'),
	tel = doc.createElement('input'),
	mail = doc.createElement('input'),
	button = doc.createElement('input'),
	text = doc.createElement('textarea');
//интеграция в DOM
	document.body.appendChild(form);
	form.appendChild(title);
	title.innerHTML = 'Форма обратной связи';
	form.appendChild(name);
	form.appendChild(tel);
	form.appendChild(mail);
	form.appendChild(text);
	form.appendChild(button);
//атрибуты элементов
	name.id = 'name';
	name.setAttribute('type','text');
	name.setAttribute('placeholder','Имя');
	tel.id = 'tel';
	tel.setAttribute('type','tel');
	tel.setAttribute('placeholder','+7(000)000-0000');
	mail.id = 'mail';
	mail.setAttribute('type','mail');
	mail.setAttribute('placeholder','my-mail@mail.ru');
	button.setAttribute('type','button');
	button.setAttribute('value','Отправить');
	button.setAttribute('onclick','validation()');
})();

function validation() {
	var valueName = document.getElementById('name').value,
		valueTel = document.getElementById('tel').value,
		valueMail = document.getElementById('mail').value,
//RegExp для имени
		pcreName = /[^A-zА-яЁё]/.test(valueName),
//для телефона
		pcreTel = /\+\d{1,3}\(\d{3}\)\d{3}-\d{4}/.test(valueTel),
//для E-mail
		pcreMail = /\w\.?-?\w\@\w\.\w/.test(valueMail);

	if (pcreName === false) {
		if (pcreTel === true) {
			if (pcreMail === true) {
				alert('отправлено');
			} 
			else 
				mail.className = 'err';
				document.getElementById('mail').value = 'ошибка!';
		} 
		else 
			tel.className = 'err';
			document.getElementById('tel').value = 'ошибка!';
	} 
	else 
		document.getElementById('name').className = 'err';
		document.getElementById('name').value = 'ошибка!';
}

