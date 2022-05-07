//Проверка шрифтов
const zabra = document.querySelector('.zabra');
const sans = document.querySelector('.sans');
const searchTitle = document.querySelector('.search__title');
sans.onclick = () => {
  sans.classList.add('active');
  zabra.classList.remove('active');
  searchTitle.classList.add('search__title--opensans');
  searchTitle.classList.remove('search__title--zabra');
};
zabra.onclick = () => {
  sans.classList.remove('active');
  zabra.classList.add('active');
  searchTitle.classList.remove('search__title--opensans');
  searchTitle.classList.add('search__title--zabra');
};

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

document.onscroll = (e) => {
  let timerScroll = setInterval(scrollHandler, 10);
  let correction = 0;
  denominator = document.documentElement.scrollHeight + windowRowRight.clientHeight;

  function scrollHandler() {
    correction = rightBlockStart - windowRowRight.getBoundingClientRect().top;
    numerator = window.pageYOffset + correction;
    percentScrollDiv.style.width = `${document.documentElement.scrollWidth*1.05*numerator/denominator}px`;
  }
};
/*************Конец блока*****************/


/**********Управление кнопками выбора типа поиска**********/
const chooseWork = document.querySelector('.choose__work');
const chooseStaff = document.querySelector('.choose__staff');
const chooseAny = document.querySelector('.choose__any');

//кнопки Очистить
const resetAll = chooseWork.querySelector('.reset-all');
const staffResetAll = chooseStaff.querySelector('.staff__reset-all');
const anyResetAll = chooseAny.querySelector('.any__reset-all');

const tabsTitles = document.querySelectorAll('.tabs__title');
for (let btn of tabsTitles) {
  btn.addEventListener('click', changeSearchType);
}

function changeSearchType(e) {
  for (let btn of tabsTitles) {
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
const search = document.querySelector('.search');
const info = document.querySelector('.info');
let flagShow = true;

rollUpBtn.onclick = () => {
  if (flagShow) {
    rollUpSpan.innerText = 'Показать поисковую панель';
    rollUp.classList.add('active');
    document.querySelector('.choose').classList.add('hide-block');
    search.classList.add('search-reduced');
    info.classList.add('info-up');
  } else {
    rollUpSpan.innerText = 'Скрыть поисковую панель';
    rollUp.classList.remove('active');
    document.querySelector('.choose').classList.remove('hide-block');
    search.classList.remove('search-reduced');
    info.classList.remove('info-up');
  }
  flagShow = !flagShow;
};
/*************Конец блока************** */

/************************Блок Поиск работы***********************/
/***********Работа с полями ввода и кнопкой Очистить**********/

const inputFields = chooseWork.querySelectorAll('.input-field');
const inputFieldsAll = document.querySelectorAll('.input-field');
//const inputSelectsAll = document.querySelectorAll('.inputselect');
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

  targ.querySelector('.inputselect').classList.remove('inputsel');

  if (targ.querySelector('.placeholder2')) {
    targ.querySelector('.placeholder2').classList.remove('input-field-focus');
  }

  if (targ.querySelector('.showlist')) {
    targ.querySelector('.showlist').classList.remove('showlist');
  }

  for (let item of targ.querySelectorAll('.input-checkbox')) {
    item.checked = false;
  }

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
window.addEventListener('click', hideAllLists);

function hideAllLists(e) {
  let eX = e.clientX;
  let eY = e.clientY;
  if (eX < searchContainer.getBoundingClientRect().left ||
    eX > searchContainer.getBoundingClientRect().right ||
    eY < tabs.getBoundingClientRect().bottom ||
    eY > rollUp.getBoundingClientRect().top ||
    eY > 700) {
    for (let item of document.querySelectorAll('.showlist')) {
      item.classList.remove('showlist');
    }

    for (let item of document.querySelectorAll('.inputsel')) {
      item.classList.remove('inputsel');
    }
    for (let item of document.querySelectorAll('.arrow-rotate')) {
      item.classList.remove('arrow-rotate');
    }

    //Убрать блок регионов
    if (eX < regionRect.left || eX > regionRect.right) {
      chooseRegion.classList.add('up-block');
    }

    removeWide(e);
    removeWide2(e);
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

  for (let item of document.querySelectorAll('.placeholder2')) {
    if (!e.target.classList.contains('is2') && !e.target.classList.contains('input-checkbox') && !e.target.classList.contains('arrow') && !e.target.classList.contains('check-multi') && !e.target.parentNode.parentNode.parentNode.querySelector('.is2').value) {
      if (!item.previousElementSibling.value) {
        item.classList.remove('input-field-focus');
      }
    }
  }
}


/**********Работа с селектами*****************/

//const inputSelects = chooseWork.querySelectorAll('.inputselect');
const inputSelects = document.querySelectorAll('.inputselect');
const inputContainerUls = document.querySelectorAll('.input-container__ul');
const inputContainerArrows = document.querySelectorAll('.input-container__arrow');

chooseWork.addEventListener('click', hideSelect_1); //Показать/убрать список select

function hideSelect_1(e) {
  let targ = e.target;
  let targPN = targ.parentNode;
  //нажали на стрелочку
  if (targ.classList.contains('input-container__arrow')) {
    targPN.querySelector('.input-container__ul').classList.toggle('showlist');
    targPN.querySelector('.inputselect').classList.toggle('inputsel');
    targ.classList.toggle('arrow-rotate');
    targPN.querySelector('.placeholder2').classList.toggle('input-field-focus');

    if (targPN.querySelector('.inputselect').classList.contains('ulwide')) {
      addWide(e);
    }
    if (targPN.querySelector('.inputselect').classList.contains('ulwide2')) {
      addWide2(e);
    }

    return;
  }

  //нажали на поле, но не на стрелочку
  if (targ.classList.contains('is2')) {
    targPN.querySelector('.arrow').classList.add('arrow-rotate');
    targPN.querySelector('.placeholder2').classList.add('input-field-focus');
  }
  //нажали вне поля выбора
  if (!targ.classList.contains('inputselect')) {
    for (let uls of inputContainerUls) {
      if (targ.parentNode.parentNode !== uls && !e.target.classList.contains('item-multi')) {
        if (!targ.parentNode.parentNode.parentNode.firstElementChild.classList.contains('ulwide2')) {
          uls.classList.remove('showlist');
        }
      }
    }
    for (let item of inputSelects) {
      item.classList.remove('inputsel');
    }
    for (let arrow of inputContainerArrows) {
      arrow.classList.remove('arrow-rotate');
    }
  }
}


//Показать выбранный select и спрятать placeholder

for (let item of chooseWork.querySelectorAll('.input-container__item')) {
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
}

//нажали на поле выбора
for (let inp of inputSelects) {
  inp.addEventListener('click', hideSelect_2);
}

function hideSelect_2(e) {
  //обнуляем остальные поля выбора
  for (let inp of inputSelects) {
    inp.classList.remove('inputsel');
  }
  for (let uls of inputContainerUls) {
    uls.classList.remove('showlist');
    uls.parentNode.querySelector('.arrow').classList.remove('arrow-rotate');
  }

  e.target.parentNode.querySelector('.input-container__ul').classList.toggle('showlist');

  e.target.classList.toggle('inputsel');

  e.target.nextElementSibling.nextElementSibling.classList.toggle('arrow-rotate');

  // e.target.querySelector('.placeholder').classList.add('input-field-focus'); //поднять placeholder
}

/******** Расширение рубрикатора **************** */
const ulwides = document.querySelectorAll('.ulwide');
const toHides = document.querySelectorAll('.to-hide');

for (let item of ulwides) {
  item.addEventListener('click', addWide);
}

function addWide(e) {
  e.target.parentNode.querySelector('.input-container__ul').classList.add('ul-wide');
  for (let item of toHides) {
    item.classList.add('hide-block');
  }
  setTimeout(() => {
    e.target.parentNode.querySelector('.for-button').classList.remove('hide-block');
  }, 400);
}

function removeWide(e) {
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
  for (let item of toHide2s) {
    item.classList.add('hide-block');
  }
  setTimeout(() => {
    e.target.parentNode.querySelector('.for-button').classList.remove('hide-block');
  }, 400);
}

function removeWide2(e) {
  for (let item of toHide2s) {
    item.classList.remove('hide-block');
  }

  if (e.target.classList.contains('input-reset')) {
    if (e.target.parentNode.querySelector('.for-button')) {
      e.target.parentNode.querySelector('.for-button').classList.add('hide-block');
    }
    e.target.nextElementSibling.classList.remove('ul-wide2');

    /*for (let item of toHide2s) {
      item.classList.remove('hide-block');
    }*/
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
    eselect.parentNode.querySelector('.inputselect').value = chooseInput;
    eselect.classList.remove('showlist'); //свернуть список
  } else {
    if (counter > 1) {
      eselect.parentNode.querySelector('.inputselect').value = `${inputString} (выбрано ${counter})`;
      eselect.classList.remove('showlist'); //свернуть список
    } else {
      eselect.parentNode.querySelector('.inputselect').value = '';
      if (eselect.classList.contains('showlist')) {
        eselect.classList.remove('showlist');
      }
    }
  }
  for (let item of e.target.parentNode.querySelectorAll('.input-checkbox')) {
    item.checked = false;
  }
  //eselect.querySelector('.inputselect').classList.remove('inputsel');
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

  for (let inp of staffInputSelects) {
    inp.classList.remove('inputsel');
  }
  for (let uls of staffInputContainerUls) {
    uls.classList.remove('showlist');
    uls.parentNode.querySelector('.arrow').classList.remove('arrow-rotate');
  }

  e.target.parentNode.querySelector('.input-container__ul').classList.toggle('showlist');

  e.target.classList.toggle('inputsel');

  e.target.nextElementSibling.nextElementSibling.classList.toggle('arrow-rotate');
}

//Показать выбранный select и спрятать placeholder
for (let item of staffInputContainerItems) {
  item.addEventListener('click', showStaffItemSelected);
}

function showStaffItemSelected(e) {
  staffResetAll.classList.remove('hide-block');
  showAllItemSelected(e);
}


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

    salary1_max.style.left = newLeft + 'px';

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

  e.target.classList.toggle('inputsel');

  e.target.nextElementSibling.nextElementSibling.classList.toggle('arrow-rotate');
}

//Показать выбранный select и спрятать placeholder
for (let item of anyInputContainerItems) {
  item.addEventListener('click', showAnyItemSelected);
}

function showAnyItemSelected(e) {
  anyResetAll.classList.remove('hide-block');
  showAllItemSelected(e);
}


/*********Работа с кнопками Применить в мультиселектах*******/
const anyApplBtns = chooseAny.querySelectorAll('.apply');
for (let btn of anyApplBtns) {
  btn.addEventListener('click', anyCalculateNumberOfChecked);
}

function anyCalculateNumberOfChecked(e) {
  anyResetAll.classList.remove('hide-block');
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

regionWork.onclick = () => {
  outRegion = document.getElementById('region');
  chooseRegion.classList.remove('up-block');
};
regionStaff.onclick = () => {
  outRegion = document.getElementById('region1');
  chooseRegion.classList.remove('up-block');
};
regionAny.onclick = () => {
  outRegion = document.getElementById('region2');
  chooseRegion.classList.remove('up-block');
};

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

  outRegion.nextElementSibling.classList.add('input-field-focus');
  setTimeout(() => {
    closeRegions();
  }, 200);
}

/**************Конец Выбор региона******************** */

/***Поля ввода, где текст не помещается**
 перевод в дымку и всплывающее окно***/

const charWidth = 9.5; //ширина 1 символа

function handleText() {
  const inputContainers = document.querySelectorAll('.input-container');

  for (let item of inputContainers) {
    const label_ = item.querySelector('label');
    const input_ = item.querySelector('input');

    //длина строки в символах
    const labelText = label_.innerText.length;

    //максимальная длина строки
    const maxLength = Math.round(input_.offsetWidth / charWidth);
    let popup = document.createElement('div');
    popup.innerText = label_.innerText;
    popup.classList.add('input-popup');

    if (labelText > maxLength) {
      let coef = maxLength / labelText * 100;
      label_.style.cssText = `background: linear-gradient(to right,#000 ${0.6*coef}%, #777 ${0.7*coef}%, #ddd ${0.75*coef}%, transparent 90%, transparent); -webkit-background-clip: text; -webkit-text-fill-color: transparent;`;

      //при наведении показать весь текст в попапе
      input_.onmouseover = () => {
        input_.before(popup);
        popup.style.top = input_.getBoundingClientRect().top - 40 + 'px';
        popup.style.left = input_.getBoundingClientRect().left + 'px';
      };
      input_.onmouseout = () => {
        popup.remove();
      };
    } else {
      label_.style.cssText = 'color: #333;';
      input_.onmouseover = () => {
        if (popup) {
          popup.style.display = 'none';
        }
      };
    }
  }
}

handleText();

window.addEventListener('resize', handleText);


window.onclick = (e) => {
  //console.log('target=', e.target);
  //console.log('currenttarget=', e.currentTarget);
  //alert(e.clientY);
  //console.log(document.getElementById('wide1').getBoundingClientRect().bottom);
};