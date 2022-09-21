const cookie = document.querySelector('.cookie');
const cookieBtn = document.querySelector('.cookie__button');
cookieBtn.onclick = () => {
 cookie.classList.add('hide-block');
};

/**********Затемнение страницы при активации селектов ******/
window.addEventListener('click', isDark);

function isDark(e) {
 if (e.target.parentNode.classList.contains('input-container')) {
  e.target.parentNode.classList.add('zindex50');
  e.target.parentNode.querySelector('.placeholder') && e.target.parentNode.querySelector('.placeholder').classList.add('white-font');
 }

 const rectPopupEnter1 = document.querySelector('.popup-enterDesctop').getBoundingClientRect();
 const rectLeft1 = rectPopupEnter1.left;
 const rectRight1 = rectPopupEnter1.right;
 const rectTop1 = rectPopupEnter1.top;
 const rectBottom1 = rectPopupEnter1.bottom;
 //координаты попапа авторизации для desctop

 const eX = e.clientX;
 const eY = e.clientY;

 if (eX < rectLeft1 || eX > rectRight1 || eY < rectTop1 || eY > rectBottom1) {
  if (!e.target.classList.contains('sigin-btn') && !e.target.classList.contains('login-btn')) {
   setTimeout(() => {
    document.querySelector('.main-nav').classList.remove('body-dark');
    document.querySelector('.hww').classList.remove('body-dark');
   }, 10);
  }

  for (let item of document.querySelectorAll('.zindex50')) {
   item.classList.remove('zindex50');
  }

 } else {
  handlZindex();
 }
}

function handlZindex() {
 document.querySelector('.main-nav').classList.add('body-dark');
}
/**********Конец затемнения страницы ******/


/*****************Режим авторизации**************/
const ulUnautorize = document.querySelector('.ul-unautorize');
const ulAutorize = document.querySelector('.ul-autorize');
const liAutorize = document.querySelector('.li-autorize');
const aAutorize = document.querySelector('.a-autorize');
const autorize = document.querySelector('.autorize');
const dropdownAutorizes = document.querySelectorAll('.dropdown-autorize');

/********Слайдер********/
const popupSlide = document.querySelectorAll('.popup-slide');
const popupSlideControlChanges = document.querySelectorAll('.popupslide__control-change');
const slideWidth = 470;
let popupStep = 0;
let intervalStep;

for (let item of popupSlideControlChanges) {
 item.addEventListener('click', popupSlideChange);
}

function popupSlideChange(e) {
 let targ = e.target.classList;
 if (targ.contains('popupscc1')) {
  popupStep = 0;
 }
 if (targ.contains('popupscc2')) {
  popupStep = -1;
 }
 if (targ.contains('popupscc3')) {
  popupStep = -2;
 }
 if (targ.contains('popupscc4')) {
  popupStep = -3;
 }
 if (targ.contains('popupscc5')) {
  popupStep = -4;
 }
 if (targ.contains('popupscc6')) {
  popupStep = -5;
 }
 goSlideStep();
}

function popupSlideShow() {
 intervalStep = setInterval(changeSlide, 5000);
}

function changeSlide(item) {
 if (popupStep > -5) {
  popupStep--;
 } else {
  popupStep = 0;
 }
 switch (popupStep) {
  case 0:
   document.querySelector('.popupscc1').checked = true;
   break;
  case -1:
   document.querySelector('.popupscc2').checked = true;
   break;
  case -2:
   document.querySelector('.popupscc3').checked = true;
   break;
  case -3:
   document.querySelector('.popupscc4').checked = true;
   break;
  case -4:
   document.querySelector('.popupscc5').checked = true;
   break;
  case -5:
   document.querySelector('.popupscc6').checked = true;
   break;
 }
 goSlideStep();
}

function goSlideStep() {
 for (let item of popupSlide) {
  item.style.transform = `translateX(${popupStep*slideWidth}px)`;
  item.style.transition = '0.5s';
 }
}

popupSlideShow();
/*****Конец слайдер*****/

/*****Регистрация******/
const popupSignin = document.querySelector('a[data-popup="#popup-signin"]');
const popupEnter_ = document.querySelector('a[data-popup="#popup-enter"]');

const miniBtnSignup = document.querySelector('.sigIn-btn');
const topEnter1 = document.querySelector('.top__enter1');
const topEnter2 = document.querySelector('.top__enter2');
const signinTitle1 = document.querySelector('.signin-title1');
const signinTitle2 = document.querySelector('.signin-title2');
const signup1 = document.querySelector('.signup1');
const signup2 = document.querySelector('.signup2');
const pre1 = document.querySelector('.pre1');
const pre2 = document.querySelector('.pre2');
const popupEnterDesctop = document.querySelector('.popup-enterDesctop');
const popupEnterDesctopExit = document.querySelector('.popup-enterDesctop__exit');

popupEnter_.addEventListener('click', function (e) {
 popupEnterDesctop.classList.remove('hide-block');
 toEnter(e);
 handlZindex();
});

popupSignin.addEventListener('click', function (e) {
 popupEnterDesctop.classList.remove('hide-block');
 toRegister(e);
 handlZindex();
});

popupEnterDesctopExit.onclick = () => {
 popupEnterDesctop.classList.add('hide-block');
 document.querySelector('.main-nav').classList.remove('body-dark');
 document.querySelector('.hww').classList.remove('body-dark');
};

miniBtnSignup.addEventListener('click', toRegister);

function toRegister(e) {
 topEnter1.classList.add('hide-block');
 topEnter2.classList.remove('hide-block');
 signinTitle1.classList.add('hide-block');
 signinTitle2.classList.remove('hide-block');
 signup1.classList.add('hide-block');
 signup2.classList.remove('hide-block');
 pre1.classList.add('hide-block');
 pre2.classList.remove('hide-block');
 signinTitle2.classList.remove('hide-block');
 miniBtnSignup.classList.add('hide-block');
}

signup2.addEventListener('click', toEnter);

function toEnter(e) {
 topEnter1.classList.remove('hide-block');
 topEnter2.classList.add('hide-block');
 signinTitle1.classList.remove('hide-block');
 signinTitle2.classList.add('hide-block');
 signup1.classList.remove('hide-block');
 signup2.classList.add('hide-block');
 pre1.classList.remove('hide-block');
 pre2.classList.add('hide-block');
 miniBtnSignup.classList.remove('hide-block');
 signinTitle2.classList.add('hide-block');
 signup2.classList.add('hide-block');
}


window.addEventListener('click', function (e) {
 const rectPopupEnter1 = document.querySelector('.popup-enterDesctop').getBoundingClientRect();
 const rectLeft1 = rectPopupEnter1.left;
 const rectRight1 = rectPopupEnter1.right;
 const rectTop1 = rectPopupEnter1.top;
 const rectBottom1 = rectPopupEnter1.bottom;
 //координаты попапа авторизации для desctop

 if (!e.target.classList.contains('sigin-btn') && !e.target.classList.contains('login-btn')) {
  const eX = e.clientX;
  const eY = e.clientY;

  if (eX < rectLeft1 || eX > rectRight1 || eY < rectTop1 || eY > rectBottom1) {
   popupEnterDesctop.classList.add('hide-block');
  }
 }
});

/****Конец регистрация****/

/***************Конец режим авторизации***********/

// Email validate
const recoveryForm = document.querySelector('.recovery__form');
const recoverylnput = document.querySelector('.recovery__form input');
const recoverySubmit = document.querySelector('.recovery__form button');
const recoveryError = document.querySelector('.recovery__error');
const recoverySucces = document.querySelector('.recovery__succes');
const recoveryEmail = document.getElementById('recovery-email');

// TEST
const testUsers = [{
  email: 'test@mail.ru',
  status: true
 },
 {
  email: 'blocked@mail.ru',
  status: false
 }
];


function emailValidate(input, e) {
 e.preventDefault();

 if (input.value.indexOf('@') === -1) {
  recoveryError.innerHTML = 'Неправильный адрес электронной почты';
  return false;
 }

 for (let i = 0; i < testUsers.length; i++) {
  if (testUsers[i].email === input.value) {
   if (testUsers[i].status === false) {
    recoveryError.innerHTML = `Учётная запись с данным адрессом электронной почты заблокирована. Обратитесь в 
     <a href="#" class="recovery__error-link">техническую службу</a>`;
    return false;
   } else {
    recoveryForm.classList.add('d-none');
    recoverySucces.classList.remove('d-none');
    recoveryEmail.innerHTML = input.value;
    return true;
   }
  }
 }

 recoveryError.innerHTML = 'Пользователь с указанным E-mail не найден';
}

recoverySubmit.addEventListener('click', emailValidate.bind(null, recoverylnput));

/******************Гамбургер************* */
const navMobileEnter = document.querySelector('.nav-mobile__enter');
const navMobileBtnClose = document.querySelector('.nav-mobile__btn-close');
const headerHamburger = document.querySelector('.header__hamburger');
const navMobileListLinks = document.querySelectorAll('.nav-mobile__list-link');

headerHamburger.addEventListener('click', function () {
 navMobileEnter.style.transform = 'translateX(0)';
});

navMobileBtnClose.addEventListener('click', function () {
 navMobileEnter.style.transform = 'translateX(100%)';
});

for (let item of navMobileListLinks) {
 item.addEventListener('click', handlerClick);
}

function handlerClick(e) {
 if (e.target.classList.contains('sigin-btn')) {
  popupEnterDesctop.classList.remove('hide-block');
  navMobileEnter.style.transform = 'translateX(100%)';
  toEnter();
  document.querySelector('.hww').classList.add('body-dark');
 }
 if (e.target.classList.contains('login-btn')) {
  popupEnterDesctop.classList.remove('hide-block');
  navMobileEnter.style.transform = 'translateX(100%)';
  toRegister();
  document.querySelector('.hww').classList.add('body-dark');
 }
}
/**************Конец гамбургер*************/