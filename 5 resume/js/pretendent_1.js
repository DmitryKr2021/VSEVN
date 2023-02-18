/*const moreAdsBtn = document.querySelector('.more-ads__btn');
const dataItems = document.querySelectorAll('.data__item');
moreAdsBtn.onclick = () => {
  for (let item of dataItems) {
    if (item.classList.contains('hide-block')) {
      item.classList.remove('hide-block');
    }
  }
};*/

/**************Выбор варианта резюме *************/
const windowDeadline = document.querySelector('.window__deadline');
const windowNow = document.querySelector('.window__now');
const resumeMain = document.querySelector('.resume-main');
const resumeAnonim = document.querySelector('.resume-anonim');
const resumeAnonimWrap = document.querySelector('.resume-anonim__wrap');
const resumeTitles = document.querySelectorAll('.resume-title');
const resumeTitle1 = document.querySelector('.resume-title__1');
const resumeTitleSpans = document.querySelector('.resume-title').querySelectorAll('span');
const windowButtonsRow = document.querySelector('.window__buttons-row');
const windowButtonsRowBtns = document.querySelector('.window__buttons-row').querySelectorAll('button');
const resumeButtonsRow = document.querySelector('.resume__buttons-row');
const resumeButtonsRowBtns = document.querySelector('.resume__buttons-row').querySelectorAll('button');
const anotherResume = document.querySelector('.another-resume');
const changeDesign = document.querySelector('.change-design');
const aComment = document.querySelector('.edit-comment');
const editResume = document.querySelector('.edit-resume');
const btnBlack = document.querySelector('.btn-black');
const btnFavorite = document.querySelector('.btn-favorite');
const btnComplain = document.querySelector('.btn-complain');
const contacts = document.querySelectorAll('.contacts');
const noContacts = document.querySelectorAll('.no-contacts');
const windowForks = document.querySelectorAll('.window__fork');

windowButtonsRowBtns[2].style.display = 'none';
noContacts[1].style.display = 'none';
resumeAnonim.style.display = 'none';
windowButtonsRow.style.display = 'none';

/*****Показать резюме соискателя с контактами *******/
resumeTitle1.querySelectorAll('button')[0].onclick = (e) => {
 resumeAnonimWrap.style.display = 'none';
 resumeMain.style.display = 'flex';
 if (document.documentElement.clientWidth < 1131) {
  resumeMain.style.display = 'grid';
 }

 window.onresize = () => {
  resumeAnonimWrap.style.display = 'none';
  if (document.documentElement.clientWidth < 1110) {
   resumeMain.style.display = 'grid';
  } else {
   resumeMain.style.display = 'flex';
  }
 };

 windowButtonsRow.style.display = 'none';
 document.querySelector('.pretendent-card__container').classList.remove('hide-block');
 pretendentAnket.classList.add('initial-hide');
 for (let item of resumeTitleSpans) {
  item.classList.remove('active');
 }
 showVar1();
 e.currentTarget.parentNode.classList.add('active');

 //Выйти из режима редактирования
 stopEdit();
 editResume.innerText = toEditResume;
 editResume.classList.remove('active');
 resumeEdited = false;
 //конец выйти

 noContacts[1].style.display = 'none'; //Убрать скрытый телефон 
};
/****Поднять объявление ****/
const up = document.querySelector('.up');
const pageN = document.querySelector('.pageN');
up.onclick = () => pageN.innerText = ' ' + '1';
/**Конец поднять объявление **/

/***Конец показать резюме соискателя с контактами *****/

/*****Показать резюме соискателя без контактов *******/
resumeTitle1.querySelectorAll('button')[1].onclick = (e) => {
 resumeMain.style.display = 'flex';
 if (document.documentElement.clientWidth < 1131) {
  resumeMain.style.display = 'grid';
 }

 window.onresize = () => {
  resumeAnonimWrap.style.display = 'none';
  if (document.documentElement.clientWidth < 1110) {
   resumeMain.style.display = 'grid';
  } else {
   resumeMain.style.display = 'flex';
  }
 };

 windowButtonsRow.style.display = 'flex';
 document.querySelector('.pretendent-card__container').classList.remove('hide-block');
 pretendentAnket.classList.add('initial-hide');

 for (let item of resumeTitleSpans) {
  item.classList.remove('active');
 }
 e.target.parentNode.classList.add('active');
 showVar2();
 contacts[1].style.display = 'none';
 contacts[1].querySelectorAll('button')[2].classList.remove('hide-block');
 noContacts[1].style.display = 'flex';
 stopEdit();
};
/***Конец показать резюме соискателя без контактов *****/

/***********Показать анонимное резюме ***********/
resumeTitle1.querySelectorAll('button')[2].onclick = (e) => {
 resumeAnonimWrap.style.display = 'flex';
 if (document.documentElement.clientWidth < 1244) {
  resumeAnonimWrap.style.display = 'grid';
 }

 window.onresize = () => {
  resumeMain.style.display = 'none';
  if (document.documentElement.clientWidth < 1244) {
   resumeAnonimWrap.style.display = 'grid';
  } else {
   resumeAnonimWrap.style.display = 'flex';
  }
 };

 windowButtonsRow.style.display = 'flex';
 document.querySelector('.pretendent-card__container').classList.remove('hide-block');
 pretendentAnket.classList.add('initial-hide');

 for (let item of resumeTitleSpans) {
  item.classList.remove('active');
 }
 e.target.parentNode.classList.add('active');
 showVar5();
 stopEdit();
};

/*******Конец показать анонимное резюме *********/

function showVar1() {
 windowDeadline.classList.remove('hide-block');
 windowNow.classList.remove('hide-block');
 resumeButtonsRowBtns[2].classList.remove('hide-block');
 resumeButtonsRowBtns[3].classList.remove('hide-block');
 windowButtonsRowBtns[2].style.display = 'none';
 resumeAnonim.style.display = 'none';
 resumeTitles[1].classList.add('hide-block');
 resumeTitles[0].classList.remove('hide-block');
 anotherResume.classList.add('hide-block');
 changeDesign.classList.remove('hide-block');
 editResume.classList.remove('hide-block');
 aComment.style.display = 'block';
 btnBlack.classList.add('hide-block');
 btnFavorite.classList.add('hide-block');
 btnComplain.classList.add('hide-block');
 contacts[0].classList.remove('hide-block');
 noContacts[0].classList.add('hide-block');
 contacts[1].style.display = 'flex';
 contacts[1].querySelectorAll('button')[2].classList.remove('hide-block');
 resumeButtonsRow.style.display = 'flex';
 noContacts[1].style.display = 'none';
 for (let item of windowForks) {
  item.nextElementSibling.classList.remove('hide-block');
 }
}

function showVar2() {
 windowDeadline.classList.add('hide-block');
 windowNow.classList.add('hide-block');
 resumeTitleSpans[0].classList.remove('hide-block');
 resumeAnonim.style.display = 'none';
 resumeButtonsRowBtns[2].classList.add('hide-block');
 resumeButtonsRowBtns[3].classList.add('hide-block');
 windowButtonsRowBtns[2].style.display = 'none';
 anotherResume.classList.add('hide-block');
 changeDesign.classList.add('hide-block');
 editResume.classList.add('hide-block');
 btnBlack.classList.add('hide-block');
 btnFavorite.classList.add('hide-block');
 btnComplain.classList.add('hide-block');
 aComment.style.display = 'block';
 contacts[0].classList.remove('hide-block');
 noContacts[0].classList.add('hide-block');
 contacts[1].style.display = 'flex';
 contacts[1].querySelectorAll('button')[2].classList.remove('hide-block');
 resumeButtonsRow.style.display = 'flex';
 noContacts[1].style.display = 'none';
 for (let item of windowForks) {
  item.nextElementSibling.classList.remove('hide-block');
 }
}

function showVar3() {
 windowDeadline.classList.add('hide-block');
 windowNow.classList.add('hide-block');
 for (let i = 1; i < resumeTitleSpans.length; i++) {
  resumeTitleSpans[i].classList.add('hide-block');
 }
 resumeMain.style.display = 'flex';
 resumeAnonim.style.display = 'none';
 resumeButtonsRowBtns[2].classList.add('hide-block');
 resumeButtonsRowBtns[3].classList.add('hide-block');
 windowButtonsRowBtns[2].style.display = 'block';
 resumeTitles[0].classList.add('hide-block');
 resumeTitles[1].classList.remove('hide-block');
 anotherResume.classList.remove('hide-block');
 changeDesign.classList.add('hide-block');
 editResume.classList.add('hide-block');
 btnBlack.classList.remove('hide-block');
 btnFavorite.classList.remove('hide-block');
 btnComplain.classList.remove('hide-block');
 aComment.style.display = 'block';
 contacts[0].classList.remove('hide-block');
 noContacts[0].classList.add('hide-block');
 contacts[1].style.display = 'flex';
 contacts[1].querySelectorAll('button')[2].classList.remove('hide-block');
 noContacts[1].style.display = 'none';
 resumeButtonsRow.style.display = 'flex';
 for (let item of windowForks) {
  item.nextElementSibling.classList.remove('hide-block');
 }
}

function showVar4() {
 windowDeadline.classList.add('hide-block');
 windowNow.classList.add('hide-block');
 for (let i = 1; i < resumeTitleSpans.length; i++) {
  resumeTitleSpans[i].classList.add('hide-block');
 }
 resumeMain.style.display = 'flex';
 resumeAnonim.style.display = 'none';
 resumeButtonsRowBtns[2].classList.add('hide-block');
 resumeButtonsRowBtns[3].classList.add('hide-block');
 windowButtonsRowBtns[2].style.display = 'block';
 resumeTitles[0].classList.remove('hide-block');
 resumeTitles[1].classList.add('hide-block');
 anotherResume.classList.add('hide-block');
 changeDesign.classList.add('hide-block');
 editResume.classList.add('hide-block');
 btnBlack.classList.add('hide-block');
 btnFavorite.classList.add('hide-block');
 btnComplain.classList.add('hide-block');
 aComment.style.display = 'block';
 contacts[0].classList.add('hide-block');
 noContacts[0].classList.remove('hide-block');
 contacts[1].style.display = 'none';
 contacts[1].querySelectorAll('button')[2].classList.remove('hide-block');
 noContacts[1].style.display = 'flex';
 resumeButtonsRow.style.display = 'flex';
 for (let item of windowForks) {
  item.nextElementSibling.classList.remove('hide-block');
 }
}

function showVar5() {
 windowDeadline.classList.add('hide-block');
 windowNow.classList.add('hide-block');
 resumeMain.style.display = 'none';
 resumeAnonim.style.display = 'flex';
 resumeButtonsRowBtns[2].classList.add('hide-block');
 resumeButtonsRowBtns[3].classList.add('hide-block');
 windowButtonsRowBtns[2].style.display = 'none';
 resumeTitles[0].classList.remove('hide-block');
 resumeTitles[1].classList.add('hide-block');
 anotherResume.classList.add('hide-block');
 changeDesign.classList.add('hide-block');
 editResume.classList.add('hide-block');
 btnBlack.classList.remove('hide-block');
 btnFavorite.classList.remove('hide-block');
 aComment.style.display = 'none';
 btnComplain.classList.add('hide-block');
 contacts[0].classList.add('hide-block');
 noContacts[0].classList.add('hide-block');
 contacts[1].style.display = 'flex';
 contacts[1].querySelectorAll('button')[2].classList.add('hide-block');
 noContacts[1].style.display = 'none';
 resumeButtonsRow.style.display = 'none';
 for (let item of windowForks) {
  item.nextElementSibling.classList.add('hide-block');
 }
}

/**********Конец выбор варианта резюме ***********/

/***************Работа с анкетой ******************/
/**********Показать анкету ********/
const anket = document.querySelector('.anket');
const pretendentAnket = document.querySelector('.pretendent-anket');
anket.addEventListener('click', function (e) {

 for (let item of resumeTitleSpans) {
  item.classList.remove('active');
 }

 window.onresize = () => {
  resumeMain.style.display = 'none';
 };
 windowButtonsRow.style.display = 'flex';
 e.target.parentNode.classList.add('active');
 windowDeadline.classList.add('hide-block');
 windowNow.classList.add('hide-block');
 resumeMain.style.display = 'none';
 resumeAnonim.style.display = 'none';
 document.querySelector('.pretendent-card__container').classList.add('hide-block');
 pretendentAnket.classList.remove('initial-hide');
});
/*******Конец показать анкету ******/

/*****Ввод в текстовые поля *****/
const textOnlys = document.querySelectorAll('.text-only');
const inputsTextOnly = [];
//Создаем массив объектов из полей текстового ввода и их начальных значений
for (let item of textOnlys) {
 inputsTextOnly.push({
  thisItem: item,
  textValue: '',
 });
}

for (let i = 0; i < inputsTextOnly.length; i += 1) {
 inputsTextOnly[i].thisItem.addEventListener('input', (e) => {
  let newValue = e.target.value;
  if (newValue.match(/[^а-яА-Я]/g)) {
   e.target.value = inputsTextOnly[i].textValue;
   return;
  }
  inputsTextOnly[i].textValue = newValue;
  e.target.value = newValue;
 });
}
/**Конец ввод в текстовые поля **/

/*****Ввод в числовые поля *****/
const numberOnlys = document.querySelectorAll('.number-only');
const inputsNumberOnly = [];
//Создаем массив объектов из полей числового ввода и их начальных значений
for (let item of numberOnlys) {
 inputsNumberOnly.push({
  thisItem: item,
  textValue: '',
 });
}

for (let i = 0; i < inputsNumberOnly.length; i += 1) {
 inputsNumberOnly[i].thisItem.addEventListener('input', (e) => {
  let newValue = e.target.value;
  if (newValue.match(/[^0-9.,]/g)) {
   e.target.value = inputsNumberOnly[i].textValue;
   return;
  }
  inputsNumberOnly[i].textValue = newValue;
  e.target.value = newValue;
 });
}
/**Конец ввод в числовые поля **/

/*****Ввод в поля с годом *****/
const dateYears = document.querySelectorAll('._date-years');
const inputsYearOnly = [];
//Создаем массив объектов из полей ввода года и их начальных значений
for (let item of dateYears) {
 inputsYearOnly.push({
  thisItem: item,
  textValue: '',
 });
}

for (let i = 0; i < inputsYearOnly.length; i += 1) {

 inputsYearOnly[i].thisItem.addEventListener('input', (e) => {
  let newValue = e.target.value;

  if (inputsYearOnly[i].textValue.length >= 3 && +e.target.value > 1900 && +e.target.value < 2020) {
   e.target.classList.remove('wrong-year');
  }

  if (inputsYearOnly[i].textValue.length >= 3 && +e.target.value < 1900 && +e.target.value > 2020) {
   e.target.classList.add('wrong-year');
  }

  if (inputsYearOnly[i].textValue.length > 3) {
   e.target.value = newValue.slice(0, 4);
   return;
  }

  if (newValue.match(/[^0-9]/g)) {
   e.target.value = inputsYearOnly[i].textValue;
   return;
  }
  inputsYearOnly[i].textValue = newValue;
  e.target.value = newValue;
 });

 inputsYearOnly[i].thisItem.addEventListener('change', (e) => {
  if (+e.target.value < 1900 || +e.target.value > 2020) {
   e.target.classList.add('wrong-year');
  } else {
   e.target.classList.remove('wrong-year');
  }
 });
}
/**Конец ввод в поля с годом **/



/********* Показать телефон и email **********/
const btnTelMails = document.querySelectorAll('.btnTelMail');

for (let item of btnTelMails) {
 item.addEventListener('click', showTelMail);
}

function showTelMail(e) {
 e.currentTarget.querySelector('.span-before').classList.add('hide-block');
 e.currentTarget.querySelector('.span-after').classList.remove('initial-hide');
}
/******Конец показать телефон и email ********/


/***********Плейсхолдеры ***********/
const windowTabsLabels = document.querySelectorAll('.window-tabs__label');
for (let item of windowTabsLabels) {
 item.querySelector('input').addEventListener('mouseout', checkFull);
}

function checkFull(e) {
 let b1 = !e.target.parentNode.classList.contains('married');
 let b2 = !e.target.classList.contains('datepicker-item');
 let b3 = !e.target.parentNode.classList.contains('flat');
 let b4 = !e.target.parentNode.classList.contains('_date');

 if (e.target.value && b1 && b2 && b3 && b4) {
  e.target.nextElementSibling.classList.add('active');
 }
}
/*******Конец плейсхолдеры *********/

/********Семейное положение ********/
const married = document.querySelector('.married');
const selectMarried = document.querySelector('.select__married');
const selectMarriedItems = document.querySelectorAll('.select__married-item');
const datepickerItem = document.querySelector('.datepicker-item');
const windowTabsLabelDate = document.querySelector('.window-tabs__label--date');

married.addEventListener('click', function (e) {
 married.querySelector('.input-container__arrow').classList.toggle('active');
 selectMarried.classList.toggle('active');
});

for (let item of selectMarriedItems) {
 item.addEventListener('click', chooseMarriedItem);
}

function chooseMarriedItem(e) {
 e.target.parentNode.previousElementSibling.value = e.target.innerText;
 married.querySelector('.input-container__arrow').classList.remove('active');
 selectMarried.classList.remove('active');
 married.querySelector('span').classList.add('active');
}
/*****Конец семейное положение *****/

/***********Гражданство ***********/
const windowTabsLabelBig = document.querySelector('.window-tabs__label--big');

windowTabsLabelBig.querySelector('input').onmouseout = (e) => {
 if (e.target.value) {
  windowTabsLabelBig.classList.add('active');
 } else {
  windowTabsLabelBig.classList.remove('active');
 }
};
/********Конец гражданство ********/

/**********Условия проживания ********/
const flat = document.querySelector('.flat');
const selectFlat = document.querySelector('.select__flat');
const selectFlatItems = document.querySelectorAll('.select__flat-item');

flat.addEventListener('click', function (e) {
 flat.querySelector('.input-container__arrow').classList.toggle('active');
 selectFlat.classList.toggle('active');
});

for (let item of selectFlatItems) {
 item.addEventListener('click', chooseFlatItem);
}

function chooseFlatItem(e) {
 e.target.parentNode.previousElementSibling.value = e.target.innerText;
 flat.querySelector('.input-container__arrow').classList.remove('active');
 selectFlat.classList.remove('active');
 flat.querySelector('span').classList.add('active');
}
/*******Конец условия проживания *****/

/*****Место работы, обязанности ******/
const addBtns = document.querySelectorAll('.add__btn');
for (let btn of addBtns) {
 btn.addEventListener('click', addResponsibilities);
}

function addResponsibilities(e) {
 let addInput = document.createElement('input');
 addInput.classList.add('add-input');
 e.target.parentNode.append(addInput);
}
/***Конец место работы, обязанности **/

/******Обучение персонала методике ******/
const addCloses = document.querySelectorAll('.add__close');
for (let item of addCloses) {
 item.onclick = (e) => {
  e.target.closest('.add__item').remove();
 };
}
/***Конец обучение персонала методике ***/

/************Конец работа с анкетой ***************/


/***********Корректировка даты деактивации ********/
const datepickerInput = document.querySelector('input[name="datepicker"]');
datepickerInput.onclick = () => {
 resumeMainInfo.classList.add('calendar-open');
};
/*******Конец корректировка даты деактивации ******/

/****************Замена фото**************** */
const changeFoto = document.querySelector('.change-foto');
const chooseFoto = document.querySelector('.choose-foto');
const resumeImg = document.querySelector('.resume-img');

changeFoto.onclick = function () {
 chooseFoto.classList.remove('initial-hide');
};

chooseFoto.addEventListener('change', function (e) {
 let fileImg = e.target.files[0];
 let fr = new FileReader();
 fr.onload = function (e2) {
  resumeImg.setAttribute('src', e2.target.result);
 };
 fr.readAsDataURL(fileImg);
 chooseFoto.classList.add('initial-hide');
});
/**************Конец замена фото****************/


/************Отредактировать резюме************ */
//const editResume = document.querySelector('.edit-resume');Определено выше при выборе варианта резюме 
const edits = document.querySelectorAll('.edit');
const resumeMainInfo = document.querySelector('.resume-main__info');
const infoItems = resumeMainInfo.querySelectorAll('p');
const adressWrap = document.querySelector('.adress__wrap');
const skillsWrapList = document.querySelector('.skills__wrap-list');
const liRemoves = document.querySelectorAll('.li-remove');
const listItems = document.querySelectorAll('.keys-listitem');
const titleEdits = document.querySelectorAll('.title-edit');
const tdTitles = document.querySelectorAll('.td-title');
const contactsWrap = document.querySelector('.contacts-wrap');
const contactsWrapEdit = document.querySelector('.contacts-wrap__edit');
const pencils = document.querySelectorAll('.pencil');
const contactTelNumber = document.querySelector('.contact-tel__number');
const contactEmailAdress = document.querySelector('.contact-email__adress');
const editTelPlaceholder = document.querySelector('.edit-tel').getAttribute("placeholder");
const editEmailPlaceholder = document.querySelector('.edit-mail').getAttribute("placeholder");
const divEyes = document.querySelectorAll('.div-eyes');
const span2s = document.querySelectorAll('.span2');
const span2texts = document.querySelectorAll('.span2text');
let telOk = false;
let EmailOk = false;
let closeAll = false;

const toEditResume = 'Отредактировать';
const toSaveResume = 'Сохранить изменения';
let resumeEdited = false;

function stopEdit() {
 //спрятать глаза
 for (let item of divEyes) {
  item.classList.add('initial-hide');
 }

 //Спрятать закрытую информацию
 for (let item of span2texts) {
  if (item.classList.contains('hide')) {
   item.textContent = "Информация скрыта соискателем";
   item.classList.remove('hide'); //убрать серый цвет
   item.classList.add('hide2'); //красный цвет
  }
 }

 for (let item of edits) {
  item.classList.add('initial-hide');
 }
 for (let item of liRemoves) {
  item.classList.add('initial-hide');
 }
 for (let item of pencils) {
  item.classList.add('initial-hide');
 }
 for (let item of listItems) {
  item.classList.remove('item-edit');
 }
 for (let item of titleEdits) {
  item.classList.remove('title-edit-show');
 }
 for (let item of tdTitles) {
  if (item.childNodes[1]) {
   if (item.childNodes[1].tagName == 'SPAN') {
    item.classList.remove('goup');
   }
  }
 }

 //вернуть вид ключевых навыков
 for (let item of document.querySelectorAll('.keys-listitem')) {
  item.classList.remove('item-edit');
  item.querySelector('.li-remove').classList.add('initial-hide');
 }

 //спрятать карандаш и крестик в новой работе
 if (newTr) {
  newTr.querySelector('.pencil').classList.add('initial-hide');
  newTr.querySelector('.li-remove').classList.add('initial-hide');
 }

 //спрятать карандаш и крестик в новом образовании
 if (newStudyTr) {
  newStudyTr.querySelector('.pencil').classList.add('initial-hide');
  newStudyTr.querySelector('.li-remove').classList.add('initial-hide');
 }

 //спрятать карандаш и крестик в новых курсах
 if (newCoursesTr) {
  newCoursesTr.querySelector('.pencil').classList.add('initial-hide');
  newCoursesTr.querySelector('.li-remove').classList.add('initial-hide');
 }

 //спрятать карандаш и крестик в новом языке
 if (newLanguageTr) {
  newLanguageTr.querySelector('.pencil').classList.add('initial-hide');
  newLanguageTr.querySelector('.li-remove').classList.add('initial-hide');
 }

 contactsWrap.style.display = 'flex';
 contactsWrapEdit.style.display = 'none';

 adressWrap.classList.remove('edit-info');
 skillsWrapList.classList.remove('edit-info');
}


editResume.addEventListener('click', function (e) {
 if (!resumeEdited) { //начать редактирование
  e.target.innerText = toSaveResume;
  e.target.classList.add('active');

  //показать глаза
  for (let item of divEyes) {
   item.classList.remove('initial-hide');
  }

  for (let item of edits) {
   item.classList.remove('initial-hide');
  }
  for (let item of liRemoves) {
   item.classList.remove('initial-hide');
  }
  for (let item of pencils) {
   item.classList.remove('initial-hide');
  }
  for (let item of listItems) {
   item.classList.add('item-edit');
  }
  for (let item of titleEdits) {
   item.classList.add('title-edit-show');
  }

  for (let item of tdTitles) {
   if (item.childNodes[1]) {
    if (item.childNodes[1].tagName == 'SPAN') {
     item.classList.add('goup');
    }
   }
  }
  for (let item of document.querySelectorAll('.keys-listitem')) {
   item.classList.add('item-edit');
   item.querySelector('.li-remove').classList.remove('initial-hide');
  }

  contactsWrap.style.display = 'none';
  contactsWrapEdit.style.display = 'flex';

  adressWrap.classList.add('edit-info');
  skillsWrapList.classList.add('edit-info');

  resumeEdited = !resumeEdited;
  contacts[1].style.display = 'none';

 } else { //закончить редактирование и сохранить
  closeAll = true;
  closeEditWorkPopup();

  if (telOk && EmailOk) {
   e.target.innerText = toEditResume;
   e.target.classList.remove('active');
   stopEdit();

   contactTelNumber.innerText = editTel.value || editTelPlaceholder;
   contactEmailAdress.innerText = editMail.value || editEmailPlaceholder;

   resumeEdited = !resumeEdited;
  }

  contacts[1].style.display = 'flex';
  noContacts[1].style.display = 'none';
 }
});
/**********Конец отредактировать резюме***********/


/***************Добавить в черный список************ */
//const btnBlack = document.querySelector('.btn-black'); Определено выше при выборе варианта резюме
const toBlack = 'Добавить в черный список';
const fromBlack = 'Убрать из черного списка';
let inBlackList = false;

btnBlack.addEventListener('click', toBlackList);

function toBlackList() {
 if (!inBlackList) {
  if (inFavorite) {
   toFavorite();
  }
  btnBlack.classList.add('pressed');
  btnBlack.querySelector('span').innerText = fromBlack;
  inBlackList = !inBlackList;
 } else {
  btnBlack.classList.remove('pressed');
  btnBlack.querySelector('span').innerText = toBlack;
  inBlackList = !inBlackList;
 }
}
/***********Конец добавить в черный список********** */

/***************Добавить в избранное************ */
//const btnFavorite = document.querySelector('.btn-favorite'); Определено выше в выборе варианта резюме
const addtoFavorite = 'Добавить в избранное';
const fromFavorite = 'Убрать из избранного';
let inFavorite = false;

btnFavorite.addEventListener('click', toFavorite);

function toFavorite() {
 if (!inFavorite) {
  if (inBlackList) {
   toBlackList();
  }
  btnFavorite.classList.add('pressed');
  btnFavorite.querySelector('span').innerText = fromFavorite;
  inFavorite = !inFavorite;
 } else {
  btnFavorite.classList.remove('pressed');
  btnFavorite.querySelector('span').innerText = addtoFavorite;
  inFavorite = !inFavorite;
 }
}
/***********Конец добавить в избранное********** */

/****************Проверка телефона***************** */
/**********Маска телефона***********/
window.addEventListener('DOMContentLoaded', function () {
 let inputs = document.querySelectorAll('input[type="tel"]');

 Array.prototype.forEach.call(inputs, function (input) {
  new InputMask({
   selector: input, // в качестве селектора может быть элемент, или css селектор('#input', '.input', 'input'). 
   //Если селектор - тег или класс - будет получен только первый элемент
   layout: input.dataset.mask
  });
 });
});

function InputMask(options) {
 this.el = this.getElement(options.selector);
 if (!this.el) {
  return console.log('Что-то не так с селектором');
 }
 this.layout = options.layout || '+7(___) ___-__-__';
 this.maskreg = this.getRegexp();
 this.setListeners();
}

InputMask.prototype.getRegexp = function () {
 var str = this.layout.replace(/_/g, '\\d');

 str = str.replace(/\(/g, '\\(');
 str = str.replace(/\)/g, '\\)');
 str = str.replace(/\+/g, '\\+');
 str = str.replace(/\s/g, '\\s');

 return str;
};

InputMask.prototype.mask = function (e) {
 var _this = e.target,
  matrix = this.layout,
  i = 0,
  def = matrix.replace(/\D/g, ""),
  val = _this.value.replace(/\D/g, "");

 if (def.length >= val.length) {
  val = def;
 }

 _this.value = matrix.replace(/./g, function (a) {
  return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
 });

 if (e.type == "blur") {
  var regexp = new RegExp(this.maskreg);
  if (!regexp.test(_this.value)) {
   _this.value = "";
  }
 } else {
  this.setCursorPosition(_this.value.length, _this);
 }
};

InputMask.prototype.setCursorPosition = function (pos, elem) {
 elem.focus();
 if (elem.setSelectionRange) {
  elem.setSelectionRange(pos, pos);
 } else if (elem.createTextRange) {
  var range = elem.createTextRange();
  range.collapse(true);
  range.moveEnd("character", pos);
  range.moveStart("character", pos);
  range.select();
 }
};

InputMask.prototype.setListeners = function () {
 this.el.addEventListener("input", this.mask.bind(this), false);
 this.el.addEventListener("focus", this.mask.bind(this), false);
 //this.el.addEventListener("blur", this.mask.bind(this), false);
};

InputMask.prototype.getElement = function (selector) {
 if (selector === undefined) {
  return false;
 }
 if (this.isElement(selector)) {
  return selector;
 }
 if (typeof selector == 'string') {
  var el = document.querySelector(selector);
  if (this.isElement(el)) {
   return el;
  }
 }
 return false;
};

InputMask.prototype.isElement = function (element) {
 return element instanceof Element || element instanceof HTMLDocument;
};
/******Конец маска телефона*****/

const editTel = document.querySelector('.edit-tel');
const tel_editContact = document.querySelectorAll('.edit-contact')[0];
const checkNumber = 'Проверьте формат номера';
const inputNumber = 'Введите телефон в формате +7(9ХХ)ХХХ-ХХ-ХХ';
telOk = true;

editTel.onfocus = function () {
 editTel.classList.add('ok');
 tel_editContact.innerHTML = inputNumber;
 telOk = false;
};

editTel.onblur = () => {
 if (editTel.value.length == 16 && editTel.value[3] == 9) {
  editTel.classList.add('ok');
  telOk = true;
  tel_editContact.innerHTML = '';
 } else {
  editTel.classList.remove('ok');
  tel_editContact.innerHTML = checkNumber;
 }
};
/**************Конец проверка телефона****************/

/*****************Проверка Email********************/
const reqMail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
const editMail = document.querySelector('.edit-mail');
const checkEmail = 'Проверьте формат E-mail';
const inputEmail = 'Введите E-mail';
const mail_editContact = document.querySelectorAll('.edit-contact')[1];
EmailOk = true;

editMail.onfocus = function () {
 editMail.classList.add('ok');
 mail_editContact.innerHTML = inputEmail;
 EmailOk = false;
};

editMail.onblur = () => {
 if (reqMail.test(editMail.value)) {
  editMail.classList.add('ok');
  EmailOk = true;
  mail_editContact.innerHTML = '';
 } else {
  editMail.classList.remove('ok');
  mail_editContact.innerHTML = checkEmail;
 }
};
/**************Конец проверка Email****************/


/******************Редактирование резюме********** */
const resumeMainPopup = document.querySelector('.resume-main__popup');
const resumeMainPopupTitle = document.querySelector('.resume-main__popup-title');
const resumeMainPopupInput = document.querySelector('#resume-main__popup-input');
const resumeMainPopupAdv = document.querySelector('.resume-main__popup-adv');
//const resumeMainInfo    определен выше
const infoPencils = resumeMainInfo.querySelectorAll('.pencil');
const popupAdv = resumeMainInfo.querySelector('.popup-adv');
const forPopupInput = resumeMainInfo.querySelector('.for__popup-input');
const popupHide = document.querySelector('.popup-hide');
const savePopups = document.querySelectorAll('.save-popup');
const openedEyes = document.querySelectorAll('.opened-eye');
const closedEyes = document.querySelectorAll('.closed-eye');
let targ;
let popupRect;

/*************Глаз открытый/закрытый *********/
for (let item of openedEyes) {
 item.addEventListener('click', toCloseEye);
}
for (let item of closedEyes) {
 item.addEventListener('click', toOpenEye);
}

function toCloseEye(e) {
 e.currentTarget.classList.add('hide-block');
 e.currentTarget.parentNode.querySelector('.closed-eye').classList.remove('hide-block');
 e.currentTarget.closest('.span2').querySelector('.span2text').classList.add('hide'); //серый цвет
}

function toOpenEye(e) {
 e.currentTarget.classList.add('hide-block');
 e.currentTarget.parentNode.querySelector('.opened-eye').classList.remove('hide-block');
}
/*********Конец глаз открытый/закрытый *******/

for (let pencil of infoPencils) {
 pencil.addEventListener('click', pencilClick);
}

function pencilClick(e) {
 /*Спрятать все попапы */
 resumeMainPopup.classList.add('hide-block');
 for (let item of resumeMainSelects) {
  item.classList.add('hide-block');
 }
 document.querySelector('.datetable_wrapper').classList.remove('datetable_active');
 /* */

 if (!e.target.classList.contains('pencil-non') && !e.target.classList.contains('pencil-select') && !e.target.classList.contains('pencil-date')) {
  targ = e.target;
  resumeMainPopup.classList.remove('hide-block');
  resumeMainPopupInput.value = '';
  let thisText = targ.closest('div').nextElementSibling.querySelector('.span1').innerText;
  resumeMainPopupTitle.innerText = thisText.slice(0, thisText.length - 1);
  popupAdv.innerText = thisText.toLowerCase();
  forPopupInput.innerText = thisText.slice(0, thisText.length - 1);
 }
}

resumeMainPopupInput.onfocus = function () {
 this.classList.add('ok');
 this.classList.remove('no-input');
 resumeMainPopupAdv.classList.remove('no-input');
};
resumeMainPopupInput.onblur = function () {
 if (!this.value) { //ничего не введено
  this.classList.add('no-input');
  resumeMainPopupAdv.classList.add('no-input');
 } else { //введено значение
  this.classList.remove('no-input');
  this.classList.add('ok');
  //forPopupInput.innerText = '';
  resumeMainPopupAdv.classList.add('input');
  targ.parentNode.nextElementSibling.querySelector('.span2').innerText = this.value;
 }
};
//если нажать мимо, то закрыть popup
window.addEventListener('click', close_one);

function close_one(e) {
 if (!e.target.classList.contains('pencil-resume')) {
  //найти координаты popup
  popupRect = resumeMainPopup.getBoundingClientRect();
  let eX = e.clientX;
  let eY = e.clientY;
  if (eX < popupRect.left || eX > popupRect.right ||
   eY < popupRect.top || eY > popupRect.bottom) {
   resumeMainPopup.classList.add('hide-block');
   closePopup(e);
  }
 }
}

popupHide.onclick = closePopup;

function closePopup(e) {
 /*if (e.target.closest('div')) {
    e.target.closest('div').classList.add('hide-block');
 }*/ //на удаление
 resumeMainPopup.classList.add('hide-block');
 resumeMainPopupInput.classList.remove('no-input');
 resumeMainPopupInput.classList.remove('ok');
 resumeMainPopupAdv.classList.remove('no-input');
 resumeMainPopupAdv.classList.remove('input');
}

//Нажать на кнопку Сохранить
for (let item of savePopups) {
 item.addEventListener('click', doSavePopup);
}

function doSavePopup(e) {
 closePopup(e);
}
/**************Конец редактирование резюме******** */


/**************Селекты для резюме****************/
const pencilSelects = document.querySelectorAll('.pencil-select');
const resumeMainSelects = document.querySelectorAll('.resume-main__select');
const divSelectUlItems = document.querySelectorAll('.div-select__ul-item');
const saveSelects = document.querySelectorAll('.save-select');
const selectHides = document.querySelectorAll('.select-hide');
let targSelect;
let targSelectInput;
let selectRect;

for (let item of pencilSelects) {
 item.addEventListener('click', handleClick);
}

function handleClick(e) {
 resumeMainPopup.classList.add('hide-block');
 targSelect = e.target.parentNode.nextElementSibling.querySelector('.span2');
 let dataSelect = e.target.getAttribute('data-select');
 for (let item of resumeMainSelects) {
  if (item.getAttribute('data-select') == dataSelect) {
   item.classList.remove('hide-block');
  }
  if (item.querySelector('input')) {
   item.querySelector('input').value = targSelect.innerText;
   if (item.querySelector('input').classList.contains('citizen__input')) {
    item.querySelector('input').value = '';
   }
  }
 }
}

for (let item of divSelectUlItems) {
 item.addEventListener('click', doSelect);
}

function doSelect(e) {
 targSelectInput = e.target.closest('.resume-main__select').querySelector('input');
 targSelectInput.value = e.target.innerText;
 targSelectInput.style.paddingLeft = 15 + 'px';
}

//если нажать мимо, то закрыть select-popup
window.addEventListener('click', close_selectOne);

function close_selectOne(e) {
 if (!e.target.classList.contains('pencil-resume')) {
  //найти координаты select-popup
  for (let item of resumeMainSelects) {
   if (!item.classList.contains('hide-block')) {
    selectRect = item.getBoundingClientRect();
   }
  }
  let eX = e.clientX;
  let eY = e.clientY;
  if (selectRect) {
   if (eX < selectRect.left || eX > selectRect.right ||
    eY < selectRect.top || eY > selectRect.bottom) {
    closeSelect();
    saveSelect();
   }
  }
 }
}

for (let item of saveSelects) {
 item.addEventListener('click', close_and_save);
}
for (let item of selectHides) {
 item.addEventListener('click', close_and_save);
}

function close_and_save(e) {
 closeSelect(e);
 saveSelect(e);
}

function closeSelect(e) {
 for (let item of resumeMainSelects) {
  if (!item.classList.contains('hide-block')) {
   item.classList.add('hide-block');
  }
 }
}

function saveSelect(e) {
 if (targSelectInput && targSelectInput.value) {
  targSelect.innerText = targSelectInput.value;
 }
}
/******Наличие детей******/
const pencilChild = document.querySelector('.pencil-child');
const childrenYes = document.querySelector('.children-yes');
const childrenNo = document.querySelector('.children-no');
const childTemplate = document.querySelector('.child-template');
const plusChilds = document.querySelectorAll('.plus-child');
const minusChilds = document.querySelectorAll('.minus-child');
const addChildren = document.querySelector('.add-children');
let addChildrenItems = document.querySelectorAll('.add-children__item');
const saveChild = document.querySelector('.save-child');
const family = document.querySelector('.family');
const familyInput = document.querySelector('.family-input');
let haveChild = false;
let childString = 'Да';
let ageArr = [];

pencilChild.onclick = () => {
 childrenNo.classList.remove('hide-block');
 addChildren.classList.add('hide-block');
};

childrenYes.onclick = (e) => {
 childrenNo.classList.add('hide-block');
 haveChild = true;
 addChildren.classList.remove('hide-block');
 childString = 'Да, 1 год';
 familyInput.value = childString;
};

childrenNo.onclick = () => {
 haveChild = false;
};

for (let item of plusChilds) {
 item.addEventListener('click', addChild);
}
for (let item of minusChilds) {
 item.addEventListener('click', removeChild);
}

function addChild(e) {
 const newChild = document.createElement('li');
 newChild.innerHTML = childTemplate.innerHTML;
 newChild.classList.add('add-children__item');
 addChildren.append(newChild);
 newChild.querySelectorAll('button')[0].addEventListener('click', addChild);
 newChild.querySelectorAll('button')[1].addEventListener('click',
  removeChild);
 addChildrenItems = document.querySelectorAll('.add-children__item');
 addOnly();
 newChild.querySelector('input').addEventListener('change', reNewChild);
}

function addOnly() {
 let age = '1';
 childString += ', ' + age + ' ' + chooseAgeFormat(age);
 familyInput.value = childString;
}

function removeChild(e) {
 e.target.closest('li').classList.add('removed');
 e.target.closest('li').remove();
 reNewChild();
}

for (let item of addChildrenItems) {
 item.querySelector('input').addEventListener('change', reNewChild);
}

function reNewChild(e) {
 ageArr = [];
 childString = 'Да';
 for (let item of addChildrenItems) {
  if (!item.classList.contains('removed')) {
   if (item.querySelector('input').value) {
    ageArr.push(item.querySelector('input').value);
   } else {
    ageArr.push('1');
   }
  }
 }
 for (let age of ageArr) {
  childString += ', ' + age + ' ' + chooseAgeFormat(age);
 }
 familyInput.value = childString;
}

function chooseAgeFormat(age) {
 let res;
 switch (age) {
  case "1":
   res = 'год';
   break;
  case "2":
  case "3":
  case "4":
   res = "года";
   break;
  default:
   res = "лет";
 }
 return res;
}

/***Конец наличие детей***/

/**********Гражданство********** */
//const citizenInput = document.querySelector('.citizen__input');
const citizenInputs = document.querySelectorAll('.citizen__input');
const citizenInputAdds = document.querySelectorAll('.citizen__input-add');
const citizenInputContainer = document.querySelector('.citizen__input-container');
const citizenInputArrow = document.querySelector('.citizen__input-arrow');
const citizenSelect = document.querySelector('.citizen__select');
const citizenSelectUls = document.querySelectorAll('.citizen__select-ul');
const underInputBegin = document.querySelector('.under-input__begin');
const underInputEnd = document.querySelector('.under-input__end');
const resumeMainSelectInputs = document.querySelectorAll('.resume-main__select-input');
const saveCountries = document.querySelector('.save-countries');
let listCountries = ''; //результат выбора стран

const arrCountries = ['Россия', 'Украина', 'Белоруссия', 'Казахстан', 'Азербайджан', 'Армения', 'Грузия', 'Киргизия', 'Молдавия', 'Таджикистан', 'Туркмения', 'Узбекистан', 'Германия', 'Китай', 'США', 'Австралия', 'Австрия', 'Албания', 'Алжир'];

let selectedCountries = []; //список выбранных стран
let inputStr = '';
let outputStr = '';
let psevdoStr = '';
let strLength = 0;
let resMatch;

for (let item of arrCountries) {
 const newLi = document.createElement('li');
 newLi.innerText = item;
 newLi.classList.add('citizen__select-item');
 citizenSelectUls[0].append(newLi);
}

for (let item of document.querySelectorAll('.citizen__select-item')) {
 item.addEventListener('click', selectCountry);
}

function selectCountry(e) {
 for (let item of document.querySelectorAll('.citizen__select-item')) {
  item.classList.remove('selected');
 }
 this.classList.add('selected');

 let thisInput = this.closest('.citizen__input-wrap');
 let itemClosInput = thisInput.querySelector('.citizen__input');
 thisInput.querySelector('.under-input__end').innerText = '';
 thisInput.querySelector('.under-input__begin').innerText = this.innerText;
 itemClosInput.setAttribute('placeholder', '');
 itemClosInput.value = '';
 thisInput.querySelector('.hide-btn').classList.add('hide-block');
 //открыть кнопку '+'
 itemClosInput.addEventListener('click', showList);
 citizenInputArrow.addEventListener('click', showList);
}

function showList(e) {
 let targ = e.target.closest('.resume-main__select-input');
 targ.querySelector('.citizen__input-arrow').classList.toggle('arrow-rotate');
 targ.querySelector('.citizen__select').classList.toggle('active');
 targ.querySelector('.citizen__select-ul').classList.toggle('active');
}

//Распознавание ввода и вывод подсказки

const regexp = /^[а-яА-ЯёЁ]+$/;

function capitalizeFirstLetter(string) {
 return string.charAt(0).toUpperCase() + string.slice(1);
}

function selectItem() {
 for (let item of document.querySelectorAll('.citizen__select-item')) {
  if (item.innerText == resMatch) {
   item.classList.add('selected');
   item.closest('.citizen__input-wrap').querySelector('.hide-btn').classList.add('hide-block');
   //открыть кнопку '+'
  }
 }
}

for (let item of citizenInputs) {
 item.addEventListener('click', showList);
 item.addEventListener('input', inputChar);
}

function inputChar(e) {
 //ввод символа
 if (regexp.test(this.value.substr(this.value.length - 1, 1)) || this.value.substr(this.value.length - 1, 1) == '') {
  if (strLength > this.value.length) {
   //нажата backspase - удаление символа
   strLength--;
   inputStr = inputStr.slice(0, inputStr.length - 1);
   psevdoStr = psevdoStr.slice(0, psevdoStr.length - 1);
   if (psevdoStr.length == 0) {
    underInputEnd.innerText = '';
    e.target.setAttribute('placeholder', '—');
   }
   for (let item of document.querySelectorAll('.citizen__select-item')) {
    item.classList.remove('selected');
   } //отменить выбор селекта
  } else {

   strLength = this.value.length;
   inputStr += this.value.substr(this.value.length - 1, 1);
   psevdoStr = inputStr;
   if (resMatch && strLength == resMatch.length) {
    selectItem();
   }
   window.addEventListener('keydown', function (e) {
    if (e.key == 'Enter') {
     inputStr = resMatch;
     psevdoStr = resMatch;
     strLength = resMatch.length;
     selectItem();
    }
   });
  }
 }

 inputStr = inputStr.toLowerCase();
 inputStr = capitalizeFirstLetter(inputStr);
 resMatch = arrCountries.find(elem => elem.indexOf(inputStr) !== -1 && !selectedCountries.includes(elem));
 if (!resMatch) { //нет совпадения со страной из списка
  let thisInput = this.closest('.citizen__input-wrap');
  thisInput.querySelector('.citizen__input-container').classList.add('no-match');
  thisInput.querySelector('.under-input__begin').classList.add('no-match1');
  thisInput.querySelector('.under-input__end').innerText = '';
  thisInput.querySelector('.under-input__begin').innerText = inputStr;
  this.value = psevdoStr;
 } else { //нашлась страна
  let thisInput = this.closest('.citizen__input-wrap');
  thisInput.querySelector('.citizen__input-container').classList.remove('no-match');
  thisInput.querySelector('.under-input__begin').classList.remove('no-match1');
  thisInput.querySelector('.under-input__begin').innerText = inputStr;
  e.target.value = '';
  if (psevdoStr.length !== 0) {
   e.target.setAttribute('placeholder', '');
   let strEnd = resMatch.slice(inputStr.length);
   thisInput.querySelector('.under-input__end').innerText = strEnd;
  }
  this.value = psevdoStr;
 }
}

//Добавить поле выбора
for (let item of citizenInputAdds) {
 item.addEventListener('click', addSelectCountry);
}

//клонировать input
function addSelectCountry(e) {
 strLength = 0;
 inputStr = '';
 //спрятать нажатую кнопку '+'
 this.classList.add('hide-block');
 this.classList.remove('add');

 let targClos = e.target.closest('.citizen__input-wrap');
 selectedCountries.push(
  targClos.querySelector('.under-input__begin').innerText
 ); //записали выбранную страну в массив

 targClos.querySelector('.citizen__select').classList.add('hide-block');
 const addedInput = document.querySelectorAll('.citizen__input-wrap')[0].cloneNode(true);
 targClos.querySelector('.citizen__input-arrow').classList.add('hide-block'); //спрятать стрелку
 targClos.after(addedInput);

 addedInput.querySelector('.under-input__begin').innerText = '';
 addedInput.querySelector('.citizen__input').value = '';
 addedInput.querySelector('.citizen__input').setAttribute('placeholder', '—');
 addedInput.querySelector('.citizen__input-remove').classList.remove('hide-block');
 addedInput.querySelector('.citizen__input-container').classList.add('reduced');
 addedInput.querySelector('.citizen__input-arrow').classList.remove('arrow-rotate');
 addedInput.querySelector('.citizen__input-arrow').classList.add('reduced');
 addedInput.querySelector('.citizen__input-arrow').classList.remove('hide-block');
 addedInput.querySelector('.citizen__select').classList.remove('hide-block');
 addedInput.querySelector('.citizen__select').classList.remove('active');
 addedInput.querySelector('.citizen__select-ul').classList.remove('active');
 addedInput.querySelector('.citizen__input-add').classList.add('add');
 addedInput.querySelector('.hide-btn').classList.remove('hide-block');

 for (let item of addedInput.querySelectorAll('.citizen__select-item')) {
  if (selectedCountries.includes(item.innerText)) {
   item.remove();
  }
 } //удалить из списка стран уже выбранную

 addedInput.querySelector('.citizen__input').addEventListener('click', showList);
 addedInput.querySelector('.citizen__input-add').addEventListener('click', addSelectCountry);
 addedInput.querySelector('.citizen__input').addEventListener('input', inputChar);
 addedInput.querySelector('.citizen__input-remove').addEventListener('click', function (e) {
  this.closest('.citizen__input-wrap').remove();
 }); //удалить строку
 for (let item of addedInput.querySelectorAll('.citizen__select-item')) {
  item.addEventListener('click', selectCountry);
 }
}

//Сохранить выбранное
const citizenList = document.querySelector('.citizen-list');
saveCountries.addEventListener('click', function (e) {
 for (let item of document.querySelectorAll('.under-input__begin')) {
  listCountries += item.innerText + ', ';
 }
 citizenList.innerText = listCountries.slice(0, listCountries.length - 2);
 listCountries = '';
});
/*******Конец гражданство******* */

/************Конец селекты для резюме*************/


/************Редактирование адреса и общих навыков***********/
const pretendentAdress = document.querySelector('.pretendent__adress');
const pencilAdress = document.querySelector('.pencil-adress');
const adressPopup = document.querySelector('.adress__popup');
const adressPopupHide = document.querySelector('.adress__popup-hide');
const adressPopupInput = document.querySelector('#adress__popup-input');
const adressPopupAdv = document.querySelector('.adress__popup-adv');
const forAdressPopupInput = document.querySelector('.for__adress_popup-input');

pencilAdress.onclick = (e) => {
 document.querySelector('.datetable_wrapper').classList.remove('datetable_active'); //спрятать календарь
 adressPopup.classList.remove('hide-block');
 targ = e.target;
 adressPopupInput.value = '';
 forAdressPopupInput.innerText = 'Адрес';
};

adressPopupHide.onclick = closeAdressPopup;

adressPopupInput.onfocus = function () {
 this.classList.add('ok');
 this.classList.remove('no-input');
 adressPopupAdv.classList.remove('no-input');
};

adressPopupInput.onblur = function (e) {
 if (!this.value) { //ничего не введено
  this.classList.add('no-input');
  adressPopupAdv.classList.add('no-input');
 } else { //введено значение
  this.classList.remove('no-input');
  this.classList.add('ok');
  //forAdressPopupInput.innerText = '';
  //adressPopupAdv.classList.add('input');
  pretendentAdress.innerText = this.value;
 }
};

//если нажать мимо, то закрыть popup
window.addEventListener('click', close_two);

function close_two(e) {
 //найти координаты popup
 popupRect = adressPopup.getBoundingClientRect();
 let eX = e.clientX;
 let eY = e.clientY;
 if (eX < popupRect.left || eX > popupRect.right ||
  eY < popupRect.top || eY > popupRect.bottom) {
  closeAdressPopup();
 }
}

function closeAdressPopup(e) {
 adressPopup.classList.add('hide-block');
 adressPopupInput.classList.remove('no-input');
 adressPopupInput.classList.remove('ok');
 adressPopupAdv.classList.remove('no-input');
 adressPopupAdv.classList.remove('input');
}
/********************** */
const generalSkills = document.querySelector('.general-skills');
const pencilSkills = document.querySelector('.pencil-skills');
const skillsPopup = document.querySelector('.skills__popup');
const skillsPopupHide = document.querySelector('.skills__popup-hide');
const skillsPopupInput = document.querySelector('#skills__popup-input');
const skillsPopupAdv = document.querySelector('.skills__popup-adv');

pencilSkills.onclick = (e) => {
 document.querySelector('.datetable_wrapper').classList.remove('datetable_active'); //спрятать календарь
 skillsPopup.classList.remove('hide-block');
 targ = e.target;
 skillsPopupInput.value = '';
};

skillsPopupHide.onclick = closeSkillsPopup;

skillsPopupInput.onfocus = function () {
 this.classList.add('ok');
 this.classList.remove('no-input');
 skillsPopupAdv.classList.remove('no-input');
};

skillsPopupInput.onblur = function (e) {
 if (!this.value) { //ничего не введено
  this.classList.add('no-input');
  skillsPopupAdv.classList.add('no-input');
 } else { //введено значение
  this.classList.remove('no-input');
  this.classList.add('ok');
  skillsPopupAdv.classList.add('input');
  generalSkills.innerText = this.value;
 }
};

//если нажать мимо, то закрыть popup
window.addEventListener('click', close_three);

function close_three(e) {
 //найти координаты popup
 popupRect = skillsPopup.getBoundingClientRect();
 let eX = e.clientX;
 let eY = e.clientY;
 if (eX < popupRect.left || eX > popupRect.right ||
  eY < popupRect.top || eY > popupRect.bottom) {
  closeSkillsPopup();
 }
}

function closeSkillsPopup(e) {
 skillsPopup.classList.add('hide-block');
 skillsPopupInput.classList.remove('no-input');
 skillsPopupInput.classList.remove('ok');
 skillsPopupAdv.classList.remove('no-input');
 skillsPopupAdv.classList.remove('input');
}
/*********Конец редактирование адреса и общих навыков********/


/************Редактирование ключевых навыков***************/
let keysListItems = document.querySelectorAll('.keys-listitem');
const addKeySkill = document.querySelector('.add__key-skill');
const keysListUl = document.querySelector('.keys-listul');
const template01 = keysListItems[0].innerHTML;
const keySkillsPopup = document.querySelector('.key-skills__popup');
const keySkillsPopupAdv = document.querySelector('.key-skills__popup-adv');
const keySkillsPopupHide = document.querySelector('.key-skills__popup-hide');
const keySkillsPopupInput = document.querySelector('#key-skills__popup-input');
let newLi;

function removeLi(e) { //удалить навык
 //let thisText = e.target.closest('li').querySelector('span').innerText;
 e.target.parentNode.remove();
}

addKeySkill.onclick = () => { //добавить навык
 document.querySelector('.datetable_wrapper').classList.remove('datetable_active'); //спрятать календарь
 keySkillsPopup.classList.remove('hide-block');
 newLi = document.createElement('li');
 newLi.innerHTML = template01;
 newLi.classList.add('keys-listitem');
 newLi.classList.add('item-edit');
 newLi.querySelector('.li-remove').classList.remove('initial-hide');
 keySkillsPopupInput.value = '';
 keySkillsPopupHide.onclick = closeKeySkillsPopup;

 newLi.querySelector('.li-remove').addEventListener('click', function (e) {
  e.target.parentNode.remove();
  newLi = null;
 });

 function closeKeySkillsPopup(e) {
  keySkillsPopup.classList.add('hide-block');
  keySkillsPopupInput.classList.remove('no-input');
  keySkillsPopupInput.classList.remove('ok');
  keySkillsPopupAdv.classList.remove('no-input');
  keySkillsPopupAdv.classList.remove('input');
  if (keySkillsPopupInput.value) {
   newLi.querySelector('span').innerText = keySkillsPopupInput.value;
   keysListUl.append(newLi);
  }
 }
};

for (let item of keysListItems) {
 const liRemove = item.querySelector('.li-remove');
 liRemove.onclick = removeLi;
}

keySkillsPopupInput.onfocus = function () {
 this.classList.add('ok');
 this.classList.remove('no-input');
 keySkillsPopupAdv.classList.remove('no-input');
};

keySkillsPopupInput.onblur = function (e) {
 if (!this.value) { //ничего не введено
  this.classList.add('no-input');
  keySkillsPopupAdv.classList.add('no-input');
 } else { //введено значение
  this.classList.remove('no-input');
  this.classList.add('ok');
 }
};
//если нажать мимо, то закрыть popup
window.addEventListener('click', close_four);

function close_four(e) {
 if (!e.target.classList.contains('add__key-skill') && !e.target.classList.contains('li-remove')) {
  //найти координаты popup
  popupRect = keySkillsPopup.getBoundingClientRect();
  let eX = e.clientX;
  let eY = e.clientY;
  if (eX < popupRect.left || eX > popupRect.right ||
   eY < popupRect.top || eY > popupRect.bottom) {
   keySkillsPopup.classList.add('hide-block');
  }
  if (keySkillsPopupInput.value) {
   if (newLi) {
    newLi.querySelector('span').innerText = keySkillsPopupInput.value;
    keysListUl.append(newLi);
   }
  }
 }
}
/************Конец редактирование ключевых навыков***************/


/**********************Удалить строку в таблице ************* */
//const tdTitles=document.querySelectorAll('.td-title'); задан выше
for (let item of tdTitles) {
 if (item.querySelector('.li-remove')) {
  item.querySelector('.li-remove').addEventListener('click', function (e) {
   e.target.closest('tr').remove();
  });
 }
}
/*****************Конец удалить строку в таблице **************/


/***************Добавить новое место работы***************** */
const skillsWrapExperience = document.querySelector('.skills__wrap-experience');
const experienceWrapTable = document.querySelector('.experience__wrap-table');
const addNewWork = document.querySelector('.add-newwork');
const trTemplate = experienceWrapTable.querySelectorAll('tr')[0];
const innerTrHTML = trTemplate.innerHTML;
const newWorkPopup = document.querySelector('.new-work__popup');
const newWorkPopupHide = document.querySelector('.new-work__popup-hide');
const newWorkPopupInputs = document.querySelectorAll('.new-work__popup-input');
let newTr;
let newTrFilled = false; //ни одно поле не заполнено

addNewWork.onclick = function () {
 document.querySelector('.datetable_wrapper').classList.remove('datetable_active'); //спрятать календарь
 newWorkPopup.classList.remove('hide-block');

 newTr = document.createElement('tr');

 newTr.innerHTML = innerTrHTML;
 newTr.querySelector('.title-edit').classList.remove('initial-hide');
 newTr.querySelector('.pencil').classList.remove('initial-hide');
 newTr.querySelector('.li-remove').classList.remove('initial-hide');
 newTr.querySelector('.li-remove').onclick = () => {
  newTr.remove();
 };

 newTr.querySelector('.pencil').onclick = editWork;
};

for (let item of newWorkPopupInputs) {
 item.querySelector('input').addEventListener('focus', inputFocus);
 item.querySelector('input').addEventListener('blur', inputBlur);
}

function inputFocus(e) {
 let targPN = e.target.parentNode;
 targPN.classList.add('ok');
 targPN.classList.remove('no-input');
 targPN.previousElementSibling.classList.remove('no-input');
}

function inputBlur(e) {
 let targPN = e.target.parentNode;
 if (!e.target.value) { //ничего не введено
  targPN.classList.add('no-input');
  targPN.previousElementSibling.classList.add('no-input');
 } else { //введено значение
  targPN.classList.remove('no-input');
  targPN.classList.add('ok');
  //skillsPopupAdv.classList.add('input');
 }
}

//если нажать мимо, то закрыть popup
window.addEventListener('click', close_five);

function close_five(e) {
 if (!e.target.classList.contains('add-newwork')) {

  //найти координаты popup
  popupRect = newWorkPopup.getBoundingClientRect();
  let eX = e.clientX;
  let eY = e.clientY;
  if (eX < popupRect.left || eX > popupRect.right ||
   eY < popupRect.top || eY > popupRect.bottom) {
   closeNewWorkPopup();
  }
 }
}

function closeNewWorkPopup() {
 newWorkPopup.classList.add('hide-block');
 fillNewTr();
 if (newTrFilled) {
  experienceWrapTable.querySelector('tbody').prepend(newTr);
 }
}

newWorkPopupHide.onclick = closeNewWorkPopup;

function fillNewTr() {
 let value1 = document.querySelector('#new-work__duration').value;
 let value2 = document.querySelector('#new-work__date').value;
 let value3 = document.querySelector('#new-work__company').value;
 let value4 = document.querySelector('#new-work__duty').value;

 if (newTr) {
  newTr.querySelector('.td-left').querySelector('.td-title').innerText = value1;

  newTr.querySelector('.td-left').querySelector('.td-text').innerText = value2;

  newTr.querySelector('.td-right').querySelector('.td-title__span').innerText = value3;

  newTr.querySelector('.td-right').querySelector('.td-text').innerText = value4;

  newTr.querySelector('.li-remove').onclick = (e) => {
   e.target.closest('td').parentNode.remove();
   e.target.closest('td').parentNode.style.display = 'none';
  };
 }
 if (value1 || value2 || value3 || value4) {
  newTrFilled = true;
 }
}

editResume.addEventListener('click', showPencil);

function showPencil() {
 if (resumeEdited) {
  if (newTr) {
   newTr.querySelector('.pencil').classList.remove('initial-hide');
   newTr.querySelector('.li-remove').classList.remove('initial-hide');
  }
 }
}
/*************Конец добавить новое место работы***************/


/****************Редактировать место работы*****************/
const editWorkPopup = document.querySelector('.edit-work__popup');
const editWorkPopupHide = document.querySelector('.edit-work__popup-hide');
const editWorkDuration = document.querySelector('#edit-work__duration');
const editWorkDate = document.querySelector('#edit-work__date');
const editWorkCompany = document.querySelector('#edit-work__company');
const editWorkDuty = document.querySelector('#edit-work__duty');
const editWorkPencils = skillsWrapExperience.querySelectorAll('.pencil');
let targTR;
let oneString;
let tdTitleHTML;

for (let item of editWorkPencils) {
 item.addEventListener('click', editWork);
}

function editWork(e) {
 document.querySelector('.datetable_wrapper').classList.remove('datetable_active'); //спрятать календарь
 editStudyPopup.classList.add('hide-block');
 editCoursesPopup.classList.add('hide-block');
 editLanguagePopup.classList.add('hide-block');
 editWorkPopup.classList.remove('hide-block');
 targTR = e.target.closest('tr');
 oneString = targTR.querySelectorAll('.td-title')[1].innerText;
 editWorkDuration.value = targTR.querySelectorAll('.td-title')[0].innerText;
 editWorkDate.value = targTR.querySelectorAll('.td-text')[0].innerText;
 editWorkCompany.value = oneString.slice(0, oneString.length - 2) + '  ';
 editWorkDuty.value = targTR.querySelectorAll('.td-text')[1].innerText;
}

editWorkPopupHide.onclick = closeEditWorkPopup;

//если нажать мимо, то закрыть popup
window.addEventListener('click', close_six);

function close_six(e) {
 if (!e.target.classList.contains('pencil')) {

  //найти координаты popup
  popupRect = editWorkPopup.getBoundingClientRect();
  let eX = e.clientX;
  let eY = e.clientY;
  if (eX < popupRect.left || eX > popupRect.right ||
   eY < popupRect.top || eY > popupRect.bottom) {
   closeEditWorkPopup();
  }
 }
}

function closeEditWorkPopup() {

 if (targTR) {
  targTR.querySelectorAll('.td-title')[0].innerText = editWorkDuration.value;
  targTR.querySelectorAll('.td-text')[0].innerText = editWorkDate.value;

  targTR.querySelectorAll('.td-title')[1].querySelector('.td-title__span').innerText = editWorkCompany.value;

  targTR.querySelectorAll('.td-text')[1].innerText = editWorkDuty.value;
 }

 editWorkPopup.classList.add('hide-block');
}
/*************Конец редактировать место работы***************/


/***************Добавить образование***************** */
const pretendentCardStudy = document.querySelector('.pretendent-card__study');
const studyWrapTable = document.querySelector('.study__wrap-table');
const addNewStudy = document.querySelector('.add-newstudy');
const trStudyTemplate = studyWrapTable.querySelectorAll('tr')[0];
const innerStudyHTML = trStudyTemplate.innerHTML;
const studyPopup = document.querySelector('.study__popup');
const studyPopupHide = document.querySelector('.study__popup-hide');
const studyPopupInputs = document.querySelectorAll('.study__popup-input');
let newStudyTr;
let newStudyTrFilled = false; //ни одно поле не заполнено

addNewStudy.onclick = function () {
 document.querySelector('.datetable_wrapper').classList.remove('datetable_active'); //спрятать календарь
 studyPopup.classList.remove('hide-block');

 newStudyTr = document.createElement('tr');

 newStudyTr.innerHTML = innerStudyHTML;
 newStudyTr.querySelector('.title-edit').classList.remove('initial-hide');
 newStudyTr.querySelector('.pencil').classList.remove('initial-hide');
 newStudyTr.querySelector('.li-remove').classList.remove('initial-hide');
 newStudyTr.querySelector('.li-remove').onclick = () => {
  newStudyTr.remove();
 };

 newStudyTr.querySelector('.pencil').onclick = editStudy;
};


for (let item of studyPopupInputs) {
 item.querySelector('input').addEventListener('focus', inputFocus);
 item.querySelector('input').addEventListener('blur', inputBlur);
}
//функции inputBlur, inputFocus определены в новой работе 

//если нажать мимо, то закрыть popup
window.addEventListener('click', close_seven);

function close_seven(e) {
 if (!e.target.classList.contains('add-newstudy')) {

  //найти координаты popup
  popupRect = studyPopup.getBoundingClientRect();
  let eX = e.clientX;
  let eY = e.clientY;
  if (eX < popupRect.left || eX > popupRect.right ||
   eY < popupRect.top || eY > popupRect.bottom) {
   closeStudyPopup();
  }
 }
}

function closeStudyPopup() {
 studyPopup.classList.add('hide-block');
 fillNewStudyTr();
 if (newStudyTrFilled) {
  studyWrapTable.querySelector('tbody').prepend(newStudyTr);
 }
}

studyPopupHide.onclick = closeStudyPopup;

function fillNewStudyTr() {
 let value1 = document.querySelector('#study__type').value;
 let value2 = document.querySelector('#study__graduate').value;
 let value3 = document.querySelector('#study__profession').value;

 if (newStudyTr) {
  newStudyTr.querySelector('.td-left').innerText = value1;

  newStudyTr.querySelector('.td-right').querySelector('.td-title__span').innerText = value2;

  newStudyTr.querySelector('.td-right').querySelector('.td-text').innerText = value3;

  newStudyTr.querySelector('.li-remove').onclick = (e) => {
   e.target.closest('td').parentNode.remove();
   e.target.closest('td').parentNode.style.display = 'none';
  };
 }
 if (value1 || value2 || value3) {
  newStudyTrFilled = true;
 }
}

editResume.addEventListener('click', showStudyPencil);

function showStudyPencil() {
 if (resumeEdited) {
  if (newStudyTr) {
   newStudyTr.querySelector('.pencil').classList.remove('initial-hide');
   newStudyTr.querySelector('.li-remove').classList.remove('initial-hide');
  }
 }
}
/*************Конец добавить образование***************/


/****************Редактировать образование*****************/
const editStudyPopup = document.querySelector('.edit-study__popup');
const editStudyPopupHide = document.querySelector('.edit-study__popup-hide');
const editStudyType = document.querySelector('#edit-study__type');
const editStudyGraduate = document.querySelector('#edit-study__graduate');
const editStudyProfession = document.querySelector('#edit-study__profession');
const editStudyPencils = pretendentCardStudy.querySelectorAll('.pencil');
let targStudy;

for (let item of editStudyPencils) {
 item.addEventListener('click', editStudy);
}

function editStudy(e) {
 document.querySelector('.datetable_wrapper').classList.remove('datetable_active'); //спрятать календарь
 editCoursesPopup.classList.add('hide-block');
 editLanguagePopup.classList.add('hide-block');
 editWorkPopup.classList.add('hide-block');
 editStudyPopup.classList.remove('hide-block');
 targStudy = e.target.closest('tr');
 editStudyType.value = targStudy.querySelector('.td-left').innerText;
 editStudyGraduate.value = targStudy.querySelector('.td-title__span').innerText;
 editStudyProfession.value = targStudy.querySelector('.td-text').innerText;
}

editStudyPopupHide.onclick = closeEditStudyPopup;

//если нажать мимо, то закрыть popup
window.addEventListener('click', close_eight);

function close_eight(e) {
 if (!e.target.classList.contains('pencil')) {

  //найти координаты popup
  popupRect = editStudyPopup.getBoundingClientRect();
  let eX = e.clientX;
  let eY = e.clientY;
  if (eX < popupRect.left || eX > popupRect.right ||
   eY < popupRect.top || eY > popupRect.bottom) {
   closeEditStudyPopup();
  }
 }
}

function closeEditStudyPopup() {
 if (targStudy) {
  targStudy.querySelector('.td-left').innerText = editStudyType.value;
  targStudy.querySelector('.td-title__span').innerText = editStudyGraduate.value;
  targStudy.querySelector('.td-text').innerText = editStudyProfession.value;
 }

 editStudyPopup.classList.add('hide-block');
}
/*************Конец редактировать образование***************/


/************Добавить Повышение квалификации, курсы***********/
const pretendentCardCourses = document.querySelector('.pretendent-card__courses');
const coursesWrapTable = document.querySelector('.courses__wrap-table');
const addNewCourses = document.querySelector('.add-newcourses');
const trCourseTemplate = coursesWrapTable.querySelectorAll('tr')[0];
const innerCoursesHTML = trCourseTemplate.innerHTML;
const coursesPopup = document.querySelector('.courses__popup');
const coursesPopupHide = document.querySelector('.courses__popup-hide');
const coursesPopupInputs = document.querySelectorAll('.courses__popup-input');
let newCoursesTr;
let newCoursesTrFilled = false; //ни одно поле не заполнено

addNewCourses.onclick = function () {
 document.querySelector('.datetable_wrapper').classList.remove('datetable_active'); //спрятать календарь
 coursesPopup.classList.remove('hide-block');

 newCoursesTr = document.createElement('tr');

 newCoursesTr.innerHTML = innerCoursesHTML;
 newCoursesTr.querySelector('.title-edit').classList.remove('initial-hide');
 newCoursesTr.querySelector('.pencil').classList.remove('initial-hide');
 newCoursesTr.querySelector('.li-remove').classList.remove('initial-hide');
 newCoursesTr.querySelector('.li-remove').onclick = () => {
  newCoursesTr.remove();
 };

 newCoursesTr.querySelector('.pencil').onclick = editCourses;
};

for (let item of coursesPopupInputs) {
 item.querySelector('input').addEventListener('focus', inputFocus);
 item.querySelector('input').addEventListener('blur', inputBlur);
}
//функции inputBlur, inputFocus определены в новой работе 

//если нажать мимо, то закрыть popup
window.addEventListener('click', close_nine);

function close_nine(e) {
 if (!e.target.classList.contains('add-newcourses')) {

  //найти координаты popup
  popupRect = coursesPopup.getBoundingClientRect();
  let eX = e.clientX;
  let eY = e.clientY;
  if (eX < popupRect.left || eX > popupRect.right ||
   eY < popupRect.top || eY > popupRect.bottom) {
   closeCoursesPopup();
  }
 }
}

function closeCoursesPopup() {
 coursesPopup.classList.add('hide-block');
 fillNewCoursesTr();
 if (newCoursesTrFilled) {
  coursesWrapTable.querySelector('tbody').prepend(newCoursesTr);
 }
}

coursesPopupHide.onclick = closeCoursesPopup;

function fillNewCoursesTr() {
 let value1 = document.querySelector('#courses__type').value;
 let value2 = document.querySelector('#courses__graduate').value;
 let value3 = document.querySelector('#courses__profession').value;

 if (newCoursesTr) {
  newCoursesTr.querySelector('.td-left').innerText = value1;

  newCoursesTr.querySelector('.td-right').querySelector('.td-title__span').innerText = value2;

  newCoursesTr.querySelector('.td-right').querySelector('.td-text').innerText = value3;

  newCoursesTr.querySelector('.li-remove').onclick = (e) => {
   e.target.closest('td').parentNode.remove();
   e.target.closest('td').parentNode.style.display = 'none';
  };
 }
 if (value1 || value2 || value3) {
  newCoursesTrFilled = true;
 }
}

editResume.addEventListener('click', showCoursesPencil);

function showCoursesPencil() {
 if (resumeEdited) {
  if (newCoursesTr) {
   newCoursesTr.querySelector('.pencil').classList.remove('initial-hide');
   newCoursesTr.querySelector('.li-remove').classList.remove('initial-hide');
  }
 }
}
/**********Конец Добавить повышение квалификации, курсы********/

/**********Редактировать Повышение квалификации, курсы*********/
const editCoursesPopup = document.querySelector('.edit-courses__popup');
const editCoursesPopupHide = document.querySelector('.edit-courses__popup-hide');
const editCoursesType = document.querySelector('#edit-courses__type');
const editCoursesGraduate = document.querySelector('#edit-courses__graduate');
const editCoursesProfession = document.querySelector('#edit-courses__profession');
const editCoursesPencils = pretendentCardCourses.querySelectorAll('.pencil');
let targCourses;

for (let item of editCoursesPencils) {
 item.addEventListener('click', editCourses);
}

function editCourses(e) {
 document.querySelector('.datetable_wrapper').classList.remove('datetable_active'); //спрятать календарь
 editStudyPopup.classList.add('hide-block');
 editLanguagePopup.classList.add('hide-block');
 editWorkPopup.classList.add('hide-block');
 editCoursesPopup.classList.remove('hide-block');
 targCourses = e.target.closest('tr');
 editCoursesType.value = targCourses.querySelector('.td-left').innerText;
 editCoursesGraduate.value = targCourses.querySelector('.td-title__span').innerText;
 editCoursesProfession.value = targCourses.querySelector('.td-text').innerText;
}

editCoursesPopupHide.onclick = closeEditCoursesPopup;

//если нажать мимо, то закрыть popup
window.addEventListener('click', close_ten);

function close_ten(e) {
 if (!e.target.classList.contains('pencil')) {

  //найти координаты popup
  popupRect = editCoursesPopup.getBoundingClientRect();
  let eX = e.clientX;
  let eY = e.clientY;
  if (eX < popupRect.left || eX > popupRect.right ||
   eY < popupRect.top || eY > popupRect.bottom) {
   closeEditCoursesPopup();
  }
 }
}

function closeEditCoursesPopup() {
 if (targCourses) {
  targCourses.querySelector('.td-left').innerText = editCoursesType.value;
  targCourses.querySelector('.td-title__span').innerText = editCoursesGraduate.value;
  targCourses.querySelector('.td-text').innerText = editCoursesProfession.value;
 }

 editCoursesPopup.classList.add('hide-block');
}
/****Конец редактировать Повышение квалификации, курсы*******/


/***********************Добавить язык *********************/
const pretendentCardLanguage = document.querySelector('.pretendent-card__language');
const languageWrapTable = document.querySelector('.language__wrap-table');
const addNewLanguage = document.querySelector('.add-newlanguage');
const trLanguageTemplate = languageWrapTable.querySelectorAll('tr')[0];
const innerLanguageHTML = trLanguageTemplate.innerHTML;
const languagePopup = document.querySelector('.language__popup');
const languagePopupHide = document.querySelector('.language__popup-hide');
const languagePopupInputs = document.querySelectorAll('.language__popup-input');
let newLanguageTr;
let newLanguageTrFilled = false; //ни одно поле не заполнено

addNewLanguage.onclick = function () {
 document.querySelector('.datetable_wrapper').classList.remove('datetable_active'); //спрятать календарь
 languagePopup.classList.remove('hide-block');

 newLanguageTr = document.createElement('tr');

 newLanguageTr.innerHTML = innerLanguageHTML;
 newLanguageTr.querySelector('.title-edit').classList.remove('initial-hide');
 newLanguageTr.querySelector('.pencil').classList.remove('initial-hide');
 newLanguageTr.querySelector('.li-remove').classList.remove('initial-hide');
 newLanguageTr.querySelector('.li-remove').onclick = () => {
  newLanguageTr.remove();
 };

 newLanguageTr.querySelector('.pencil').onclick = editLanguage;
};

for (let item of languagePopupInputs) {
 item.querySelector('input').addEventListener('focus', inputFocus);
 item.querySelector('input').addEventListener('blur', inputBlur);
}
//функции inputBlur, inputFocus определены в новой работе 

//если нажать мимо, то закрыть popup
window.addEventListener('click', close_eleven);

function close_eleven(e) {
 if (!e.target.classList.contains('add-newlanguage')) {

  //найти координаты popup
  popupRect = languagePopup.getBoundingClientRect();
  let eX = e.clientX;
  let eY = e.clientY;
  if (eX < popupRect.left || eX > popupRect.right ||
   eY < popupRect.top || eY > popupRect.bottom) {
   closeLanguagePopup();
  }
 }
}

function closeLanguagePopup() {
 languagePopup.classList.add('hide-block');
 fillNewLanguageTr();
 if (newLanguageTrFilled) {
  languageWrapTable.querySelector('tbody').prepend(newLanguageTr);
 }
}

languagePopupHide.onclick = closeLanguagePopup;

function fillNewLanguageTr() {
 let value1 = document.querySelector('#language__speack').value;
 let value2 = document.querySelector('#language__level').value;

 if (newLanguageTr) {
  newLanguageTr.querySelector('.td-left').innerText = value1;

  newLanguageTr.querySelector('.td-right').querySelector('.td-title__span').innerText = value2;

  newLanguageTr.querySelector('.li-remove').onclick = (e) => {
   e.target.closest('td').parentNode.remove();
   e.target.closest('td').parentNode.style.display = 'none';
  };
 }
 if (value1 || value2) {
  newLanguageTrFilled = true;
 }
}

editResume.addEventListener('click', showLanguagePencil);

function showLanguagePencil() {
 if (resumeEdited) {
  if (newLanguageTr) {
   newLanguageTr.querySelector('.pencil').classList.remove('initial-hide');
   newLanguageTr.querySelector('.li-remove').classList.remove('initial-hide');
  }
 }
}
/***************Конец Добавить язык*****************/


/**************Редактировать язык********************/
const editLanguagePopup = document.querySelector('.edit-language__popup');
const editLanguagePopupHide = document.querySelector('.edit-language__popup-hide');
const editLanguageSpeack = document.querySelector('#edit-language__speack');
const editLanguageLevel = document.querySelector('#edit-language__level');
const editLanguagePencils = pretendentCardLanguage.querySelectorAll('.pencil');
let targLanguage;

for (let item of editLanguagePencils) {
 item.addEventListener('click', editLanguage);
}

function editLanguage(e) {
 document.querySelector('.datetable_wrapper').classList.remove('datetable_active'); //спрятать календарь
 editStudyPopup.classList.add('hide-block');
 editCoursesPopup.classList.add('hide-block');
 editWorkPopup.classList.add('hide-block');
 editLanguagePopup.classList.remove('hide-block');
 targLanguage = e.target.closest('tr');
 editLanguageSpeack.value = targLanguage.querySelector('.td-left').innerText;
 editLanguageLevel.value = targLanguage.querySelector('.td-title__span').innerText;
}

editLanguagePopupHide.onclick = closeEditLanguagePopup;

//если нажать мимо, то закрыть popup
window.addEventListener('click', close_twelwe);

function close_twelwe(e) {
 if (!e.target.classList.contains('pencil')) {

  //найти координаты popup
  popupRect = editLanguagePopup.getBoundingClientRect();
  let eX = e.clientX;
  let eY = e.clientY;
  if (eX < popupRect.left || eX > popupRect.right ||
   eY < popupRect.top || eY > popupRect.bottom) {
   closeEditLanguagePopup();
  }
 }
}

function closeEditLanguagePopup() {
 if (targLanguage) {
  targLanguage.querySelector('.td-left').innerText = editLanguageSpeack.value;
  targLanguage.querySelector('.td-title__span').innerText = editLanguageLevel.value;
 }

 editLanguagePopup.classList.add('hide-block');
}
/**************Конец редактировать язык*****************/



/*********************Ввод даты**********************/
const regDate = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
const uncorrectDate = document.querySelector('.uncorrect-date');
const uncorrectYear = document.querySelector('.uncorrect-year');
let inputYear;

/**********Маска даты***********/
let inputDate = document.querySelectorAll('#mydate');
inputDate[0].onfocus = () => {
 uncorrectDate.classList.add('hide-block');
 uncorrectYear.classList.add('hide-block');
};

Array.prototype.forEach.call(inputDate, function (input) {
 new InputMask({
  selector: input, // в качестве селектора может быть элемент, или css селектор('#input', '.input', 'input'). 
  //Если селектор - тег или класс - будет получен только первый элемент
  layout: input.dataset.mask
 });
});

function InputMask(options) {
 this.el = this.getElement(options.selector);
 if (!this.el) {
  return console.log('Что-то не так с селектором');
 }
 this.layout = options.layout || '__.__.____';
 this.maskreg = this.getRegexp();
 this.setListeners();
}

InputMask.prototype.getRegexp = function () {
 var str = this.layout.replace(/_/g, '\\d');
 str = str.replace(/\s/g, '\\s');
 return str;
};

InputMask.prototype.mask = function (e) {
 var _this = e.target,
  matrix = this.layout,
  i = 0,
  def = matrix.replace(/\D/g, ""),
  val = _this.value.replace(/\D/g, "");

 if (def.length >= val.length) {
  val = def;
 }

 _this.value = matrix.replace(/./g, function (a) {
  return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
 });

 if (e.type == "blur") {
  var regexp = new RegExp(this.maskreg);
  if (!regexp.test(_this.value)) {
   _this.value = "";
  }
 } else {
  this.setCursorPosition(_this.value.length, _this);
 }
};

InputMask.prototype.setCursorPosition = function (pos, elem) {
 elem.focus();
 if (elem.setSelectionRange) {
  elem.setSelectionRange(pos, pos);
 } else if (elem.createTextRange) {
  var range = elem.createTextRange();
  range.collapse(true);
  range.moveEnd("character", pos);
  range.moveStart("character", pos);
  range.select();
 }
};

InputMask.prototype.setListeners = function () {
 this.el.addEventListener("input", this.mask.bind(this), false);
 this.el.addEventListener("focus", this.mask.bind(this), false);
 this.el.addEventListener("blur", this.mask.bind(this), false);
};

InputMask.prototype.getElement = function (selector) {
 if (selector === undefined) {
  return false;
 }
 if (this.isElement(selector)) {
  return selector;
 }
 if (typeof selector == 'string') {
  var el = document.querySelector(selector);
  if (this.isElement(el)) {
   return el;
  }
 }
 return false;
};

InputMask.prototype.isElement = function (element) {
 return element instanceof Element || element instanceof HTMLDocument;
};

//Проверка даты
const dateApply = document.querySelector('.date-apply');

dateApply.addEventListener('click', function () {
 if (regDate.test(inputDate.value)) {
  uncorrectDate.classList.add('hide-block');
 }
});

inputDate[0].addEventListener('blur', function () {
 inputYear = inputDate[0].value.substr(6, 4);

 if (inputYear > new Date().getFullYear()) {
  uncorrectYear.classList.remove('hide-block');
  uncorrectDate.classList.remove('hide-block');
  inputDate[0].value = '';
 }

 if (!regDate.test(this.value)) {
  inputDate[0].value = '';
 }
});
/******Конец маска даты*****/
/****************Конец ввод даты*********************/