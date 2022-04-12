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

const tabsTitles = document.querySelectorAll('.tabs__title');
for (let btn of tabsTitles) {
  btn.addEventListener('click', changeSearchType);
}

function changeSearchType(e) {
  for (let btn of tabsTitles) {
    btn.classList.remove('_tab-active');
    e.target.classList.add('_tab-active');
  }

  switch (e.target.getAttribute('data-type')) {
    case ('staff'):
      chooseStaff.classList.remove('choose__staff-hide');
      chooseAny.classList.add('choose__any-hide');
      chooseWork.classList.add('choose__work-hide');
      break;
    case ('work'):
      chooseWork.classList.remove('choose__work-hide');
      chooseAny.classList.add('choose__any-hide');
      chooseStaff.classList.add('choose__staff-hide');
      break;
    case ('any'):
      chooseAny.classList.remove('choose__any-hide');
      chooseWork.classList.add('choose__work-hide');
      chooseStaff.classList.add('choose__staff-hide');
      break;
  }
}
/*************Конец блока*****************/

//Скрыть/показать поисковую панель
const rollUp = document.querySelector('.roll-up');
const rollUpBtn = document.querySelector('.roll-up__btn');
const rollUpSpan = document.querySelector('.roll-up__span');
let flagShow = true;

rollUpBtn.onclick = () => {
  if (flagShow) {
    rollUpSpan.innerText = 'Показать поисковую панель';
    rollUp.classList.add('active');
    document.querySelector('.choose').classList.add('hide-block');
  } else {
    rollUpSpan.innerText = 'Скрыть поисковую панель';
    rollUp.classList.remove('active');
    document.querySelector('.choose').classList.remove('hide-block');
  }
  flagShow = !flagShow;
};
/*************Конец блока************** */

/*************************Блок Поиск работы*********************** */
/***********Работа с полями ввода и кнопкой Очистить**********/
const resetAll = chooseWork.querySelector('.reset-all'); //кнопка Очистить
const inputFields = chooseWork.querySelectorAll('.input-field');
window.addEventListener('click', showInput);

function showInput(e) { //убрать placeholder и показать input
  if (e.target !== resetAll) {
    for (let inp of inputFields) {
      if (inp.value) {
        inp.parentNode.querySelector('.placeholder').classList.add('hide-block');
        resetAll.classList.remove('hide-block');
      } else {
        inp.parentNode.querySelector('.placeholder').classList.remove('hide-block');
      }
    }
  }
}
/*************Конец блока с полями ввода************** */


/**********Работа с селектами*****************/

const inputSelects = chooseWork.querySelectorAll('.inputselect');
const inputMultis = chooseWork.querySelectorAll('.item-multi');
const inputContainerUls = chooseWork.querySelectorAll('.input-container__ul');
const inputContainerItems = chooseWork.querySelectorAll('.input-container__item');
const inputContainerArrows = chooseWork.querySelectorAll('.input-container__arrow');

chooseWork.addEventListener('click', hideSelect_1); //Показать/убрать список select

function hideSelect_1(e) {
  //нажали на стрелочку
  if (e.target.classList.contains('input-container__arrow')) {
    e.target.parentNode.querySelector('.input-container__ul').classList.toggle('showlist');
    e.target.previousElementSibling.previousElementSibling.classList.toggle('inputsel');
    e.target.classList.toggle('arrow-rotate');
    return;
  }
  //нажали вне поля выбора
  if (!e.target.classList.contains('inputselect')) {

    for (let uls of inputContainerUls) {
      if (e.target.parentNode.parentNode !== uls) {
        uls.classList.remove('showlist');
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
}


//Показать выбранный select и спрятать placeholder
//for (let item of inputContainerItems) {
for (let item of inputMultis) {
  item.addEventListener('click', showItemSelected);
}

function showItemSelected(e) {
  let targ = e.target.parentNode.parentNode.parentNode;
  if (targ.classList.contains('input-container')) {
    //обрабатываем мультиселект;
    //return;
  }
  resetAll.classList.remove('hide-block');
  //targ.querySelector('.input-container__ul').classList.toggle('showlist');

  console.log(targ.querySelector('.input-container__ul'));

  targ.querySelector('.inputselect').value = this.innerText;
  //targ.querySelector('.placeholder').classList.add('hide-block');
}


/*********Работа с кнопками Применить в мультиселектах*******/
const applBtns = document.querySelectorAll('.apply');
for (let btn of applBtns) {
  btn.addEventListener('click', calculateNumberOfChecked);
}

function calculateNumberOfChecked(e) {
  resetAll.classList.remove('hide-block');
  //В каком мультиселекте нажата копка Применить
  const eselect = e.target.parentNode;
  const inputs = eselect.querySelectorAll('input');
  let counter = 0;
  for (let inp of inputs) {
    if (inp.checked) {
      counter++;
    }
  }
  if (counter) {
    eselect.parentNode.querySelector('.inputselect').value = 'Выбрано ' + counter;
    eselect.classList.remove('showlist'); //свернуть список
  } else {
    eselect.parentNode.querySelector('.inputselect').value = '';
    eselect.classList.remove('showlist');
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

    salMin.innerText = Math.round(smw * 70) * 100;

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
  salMax.innerText = Math.round(range1.value / 1000) * 1000;
};

/**********Конец блока Управление доп.ползунком в Range1**********/

/***********Работа с кнопкой Очистить вкладка Поиск работы**********/
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
/***************Конец блока Поиск работы****************************/


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

/***********Работа с полями ввода и кнопкой Очистить**********/
const staffResetAll = chooseStaff.querySelector('.staff__reset-all'); //кнопка Очистить
const staffInputFields = chooseStaff.querySelectorAll('.input-field');
window.addEventListener('click', staffShowInput);

function staffShowInput(e) { //убрать placeholder и показать input
  if (e.target !== staffResetAll) {
    for (let inp of staffInputFields) {
      if (inp.value) {

        console.log('inp=', inp.value);
        inp.parentNode.querySelector('.placeholder').classList.add('hide-block');
        staffResetAll.classList.remove('hide-block');
      } else {
        inp.parentNode.querySelector('.placeholder').classList.remove('hide-block');
      }
    }
  }
}
/**********Работа с селектами*****************/

const staffInputSelects = chooseStaff.querySelectorAll('.inputselect');
const staffInputContainerUls = chooseStaff.querySelectorAll('.input-container__ul');
const staffInputContainerItems = chooseStaff.querySelectorAll('.input-container__item');
const staffInputContainerArrows = chooseStaff.querySelectorAll('.input-container__arrow');

chooseStaff.addEventListener('click', hideSelect_staff1); //Показать/убрать список select

function hideSelect_staff1(e) {
  //нажали на стрелочку
  if (e.target.classList.contains('input-container__arrow')) {
    e.target.parentNode.querySelector('.input-container__ul').classList.toggle('showlist');
    e.target.previousElementSibling.previousElementSibling.classList.toggle('inputsel');
    e.target.classList.toggle('arrow-rotate');
    return;
  }
  //нажали вне поля выбора
  if (!e.target.classList.contains('inputselect')) {

    for (let uls of staffInputContainerUls) {
      if (e.target.parentNode.parentNode !== uls) {
        uls.classList.remove('showlist');
      }
    }
    for (let item of staffInputSelects) {
      item.classList.remove('inputsel');
    }
    for (let arrow of staffInputContainerArrows) {
      arrow.classList.remove('arrow-rotate');
    }
  }
}

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
  let targ = e.target.parentNode.parentNode.parentNode;
  if (targ.classList.contains('input-container')) {
    //обрабатываем мультиселект;
  }
  staffResetAll.classList.remove('hide-block');
  targ.querySelector('.input-container__ul').classList.toggle('showlist');
  targ.querySelector('.inputselect').value = this.innerText;
  targ.querySelector('.placeholder').classList.add('hide-block');
}


/*********Работа с кнопками Применить в мультиселектах*******/
/*const applBtns = document.querySelectorAll('.apply');
for (let btn of applBtns) {
  btn.addEventListener('click', calculateNumberOfChecked);
}

function calculateNumberOfChecked(e) {
  resetAll.classList.remove('hide-block');
  //В каком мультиселекте нажата копка Применить
  const eselect = e.target.parentNode;
  const inputs = eselect.querySelectorAll('input');
  let counter = 0;
  for (let inp of inputs) {
    if (inp.checked) {
      counter++;
    }
  }
  if (counter) {
    eselect.parentNode.querySelector('.inputselect').value = 'Выбрано ' + counter;
    eselect.classList.remove('showlist'); //свернуть список
  } else {
    eselect.parentNode.querySelector('.inputselect').value = '';
    eselect.classList.remove('showlist');
  }
}*/
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

    age_min.innerText = Math.round(ageMin + (ageMax - ageMin) * newLeft / age_.offsetWidth);
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

    age_max.innerText = Math.round(ageMin + 1 + (ageMax - ageMin) * newLeft / age_.offsetWidth);
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

    salary1_min.innerText = Math.round((salary1Min + (salary1Max - salary1Min) * newLeft / salary1_.offsetWidth) / 100) * 100;
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

    salary1_max.innerText = Math.round((salary1Min + (salary1Max - salary1Min) * (newLeft + 18) / salary1_.offsetWidth) / 1000) * 1000;
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
  for (let inp of inputSelects) {
    inp.parentNode.querySelector('label').classList.remove('hide-block');
  }

  //range1.style.background = `linear-gradient(to right, #fff 0%, #fff ${0}%, #ec0303 ${0}%, #ec0303 100%)`;

  staffResetAll.classList.add('hide-block');

  setTimeout(() => {
    range1.value = salaryMax;
    salMax.innerText = salaryMax;
    salMin.innerText = 0;
    salMinMax.style.width = salWidthInitial + 'px';
    salMinMax.style.left = 0 + 'px';
    salaryMarkWrap.style.left = -correct + 'px';
  }, 10);
}
/*************Конец блока Работа с кнопкой Очистить************** */
/**************Конец блока Поиск сотрудников***************** */


/******************Блок Любая категория***************** */

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
    let rightShift = (parseFloat(getComputedStyle(salary2_max).left) + 10) / salary2_.offsetWidth * 100;

    range3.style.background = `linear-gradient(to right, #fff 0%, #fff ${leftShift}%, #ec0303 ${leftShift}%, #ec0303 ${rightShift}%, #fff ${rightShift}%, #fff 100%)`;

    salary2_min.innerText = Math.round((salary2Min + (salary2Max - salary2Min) * newLeft / salary2_.offsetWidth) / 100) * 100;
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

    salary2_max.style.left = newLeft + 'px';

    range3.style.background = `linear-gradient(to right, #fff 0%, #fff ${leftShift}%, #ec0303 ${leftShift}%, #ec0303 ${rightShift}%, #fff ${rightShift}%, #fff 100%)`;

    salary2_max.innerText = Math.round((salary2Min + (salary2Max - salary2Min) * (newLeft + 18) / salary2_.offsetWidth) / 1000) * 1000;
  }

  function salary2RightMouseUp() {
    document.removeEventListener('mousemove', salary2RightMouseMove);
    document.removeEventListener('mouseup', salary2RightMouseUp);
    chooseAny.querySelector('.salary2__mark-right').classList.remove('mark--active');
  }
}
/****************Конец шкала Зарплата2************ */

/*************Конец блока Любая категория************** */



window.onclick = (e) => {
  console.log(e.target);
};