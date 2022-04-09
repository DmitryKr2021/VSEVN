//Избавление от мельтешений при загрузке страницы
const hide1 = document.querySelector('.hide1');
const hide2 = document.querySelector('.hide2');

document.addEventListener('DOMContentLoaded', function () {
  hide1.classList.remove('hide-block');
  hide2.classList.remove('hide-block');
});
/***********Конец блока**************** */

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
      chooseWork.classList.add('choose__work-hide');
      break;
    case ('work'):
      chooseWork.classList.remove('choose__work-hide');
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



/***********Работа с полями ввода **********/
const resetAll = document.querySelector('.reset-all'); //кнопка Очистить
const inputFields = document.querySelectorAll('.input-field');
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
/*************Конец блока************** */


/**********Работа с селектами*****************/

const inputSelects = document.querySelectorAll('.inputselect');
const inputContainerUls = document.querySelectorAll('.input-container__ul');
const inputContainerItems = document.querySelectorAll('.input-container__item');
const inputContainerArrows = document.querySelectorAll('.input-container__arrow');

window.addEventListener('click', hideSelect_1); //Показать/убрать список select

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
for (let item of inputContainerItems) {
  item.addEventListener('click', showItemSelected);
}

function showItemSelected(e) {
  let targ = e.target.parentNode.parentNode.parentNode;
  if (targ.classList.contains('input-container')) {
    //обрабатываем мультиселект;
    // return;
  }
  resetAll.classList.remove('hide-block');
  targ.querySelector('.input-container__ul').classList.toggle('showlist');
  targ.querySelector('.inputselect').value = this.innerText;
  targ.querySelector('.placeholder').classList.add('hide-block');
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
/*************Конец блока************** */


/*********Управление доп.ползунком в Range******** */
const salaryMax = 700000;
const range1 = document.querySelector('.range1');
const range2 = document.querySelector('.range2');
const range3 = document.querySelector('.range3');
const range4 = document.querySelector('.range4');
range1.value = salaryMax;
const salary = document.querySelector('.salary');
const salaryMark = document.querySelector('.salary__mark');
const salaryMarkWrap = document.querySelector('.salary__mark--wrap');
let range1Progress;
var smw = 0;
const correct = 20; //поправка на размер mark-wrap
const salMinMax = document.querySelector('.salary-min-max');
const salMin = document.querySelector('.salary-min');
const salMax = document.querySelector('.salary-max');
const salWidthInitial = salMinMax.offsetWidth;
let salWidth = salary.getBoundingClientRect().right - salary.getBoundingClientRect().left;

range1.style.background = `linear-gradient(to right, #fff 0%, #fff ${0}%, #ec0303 ${0}%, #ec0303 100%)`;
range2.style.background = `linear-gradient(to right, #fff 0%, #fff ${0}%, #ec0303 ${0}%, #ec0303 100%)`;

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

    let rightEdge = salary.offsetWidth - salaryMarkWrap.offsetWidth;
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

/*************Конец блока************** */



/***********Работа с кнопкой Очистить**********/
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

/*************Конец блока************** */



/*************Конец блока************** */
window.onclick = (e) => {

  //console.log(e.target);
};