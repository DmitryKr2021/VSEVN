//Создание красной линии - индикатора скролла 

/*scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);*/ //Общий вариант для высоты страницы

const percentScrollDiv = document.querySelector('.percent-scroll');
const windowRowRight = document.querySelector('.window__row--right');
let numerator = 0;
let denominator;
let scrollRightBlock = windowRowRight.getBoundingClientRect().top;
let rightBlockStart = scrollRightBlock;

//document.onscroll = (e) => {
/* Старая версия для прокрутки всей страницы

  let timerScroll = setInterval(scrollHandler, 10);
  let correction = 0;
  denominator = document.documentElement.scrollHeight + windowRowRight.clientHeight;

  function scrollHandler() {
    correction = rightBlockStart - windowRowRight.getBoundingClientRect().top;
    numerator = window.pageYOffset + correction;
    percentScrollDiv.style.width = `${document.documentElement.scrollWidth*1.05*numerator/denominator}px`;
  }
*/

/* Старая версия №2 для прокрутки верхнего желтого поля */

/*let timerScroll = setInterval(scrollHandler, 10);
  denominator = document.querySelector('.search').scrollHeight;
};

let rollUpActive = false;
let scrollCorrect = 0;
let coef = 1.2;
if (document.documentElement.clientWidth < 500) {
  coef = 1;
}

function scrollHandler() {
  numerator = window.pageYOffset;
  percentScrollDiv.style.width = `${document.documentElement.scrollWidth*coef*numerator/denominator}px`;
  if (rollUpActive) {
    percentScrollDiv.style.width = `${document.documentElement.scrollWidth*0.6*numerator/denominator+scrollCorrect}px`;
  }
}

document.querySelector('.roll-up').addEventListener('click',
  function () {
    if (!rollUpActive) {
      scrollCorrect = document.documentElement.clientWidth * 0.62;
    } else {
      scrollCorrect = 0;
    }
    rollUpActive = !rollUpActive;
    percentScrollDiv.style.width = scrollCorrect + 'px';
  });

/******Вариант для полной прокрутки при начале скролла ******/
document.onscroll = (e) => {
  if (window.pageYOffset > 5) {
    percentScrollDiv.classList.add('percent-scrollFull');
  } else {
    percentScrollDiv.classList.remove('percent-scrollFull');
  }
};

/*************Конец блока*****************/

/*********** Работа с верхним бургер-меню**********/
const iconMenu = document.querySelector('.icon-menu');
const dropdownList = document.querySelector('.dropdown-list');

iconMenu.addEventListener('click', openIconMenu);

function openIconMenu() {
  dropdownList.classList.toggle('_active');
  document.documentElement.classList.toggle("menu-open");
}
/********* Конец работы с верхним бургер-меню*******/


/**********Управление кнопками выбора типа поиска**********/
const chooseWork = document.querySelector('.choose__work');
const chooseStaff = document.querySelector('.choose__staff');
const chooseAny = document.querySelector('.choose__any');
const search = document.querySelector('.search');

//кнопки Очистить
const resetAll = chooseWork.querySelector('.reset-all');
const staffResetAll = chooseStaff.querySelector('.staff__reset-all');
const anyResetAll = chooseAny.querySelector('.any__reset-all');

const searchTabsTitles = search.querySelectorAll('.tabs__title');
for (let btn of searchTabsTitles) {
  btn.addEventListener('click', changeSearchType);
}

function changeSearchType(e) {
  for (let btn of searchTabsTitles) {
    btn.classList.remove('_tab-active');
  }
  e.target.classList.add('_tab-active');

  switch (e.target.getAttribute('data-type')) {
    case ('staff'):
      setTimeout(() => {
        chooseStaff.classList.remove('choose__staff-hide');
        chooseAny.classList.add('choose__any-hide');
        chooseWork.classList.add('choose__work-hide');
      }, 100);

      chooseStaff.style.display = 'block';
      chooseAny.style.display = "none";
      chooseWork.style.display = "none";
      break;

    case ('work'):
      setTimeout(() => {
        chooseWork.classList.remove('choose__work-hide');
        chooseAny.classList.add('choose__any-hide');
        chooseStaff.classList.add('choose__staff-hide');
      }, 100);

      chooseWork.style.display = "block";
      chooseStaff.style.display = 'none';
      chooseAny.style.display = "none";
      break;

    case ('any'):
      setTimeout(() => {
        chooseAny.classList.remove('choose__any-hide');
        chooseWork.classList.add('choose__work-hide');
        chooseStaff.classList.add('choose__staff-hide');
      }, 100);

      chooseAny.style.display = "block";
      chooseStaff.style.display = 'none';
      chooseWork.style.display = "none";
      break;
  }
}
/*************Конец блока*****************/

/**********Работа с кнопками Показать/Очистить ************* */
const showAlls = document.querySelectorAll('.show-all');
const resetAlls = document.querySelectorAll('.reset-all');

for (let btn of showAlls) {
  btn.addEventListener('click', handleShowAll);
}
for (let btn of resetAlls) {
  btn.addEventListener('click', handleResetAll);
}

function handleShowAll(e) {
  //Сузить кнопку Показать, показать кнопку Очистить
  e.target.parentNode.querySelectorAll('button')[0].classList.add('choose__btn--mini');
  e.target.parentNode.querySelectorAll('button')[1].classList.add('choose__btn--mini');
  let innerText_ = 'Показать 8 456';
  if (e.target.previousElementSibling.classList.contains('work__reset-all')) {
    innerText_ += ' вакансий';
  }
  if (e.target.previousElementSibling.classList.contains('staff__reset-all')) {
    innerText_ += ' резюме';
  }
  e.target.innerText = innerText_;
  e.target.previousElementSibling.classList.remove('hide-block');
}

function handleResetAll(e) {
  //Обнулить объекты инпутов
  for (let item of inpConts) {
    item.open = false;
    item.filled = false;
  }

  //Расширить кнопку Показать. Кнопка Очистить убирается в коде ниже
  e.target.parentNode.querySelectorAll('button')[1].classList.remove('choose__btn--mini');
  e.target.nextElementSibling.innerText = 'Показать';
  for (let item of inputResets) {
    item.addEventListener('click', hideInputReset);
  }
  for (let item of inputResets) {
    item.classList.add('hide-block'); //спрятать крестики
  }

  for (let item of document.querySelectorAll('.placeholder')) {
    item.classList.remove('input-field-focus');
    //вернуть placeholder на место
  }
  for (let item of document.querySelectorAll('.placeholder2')) {
    item.classList.remove('input-field-focus');
    //вернуть placeholder2 на место
  }
}

/**********Конец работа с кнопками Показать/Очистить *********/


//Скрыть/показать поисковую панель
const rollUp = document.querySelector('.roll-up');
const rollUpBtn = document.querySelector('.roll-up__btn');
const rollUpSpan = document.querySelector('.roll-up__span');
//const search = document.querySelector('.search');//Определено выше
let flagShow = true;

rollUpBtn.onclick = () => {
  if (flagShow) {
    rollUpSpan.innerText = 'Показать поисковую панель';
    rollUp.classList.add('active');
    document.querySelector('.choose').classList.add('hide-block');
    search.classList.add('search-reduced');
  } else {
    rollUpSpan.innerText = 'Скрыть поисковую панель';
    rollUp.classList.remove('active');
    document.querySelector('.choose').classList.remove('hide-block');
    search.classList.remove('search-reduced');
  }
  flagShow = !flagShow;
};
/*************Конец блока************** */

/************************Блок Поиск работы***********************/
/***********Работа с полями ввода и кнопкой Очистить**********/

const inputFields = chooseWork.querySelectorAll('.input-field');
const inputFieldsAll = document.querySelectorAll('.input-field');
let tempValueRubr; //временное хранение вводимого значения рубрикатора
let tempValueVacans; //временное хранение вводимого значения вакансий

window.addEventListener('click', showInput);

function showInput(e) { //убрать placeholder и показать input
  if (e.target !== resetAll) {
    for (let inp of inputFields) {
      if (inp.value) {
        resetAll.classList.remove('hide-block');
      } else {
        inp.parentNode.querySelector('.placeholder').classList.remove('hide-block');
      }
    }
  }
  /* */
  if (e.target !== staffResetAll) {
    for (let inp of staffInputFields) {
      if (inp.value) {
        staffResetAll.classList.remove('hide-block');
      } else {
        inp.parentNode.querySelector('.placeholder').classList.remove('hide-block');
      }
    }
  }
  /* */
  if (e.target !== anyResetAll) {
    for (let inp of anyInputFields) {
      if (inp.value) {
        anyResetAll.classList.remove('hide-block');
      } else {
        inp.parentNode.querySelector('.placeholder').classList.remove('hide-block');
      }
    }
  }
  /* */
}

//Работа с крестиками для очистки поля ввода 
const inputResets = document.querySelectorAll('.input-reset');

for (let item of inputFieldsAll) {
  item.addEventListener('input', showInputReset);
}

for (let item of inputResets) {
  item.addEventListener('click', hideInputReset);
}

function showInputReset(e) {
  let targ = e.target.parentNode;
  targ.querySelector('.input-reset').classList.remove('hide-block');
  if (targ.querySelector('.placeholder')) {
    targ.querySelector('.placeholder').classList.add('input-field-focus');
  }

  if (targ.querySelector('.placeholder2')) {
    targ.querySelector('.placeholder2').classList.add('input-field-focus');
  }
}

function hideInputReset(e) {
  e.target.classList.add('hide-block');
  let targ = e.target.parentNode;

  if (targ.querySelector('.input-field')) {
    targ.querySelector('.input-field').value = '';
  }
  if (targ.querySelector('.inputselect')) {
    targ.querySelector('.inputselect').value = '';
  }

  if (targ.querySelector('.placeholder')) {
    targ.querySelector('.placeholder').classList.remove('input-field-focus');
  }

  if (targ.querySelector('.placeholder2')) {
    targ.querySelector('.placeholder2').classList.remove('input-field-focus');
  }

  if (targ.querySelector('.showlist')) {
    targ.querySelector('.showlist').classList.remove('showlist');
  }

  for (let item of targ.querySelectorAll('.input-checkbox')) {
    item.checked = false;
  }

  for (let item of inpConts) {
    if (item.reset === e.target) {
      item.filled = false;
    }
  }

  tempValueRubr = '';
  tempValueVacans = '';
  removeWide(e);
  removeWide2(e);
}

//конец работы с крестиками
/*************Конец блока с полями ввода************** */


//Закрыть селекты по клику в произвольном месте
const chooseRegion = document.querySelector('.choose__region');
const regionRect = chooseRegion.getBoundingClientRect();
const searchContainer = document.querySelector('.search__container');
const tabs = document.querySelector('.tabs');
const inputSelects = document.querySelectorAll('.inputselect');
const inputContainers = document.querySelectorAll('.input-container');
const inputContainerUls = document.querySelectorAll('.input-container__ul');
const inputContainerArrows = document.querySelectorAll('.input-container__arrow');
let x1rubric;
let x2rubric; //координаты расширенного блока рубрикатора
let x1vacansion;
let x2vacansion;
let y2vacansion; //координаты расширенного блока вакансий

window.addEventListener('click', hideAllLists);

function isNoInRect(e, rect) {
  let eX = e.clientX;
  let eY = e.clientY;
  if (eX < rect.x1 || eX > rect.x2 || eY < rect.y1 || eY > rect.y2) {
    return true;
  } else {
    return false;
  }
}

function isNoInRectUl(e, rect) {
  let eX = e.clientX;
  let eY = e.clientY;
  let rectBound = rect.getBoundingClientRect();
  if (eX < rectBound.left || eX > rectBound.right || eY < rectBound.top || eY > rectBound.bottom) {
    return true;
  } else {
    return false;
  }
}

function hideAllLists(e) {
  let eX = e.clientX;
  let eY = e.clientY;
  if (document.documentElement.clientWidth > 500) {

    if (eY < document.getElementById('rubricator').getBoundingClientRect().top || eY < document.getElementById('rubricator1').getBoundingClientRect().top || eY < document.getElementById('rubricator2').getBoundingClientRect().top) {
      removeWide(e);
      for (let item of document.querySelectorAll('.ul-wide')) {
        item.classList.remove('ul-wide');
      }
      for (let item of document.querySelectorAll('.for-button')) {
        item.classList.add('hide-block');
      }
    }

    if (eY < document.getElementById('vacansion').getBoundingClientRect().top ||
      eY < document.getElementById('vacansion1').getBoundingClientRect().top) {
      removeWide2(e);
      for (let item of document.querySelectorAll('.ul-wide2')) {
        item.classList.remove('ul-wide2');
      }
      for (let item of document.querySelectorAll('.for-button')) {
        if (item.parentNode.querySelector('label').innerText == 'Тип вакансии') {
          item.classList.add('hide-block');
        }
      }
    }
  }


  let vacLeft = x1vacansion;
  if (document.documentElement.clientWidth < 1200) {
    vacLeft = 15;
  }

  if (e.clientX < vacLeft || e.clientX > searchContainer.getBoundingClientRect().right - 23) {
    for (let item of toHide2s) {
      item.classList.remove('hide-block');
    }
    for (let item of document.querySelectorAll('.input-container__ul')) {
      if (item.classList.contains('ul-wide2')) {
        item.classList.remove('ul-wide2');
      }
    }
    for (let item of document.querySelectorAll('.for-button')) {
      if (item.parentNode.querySelector('label').innerText == 'Тип вакансии') {
        item.classList.add('hide-block');
      }
    }
  }


  //Убрать блок регионов
  if (eX < regionRect.left || eX > regionRect.right) {
    chooseRegion.classList.add('up-block');
  }

  if (document.documentElement.clientWidth > 500) {
    //Для широких экранов
    for (let item of inpConts) {
      if (item.ul) {
        if (isNoInRect(e, item) && isNoInRectUl(e, item.ul)) {
          item.ul.classList.remove('showlist');
          item.open = false;
          if (item.arrow.classList.contains('arrow-rotate')) {
            item.arrow.classList.remove('arrow-rotate');
          }
        }

        if (e.clientX < x1rubric || e.clientX > searchContainer.getBoundingClientRect().right - 23) {

          for (let item of toHides) {
            item.classList.remove('hide-block');
          }
          item.ul.classList.remove('ul-wide');
          for (let item of document.querySelectorAll('.for-button')) {
            item.classList.add('hide-block');
          }
        }
      }
      if (item.ph2) { //если имеется placeholder2
        if (item.filled) { //если инпут заполнен
          item.ph2.classList.add('input-field-focus'); //плейсхолдерт поднят
        } else {
          if (!item.open && !e.target.classList.contains('input-container__arrow')) {
            item.input.classList.remove('inputsel'); //удалить подчеркивание
          }
          if (!e.target.classList.contains('input-container__arrow')) {
            if (!item.ul.classList.contains('showlist')) {
              item.ph2.classList.remove('input-field-focus');
            }
          }
        }
      }
    }
  } else {
    //Для мобильных <=500px
    //Не сворачивать инпут, если выбран вариант
    if (e.target.classList.contains('input-container__item') ||
      e.target.parentNode.classList.contains('input-container__item')) {
      return;
    }
    //перестать прятать блоки при расширении рубрикатора
    for (let item of toHides) {
      item.classList.remove('hide-block');
    }

    //Опустить и свернуть поднятый инпут
    let t1 = false;
    for (let item of inputContainers) {
      for (let inp of inpConts) {
        if (inp.id_ === item.id) {
          inp.fixedTop = false;
          t1 = inp.filled;
        }
      }

      if (!e.target.classList.contains('arrow') && !e.target.classList.contains('is2') ||
        e.target.classList.contains('arrow-rotate')) {
        headerMenu.classList.remove('hide-block');
        headerTop.classList.remove('hide-block');
        item.classList.remove('fixed-top');
        if (item.querySelector('.input-container__ul')) {
          item.querySelector('.input-container__ul').classList.remove('showlist');
        }
        if (item.querySelector('.placeholder2') && !t1) {
          item.querySelector('.placeholder2').classList.remove('input-field-focus');
        }
        rollUp.classList.remove('roll-up2');
        search.classList.remove('search2');
        chooseWork.querySelector('.choose__work--wrap').classList.remove('input-down');

        for (let item of document.querySelectorAll('.ul-wide')) {
          item.classList.remove('ul-wide');
        }
        for (let item of document.querySelectorAll('.ul-wide2')) {
          item.classList.remove('ul-wide2');
        }
        for (let item of document.querySelectorAll('.for-button')) {
          item.classList.add('hide-block');
        }
      }
    }
  }
}


/***********Создание объектов инпутов ************/
class InputContainer {
  constructor(item) {
    this.x1 = item.getBoundingClientRect().left;
    this.x2 = item.getBoundingClientRect().right;
    this.y1 = item.getBoundingClientRect().top;
    this.y2 = item.getBoundingClientRect().bottom;

    this.open = false;
    this.active = false;
    this.filled = false;
    this.fixedTop = false;

    this.id_ = item.id;
    this.input = item.firstElementChild;
    this.ph2 = item.querySelector('.placeholder2') || null;
    this.ul = item.querySelector('.input-container__ul') || null;
    this.reset = item.querySelector('.input-reset') || null;
    this.apply = item.querySelector('.apply') || null;
    this.arrow = item.querySelector('.arrow') || null;
  }
}
let inpContTemp;
//создать 26 объектов по числу инпутов
let inpConts = [];
for (let i = 0; i < 25; i++) {
  inpConts[i] = new InputContainer(document.getElementById(`inp_cont${i}`));
}

/*Обновить объект инпута при клике на этот инпут 
или его стрелку(нужно при смене вкладки для получения новых координат инпута для его закрытия при произвольном клике)*/
for (let item of inputSelects) {
  item.addEventListener('click', func);
}
for (let item of inputContainerArrows) {
  item.addEventListener('click', func);
}

function func(e) {
  inpContTemp = new InputContainer(e.target.parentNode);
  inpContTemp.open = true;
  const targPN = e.target.parentNode;
  for (let i = 0; i < inpConts.length; i++) {
    if (targPN.querySelector('.inputselect') === inpConts[i].input) {
      inpConts[i] = inpContTemp;
    }
  }
}

/************************************/



/**********Работа с селектами*****************/
/*const inputSelects = document.querySelectorAll('.inputselect');
const inputContainerUls = document.querySelectorAll('.input-container__ul'); 
const inputContainerArrows = document.querySelectorAll('.input-container__arrow');определены выше*/
const headerTop = document.querySelector('.header__top');
const headerMenu = document.querySelector('.header__menu');

chooseWork.addEventListener('click', hideSelect_1); //Показать/убрать список select

function inputUp(targPN) {
  const rollUp = document.querySelector('.roll-up');
  const search = document.querySelector('.search');
  const searchContainer = document.querySelector('.search__container');

  if (document.documentElement.clientWidth <= 500) {
    //вначале все инпуты опустить и деактивировать
    for (let item of inputContainers) {
      item.classList.remove('fixed-top');
      item.parentNode.classList.remove('high-zindex');
      if (item.querySelector('.input-container__ul')) {
        item.querySelector('.input-container__ul').classList.remove('showlist');
      }

      setTimeout(() => {
        item.querySelector('.arrow') &&
          !item.classList.contains('fixed-top') &&
          item.querySelector('.arrow').classList.remove('arrow-rotate');

        for (let i = 0; i < inpConts.length; i++) {
          if (item.querySelector('.inputselect') === inpConts[i].input) {
            if (!inpConts[i].filled) {
              item.querySelector('.placeholder2') &&
                !item.classList.contains('fixed-top') &&
                item.querySelector('.placeholder2').classList.remove('input-field-focus');

              item.querySelector('.inputselect') && !item.classList.contains('fixed-top') && item.querySelector('.inputselect').classList.remove('inputsel');
            }
          }
        }
      }, 100);
    }
    //Поднять выбранный инпут
    targPN.classList.add('fixed-top');
    targPN.querySelector('.input-container__ul').classList.toggle('showlist');
    rollUp.classList.add('roll-up2');
    search.classList.add('search2');
    searchContainer.classList.add('search__container2');
    for (let item of inpConts) {
      if (item.id_ === targPN.id) {
        item.fixedTop = true;
      }
    }
    //targPN.parentNode.classList.add('high-zindex');
    headerMenu.classList.add('hide-block');
    headerTop.classList.add('hide-block');
    chooseWork.querySelector('.choose__work--wrap').classList.add('input-down');

    window.onscroll = () => {
      //прячем остальные инпуты, чтобы не видно при скролле вверху
      for (let item of currentBlock().querySelectorAll('.inputselect')) {
        if (item.getBoundingClientRect().top < 50 && item.parentNode !== targPN) {
          item.parentNode.classList.add('invisible');
        } else {
          item.parentNode.classList.remove('invisible');
        }
      }
    };
  }
}

function currentBlock() {
  if (getComputedStyle(chooseWork).display == 'block') {
    return chooseWork;
  }
  if (getComputedStyle(chooseStaff).display == 'block') {
    return chooseStaff;
  }
  if (getComputedStyle(chooseAny).display == 'block') {
    return chooseAny;
  }
}

function hideSelect_1(e) {
  let targ = e.target;
  let targPN = targ.parentNode;

  //нажали на стрелочку
  if (targ.classList.contains('input-container__arrow')) {
    targPN.querySelector('.input-container__ul').classList.toggle('showlist'); //развернуть селект
    targPN.querySelector('.inputselect').classList.toggle('inputsel'); //развернуть красное подчеркивание

    setTimeout(() => {
      targ.classList.toggle('arrow-rotate'); //повернуть стрелочку на 180
    }, 50);

    targPN.querySelector('.placeholder2').classList.toggle('input-field-focus'); //поднять placeholder

    /*Для мобильной версии (<500рх) поднять инпут с селектом вверх */
    if (document.documentElement.clientWidth <= 500) {
      inputUp(targPN);
    }

    /*************************** */

    //разворачиваем/сворачиваем рубрикатор 
    if (!targPN.querySelector('.input-container__ul').classList.contains('ul-wide') && targPN.querySelector('.inputselect').classList.contains('ulwide')) {
      addWide(e); //если свернут - развернуть
    } else {
      targPN.querySelector('.input-container__ul').classList.remove('ul-wide'); //если развернут - свернуть
      for (let item of toHides) {
        item.classList.remove('hide-block');
        if (document.getElementById('inp_cont6').style.display === 'none') {
          document.getElementById('inp_cont6').style.display = 'block';
        }
        if (document.getElementById('inp_cont15').style.display === 'none') {
          document.getElementById('inp_cont15').style.display = 'block';
        }
      }
      if (targPN.querySelector('.for-button')) {
        targPN.querySelector('.for-button').classList.add('hide-block');
      }
    }

    //разворачиваем/сворачиваем вакансии
    if (!targPN.querySelector('.input-container__ul').classList.contains('ul-wide2') && targPN.querySelector('.inputselect').classList.contains('ulwide2')) {
      addWide2(e);
    } else {
      targPN.querySelector('.input-container__ul').classList.remove('ul-wide2');
      for (let item of toHide2s) {
        item.classList.remove('hide-block');
      }
      if (targPN.querySelector('.for-button')) {
        targPN.querySelector('.for-button').classList.add('hide-block');
      }
    }
    return;
  }

  //нажали на поле, но не на стрелочку

  if (targ.classList.contains('is2')) {
    targPN.querySelector('.arrow').classList.add('arrow-rotate');
    targPN.querySelector('.placeholder2').classList.toggle('input-field-focus');
    //Для мобильных <=500px
    if (document.documentElement.clientWidth <= 500) {
      inputUp(targPN);
    }
  }

  //нажали вне поля выбора
  if (!targ.classList.contains('inputselect')) {
    for (let item of inputSelects) {
      if (!item.value) {
        item.classList.remove('inputsel');
      }
    }
    for (let arrow of inputContainerArrows) {
      arrow.classList.remove('arrow-rotate');
    }
  }
}

//Показать выбранный select и спрятать placeholder
for (let item of document.querySelectorAll('.input-container__item')) {
  item.addEventListener('click',
    showAllItemSelected);
}

function showAllItemSelected(e) {
  //Показать выбранный select и спрятать placeholder на всех вкладках
  let targ;
  if (e.target.tagName === 'LI') {
    targ = e.target;
  } else {
    targ = e.target.parentNode;
  }
  let targPN = targ.parentNode;

  let inputString = targ.querySelector('.check-multi').innerText;
  let thisChecked = targPN.querySelectorAll('.input-checkbox');

  if (targPN.parentNode.querySelector('.placeholder')) {
    inputString = targPN.parentNode.querySelector('.placeholder').innerText;
  }
  if (targPN.parentNode.querySelector('.placeholder2')) {
    inputString = targPN.parentNode.querySelector('.placeholder2').innerText;
  }

  //выбрано одно - показать в поле ввода
  targPN.parentNode.querySelector('.inputselect').value = targ.querySelector('label').innerText;
  targPN.previousElementSibling.classList.remove('hide-block'); //показать крестик

  targ.querySelector('.input-checkbox').checked = !targ.querySelector('.input-checkbox').checked;

  let numb = 0;

  for (let item of thisChecked) {
    if (item.checked === true) {
      numb++;
    }
  }
  if (numb === 0) {
    targPN.parentNode.querySelector('.inputselect').value = '';
  }
  if (numb === 1) {
    for (let item of thisChecked) {
      if (item.checked === true) {
        targPN.parentNode.querySelector('.inputselect').value = item.nextElementSibling.innerText;
      }
    }
  }
  if (numb > 1) {
    targPN.parentNode.querySelector('.inputselect').value = `${inputString} (выбрано ${numb})`;
  }

  if (!targPN.classList.contains('multi')) {
    targPN.classList.toggle('showlist');
  }

  if (numb > 0) {
    for (let item of inpConts) {
      if (item.ul === targPN) {
        item.filled = true;
      }
    }
  }
}

//нажали на поле выбора
for (let inp of inputSelects) {
  inp.addEventListener('click', hideSelect_2);
}

function hideSelect_2(e) {
  //обнуляем остальные поля выбора
  for (let inp of inputSelects) {
    //inp.classList.remove('inputsel');//на удаление
  }
  for (let uls of inputContainerUls) {
    uls.classList.remove('showlist');
    uls.parentNode.querySelector('.arrow').classList.remove('arrow-rotate');
  }

  e.target.parentNode.querySelector('.input-container__ul').classList.toggle('showlist');
  e.target.classList.add('inputsel');
  e.target.nextElementSibling.nextElementSibling.classList.toggle('arrow-rotate');
}

/******** Расширение рубрикатора **************** */
const ulwides = document.querySelectorAll('.ulwide');
const toHides = document.querySelectorAll('.to-hide');

for (let item of ulwides) {
  item.addEventListener('click', addWide);
}

function addWide(e) {
  let ulRubric = e.target.parentNode.querySelector('.input-container__ul');
  ulRubric.classList.add('ul-wide');
  x1rubric = ulRubric.getBoundingClientRect().left;
  x2rubric = ulRubric.getBoundingClientRect().right;
  for (let item of toHides) {
    item.classList.add('hide-block');
  }

  setTimeout(() => {
    if (document.getElementById('inp_cont6').getBoundingClientRect().left > 800) {
      document.getElementById('inp_cont6').style.display = 'none';
    }
  }, 10);

  setTimeout(() => {
    if (document.getElementById('inp_cont15').getBoundingClientRect().left > 800) {
      document.getElementById('inp_cont15').style.display = 'none';
    }
  }, 10);

  setTimeout(() => {
    e.target.parentNode.querySelector('.for-button').classList.remove('hide-block');
  }, 400);
}

function removeWide(e) {
  document.getElementById('inp_cont6').style.display = 'block';
  for (let item of toHides) {
    item.classList.remove('hide-block');
  }
  if (e.target.classList.contains('input-reset')) {
    if (e.target.parentNode.querySelector('.for-button')) {
      e.target.parentNode.querySelector('.for-button').classList.add('hide-block');
    }
    e.target.nextElementSibling.classList.remove('ul-wide');
  }
  if (e.target.classList.contains('apply') && e.target.parentNode.classList.contains('for-button')) {
    e.target.parentNode.classList.add('hide-block');
    e.target.parentNode.previousElementSibling.classList.remove('ul-wide');
  }
}
/***********Конец расширения рубрикатора *************/


/*************Расширение типа вакансии ***************/
const ulwide2s = document.querySelectorAll('.ulwide2');
const toHide2s = document.querySelectorAll('.to-hide2');

for (let item of ulwide2s) {
  item.addEventListener('click', addWide2);
}

function addWide2(e) {
  e.target.parentNode.querySelector('.input-container__ul').classList.add('ul-wide2');
  let ulVacansion = e.target.parentNode.querySelector('.input-container__ul');
  x1vacansion = ulVacansion.getBoundingClientRect().left;
  x2vacansion = ulVacansion.getBoundingClientRect().right;
  y2vacansion = ulVacansion.getBoundingClientRect().bottom;

  for (let item of toHide2s) {
    item.classList.add('hide-block');
  }

  setTimeout(() => {
    if (document.getElementById('inp_cont15').getBoundingClientRect().left > 800) {
      document.getElementById('inp_cont15').style.display = 'none';
    }
  }, 10);

  setTimeout(() => {
    e.target.parentNode.querySelector('.for-button').classList.remove('hide-block');
  }, 400);
}

function removeWide2(e) {
  document.getElementById('inp_cont15').style.display = 'block';
  for (let item of toHide2s) {
    item.classList.remove('hide-block');
  }

  if (e.target.classList.contains('input-reset')) {
    if (e.target.parentNode.querySelector('.for-button')) {
      e.target.parentNode.querySelector('.for-button').classList.add('hide-block');
    }
    e.target.nextElementSibling.classList.remove('ul-wide2');
  }

  if (e.target.classList.contains('apply') && e.target.parentNode.classList.contains('for-button')) {
    e.target.parentNode.classList.add('hide-block');
    e.target.parentNode.previousElementSibling.classList.remove('ul-wide2');
  }
}
/***********Конец расширения типа вакансии *************/


/*********Работа с кнопками Применить в мультиселектах*******/
const applBtns = chooseWork.querySelectorAll('.apply');
for (let btn of applBtns) {
  btn.addEventListener('click', calculateNumberOfChecked);
}

function calculateNumberOfChecked(e) {
  resetAll.classList.remove('hide-block');
  removeWide(e);
  removeWide2(e);
  doApply(e);
}

function doApply(e) { //По кнопке Применить
  let eselect = e.target.parentNode;
  let eInputSelect = eselect.parentNode.querySelector('.inputselect');
  let inputString = eselect.parentNode.firstElementChild.innerText;
  if (eselect.parentNode.querySelector('.placeholder2')) {
    inputString = eselect.parentNode.querySelector('.placeholder2').innerText;
  }
  let chooseInput;
  const inputs = eselect.parentNode.querySelectorAll('input');

  let counter = 0;
  for (let inp of inputs) {
    if (inp.checked) {
      chooseInput = inp.nextElementSibling.innerText;
      counter++;
    }
  }
  if (counter === 1) {
    eInputSelect.value = chooseInput;
    eselect.classList.remove('showlist'); //свернуть список
    if (inputString === 'Отраслевой рубрикатор') {
      tempValueRubr = eInputSelect.value;
    }
    if (inputString === 'Тип вакансии') {
      tempValueVacans = eInputSelect.value;
    }
  } else {
    if (counter > 1) {
      eInputSelect.value = `${inputString} (выбрано ${counter})`;
      eselect.classList.remove('showlist'); //свернуть список
    } else {
      eInputSelect.value = '';
      eselect.parentNode.querySelector('.placeholder').classList.remove('input-field-focus');
      if (eselect.classList.contains('showlist')) {
        eselect.classList.remove('showlist');
      }
    }
    if (inputString === 'Отраслевой рубрикатор') {
      tempValueRubr = eInputSelect.value;
    }
    if (inputString === 'Тип вакансии') {
      tempValueVacans = eInputSelect.value;
    }
  }
  for (let item of e.target.parentNode.querySelectorAll('.input-checkbox')) {
    item.checked = false;
  }
  for (let item of document.querySelectorAll('.white-font')) {
    item.classList.remove('white-font');
  }
  document.querySelector('.header').classList.remove('body-dark');
  for (let item of document.querySelectorAll('.zindex50')) {
    item.classList.remove('zindex50');
  }
}
/*************Конец блока селекты************** */


/*********Управление доп.ползунком в Range1******** */
const salaryMax = 700000;
const range1 = document.querySelector('.range1');
range1.value = salaryMax;
const salary = document.querySelector('.salary');
const salaryMark = document.querySelector('.salary__mark');
const salaryMarkWrap = document.querySelector('.salary__mark--wrap');
let range1Progress;
var smw = 0;
const correct = 21; //поправка на размер mark-wrap
const salMinMax = document.querySelector('.salary-min-max');
const salMin = document.querySelector('.salary-min');
const salMax = document.querySelector('.salary-max');
const salWidthInitial = salMinMax.offsetWidth;
let salWidth = salary.getBoundingClientRect().right - salary.getBoundingClientRect().left;

range1.style.background = `linear-gradient(to right, #fff 0%, #fff ${0}%, #ec0303 ${0}%, #ec0303 100%)`;

salaryMarkWrap.addEventListener('mousedown', handlerMark);

salaryMarkWrap.addEventListener('mouseout', stopHandler);

function stopHandler(e) {
  salaryMark.classList.remove('salary__mark--active');
}

function showSalary(value, text) { //Показать на шкале з/плату с нужной точностью
  if (value < 2000) {
    text.innerText = Math.round(value / 100) * 100;
  } else {
    if (value < 50000) {
      text.innerText = Math.round(value / 500) * 500;
    } else {
      if (value < 100000) {
        text.innerText = Math.round(value / 1000) * 1000;
      } else {
        text.innerText = Math.round(value / 5000) * 5000;
      }
    }
  }
}

function showAge(value, text) { //Показать на шкале возраст с нужной точностью
  if (value < 20) {
    text.innerText = Math.round(value);
  } else {
    text.innerText = Math.round(value / 5) * 5;
  }
}

function handlerMark(e) {
  salaryMark.classList.add('salary__mark--active');
  salaryMarkWrap.onmouseout = () => {
    salaryMark.classList.remove('salary__mark--active');
  };

  e.preventDefault();
  let shiftX = e.clientX - salaryMarkWrap.getBoundingClientRect().left;

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(e) {

    salaryMark.classList.add('salary__mark--active');

    let newLeft = e.clientX - shiftX - salary.getBoundingClientRect().left;

    if (newLeft < 0) {
      newLeft = 0;
    }

    let rightEdge = salary.offsetWidth * range1.value / salaryMax - salaryMarkWrap.offsetWidth;

    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    salaryMarkWrap.style.left = newLeft - correct + 'px';

    range1Progress = range1.value / salaryMax * 100;
    smw = (parseFloat(salaryMarkWrap.style.left) + correct) / salWidth * 100;
    range1.style.background = `linear-gradient(to right, #fff 0%, #fff ${smw}%, #ec0303 ${smw}%, #ec0303 ${range1Progress}%, #fff ${range1Progress}%, #fff 100%)`;

    let salMinValue = smw * salaryMax / 100;

    showSalary(salMinValue, salMin);

    salMinMax.style.width = (range1.value - smw * salaryMax / 100) / salaryMax * salWidthInitial + 'px';
    salMinMax.style.left = smw * salWidthInitial / 100 + 'px';
  }

  function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    salaryMark.classList.remove('salary__mark--active');
  }

  salaryMark.ondragstart = function () {
    return false;
  };
}

range1.oninput = () => {
  if (range1.value < (parseFloat(salaryMarkWrap.style.left) + correct) / salWidth * salaryMax) {
    range1.value = (parseFloat(salaryMarkWrap.style.left) + correct) / salWidth * salaryMax;
  }

  range1Progress = range1.value / salaryMax * 100;
  if (!salaryMarkWrap.style.left) {
    salaryMarkWrap.style.left = -correct + 'px';
  }
  smw = (parseFloat(salaryMarkWrap.style.left) + correct) / salWidth * 100;

  range1.style.background = `linear-gradient(to right, #fff 0%, #fff ${smw}%, #ec0303 ${smw}%, #ec0303 ${range1Progress}%, #fff ${range1Progress}%, #fff 100%)`;

  //Вывод зарплаты с округлением
  salMinMax.style.width = (range1.value - smw * salaryMax / 100) / salaryMax * salWidthInitial + 'px';
  showSalary(range1.value, salMax);
};

/**********Конец блока Управление доп.ползунком в Range1********/

/*********Работа с кнопкой Очистить вкладка Поиск работы*********/
resetAll.addEventListener('click', resetInputs);

function resetInputs() {
  for (let item of document.querySelectorAll('.inputsel')) {
    item.classList.remove('inputsel');
  }

  for (let item of inpConts) {
    item.filled = false;
    item.open = false;
  }

  document.getElementById('region').classList.remove('inputsel');
  tempValueRubr = '';
  tempValueVacans = '';
  for (let inp of inputFields) {
    if (inp.parentNode.querySelector('label').classList.contains('placeholder')) {
      inp.parentNode.querySelector('label').classList.remove('hide-block');
    }
  }
  for (let inp of inputSelects) {
    inp.parentNode.querySelector('label').classList.remove('hide-block');
  }

  range1.style.background = `linear-gradient(to right, #fff 0%, #fff ${0}%, #ec0303 ${0}%, #ec0303 100%)`;

  resetAll.classList.add('hide-block');

  setTimeout(() => {
    range1.value = salaryMax;
    salMax.innerText = salaryMax;
    salMin.innerText = 0;
    salMinMax.style.width = salWidthInitial + 'px';
    salMinMax.style.left = 0 + 'px';
    salaryMarkWrap.style.left = -correct + 'px';
  }, 10);
}
/*************Конец Работа с кнопкой Очистить ************** */
/***************Конец блока Поиск работы********************/


/**************Блок Поиск сотрудников***************** */
const ageMax = 70;
const ageMin = 14;
const salary1Max = 700000;
const salary1Min = 0;
const experienceMax = 56;
const experienceMin = 0;
const range2s = document.querySelectorAll('.range2');
const rangeAge = document.querySelector('.range-age');
const rangeSalary1 = document.querySelector('.range-salary1');
const rangeExperience = document.querySelector('.range-experience');
const StaffMarkLefts = chooseStaff.querySelectorAll('.mark-left');
const StaffMarkRights = chooseStaff.querySelectorAll('.mark-right');
const StaffResetAll = chooseStaff.querySelector('.staff__reset-all');
const age_ = chooseStaff.querySelector('.age');
const age_min = age_.querySelector('.age__min');
const age_max = age_.querySelector('.age__max');
const ageMinMax = age_.querySelector('.age__min-max');
const salary1_ = chooseStaff.querySelector('.salary1');
const salary1_min = salary1_.querySelector('.salary1__min');
const salary1_max = salary1_.querySelector('.salary1__max');
const salary1MinMax = salary1_.querySelector('.salary1__min-max');
const experience_ = chooseStaff.querySelector('.experience');
const experience_min = experience_.querySelector('.experience__min');
const experience_max = experience_.querySelector('.experience__max');
const experienceMinMax = experience_.querySelector('.experience__min-max');



/**********Работа с селектами*****************/

const staffInputFields = chooseStaff.querySelectorAll('.input-field');
const staffInputSelects = chooseStaff.querySelectorAll('.inputselect');
const staffInputContainerUls = chooseStaff.querySelectorAll('.input-container__ul');
const staffInputContainerItems = chooseStaff.querySelectorAll('.input-container__item');
const staffInputContainerArrows = chooseStaff.querySelectorAll('.input-container__arrow');

chooseStaff.addEventListener('click', hideSelect_1); //Показать/убрать список select

//нажали на поле выбора
for (let inp of staffInputSelects) {
  inp.addEventListener('click', hideSelect_staff2);
}

function hideSelect_staff2(e) {
  //обнуляем остальные поля выбора

  /*for (let inp of staffInputSelects) {
    inp.classList.remove('inputsel');
  }*/ //На удаление
  for (let uls of staffInputContainerUls) {
    uls.classList.remove('showlist');
    uls.parentNode.querySelector('.arrow').classList.remove('arrow-rotate');
  }

  e.target.parentNode.querySelector('.input-container__ul').classList.toggle('showlist');

  //e.target.classList.toggle('inputsel');
  e.target.classList.add('inputsel');

  e.target.nextElementSibling.nextElementSibling.classList.toggle('arrow-rotate');
}

//Показать выбранный select и спрятать placeholder
/*for (let item of staffInputContainerItems) {
  item.addEventListener('click', showStaffItemSelected);
}

function showStaffItemSelected(e) {
  staffResetAll.classList.remove('hide-block');
  showAllItemSelected(e);
}*/


/*********Работа с кнопками Применить в мультиселектах*******/
const staffApplBtns = chooseStaff.querySelectorAll('.apply');
for (let btn of staffApplBtns) {
  btn.addEventListener('click', staffCalculateNumberOfChecked);
}

function staffCalculateNumberOfChecked(e) {
  staffResetAll.classList.remove('hide-block');
  doApply(e);
  removeWide(e);
  removeWide2(e);
}
/*************Конец блока селекты************** */

//Управление двойными ползунками в дивах range2

for (let range2 of range2s) {
  range2.style.background = `linear-gradient(to right, #fff 0%, #fff ${0}%, #ec0303 ${0}%, #ec0303 100%)`;
}

for (let markRight of StaffMarkRights) {
  markRight.addEventListener('mousedown', handlerStaffMark);
  markRight.addEventListener('mouseout', stopHandlerStaffMark);
}

for (let markLeft of StaffMarkLefts) {
  markLeft.addEventListener('mousedown', handlerStaffMark);
  markLeft.addEventListener('mouseout', stopHandlerStaffMark);
}

function stopHandlerStaffMark(e) {
  e.target.classList.remove('mark--active');
}

function handlerStaffMark(e) {
  e.target.classList.add('mark--active');
}

/****************Шкала Возраст************ */
//Left

document.querySelector('.age__mark-left--wrap').addEventListener('mousedown', ageLeftHandler);

function ageLeftHandler(e) {
  let shiftX = e.clientX - e.target.getBoundingClientRect().left;

  document.addEventListener('mousemove', ageLeftMouseMove);
  document.addEventListener('mouseup', ageLeftMouseUp);

  function ageLeftMouseMove(e) {
    e.preventDefault();
    chooseStaff.querySelector('.age__mark-left').classList.add('mark--active');
    let newLeft = e.clientX - shiftX - age_.getBoundingClientRect().left;
    if (newLeft < 0) {
      newLeft = 0;
    }

    let rightEdge = parseFloat(getComputedStyle(age_max).left) + correct * 2 - chooseStaff.querySelector('.age__mark-left--wrap').offsetWidth;

    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }
    chooseStaff.querySelector('.age__mark-left--wrap').style.left = newLeft - correct + 'px';
    let leftShift = newLeft / age_.offsetWidth * 100;
    let rightShift = (parseFloat(getComputedStyle(age_max).left) + 10) / age_.offsetWidth * 100;

    rangeAge.style.background = `linear-gradient(to right, #fff 0%, #fff ${leftShift}%, #ec0303 ${leftShift}%, #ec0303 ${rightShift}%, #fff ${rightShift}%, #fff 100%)`;

    let age_minText = ageMin + (ageMax - ageMin) * newLeft / age_.offsetWidth;
    showAge(age_minText, age_min);
    age_min.style.left = newLeft + 'px';
  }

  function ageLeftMouseUp() {
    document.removeEventListener('mousemove', ageLeftMouseMove);
    document.removeEventListener('mouseup', ageLeftMouseUp);
    chooseStaff.querySelector('.age__mark-left').classList.remove('mark--active');
  }
}

//Right 

document.querySelector('.age__mark-right--wrap').addEventListener('mousedown', ageRightHandler);

function ageRightHandler(e) {
  let shiftX = e.clientX - e.target.getBoundingClientRect().left;

  document.addEventListener('mousemove', ageRightMouseMove);
  document.addEventListener('mouseup', ageRightMouseUp);

  function ageRightMouseMove(e) {
    e.preventDefault();
    chooseStaff.querySelector('.age__mark-right').classList.add('mark--active');

    let newLeft = e.clientX - shiftX - age_.getBoundingClientRect().left;
    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = age_.offsetWidth - chooseStaff.querySelector('.age__mark-right--wrap').offsetWidth + correct * 2;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    let leftEdge = parseFloat(getComputedStyle(age_min).left) + correct * 3 - chooseStaff.querySelector('.age__mark-right--wrap').offsetWidth;
    if (newLeft < leftEdge) {
      newLeft = leftEdge;
    }

    chooseStaff.querySelector('.age__mark-right--wrap').style.left = newLeft - correct + 'px';

    let rightShift = newLeft / age_.offsetWidth * 100;
    let leftShift = (parseFloat(getComputedStyle(age_min).left)) / age_.offsetWidth * 100;

    age_max.style.left = newLeft + 'px';

    rangeAge.style.background = `linear-gradient(to right, #fff 0%, #fff ${leftShift}%, #ec0303 ${leftShift}%, #ec0303 ${rightShift}%, #fff ${rightShift}%, #fff 100%)`;

    let age_maxText = ageMin + 1 + (ageMax - ageMin) * newLeft / age_.offsetWidth;
    showAge(age_maxText, age_max);
  }

  function ageRightMouseUp() {
    document.removeEventListener('mousemove', ageRightMouseMove);
    document.removeEventListener('mouseup', ageRightMouseUp);
    chooseStaff.querySelector('.age__mark-right').classList.remove('mark--active');
  }
}
/****************Конец шкала Возраст************ */


/****************Шкала Зарплата************ */
//Left

document.querySelector('.salary1__mark-left--wrap').addEventListener('mousedown', salary1LeftHandler);

function salary1LeftHandler(e) {
  let shiftX = e.clientX - e.target.getBoundingClientRect().left;

  document.addEventListener('mousemove', salary1LeftMouseMove);
  document.addEventListener('mouseup', salary1LeftMouseUp);

  function salary1LeftMouseMove(e) {
    e.preventDefault();
    chooseStaff.querySelector('.salary1__mark-left').classList.add('mark--active');
    let newLeft = e.clientX - shiftX - salary1_.getBoundingClientRect().left;
    if (newLeft < 0) {
      newLeft = 0;
    }

    let rightEdge = parseFloat(getComputedStyle(salary1_max).left) + correct * 2 - chooseStaff.querySelector('.salary1__mark-left--wrap').offsetWidth;

    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }
    chooseStaff.querySelector('.salary1__mark-left--wrap').style.left = newLeft - correct + 'px';
    let leftShift = newLeft / salary1_.offsetWidth * 100;
    let rightShift = (parseFloat(getComputedStyle(salary1_max).left) + 10) / salary1_.offsetWidth * 100;

    rangeSalary1.style.background = `linear-gradient(to right, #fff 0%, #fff ${leftShift}%, #ec0303 ${leftShift}%, #ec0303 ${rightShift}%, #fff ${rightShift}%, #fff 100%)`;

    let salary1minText = (salary1Min + (salary1Max - salary1Min) * newLeft / salary1_.offsetWidth);
    showSalary(salary1minText, salary1_min);

    salary1_min.style.left = newLeft + 'px';
  }

  function salary1LeftMouseUp() {
    document.removeEventListener('mousemove', salary1LeftMouseMove);
    document.removeEventListener('mouseup', salary1LeftMouseUp);
    chooseStaff.querySelector('.salary1__mark-left').classList.remove('mark--active');
  }
}

//Right 

document.querySelector('.salary1__mark-right--wrap').addEventListener('mousedown', salary1RightHandler);

function salary1RightHandler(e) {
  let shiftX = e.clientX - e.target.getBoundingClientRect().left;

  document.addEventListener('mousemove', salary1RightMouseMove);
  document.addEventListener('mouseup', salary1RightMouseUp);

  function salary1RightMouseMove(e) {
    e.preventDefault();
    chooseStaff.querySelector('.salary1__mark-right').classList.add('mark--active');

    let newLeft = e.clientX - shiftX - salary1_.getBoundingClientRect().left;
    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = salary1_.offsetWidth - chooseStaff.querySelector('.salary1__mark-right--wrap').offsetWidth + correct * 2;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    let leftEdge = parseFloat(getComputedStyle(salary1_min).left) + correct * 3 - chooseStaff.querySelector('.salary1__mark-right--wrap').offsetWidth;
    if (newLeft < leftEdge) {
      newLeft = leftEdge;
    }

    chooseStaff.querySelector('.salary1__mark-right--wrap').style.left = newLeft - correct + 'px';

    let rightShift = newLeft / salary1_.offsetWidth * 100;
    let leftShift = (parseFloat(getComputedStyle(salary1_min).left)) / salary1_.offsetWidth * 100;

    salary1_max.style.left = newLeft - 30 + 'px';

    rangeSalary1.style.background = `linear-gradient(to right, #fff 0%, #fff ${leftShift}%, #ec0303 ${leftShift}%, #ec0303 ${rightShift}%, #fff ${rightShift}%, #fff 100%)`;

    let salary1maxText = (salary1Min + (salary1Max - salary1Min) * (newLeft + 18) / salary1_.offsetWidth);
    showSalary(salary1maxText, salary1_max);
  }

  function salary1RightMouseUp() {
    document.removeEventListener('mousemove', salary1RightMouseMove);
    document.removeEventListener('mouseup', salary1RightMouseUp);
    chooseStaff.querySelector('.salary1__mark-right').classList.remove('mark--active');
  }
}
/****************Конец шкала Зарплата************ */


/****************Шкала Стаж работы************ */
//Left

document.querySelector('.experience__mark-left--wrap').addEventListener('mousedown', experienceLeftHandler);

function experienceLeftHandler(e) {
  let shiftX = e.clientX - e.target.getBoundingClientRect().left;

  document.addEventListener('mousemove', experienceLeftMouseMove);
  document.addEventListener('mouseup', experienceLeftMouseUp);

  function experienceLeftMouseMove(e) {
    e.preventDefault();
    chooseStaff.querySelector('.experience__mark-left').classList.add('mark--active');
    let newLeft = e.clientX - shiftX - experience_.getBoundingClientRect().left;
    if (newLeft < 0) {
      newLeft = 0;
    }

    let rightEdge = parseFloat(getComputedStyle(experience_max).left) + correct * 2 - chooseStaff.querySelector('.experience__mark-left--wrap').offsetWidth;

    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }
    chooseStaff.querySelector('.experience__mark-left--wrap').style.left = newLeft - correct + 'px';
    let leftShift = newLeft / experience_.offsetWidth * 100;
    let rightShift = (parseFloat(getComputedStyle(experience_max).left) + 10) / experience_.offsetWidth * 100;

    rangeExperience.style.background = `linear-gradient(to right, #fff 0%, #fff ${leftShift}%, #ec0303 ${leftShift}%, #ec0303 ${rightShift}%, #fff ${rightShift}%, #fff 100%)`;

    experience_min.innerText = Math.round(experienceMin + (experienceMax - experienceMin) * newLeft / experience_.offsetWidth);
    experience_min.style.left = newLeft + 'px';
  }

  function experienceLeftMouseUp() {
    document.removeEventListener('mousemove', experienceLeftMouseMove);
    document.removeEventListener('mouseup', experienceLeftMouseUp);
    chooseStaff.querySelector('.experience__mark-left').classList.remove('mark--active');
  }
}

//Right 

document.querySelector('.experience__mark-right--wrap').addEventListener('mousedown', experienceRightHandler);

function experienceRightHandler(e) {
  let shiftX = e.clientX - e.target.getBoundingClientRect().left;

  document.addEventListener('mousemove', experienceRightMouseMove);
  document.addEventListener('mouseup', experienceRightMouseUp);

  function experienceRightMouseMove(e) {
    e.preventDefault();
    chooseStaff.querySelector('.experience__mark-right').classList.add('mark--active');

    let newLeft = e.clientX - shiftX - experience_.getBoundingClientRect().left;
    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = experience_.offsetWidth - chooseStaff.querySelector('.experience__mark-right--wrap').offsetWidth + correct * 2;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    let leftEdge = parseFloat(getComputedStyle(experience_min).left) + correct * 3 - chooseStaff.querySelector('.experience__mark-right--wrap').offsetWidth;
    if (newLeft < leftEdge) {
      newLeft = leftEdge;
    }

    chooseStaff.querySelector('.experience__mark-right--wrap').style.left = newLeft - correct + 'px';

    let rightShift = newLeft / experience_.offsetWidth * 100;
    let leftShift = (parseFloat(getComputedStyle(experience_min).left)) / experience_.offsetWidth * 100;

    experience_max.style.left = newLeft + 'px';

    rangeExperience.style.background = `linear-gradient(to right, #fff 0%, #fff ${leftShift}%, #ec0303 ${leftShift}%, #ec0303 ${rightShift}%, #fff ${rightShift}%, #fff 100%)`;

    experience_max.innerText = Math.round(experienceMin + 1 + (experienceMax - experienceMin) * newLeft / experience_.offsetWidth);
  }

  function experienceRightMouseUp() {
    document.removeEventListener('mousemove', experienceRightMouseMove);
    document.removeEventListener('mouseup', experienceRightMouseUp);
    chooseStaff.querySelector('.experience__mark-right').classList.remove('mark--active');
  }
}
/****************Конец шкала Стаж работы************ */

//Конец управление двойными ползунками в дивах range2


/******Работа с кнопкой Очистить вкладка Поиск сотрудников*******/

staffResetAll.addEventListener('click', staffResetInputs);

function staffResetInputs() {

  for (let inp of staffInputFields) {
    if (inp.parentNode.querySelector('label').classList.contains('placeholder')) {
      inp.parentNode.querySelector('label').classList.remove('hide-block');
    }
  }
  for (let inp of staffInputSelects) {
    inp.parentNode.querySelector('label').classList.remove('hide-block');
  }
  document.getElementById('region1').classList.remove('inputsel');
  for (let item of chooseStaff.querySelectorAll('.inputsel')) {
    item.classList.remove('inputsel');
  }
  //Обнуление шкал
  for (let item of range2s) {
    item.style.background = `linear-gradient(to right, #fff 0%, #fff ${0}%, #ec0303 ${0}%, #ec0303 100%)`;
  }

  staffResetAll.classList.add('hide-block');

  setTimeout(() => {
    age_min.innerText = ageMin;
    age_max.innerText = ageMax;
    salary1_min.innerText = salary1Min;
    salary1_max.innerText = salary1Max;
    experience_min.innerText = experienceMin;
    experience_max.innerText = experienceMax;
    age_min.style.left = 0 + 'px';
    salary1_min.style.left = 0 + 'px';
    experience_min.style.left = 0 + 'px';

    function resetMax(arg, wrap) {
      const rect = wrap.getBoundingClientRect();
      arg.style.left = rect.right - rect.left - correct + 'px';
    }

    resetMax(age_max, ageMinMax);
    resetMax(salary1_max, salary1MinMax);
    resetMax(experience_max, experienceMinMax);

    function resetLeft(arg) {
      arg.style.left = -correct + 'px';
    }

    function resetRigh(arg, rect) {
      const rectBound = rect.getBoundingClientRect();
      arg.style.left = rectBound.right - rectBound.left - 40 + 'px';
    }

    resetLeft(document.querySelector('.age__mark-left--wrap'));
    resetLeft(document.querySelector('.salary1__mark-left--wrap'));
    resetLeft(document.querySelector('.experience__mark-left--wrap'));

    resetRigh(document.querySelector('.age__mark-right--wrap'), age_);
    resetRigh(document.querySelector('.salary1__mark-right--wrap'), salary1_);
    resetRigh(document.querySelector('.experience__mark-right--wrap'), experience_);

  }, 10);
}
/************Конец блока Работа с кнопкой Очистить**************/
/**************Конец блока Поиск сотрудников***************** */


/******************Блок Любая категория***************** */

/**********Работа с селектами*****************/

const anyInputFields = chooseAny.querySelectorAll('.input-field');
const anyInputSelects = chooseAny.querySelectorAll('.inputselect');
const anyInputContainerUls = chooseAny.querySelectorAll('.input-container__ul');
const anyInputContainerItems = chooseAny.querySelectorAll('.input-container__item');
const anyInputContainerArrows = chooseAny.querySelectorAll('.input-container__arrow');

chooseAny.addEventListener('click', hideSelect_1); //Показать/убрать список select

//нажали на поле выбора
for (let inp of anyInputSelects) {
  inp.addEventListener('click', hideSelect_any2);
}

function hideSelect_any2(e) {
  //обнуляем остальные поля выбора

  for (let inp of anyInputSelects) {
    inp.classList.remove('inputsel');
  }
  for (let uls of anyInputContainerUls) {
    uls.classList.remove('showlist');
    uls.parentNode.querySelector('.arrow').classList.remove('arrow-rotate');
  }

  e.target.parentNode.querySelector('.input-container__ul').classList.toggle('showlist');

  //e.target.classList.toggle('inputsel');
  e.target.classList.add('inputsel');

  e.target.nextElementSibling.nextElementSibling.classList.toggle('arrow-rotate');
}

//Показать выбранный select и спрятать placeholder
/*for (let item of anyInputContainerItems) {
  item.addEventListener('click', showAnyItemSelected);
}

function showAnyItemSelected(e) {
  anyResetAll.classList.remove('hide-block');
  showAllItemSelected(e);
}*/


/*********Работа с кнопками Применить в мультиселектах*******/
const anyApplBtns = chooseAny.querySelectorAll('.apply');
for (let btn of anyApplBtns) {
  btn.addEventListener('click', anyCalculateNumberOfChecked);
}

function anyCalculateNumberOfChecked(e) {
  anyResetAll.classList.remove('hide-block');
  removeWide(e);
  removeWide2(e);
  doApply(e);
}
/*************Конец блока селекты************** */

/****************Шкала Зарплата2************ */

const salary2Max = 700000;
const salary2Min = 0;
const range3 = document.querySelector('.range3');
const anyMarkLeft = chooseAny.querySelector('.mark-left');
const anyMarkRight = chooseAny.querySelector('.mark-right');
const salary2_ = chooseAny.querySelector('.salary2');
const salary2_min = salary2_.querySelector('.salary2__min');
const salary2_max = salary2_.querySelector('.salary2__max');
const salary2MinMax = salary2_.querySelector('.salary2__min-max');

//Left

document.querySelector('.salary2__mark-left--wrap').addEventListener('mousedown', salary2LeftHandler);

function salary2LeftHandler(e) {
  let shiftX = e.clientX - e.target.getBoundingClientRect().left;

  document.addEventListener('mousemove', salary2LeftMouseMove);
  document.addEventListener('mouseup', salary2LeftMouseUp);

  function salary2LeftMouseMove(e) {
    e.preventDefault();
    chooseAny.querySelector('.salary2__mark-left').classList.add('mark--active');
    let newLeft = e.clientX - shiftX - salary2_.getBoundingClientRect().left;
    if (newLeft < 0) {
      newLeft = 0;
    }

    let rightEdge = parseFloat(getComputedStyle(salary2_max).left) + correct * 2 - chooseAny.querySelector('.salary2__mark-left--wrap').offsetWidth;

    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }
    chooseAny.querySelector('.salary2__mark-left--wrap').style.left = newLeft - correct + 'px';
    let leftShift = newLeft / salary2_.offsetWidth * 100;
    let rightShift = (parseFloat(getComputedStyle(salary2_max).left) + 32) / salary2_.offsetWidth * 100;

    range3.style.background = `linear-gradient(to right, #fff 0%, #fff ${leftShift}%, #ec0303 ${leftShift}%, #ec0303 ${rightShift}%, #fff ${rightShift}%, #fff 100%)`;

    let salary2minText = (salary2Min + (salary2Max - salary2Min) * newLeft / salary2_.offsetWidth);
    showSalary(salary2minText, salary2_min);

    salary2_min.style.left = newLeft + 'px';
  }

  function salary2LeftMouseUp() {
    document.removeEventListener('mousemove', salary2LeftMouseMove);
    document.removeEventListener('mouseup', salary2LeftMouseUp);
    chooseAny.querySelector('.salary2__mark-left').classList.remove('mark--active');
  }
}

//Right 

document.querySelector('.salary2__mark-right--wrap').addEventListener('mousedown', salary2RightHandler);

function salary2RightHandler(e) {
  let shiftX = e.clientX - e.target.getBoundingClientRect().left;

  document.addEventListener('mousemove', salary2RightMouseMove);
  document.addEventListener('mouseup', salary2RightMouseUp);

  function salary2RightMouseMove(e) {
    e.preventDefault();
    chooseAny.querySelector('.salary2__mark-right').classList.add('mark--active');

    let newLeft = e.clientX - shiftX - salary2_.getBoundingClientRect().left;
    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = salary2_.offsetWidth - chooseAny.querySelector('.salary2__mark-right--wrap').offsetWidth + correct * 2;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    let leftEdge = parseFloat(getComputedStyle(salary2_min).left) + correct * 3 - chooseAny.querySelector('.salary2__mark-right--wrap').offsetWidth;
    if (newLeft < leftEdge) {
      newLeft = leftEdge;
    }

    chooseAny.querySelector('.salary2__mark-right--wrap').style.left = newLeft - correct + 'px';

    let rightShift = newLeft / salary2_.offsetWidth * 100;
    let leftShift = (parseFloat(getComputedStyle(salary2_min).left)) / salary2_.offsetWidth * 100;

    salary2_max.style.left = newLeft - 30 + 'px';

    range3.style.background = `linear-gradient(to right, #fff 0%, #fff ${leftShift}%, #ec0303 ${leftShift}%, #ec0303 ${rightShift}%, #fff ${rightShift}%, #fff 100%)`;

    let salary2maxText = (salary2Min + (salary2Max - salary2Min) * (newLeft + 18) / salary2_.offsetWidth);
    showSalary(salary2maxText, salary2_max);
  }

  function salary2RightMouseUp() {
    document.removeEventListener('mousemove', salary2RightMouseMove);
    document.removeEventListener('mouseup', salary2RightMouseUp);
    chooseAny.querySelector('.salary2__mark-right').classList.remove('mark--active');
  }
}
/****************Конец шкала Зарплата2************ */

/*********Работа с кнопкой Очистить вкладка Любая категория******/
anyResetAll.addEventListener('click', anyResetInputs);

function anyResetInputs() {

  for (let inp of anyInputFields) {
    if (inp.parentNode.querySelector('label').classList.contains('placeholder')) {
      inp.parentNode.querySelector('label').classList.remove('hide-block');
    }
  }
  for (let inp of anyInputSelects) {
    inp.parentNode.querySelector('label').classList.remove('hide-block');
  }
  document.getElementById('region2').classList.remove('inputsel');
  for (let item of chooseAny.querySelectorAll('.inputsel')) {
    item.classList.remove('inputsel');
  }
  //Обнуление шкалы Зарплата2

  range3.style.background = `linear-gradient(to right, #fff 0%, #fff ${0}%, #ec0303 ${0}%, #ec0303 100%)`;

  anyResetAll.classList.add('hide-block');

  setTimeout(() => {
    salary2_min.innerText = salary2Min;
    salary2_max.innerText = salary2Max;
    salary2_min.style.left = 0 + 'px';

    function anyResetMax(arg, wrap) {
      const rect = wrap.getBoundingClientRect();
      arg.style.left = rect.right - rect.left - 50 + 'px';
    }

    anyResetMax(salary2_max, salary2MinMax);

    function anyResetLeft(arg) {
      arg.style.left = -correct + 'px';
    }

    function anyResetRigh(arg, rect) {
      const rectBound = rect.getBoundingClientRect();
      arg.style.left = rectBound.right - rectBound.left - 40 + 'px';
    }

    anyResetLeft(document.querySelector('.salary2__mark-left--wrap'));

    anyResetRigh(document.querySelector('.salary2__mark-right--wrap'), salary2_);

  }, 10);
}

/*************Конец Работа с кнопкой Очистить ************** */
/*************Конец блока Любая категория************** */


/**************Выбор региона************************** */

const regions = ['Вся Россия', 'Алтайский край', 'Амурская область', 'Архангельская область', 'Астраханская область', 'Белгородская область', 'Брянская область', 'Владимирская область', 'Волгоградская область', 'Вологодская область', 'Воронежская область', 'Москва', 'Еврейская автономная область', 'Забайкальский край', 'Ивановская область', 'Иные территории, включая город и космодром Байконур', 'Иркутская область', 'Кабардино-Балкарская Республика', 'Калининградская область', 'Калужская область', 'Камчатский край', 'Карачаево-Черкесская Республика', 'Кемеровская область', 'Кировская область', 'Костромская область', 'Краснодарский край', 'Красноярский край', 'Курганская область', 'Курская область', 'Ленинградская область', 'Липецкая область', 'Магаданская область', 'Московская область', 'Мурманская область', 'Ненецкий автономный округ', 'Нижегородская область', 'Новгородская область', 'Новосибирская область', 'Омская область', 'Оренбургская область', 'Орловская область', 'Пензенская область', 'Пермский край', 'Приморский край', 'Псковская область', 'Республика Адыгея (Адыгея)', 'Республика Алтай', 'Республика Башкортостан', 'Республика Бурятия', 'Республика Дагестан', 'Республика Ингушетия', 'Республика Калмыкия', 'Республика Карелия', 'Республика Коми', 'Республика Крым', 'Республика Марий Эл', 'Республика Мордовия', 'Республика Саха (Якутия)', 'Республика Северная Осетия - Алания', 'Республика Татарстан (Татарстан)', 'Республика Тыва', 'Республика Хакасия', 'Ростовская область', 'Рязанская область', 'Самарская область', 'Санкт-Петербург', 'Саратовская область', 'Сахалинская область', 'Свердловская область', 'Севастополь', 'Смоленская область', 'Ставропольский край', 'Тамбовская область', 'Тверская область', 'Томская область', 'Тульская область', 'Тюменская область', 'Удмуртская Республика', 'Ульяновская область', 'Хабаровский край', 'Ханты-Мансийский автономный округ - Югра', 'Челябинская область', 'Чеченская Республика', 'Чувашская Республика - Чувашия', 'Чукотский автономный округ', 'Ямало-Ненецкий автономный округ', 'Ярославская область'];

const leningradRegion = ['Ленинградская область', 'Агалатово', 'Аннино', 'Бегуницы', 'Бокситогорск', 'Большая Вруда', 'Большая Ижора', 'Большие Колпаны', 'Бугры', 'Будогощь', 'Важины', 'Виллози', 'Винницы', 'Вознесенье', 'Войскорово', 'Волосово', 'Волхов', 'Всеволожск', 'Выборг', 'Вырица', 'Высоцк', 'Гатчина', 'Глажево', 'Горбунки', 'Гостилицы', 'Дружная Горка', 'Дубровка', 'Елизаветино', 'Ефимовский', 'Заклинье', 'Зеленогорск', 'Ивангород', 'Каменка', 'Каменногорск', 'Кингисепп', 'Кипень', 'Кириши', 'Кировск', 'Кобралово', 'Колпино', 'Колтуши', 'Колчаново', 'Коммунар', 'Котельский', 'Красное Село', 'Красный Бор', 'Кронштадт', 'Кудрово', 'Кузнечное', 'Кузьмоловский', 'Лаголово', 'Лебяжье', 'Лесколово', 'Лесогорский', 'Лодейное Поле', 'Ломоносов', 'Луга', 'Любань', 'Малое Верево', 'Малое Карлино', 'Мга', 'Мельниково', 'Металлострой', 'Мурино', 'Назия', 'Низино', 'Никольский', 'Никольское', 'Новая Ладога', 'Новое Девяткино', 'Новоселье', 'Новый Свет', 'Новый Учхоз', 'Нурма', 'Озерки (Всеволожский район)', 'Оредеж', 'Оржицы', 'Отрадное', 'Павловск', 'Парголово', 'Паша', 'пгт имени Свердлова', 'Первомайское', 'Петергоф', 'Пикалево', 'Подпорожье', 'посёлок имени Морозова', 'Приладожский', 'Приморск', 'Приозерск', 'Пудомяги', 'Пушкин', 'Разметелево', 'Рахья', 'Репино', 'Романовка', 'Ромашкинское сельское поселение', 'Рощино', 'Русско-Высоцкое', 'Рябово', 'Светогорск', 'Селезнёво', 'Сельцо (посёлок, Волосовский район)', 'Семрино', 'Сертолово', 'Сестрорецк', 'Сиверский', 'Синявино', 'Славянка', 'Сланцы', 'Советский', 'Сосново', 'Сосновый Бор', 'Старая', 'Старая Ладога', 'Стрельна', 'Сусанино', 'Суходолье', 'Сясьстрой', 'Тайцы', 'Тельмана', 'Тихвин', 'Токсово', 'Толмачёво', 'Тосно', 'Ульяновка', 'Усть-Луга', 'Форносово', 'Шлиссельбург', 'Шушары', 'Ям-Ижора', 'Янино-'];

const nijegorodRegion = ['Нижегородская область', 'Ардатов', 'Арзамас', 'Арья', 'Афанасьево', 'Афонино', 'Балахна', 'Богородск', 'Большое Болдино', 'Большое Козино', 'Большое Мурашкино', 'Бор', 'Буревестник', 'Бутурлино', 'Вад', 'Варнавино', 'Вахтан', 'Вача', 'Ветлуга', 'Виля', 'Вознесенское', 'Володарск', 'Воротынец', 'Ворсма', 'Воскресенское', 'Выездное', 'Выкса', 'Гагино', 'Гидроторф', 'Горбатов', 'Горбатовка', 'Городец', 'Гремячево', 'Дальнее Константиново', 'Дзержинск', 'Дивеево', 'Досчатое', 'Дружба', 'Ждановский', 'Заволжье', 'Ильиногорск', 'Княгинино', 'Ковернино', 'Красные Баки', 'Кстово', 'Кулебаки', 'Линда', 'Лукино', 'Лукоянов', 'Лысково', 'Мулино', 'Мухтолово', 'Навашино', 'Нижний Новгород', 'Новосмолинский', 'Павлово', 'Первомайск', 'Перевоз', 'Пижма', 'Пильна', 'посёлок Память Парижской Коммуны', 'поселок Степана Разина', 'Починки', 'Решетиха', 'Саваслейка', 'Саров', 'Сатис', 'Семенов', 'Сергач', 'Сеченово', 'Сокольское', 'Сосновское', 'Спасское', 'Суроватиха', 'Сухобезводное', 'Сява', 'Тонкино', 'Тоншаево', 'Тумботино', 'Урень', 'Федяково', 'Центральный', 'Чернуха', 'Чкаловск', 'Шаранга', 'Шатки', 'Шахунья', 'Шиморское', 'Югане'];


//Формирование списка регионов на странице
const regionBodyUl = document.querySelector('.region__body--ul');
//в качестве шаблона для списка берем первый элемент
const templ1 = regionBodyUl.firstElementChild;
for (let i = 2; i < regions.length; i++) {
  let newItem = templ1.cloneNode(true);
  let atribDigit = String(i).padStart(3, '0');
  newItem.querySelector('.input-region').setAttribute('id', `region${atribDigit}`);
  newItem.querySelector('.region-multi').setAttribute('for', `region${atribDigit}`);
  newItem.querySelector('.region-multi').innerText = regions[i];
  regionBodyUl.append(newItem);
}

//Формирование списка населенных пунктов

const punktRegionUls = document.querySelectorAll('.punkt__region--ul');
//в качестве шаблона для списка берем первый элемент

//Ленинградская область

const templ2 = punktRegionUls[0].firstElementChild;
for (let i = 2; i < leningradRegion.length; i++) {
  let newItem = templ2.cloneNode(true);
  let atribDigit = String(i).padStart(3, '0');
  newItem.querySelector('.input-region').setAttribute('id', `punkt1_${atribDigit}`);
  newItem.querySelector('.region-multi').setAttribute('for', `punkt1_${atribDigit}`);
  newItem.querySelector('.region-multi').innerText = leningradRegion[i];
  punktRegionUls[0].append(newItem);
}

//Нижегородская область

const templ3 = punktRegionUls[1].firstElementChild;
for (let i = 2; i < nijegorodRegion.length; i++) {
  let newItem = templ3.cloneNode(true);
  let atribDigit = String(i).padStart(3, '0');
  newItem.querySelector('.input-region').setAttribute('id', `punkt2_${atribDigit}`);
  newItem.querySelector('.region-multi').setAttribute('for', `punkt2_${atribDigit}`);
  newItem.querySelector('.region-multi').innerText = nijegorodRegion[i];
  punktRegionUls[1].append(newItem);
}


//const chooseRegion = document.querySelector('.choose__region'); введено выше 
const chooseRegionClose = document.querySelector('.choose__region--close');
const regionWork = document.querySelector('#region');
const regionStaff = document.querySelector('#region1');
const regionAny = document.querySelector('#region2');
const regionApply = document.querySelector('.region__apply');
const punktGroup = document.querySelector('.punkt__group');
const punktRegion = document.querySelector('.punkt__region');
const regionAll = document.querySelector('.region__all');
const punktAll = document.querySelector('.punkt__all');
const labelPunktAll = document.querySelector('.punkt-all');
const inputRegionAll = document.querySelector('.input-region-all');
const inputPunktAll = document.querySelector('.input-punkt-all');
const regionItems = document.querySelectorAll('.input-region-item');
const punktGroupItems = document.querySelectorAll('.punkt__group--item');
const inputPunktGroups = document.querySelectorAll('.input-punkt-group');
const inputPunktRegions = document.querySelectorAll('.input-punkt-region');
const punktRegionItems = document.querySelectorAll('.punkt__region--item');
const regionBody = document.querySelector('.region__body');
const regionBodyItems = document.querySelectorAll('.region__body--item');
const regionBodyUlItems = regionBodyUl.querySelectorAll('.region__body--item');
const itemLefts = document.querySelectorAll('.item-left');
const itemRights = document.querySelectorAll('.item-right');
const punktItems = document.querySelectorAll('.punkt-item');


//Показать список регионов
let outRegion;

regionWork.addEventListener('click', handl0);
regionStaff.addEventListener('click', handl1);
regionAny.addEventListener('click', handl2);

function handl0() {
  outRegion = document.getElementById('region');
  chooseRegion.classList.remove('up-block');
}

function handl1() {
  outRegion = document.getElementById('region1');
  chooseRegion.classList.remove('up-block');
}

function handl2() {
  outRegion = document.getElementById('region2');
  chooseRegion.classList.remove('up-block');
}

let closeRegions = function () {
  //деактивировать все чекбоксы и спрятать попап
  chooseRegion.classList.add('up-block');
  punktRegion.classList.add('hide-block');
  punktGroup.classList.add('hide-block');
  labelPunktAll.classList.remove('color-black');
  inputPunktAll.checked = false;
  for (let item of inputPunktGroups) {
    item.checked = false;
  }
  chooseRegion.checked = false;
  punktRegion.checked = false;
  punktGroup.checked = false;
  inputRegionAll.checked = false;
  for (let item of regionItems) {
    item.checked = false;
  }
  for (let item of document.querySelectorAll('.white-font')) {
    item.classList.remove('white-font');
  }
  document.querySelector('.header').classList.remove('body-dark');
  for (let item of document.querySelectorAll('.zindex50')) {
    item.classList.remove('zindex50');
  }
};

chooseRegionClose.onclick = () => closeRegions();

//Все регионы
regionAll.onclick = (e) => {
  punktRegion.classList.remove('hide-block');
  punktGroup.classList.remove('hide-block');
  labelPunktAll.classList.add('color-black');
  for (let item of punktGroupItems) {
    item.classList.remove('hide-block');
  }
  for (let item of punktRegionItems) {
    item.classList.remove('hide-block');
  }

  if (inputRegionAll.checked === true) {
    inputRegionAll.checked = false;
    for (let item of regionItems) {
      item.checked = false;
    }
    punktRegion.classList.add('hide-block');
    punktGroup.classList.add('hide-block');

    for (let item of punktGroupItems) {
      item.classList.add('hide-block');
    }
    for (let item of punktRegionItems) {
      item.classList.add('hide-block');
    }

  } else {
    inputRegionAll.checked = true;
    for (let item of regionBodyItems) {
      if (item.querySelector('.region-left')) {
        item.querySelector('.region-left').checked = true;
      }
    }
  }
};

//Если нажали на квадратик

for (let item of itemLefts) {
  item.addEventListener('click', toggleCheckRegion);
}
let choosedRegion = '';

function toggleCheckRegion(e) {
  labelPunktAll.classList.add('color-black');
  toggleCheck(e);
}

function toggleCheck(e) {
  if (e.target.firstElementChild) {
    let targ = e.target.firstElementChild;
    targ.checked = !targ.checked;
  }

  //Выбрана область
  choosedRegion = e.currentTarget.querySelector('.region-multi').innerText;
  if (e.currentTarget.querySelector('.region-left').checked) {
    for (let item of punktGroupItems) {
      if (item.getAttribute('data-region') === choosedRegion) {
        punktGroup.classList.remove('hide-block');
        punktRegion.classList.remove('hide-block');
        item.classList.remove('hide-block');
      }
    }
    for (let item of punktRegionItems) {
      if (item.getAttribute('data-region') === choosedRegion) {
        item.classList.remove('hide-block');
      }
    }
  } else {
    for (let item of punktGroupItems) {
      if (item.getAttribute('data-region') === choosedRegion) {
        item.classList.add('hide-block');
      }
    }
    for (let item of punktRegionItems) {
      if (item.getAttribute('data-region') === choosedRegion) {
        item.classList.add('hide-block');
      }
    }
  }
}


//Очистить регионы
const regionResets = document.querySelectorAll('.region__title--reset');
regionResets[0].onclick = () => {
  inputRegionAll.checked = false;
  for (let item of regionItems) {
    item.checked = false;
  }
  punktGroup.classList.add('hide-block');
  punktRegion.classList.add('hide-block');
  document.getElementById('punkt-all').checked = false;
  for (let item of inputPunktGroups) {
    item.checked = false;
  }
  for (let item of inputPunktRegions) {
    item.checked = false;
  }
};
regionResets[1].onclick = () => {
  for (let item of inputPunktGroups) {
    item.checked = false;
  }
  for (let item of inputPunktRegions) {
    item.checked = false;
  }
  for (let item of regionItems) {
    if (item.parentNode.parentNode.classList.contains('punkt__region--ul')) {
      item.checked = false;
    }
  }
  document.getElementById('punkt-all').checked = false;
};

//Кнопка Все населенные пункты
punktAll.onclick = (e) => {
  if (labelPunktAll.classList.contains('color-black')) {

    if (inputPunktAll.checked === true) {
      inputPunktAll.checked = false;
      for (let item of itemRights) {
        item.firstElementChild.checked = false;
      }
      for (let item of inputPunktGroups) {
        item.checked = false;
      }
      for (let item of inputPunktRegions) {
        item.checked = false;
      }
    } else {
      inputPunktAll.checked = true;
      for (let item of itemRights) {
        item.firstElementChild.checked = true;
      }
      for (let item of inputPunktGroups) {
        item.checked = true;
      }
      for (let item of inputPunktRegions) {
        item.checked = true;
      }
    }
  }
};

//Обработка нажатий на города и области
let app = {};
app.state = false;

for (let item of punktGroupItems) {
  item.addEventListener('click', handlerReg);
}
for (let item of punktRegionItems) {
  item.addEventListener('click', handlerReg1);
}

for (let item of regionBodyItems) {
  if (!item.classList.contains('item-left')) {
    item.addEventListener('click', handlerReg2);
  }
}

function handlerReg(e) {
  let targ = e.currentTarget.querySelector('input');
  targ.checked = !targ.checked;
}

function handlerReg1(e) {
  if (app.state) {
    return;
  }

  let targ = e.currentTarget.children[1];
  targ.checked = !targ.checked;

  for (let item of e.currentTarget.querySelectorAll('.punkt-item')) {
    item.checked = true;
    if (!targ.checked) {
      item.checked = false;
    }
  }
}

function handlerReg2(e) {
  let targ = e.currentTarget.firstElementChild;
  targ.checked = !targ.checked;
  app.state = true;
  setTimeout(() => {
    app.state = false;
  }, 1000);
}


//Нажатие на кнопку Выбрать
let outRegionText = '';
let outPunktText = '';
let outText = '';
regionApply.addEventListener('click', handlerRegApply);

function handlerRegApply() {
  for (let item of document.querySelectorAll('.white-font')) {
    item.classList.remove('white-font');
  }
  document.querySelector('.header').classList.remove('body-dark');
  for (let item of document.querySelectorAll('.zindex50')) {
    item.classList.remove('zindex50');
  }

  chooseRegion.classList.add('up-block');

  //посчитать число выбранных регионов и пунктов
  let countRegion = 0;
  let countPunkt = 0;
  for (let item of itemLefts) {
    if (item.querySelector('.input-region').checked) {
      outRegionText = item.querySelector('label').innerText + ' ';
      countRegion++;
    }
  }
  if (!countRegion) {
    closeRegions();
    return;
  }

  for (let item of punktItems) {
    if (item.checked) {
      outPunktText = item.nextElementSibling.innerText;
      countPunkt++;
    }
  }

  if (countRegion > 1) {
    outRegionText = countRegion + ' Региона, ';
  }

  if (countPunkt == 0) {
    outPunktText = 0 + ' Насел. пункта';
  }
  if (countPunkt > 1) {
    outPunktText = countPunkt + ' Насел. пункта';
  }
  outText = outRegionText + outPunktText;
  outRegion.value = outText;

  if (outRegion.value) {
    outRegion.classList.add('inputsel'); //сохранили подчеркивание
  }

  outRegion.nextElementSibling.classList.add('input-field-focus');
  setTimeout(() => {
    closeRegions();
  }, 200);
}

/**************Конец Выбор региона******************** */

/***Поля ввода, где текст не помещается**
 перевод в дымку и всплывающее окно***/

const charWidth = 10; //ширина 1 символа

const rubric = document.getElementById('rubricator');
const rubric1 = document.getElementById('rubricator1');
const rubric2 = document.getElementById('rubricator2');
let popup1 = document.createElement('div');

const vacans = document.getElementById('vacansion');
const vacans1 = document.getElementById('vacansion1');
let popup2 = document.createElement('div');

function showTempValueRubr(e) {
  if (tempValueRubr) {
    popup1.innerText = tempValueRubr;
    popup1.classList.add('input-popup');
    e.target.before(popup1);
    popup1.style.top = e.target.getBoundingClientRect().top - 40 + 'px';
    popup1.style.left = e.target.getBoundingClientRect().left + 'px';
  }
}

function showTempValueVacans(e) {
  if (tempValueVacans) {
    popup2.innerText = tempValueVacans;
    popup2.classList.add('input-popup');
    e.target.before(popup2);
    popup2.style.top = e.target.getBoundingClientRect().top - 40 + 'px';
    popup2.style.left = e.target.getBoundingClientRect().left + 'px';
  }
}

rubric.onmouseover = (e) => {
  showTempValueRubr(e);
};
rubric.addEventListener('mouseout', function () {
  popup1.remove();
});
rubric1.onmouseover = (e) => {
  showTempValueRubr(e);
};
rubric1.addEventListener('mouseout', function () {
  popup1.remove();
});
rubric2.onmouseover = (e) => {
  showTempValueRubr(e);
};
rubric2.addEventListener('mouseout', function () {
  popup1.remove();
});

vacans.onmouseover = (e) => {
  showTempValueVacans(e);
};
vacans.addEventListener('mouseout', function () {
  popup2.remove();
});
vacans1.onmouseover = (e) => {
  showTempValueVacans(e);
};
vacans1.addEventListener('mouseout', function () {
  popup2.remove();
});

function handleText() {
  const inputContainers = document.querySelectorAll('.input-container');
  for (let item of inputContainers) {
    const label_ = item.querySelector('label');
    const input_ = item.querySelector('input');

    //длина строки в символах
    const labelText = label_.innerText;

    //максимальная длина строки
    const maxLength = Math.round(input_.offsetWidth / charWidth) * 0.83;
    let popup = document.createElement('div');
    popup.innerText = labelText;
    popup.classList.add('input-popup');

    if (labelText.length > maxLength) {
      let coef = maxLength / labelText.length * 100;
      label_.style.cssText = `background: linear-gradient(to right,
        #000 ${0.6*coef}%, #777 ${0.7*coef}%, #ddd ${0.75*coef}%,
         transparent 90%, transparent); -webkit-background-clip: text; -webkit-text-fill-color: transparent;`;

      input_.addEventListener('mouseover', () => {
        input_.before(popup);
        popup.style.top = input_.getBoundingClientRect().top - 40 + 'px';
        popup.style.left = input_.getBoundingClientRect().left + 'px';
      });

      input_.onmouseout = () => {
        popup.remove();
      };
    } else {
      label_.style.cssText = 'color: #333;';
      input_.addEventListener('mouseover', () => {
        if (popup) {
          popup.style.display = 'none';
        }
      });
    }

    input_.addEventListener('click', function () {
      label_.style.cssText = 'color: #333;';
      if (popup) {
        popup.style.display = 'none';
      }
    });
  }
}

handleText();

//window.addEventListener('resize', handleText);

/**********Затемнение страницы при активации селектов ******/
window.addEventListener('click', isDark);

function isDark(e) {

  if (e.target.classList.contains('input-field')) {
    return; //если нажат input без селекта
  }

  function isShowList(e) {
    if (!chooseRegion.classList.contains('up-block')) {
      return false; //если активирован попап регионов
    }
    for (let item of inputContainerUls) {
      if (item.classList.contains('showlist')) {
        return false; //если развернут любой селект
      }
    }
    return true;
  }

  if (e.target.parentNode.classList.contains('input-container')) {
    e.target.parentNode.classList.add('zindex50');
    e.target.parentNode.querySelector('.placeholder') && e.target.parentNode.querySelector('.placeholder').classList.add('white-font');
  }

  if (isShowList(e)) {
    document.querySelector('.header').classList.remove('body-dark');
    document.querySelector('.salary__mark').classList.add('zindex5');
    for (let item of document.querySelectorAll('.zindex50')) {
      item.classList.remove('zindex50');
    }
    for (let item of document.querySelectorAll('.white-font')) {
      item.classList.remove('white-font');
    }
    /*для мобильных*/
    if (document.documentElement.clientWidth <= 500) {
      for (let item of document.querySelectorAll('.inputsel')) {
        if (!item.value) {
          item.classList.remove('inputsel');
        }
      }
      for (let item of document.querySelectorAll('.arrow-rotate')) {
        item.classList.remove('arrow-rotate');
      }
    }
    /* */
  } else {
    handlZindex();
  }
}

for (let item of inputFieldsAll) { //для регионов и инпутов без селектов 
  item.addEventListener('click', (e) => {
    handlZindex();
    e.target.parentNode.classList.add('zindex50');
    e.target.parentNode.querySelector('.placeholder').classList.add('white-font');
  });
}

function handlZindex() {
  for (let item of document.querySelectorAll('.zindex2')) {
    item.classList.remove('zindex2');
  }
  for (let item of document.querySelectorAll('.zindex5')) {
    item.classList.remove('zindex5');
  }
  for (let item of document.querySelectorAll('.zindex10')) {
    item.classList.remove('zindex10');
  }
  for (let item of document.querySelectorAll('.zindex15')) {
    item.classList.remove('zindex15');
  }
  document.querySelector('.header').classList.add('body-dark');
}
/**********Конец затемнения страницы ******/


/**************Смена цвета в рисунке девушки *************/
/************Расширение/сужение полей *************/
const info = document.querySelector('.info');
const infoSidebar = document.querySelector('.info__sidebar');
const infoWindow = document.querySelector('.info__window');
const colVacans = document.querySelector('.col__vacans');
const tabsWrap = document.querySelector('.tabs__wrap');
const tabsBodys = document.querySelectorAll('.tabs__body');
const girlWrapper = document.querySelector('.girl__wrapper');
let green = false;
const ratings = document.querySelectorAll('.ratings');

let arrYellow = [];
arrYellow[0] = 'yellow';
for (let i = 1; i < 18; i++) {
  arrYellow.push(`yellow${i}`);
}

for (let btn of showAlls) {
  btn.addEventListener('click', changeColorGreen);
}

function changeColorGreen() {
  if (girlWrapper.classList.contains('fixed1')) {
    girlWrapper.classList.add('fixed3');
  } else {
    girlWrapper.classList.add('fixed2');
  }
  for (let i = 0; i < arrYellow.length; i++) {
    if (document.querySelector(`.${arrYellow[i]}`)) {
      document.querySelector(`.${arrYellow[i]}`).classList.add(`c${i}`);
    }
    if (document.querySelector(`.${arrYellow[i]}`)) {
      document.querySelector(`.${arrYellow[i]}`).classList.remove(`${arrYellow[i]}`);
    }
  }
  infoSidebar.classList.add('info__sidebar-narrow');
  infoWindow.classList.add('info__window-wide');
  colVacans.classList.add('hide-block');
  tabsWrap.classList.remove('initial-hide');
  tabsBodys[0].classList.remove('initial-hide');
  if (info.getBoundingClientRect().top < 100) {
    setTimeout(() => {
      girlWrapper.classList.add('fixed2');
      girlWrapper.style.transitionProperty = 'left';
      girlWrapper.style.transitionDuration = '0.3s';
    }, 300);
  }
  for (let item of ratings) {
    item.classList.remove('ratings-up');
  }
  green = true;
}

for (let btn of resetAlls) {
  btn.addEventListener('click', changeColorYellow);
}

function changeColorYellow() {
  for (let i = 0; i < arrYellow.length; i++) {
    document.querySelector(`.c${i}`).classList.add(`${arrYellow[i]}`);
  }
  colVacans.classList.remove('hide-block');
  tabsWrap.classList.add('initial-hide');
  tabsBodys[0].classList.add('initial-hide');
}

//При клике ниже желтого поля развернуть зеленую девушку 
window.addEventListener('click', function (e) {
  if (e.clientY > info.getBoundingClientRect().top - 30) {
    changeColorGreen();
  }
});

//Отцентровать девушку при скролле
window.addEventListener('scroll', function () {
  if (info.getBoundingClientRect().top < 100) {
    girlWrapper.classList.add('fixed1');
    if (girlWrapper.classList.contains('fixed2')) {
      girlWrapper.classList.add('fixed3');
    }
    //girlWrapper.style.left = infoWindow.getBoundingClientRect().left + infoWindow.clientWidth / 2 + -275 + 'px';
  } else {
    girlWrapper.classList.remove('fixed1');
    girlWrapper.classList.remove('fixed3');
  }
});
/***********Конец смены цвета в рисунке девушки **********/

/**Переключение вкладок Актуальные вакансии/В тексте объявления**/
const infoContainer = document.querySelector('.info__container');
const infoTabsTitles = infoContainer.querySelectorAll('.tabs__title');
for (let btn of infoTabsTitles) {
  btn.addEventListener('click', function (e) {
    for (let btn of infoTabsTitles) {
      btn.classList.remove('_tab-active');
    }
    e.currentTarget.classList.add('_tab-active');
  });
}

/***********Работа с сортировкой по дате/периоду *********/

const selectDateDiv = document.querySelector('.select1');
const selectPeriodDiv = document.querySelector('.select2');
const selectDateInput = document.querySelector('#select__date');
const selectPeriodInput = document.querySelector('#select__period');
const selectDateUl = document.querySelector('.select__date');
const selectPeriodUl = document.querySelector('.select__period');
const selectDateItems = document.querySelectorAll('.select__date-item');
const selectPeriodItems = document.querySelectorAll('.select__period-item');
let f1 = false;
let f2 = false;

//развернуть/свернуть селект
selectDateDiv.addEventListener('click', function (e) {
  f1 = true;
  selectDateUl.classList.toggle('show__date');
  e.target.querySelector('.arrow') && e.target.querySelector('.arrow').classList.toggle('arrow-rotate');
});

selectPeriodDiv.addEventListener('click', function (e) {
  f2 = true;
  selectPeriodUl.classList.toggle('show__date');
  e.target.querySelector('.arrow').classList.toggle('arrow-rotate');
});

selectDateDiv.querySelector('.arrow').addEventListener('click', function (e) {
  if (!f1) {
    selectDateUl.classList.toggle('show__date');
  }
  e.target.classList.toggle('arrow-rotate');
});

selectPeriodDiv.querySelector('.arrow').addEventListener('click', function (e) {
  if (!f2) {
    selectPeriodUl.classList.toggle('show__date');
  }
  e.target.classList.toggle('arrow-rotate');
});


//Изначальная дымка
selectDateInput.style.cssText = `background: linear-gradient(to right, #222 60%, #777 70%, #ddd 75%, transparent 90%, transparent); -webkit-background-clip: text; -webkit-text-fill-color: transparent;`;

selectPeriodInput.style.cssText = `background: linear-gradient(to right, #222 60%, #777 70%, #ddd 75%, transparent 90%, transparent); -webkit-background-clip: text; -webkit-text-fill-color: transparent;`;

//показать выбранное значение и свернуть селект
for (let item of selectDateItems) {
  item.addEventListener('click', function (e) {
    selectDateInput.value = e.target.innerText;
    //Показать дымку в селекте по дате
    selectDateInput.style.cssText = `background: linear-gradient(to
       right,#222 60%, #777 70%, #ddd 75%, transparent 90%, 
       transparent); -webkit-background-clip: text; 
       -webkit-text-fill-color: transparent;`;
    setTimeout(() => {
      selectDateUl.classList.remove('show__date');
      e.target.parentNode.previousElementSibling.classList.remove('arrow-rotate');
    }, 50);
  });
}

let popup3 = document.createElement('div');
let popup4 = document.createElement('div');

selectDateDiv.addEventListener('mouseover', function () {
  popup3.innerText = selectDateInput.value;
  popup3.classList.add('input-popup');
  selectDateInput.before(popup3);
  popup3.style.top = selectDateInput.getBoundingClientRect().top - 40 + 'px';
  popup3.style.left = selectDateInput.getBoundingClientRect().left + 'px';
});

selectDateDiv.addEventListener('mouseout', function () {
  popup3.remove();
});

for (let item of selectPeriodItems) {
  item.addEventListener('click', function (e) {
    selectPeriodInput.value = e.target.innerText;
    //Показать дымку в селекте по дате
    selectPeriodInput.style.cssText = `background: linear-gradient(to right,#222 60%, #777 70%, #ddd 75%, transparent 90%, 
      transparent); -webkit-background-clip: text; 
      -webkit-text-fill-color: transparent;`;
    setTimeout(() => {
      selectPeriodUl.classList.remove('show__date');
      e.target.parentNode.previousElementSibling.classList.remove('arrow-rotate');
    }, 50);
  });
}

selectPeriodDiv.addEventListener('mouseover', function () {
  popup4.innerText = selectPeriodInput.value;
  popup4.classList.add('input-popup');
  selectPeriodInput.before(popup4);
  popup4.style.top = selectPeriodInput.getBoundingClientRect().top - 40 + 'px';
  popup4.style.left = selectPeriodInput.getBoundingClientRect().left + 'px';
});

selectPeriodDiv.addEventListener('mouseout', function () {
  popup4.remove();
});
/***********Конец работа с сортировкой по дате/периоду *********/


/*************Работа с рейтингом**************/
const ratingItem = document.querySelectorAll('.rating__item');

for (let item of ratingItem) {
  item.addEventListener('mouseover', function (e) {
    e.target.classList.add('rating__item-yellow');
    let targPN = e.target.parentNode;
    const thisItems = targPN.querySelectorAll('.rating__item');
    for (let i = 0; i < thisItems.length; i++) {
      if (thisItems[i] !== e.target) {
        thisItems[i].classList.add('rating__item-yellow');
      } else {
        return;
      }
    }
  });
}

for (let item of ratingItem) {
  item.addEventListener('click', function (e) {
    let targPN = e.target.parentNode;
    const thisItems = targPN.querySelectorAll('.rating__item');
    for (let item of thisItems) {
      item.classList.remove('rating__item-yellow');
      item.classList.remove('yellow');
    }
    e.target.classList.add('rating__item-yellow');
    e.target.classList.add('yellow');
    for (let i = 0; i < thisItems.length; i++) {
      if (thisItems[i] !== e.target) {
        thisItems[i].classList.add('rating__item-yellow');
        thisItems[i].classList.add('yellow');
      } else {
        return;
      }
    }
  });
}

for (let item of ratingItem) {
  item.addEventListener('mouseout', function (e) {
    let targPN = e.target.parentNode;
    const thisItems = targPN.querySelectorAll('.rating__item');
    if (!e.target.classList.contains('yellow')) {
      e.target.classList.remove('rating__item-yellow');
    }
    for (let i = 0; i < thisItems.length; i++) {
      if (thisItems[i] !== e.target) {
        if (!thisItems[i].classList.contains('yellow')) {
          thisItems[i].classList.remove('rating__item-yellow');
        }
      } else {
        return;
      }
    }
  });
}
/********Конец работа с рейтингом*************/

/***********Показать предприятие ***********/

const infoOffer = document.querySelector('.info__offer');
const cardFabrics = document.querySelectorAll('.card__fabric');
const pretendentCard = document.querySelector('.pretendent-card');
const cardPretendents = document.querySelectorAll('.card__pretendent');

//Запретить переход по ссылкам в карточках
const cardCol = document.querySelectorAll('.card__col');
for (let card of cardCol) {
  for (let item of card.querySelectorAll('a')) {
    item.onclick = (e) => {
      e.preventDefault();
    };
  }
}

for (let card of cardFabrics) {
  card.addEventListener('click', function () {
    windowRowRight.classList.remove('initial-hide');
    pretendentCard.classList.add('initial-hide');
    girlWrapper.classList.add('hide-block');
    infoOffer.classList.add('hide-block');
    infoSidebar.classList.add('info__sidebar-narrow');
    infoWindow.classList.add('info__window-wide');
  });
}
/******Конец показать предприятие **********/

/***********Показать соискателя ***********/
for (let card of cardPretendents) {
  card.addEventListener('click', function () {
    pretendentCard.classList.remove('initial-hide');
    windowRowRight.classList.add('initial-hide');
    girlWrapper.classList.add('hide-block');
    infoOffer.classList.add('hide-block');
    infoSidebar.classList.add('info__sidebar-narrow');
    infoWindow.classList.add('info__window-wide');
  });
}
/*********Конец показать соискателя *********/



//Добавить/убрать соискателя/работодателя в избранное
const cardFavoritesPerson = document.querySelectorAll('.card__favorite.person');
const cardFavoritesEmployer = document.querySelectorAll('.card__favorite.employer');
const addPerson = 'Добавить соискателя в избранное';
const removePerson = 'Убрать соискателя из избранного';
const addEmployer = 'Добавить работодателя в избранное';
const removeEmployer = 'Убрать работодателя из избранного';
let popupFavorite = false; //не внесено в избранное

for (let item of cardFavoritesPerson) {
  item.innerHTML += addPerson;
  item.setAttribute('data-add', 'add');
}

for (let item of cardFavoritesPerson) {
  item.addEventListener('click', goToFavoritePerson);
}

function goToFavoritePerson(e) {
  let targ = e.target;
  targ.classList.toggle('add');
  if (targ.getAttribute('data-add') === 'add') {
    popupFavorite = true;
    let innerHTML_ = targ.innerHTML;
    let tempStr = (innerHTML_.slice(0, innerHTML_.length - 32));
    targ.innerHTML = tempStr + removePerson;
    targ.setAttribute('data-add', 'remove');
  } else {
    popupFavorite = false;
    targ.setAttribute('data-add', 'add');
    let innerHTML_ = targ.innerHTML;
    let tempStr = (innerHTML_.slice(0, innerHTML_.length - 32));
    targ.innerHTML = tempStr + addPerson;
  }
}

for (let item of cardFavoritesEmployer) {
  item.innerHTML += addEmployer;
  item.setAttribute('data-add', 'add');
}

for (let item of cardFavoritesEmployer) {
  item.addEventListener('click', goToFavoriteEmployer);
}

function goToFavoriteEmployer(e) {
  let targ = e.target;
  targ.classList.toggle('add');
  if (targ.getAttribute('data-add') === 'add') {
    popupFavorite = true;
    let innerHTML_ = targ.innerHTML;
    let tempStr = (innerHTML_.slice(0, innerHTML_.length - 34));
    targ.innerHTML = tempStr + removeEmployer;
    targ.setAttribute('data-add', 'remove');
  } else {
    targ.setAttribute('data-add', 'add');
    popupFavorite = false;
    let innerHTML_ = targ.innerHTML;
    let tempStr = (innerHTML_.slice(0, innerHTML_.length - 34));
    targ.innerHTML = tempStr + addEmployer;
  }
}


//О фабрике читать/скрыть
const readMore = document.querySelector('.read-more');
const hideMore = document.querySelector('.hide-more');
const readMoreBlocks = document.querySelectorAll('.read-more__block');

readMore.addEventListener('click', function () {
  for (let item of readMoreBlocks) {
    item.classList.remove('hide-block');
  }
  readMore.classList.add('hide-block');
});

hideMore.addEventListener('click', function () {
  for (let item of readMoreBlocks) {
    item.classList.add('hide-block');
  }
  readMore.classList.remove('hide-block');
});

//Пагинация
const pageNavigationPages = document.querySelector('.page-navigation__pages');
const lastItem = document.querySelector('.last-item');
const toBegin = document.querySelector('.to-begin');
const toPrevious = document.querySelector('.to-previous');
const toNext = document.querySelector('.to-next');
const inputPage = document.querySelector('.input-page');
const oK = document.querySelector('.ok');

let count = 1;

toBegin.addEventListener('click', () => {
  pageNavigationPages.innerText = '1 ИЗ 94';
  count = 1;
  toBegin.classList.add('nonactive');
  toPrevious.classList.add('nonactive');
});

toNext.addEventListener('click', () => {
  if (count < 94) {
    count++;
  } else {
    return;
  }
  toBegin.classList.remove('nonactive');
  toPrevious.classList.remove('nonactive');
  pageNavigationPages.innerText = `${count} ИЗ 94`;
});

toPrevious.addEventListener('click', () => {
  if (count > 1) {
    count--;
    if (count == 1) {
      toBegin.classList.add('nonactive');
      toPrevious.classList.add('nonactive');
    }
  } else {
    return;
  }
  pageNavigationPages.innerText = `${count} ИЗ 94`;
});

oK.addEventListener('mouseover', function () {
  if (inputPage.value < 1 || inputPage.value > 94 || inputPage.value == count) {
    lastItem.classList.add('nonactive');
  } else {
    lastItem.classList.remove('nonactive');
  }
});

oK.addEventListener('click', function () {
  if (inputPage.value >= 1 && inputPage.value <= 94 && inputPage.value !== count) {
    pageNavigationPages.innerText = `${inputPage.value} ИЗ 94`;
    count = inputPage.value;
    if (inputPage.value > 1) {
      toBegin.classList.remove('nonactive');
      toPrevious.classList.remove('nonactive');
    } else {
      toBegin.classList.add('nonactive');
      toPrevious.classList.add('nonactive');
    }
  } else {
    return;
  }
});

/**************Работа с анкетой ************* */
const married = document.querySelector('.married');
const selectMarried = document.querySelector('.select__married');
const selectMarriedItems = document.querySelectorAll('.select__married-item');
const formArrows = document.querySelectorAll('.form-arrow');

married.addEventListener('click', function (e) {
  e.target.firstElementChild.classList.toggle('arrow-rotate');
  selectMarried.classList.toggle('show_');
});

for (let item of selectMarriedItems) {
  item.addEventListener('click', function (e) {
    e.target.parentNode.previousElementSibling.value = e.target.innerText;
    e.target.parentNode.parentNode.firstElementChild.classList.toggle('arrow-rotate');
    selectMarried.classList.toggle('show_');
  });
}

const flat = document.querySelector('.flat');
const selectFlat = document.querySelector('.select__flat');
const selectFlatItems = document.querySelectorAll('.select__flat-item');

flat.addEventListener('click', function (e) {
  e.target.firstElementChild.classList.toggle('arrow-rotate');
  selectFlat.classList.toggle('show_');
});

for (let item of selectFlatItems) {
  item.addEventListener('click', function (e) {
    e.target.parentNode.previousElementSibling.value = e.target.innerText;
    e.target.parentNode.parentNode.firstElementChild.classList.toggle('arrow-rotate');
    selectFlat.classList.toggle('show_');
  });
}

for (let arrow of formArrows) {
  arrow.addEventListener('click', handleArrow);
}

function handleArrow(e) {
  e.target.classList.toggle('arrow-rotate');
  e.target.parentNode.querySelector('ul').classList.toggle('show_');
}
/***********Конец работа с анкетой ************/

/********Оповещение о вакансии  *************/
const cardBellInputs = document.querySelectorAll('.card__bell-input');
const cardBellAlarm = document.querySelector('.card__bell-alarm');
const cardBellFooter = document.querySelector('.card__bell-footer');
const cardBellClose = document.querySelector('.card__bell-close');

for (let input_ of cardBellInputs) {
  input_.querySelector('input').onfocus = addFocus;
  input_.querySelector('input').onblur = removeFocus;
}

function addFocus(e) {
  e.target.parentNode.classList.add('card__bell-focus');
  e.target.nextElementSibling.classList.add('card__bell-iconLabelActive');
}

function removeFocus(e) {
  e.target.parentNode.classList.remove('card__bell-focus');
  e.target.nextElementSibling.classList.remove('card__bell-iconLabelActive');
}

cardBellAlarm.onclick = () => {
  cardBellFooter.classList.remove('hide-block');
};

cardBellClose.onclick = () => {
  cardBellFooter.classList.add('hide-block');
};
/*******Конец оповещение о вакансии  ********/

/************Показать еще ценности **********/
const moreValueShow = document.querySelector('.more__value-show');
const valueItems = document.querySelectorAll('.value__item');
moreValueShow.onclick = () => {
  moreValueShow.classList.add('hide-block');
  for (let item of valueItems) {
    item.classList.remove('hide-block');
  }
};
/*********Конец показать еще ценности *******/


/********************************************** */
/************Работа с попапом Еще************* */
/********************************************* */

/********Добавить работодателя/соискателя в избранное******* */
const addToFavoritesСompany = document.getElementById('addToFavoritesСompany');
const toFavorites = document.querySelectorAll('._add');
const employerToFavorites = 'Добавить объявление в избранное';
const personToFavorites = 'Добавить соискателя в избранное';
const allEmployerToFavorites = '';
const allPersonToFavorites = 'Добавить объявление в избранное';


const label_03 = addToFavoritesСompany.querySelector('.label_03');
const label_04 = addToFavoritesСompany.querySelector('.label_04');
const popupFavoriteClose = document.querySelector('.popup__toFavorite-close');
const popupFavoriteApply = addToFavoritesСompany.querySelector('._yellow');

for (let item of toFavorites) {
  item.addEventListener('click', insertToFavorites);
}

function insertToFavorites(e) {
  if (popupFavorite) {
    closestCardlist = e.target.closest('.card__list');
    headerContainer.classList.add('body-dark');
    if (e.target.classList.contains('employer')) {
      label_03.innerText = employerToFavorites;
    } else {
      label_03.innerText = personToFavorites;
      label_04.innerText = allPersonToFavorites;
    }
    addToFavoritesСompany.classList.remove('hide-block');
    closestCardlist.classList.add('hide-block');
  }
}

popupFavoriteClose.onclick = (e) => {
  headerContainer.classList.remove('body-dark');
  e.target.closest('#addToFavoritesСompany').classList.add('hide-block');
  closestCardlist.classList.remove('hide-block');
};

popupFavoriteApply.onclick = (e) => {
  headerContainer.classList.remove('body-dark');
  e.target.closest('#addToFavoritesСompany').classList.add('hide-block');
  closestCardlist.classList.remove('hide-block');
};

/*****Конец добавить работодателя/соискателя в избранное*******/

/***********Оставить комментарий ***********/
const cardWrapList = document.querySelectorAll('.card__wrap-list');

for (let list of cardWrapList) {
  list.querySelector('.card__comment').onclick = showComment;
}

function showComment(e) {
  e.target.parentNode.querySelector('.place-comment').classList.remove('hide-block');
}

for (let list of cardWrapList) {
  list.onmouseleave = (e) => {
    e.target.parentNode.querySelector('.place-comment').classList.add('hide-block');
  };
}
/********Конец оставить комментарий ********/

/************Черный список********** */
const removeFromBlack = 'Убрать из черного списка';
const addToBlack = 'Внести в черный список';
let popupBlack = false; //не внесено в ЧС

for (let item of cardWrapList) {
  item.querySelector('.to-blacklist').innerHTML += addToBlack;
  item.querySelector('.to-blacklist').setAttribute('data-add', 'add');
}

for (let item of cardWrapList) {
  item.querySelector('.to-blacklist').addEventListener('click', function (e) {
    let targ = e.target;
    const favorit = targ.closest('.card__wrap-list').
    querySelector('.no-inblacklist').
    querySelector('.card__favorite');

    let cardColumns = targ.closest('.card__columns');
    const blackList = cardColumns.querySelectorAll('.black-list');
    //вносим в черный список
    targ.classList.toggle('add');
    if (targ.getAttribute('data-add') === 'add') {
      popupBlack = true;
      let innerHTML_ = targ.innerHTML;
      let tempStr = (innerHTML_.slice(0, innerHTML_.length - 22));
      targ.innerHTML = tempStr + removeFromBlack;
      targ.setAttribute('data-add', 'remove');
      targ.parentNode.parentNode.querySelector('.no-inblacklist').classList.add('hide-block');
      //показать метку черного списка
      for (let item of blackList) {
        item.classList.remove('hide-block');
      }
      //удалить из избранного
      favorit.setAttribute('data-add', 'add');
      let favoritHTML_ = favorit.innerHTML;
      favorit.classList.toggle('add');
      if (favoritHTML_.includes('работодателя')) {
        let favoritStr = (favoritHTML_.slice(0, favoritHTML_.length - 33));
        favorit.innerHTML = favoritStr + addEmployer;
      } else {
        let favoritStr = (favoritHTML_.slice(0, favoritHTML_.length - 33));
        favorit.innerHTML = favoritStr + addPerson;
      }
    } else {
      //убираем из черного списка
      favorit.classList.remove('add');
      popupBlack = false;
      targ.setAttribute('data-add', 'add');
      let innerHTML_ = targ.innerHTML;
      let tempStr = (innerHTML_.slice(0, innerHTML_.length - 24));
      targ.innerHTML = tempStr + addToBlack;
      targ.parentNode.parentNode.querySelector('.no-inblacklist').classList.remove('hide-block');
      for (let item of blackList) {
        item.classList.add('hide-block');
      }
    }
  });
}
//Убрать из черного списка из самой карточки
const blackListBtns = document.querySelectorAll('.black-list');
for (let btn of blackListBtns) {
  btn.addEventListener('click', function (e) {
    let targ = e.target;
    targ.classList.add('hide-block');
    targ.parentNode.previousElementSibling.querySelector('.black-list').classList.add('hide-block');
    targ.nextElementSibling.querySelector('.no-inblacklist').classList.remove('hide-block');
    targ.nextElementSibling.querySelector('.employer').classList.remove('add');
    const temp = targ.nextElementSibling.querySelector('.to-blacklist');
    temp.setAttribute('data-add', 'add');
    let innerHTML_ = temp.innerHTML;
    let tempStr = (innerHTML_.slice(0, innerHTML_.length - 24));
    temp.innerHTML = tempStr + addToBlack;
  });
}


/***********Внести в черный список************ */
const addToBlackList = document.getElementById('addToBlackList');
const toBlackLists = document.querySelectorAll('.to-blacklist');
const employerToBlackList = 'Поместить все объявления от этой компании в игнорируемые';
const personToBlackList = 'Поместить все объявления от этого соискателя в игнорируемые';
const label_02 = addToBlackList.querySelector('.label_02');
const popupBlackClose = document.querySelector('.popup__toBlack-close');
const popupBlackApply = addToBlackList.querySelector('._yellow');
let closestCardlist;

for (let item of toBlackLists) {
  item.addEventListener('click', insertToBlackList);
}

function insertToBlackList(e) {
  if (popupBlack) {
    closestCardlist = e.target.closest('.card__list');
    headerContainer.classList.add('body-dark');
    if (e.target.closest('.card__list').classList.contains('employer')) {
      label_02.innerText = employerToBlackList;
    } else {
      label_02.innerText = personToBlackList;
    }
    addToBlackList.classList.remove('hide-block');
    closestCardlist.classList.add('hide-block');
  }
}

popupBlackClose.onclick = (e) => {
  headerContainer.classList.remove('body-dark');
  e.target.closest('#addToBlackList').classList.add('hide-block');
  closestCardlist.classList.remove('hide-block');
};

popupBlackApply.onclick = (e) => {
  headerContainer.classList.remove('body-dark');
  e.target.closest('#addToBlackList').classList.add('hide-block');
  closestCardlist.classList.remove('hide-block');
};

/******** Конец внести в черный список******** */

/*********Конец черный список******* */

/*************Работа с CRM *************** */
const addToCrm = 'Добавить в CRM';
const removeFromCrm = 'Убрать из CRM';
const toCrms = document.querySelectorAll('.to-crm');

for (let item of toCrms) {
  item.innerHTML += addToCrm;
  item.setAttribute('data-add', 'add');
}
for (let item of toCrms) {
  item.addEventListener('click', function (e) {
    let targ = e.target;
    if (targ.getAttribute('data-add') === 'add') {
      targ.setAttribute('data-add', 'remove');
      let innerHTML_ = targ.innerHTML;
      let tempStr = (innerHTML_.slice(0, innerHTML_.length - 14));
      targ.innerHTML = tempStr + removeFromCrm;
    } else {
      targ.setAttribute('data-add', 'add');
      let innerHTML_ = targ.innerHTML;
      let tempStr = (innerHTML_.slice(0, innerHTML_.length - 14));
      targ.innerHTML = tempStr + addToCrm;
    }
  });
}
/*********Конец работа с CRM ************* */

/**************Поделиться с другом ********** */
const cardShare = document.querySelectorAll('.card-share');
const popapShares = document.querySelectorAll('.popup__share');
const slideControls = document.querySelectorAll('.slide__control');
const slideControlChanges = document.querySelectorAll('.slide__control-change');
const headerContainer = document.querySelector('.header__container'); //для темного фона
const popupShareCloses = document.querySelectorAll('.popup__share-close');
const bgimgWraps = document.querySelectorAll('.bgimg-wrap');
let dataShare;

const shares = [document.querySelectorAll('.share1'),
  document.querySelectorAll('.share2'),
  document.querySelectorAll('.share3')
];

const template01 = document.querySelector('.template01').innerHTML;
const template02 = document.querySelector('.template02').innerHTML;
const template03 = document.querySelector('.template03').innerHTML;

for (let item of cardShare) {
  item.addEventListener('click', shareInfo);
}
let step = 0;
let intervalID;

function shareInfo(e) {
  dataShare = e.target.getAttribute('data-share');
  if (dataShare !== 'share01') {
    cloneShare();
  }
  headerContainer.classList.add('body-dark');
  let targ = e.target.closest('.card__wrap');
  targ.querySelector('.popup__share').classList.remove('hide-block');
  targ.parentNode.querySelector('ul').classList.add('hide-block');
  clearInterval(intervalID);
  slideShow();
}

//слайдер
let d = 315;
for (let item of slideControlChanges) {
  item.addEventListener('click', slideChange);
}

function slideChange(e) {
  let targ = e.target.classList;
  if (targ.contains('scc1')) {
    step = 0;
  }
  if (targ.contains('scc2')) {
    step = -1;
  }
  if (targ.contains('scc3')) {
    step = -2;
  }
  goStep();
}

function goStep() {
  for (let share of shares) {
    for (let item of share) {
      if (item.parentNode.getAttribute('data-share') === dataShare) {
        item.style.transform = `translateX(${step*d}px)`;
        item.style.transition = '0.5s';
      }
    }
  }
}

function slideShow() {
  for (let item of slideControls) {
    if (item.getAttribute('data-share') === dataShare) {
      intervalID = setInterval(changeInput, 5000, item);
    }
  }
}

function changeInput(item) {
  if (step > -2) {
    step--;
  } else {
    step = 0;
  }
  switch (step) {
    case 0:
      item.querySelector('.scc1').checked = true;
      break;
    case -1:
      item.querySelector('.scc2').checked = true;
      break;
    case -2:
      item.querySelector('.scc3').checked = true;
      break;
  }
  goStep();
}
//конец слайдера

for (let item of popupShareCloses) {
  item.addEventListener('click', shareClose);
}

function shareClose(e) {
  e.target.parentNode.classList.add('hide-block');
  headerContainer.classList.remove('body-dark');
  e.target.parentNode.parentNode.querySelector('ul').classList.remove('hide-block');
}

function cloneShare() { //клонирование картинок
  for (let item of bgimgWraps) {
    item.querySelector('.share1').innerHTML = '';
    item.querySelector('.share2').innerHTML = '';
    item.querySelector('.share3').innerHTML = '';
  }
  for (let item of bgimgWraps) {
    if (item.getAttribute('data-share') === dataShare) {
      item.querySelector('.share1').innerHTML = template01;
      item.querySelector('.share2').innerHTML = template02;
      item.querySelector('.share3').innerHTML = template03;
    }
  }
}
/**********Конец поделиться с другом **********/



/*************************************************** */
/************Конец работа с попапом Еще************* */
/*************************************************** */


/****************Кнопка Инфо *************** */
const cardIntelligences = document.querySelectorAll('.card__intelligence');
const cardCloses = document.querySelectorAll('.card__close');

for (let btn of cardIntelligences) {
  btn.onclick = (e) => {
    e.target.closest('.card').querySelector('.card__banner').classList.remove('hide-block');
  };
}

for (let btn of cardCloses) {
  btn.onclick = (e) => {
    e.target.closest('.card').querySelector('.card__banner').classList.add('hide-block');
  };
}
/*************Конец кнопка Инфо ************ */


/*********Тут будет комментарий при нажатии**********/
const aComments = document.querySelectorAll('.a-comment');
const popupCommentTexts = document.querySelectorAll('.popup__comment-text');
const btnSaves = document.querySelectorAll('.btn-save');
const btnBreaks = document.querySelectorAll('.btn-break');
const addComment = 'Добавить комментарий';
const editComment = 'Редактировать комментарий';
const deleteComment = 'Удалить комментарий';
const nowBreak = 'Отмена';
const nowSave = 'Сохранить';
const newComment = 'Обновить';
let commentSave = false;
const popupCommentCloses = document.querySelectorAll('.popup__comment-close');

for (let item of aComments) {
  item.addEventListener('click', showCommentBlock);
}

function showCommentBlock(e) {
  headerContainer.classList.add('body-dark');
  let targ = e.target.closest('article').nextElementSibling;
  targ.classList.remove('hide-block');
  if (commentSave) {
    targ.querySelector('.popup__comment-title').innerText = editComment;
    targ.querySelector('.btn-save').innerText = newComment;
    targ.querySelector('.btn-break').innerText = deleteComment;
    targ.querySelector('.popup__comment-text').classList.add('edit');
  }
}

for (let item of popupCommentTexts) {
  item.addEventListener('input', isTextLong);
}

function isTextLong(e) {
  const targ = e.target;
  const charNumber = targ.parentNode.querySelector('.char-number');
  charNumber.innerText = targ.value.length;
  if (targ.value.length > 200) {
    targ.parentNode.querySelector('.too-long').classList.remove('hide-block');
    targ.parentNode.querySelector('.popup__comment-length').classList.add('long');
    targ.classList.add('long');
    targ.nextElementSibling.querySelector('.btn-save').classList.add('long');
    targ.parentNode.querySelector('.popup__comment-text').classList.remove('edit');
  } else {
    targ.parentNode.querySelector('.too-long').classList.add('hide-block');
    targ.parentNode.querySelector('.popup__comment-length').classList.remove('long');
    targ.classList.remove('long');
    targ.nextElementSibling.querySelector('.btn-save').classList.remove('long');
  }
}

for (let btn of btnSaves) {
  btn.addEventListener('click', saveComment);
}

function saveComment(e) {
  let targ = e.target.closest('.popup__comment');
  if (!e.target.classList.contains('long')) {
    targ.classList.add('hide-block');
    commentSave = true;
    headerContainer.classList.remove('body-dark');
  }
}

for (let btn of btnBreaks) {
  btn.addEventListener('click', breakComment);
}

function breakComment(e) {
  let targ = e.target.closest('.popup__comment');
  targ.querySelector('.char-number').innerText = '0';
  targ.querySelector('.popup__comment-text').value = '';
  targ.classList.add('hide-block');
  targ.querySelector('.too-long').classList.add('hide-block');
  targ.querySelector('.popup__comment-length').classList.remove('long');
  targ.querySelector('.popup__comment-text').classList.remove('long');
  targ.querySelector('.btn-save').classList.remove('long');
  commentSave = false;
  targ.querySelector('.popup__comment-title').innerText = addComment;
  targ.querySelector('.btn-save').innerText = nowSave;
  targ.querySelector('.btn-break').innerText = nowBreak;
  targ.querySelector('.popup__comment-text').classList.remove('edit');
  headerContainer.classList.remove('body-dark');
}

for (let item of popupCommentCloses) {
  item.addEventListener('click', commentClose);
}

function commentClose(e) {
  e.target.parentNode.classList.add('hide-block');
  headerContainer.classList.remove('body-dark');
}
/******Конец тут будет комментарий при нажатии*******/

/*window.onclick = (e) => {
  //console.log('target=', e.target);
  //console.log('currenttarget=', e.currentTarget);
  //alert(e.clientY);
  //console.log(document.getElementById('wide1').getBoundingClientRect().bottom);
};*/

//window.addEventListener('click', hideAllLists);