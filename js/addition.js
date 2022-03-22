let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);

scrollHeight = document.documentElement.scrollHeight;

const percentScrollDiv = document.querySelector('.percent-scroll');
document.onscroll = () => {
  percentScrollDiv.style.width = `${1.09*document.documentElement.scrollWidth*window.pageYOffset/scrollHeight}px`;
};

/* Работа с кнопкой Очистить */
/* Показать кнопку Очистить только если что-то выбрано */
const inputsBtnBlues = document.querySelectorAll('.inputs__btn--blue');
let flag = 'any';
const tabs1 = document.querySelector('.tabs__1'); //типы поиска
const tabs1Btns = tabs1.querySelectorAll('button'); //кнопки типов поиска
for (let btn of tabs1Btns) {
  btn.addEventListener('click', handlerTabs1); //обработка нажатия 
}

const inputsLabelSel = document.querySelectorAll('.inputs__label--sel');

for (let inp of inputsLabelSel) {
  inp.onclick = whereClick;
}

function handlerTabs1(e) {
  for (let inp of inputsLabelSel) {
    inp.onclick = whereClick;
  } //Показать кнопку Очистить при нажатьии на любой select

  if (e.target.classList.contains('staff')) { //Поиск сотрудников
    flag = 'staff';
    const inputsRow = document.querySelector('.inputs__row--1');
    const rowInputs = inputsRow.querySelectorAll('input');
    const selectRegionSubmit = document.getElementById('select__region-submit'); //кнопка "Выбрать" регион в попапе
    const regions = document.querySelectorAll('input[name="select__region"]');

    selectRegionSubmit.onclick = () => {
      for (let item of regions) {
        if (item.checked) {
          showClean();
        }
      }
    };
    for (let inp of rowInputs) {
      inp.addEventListener('input', showClean);
    }
  }

  if (e.target.classList.contains('employ')) {
    flag = 'employ';
    const inputsRow = document.querySelector('.inputs__row--2');
    const rowInputs = inputsRow.querySelectorAll('input');
    const rowLabels = inputsRow.querySelectorAll('input');

    console.log(inputsRow);
    console.log(rowInputs);
    console.log(rowLabels);

    const selectRegionSubmit = document.getElementById('select__region-submit'); //кнопка "Выбрать" регион в попапе
    const regions = document.querySelectorAll('input[name="select__region"]');

    selectRegionSubmit.onclick = () => {
      for (let item of regions) {
        if (item.checked) {
          showClean();
        }
      }
    };
    for (let inp of rowInputs) {
      console.log(inp);
      inp.addEventListener('input', showClean);
    }
  }

  if (e.target.classList.contains('any')) {
    flag = 'any';
  }

}

function showClean() {
  for (let btn of inputsBtnBlues) {
    if (btn.classList.contains(flag)) {
      btn.style.display = 'block';
    }
    const empl = document.getElementById('employ');
    if (btn.classList.contains('any')) {
      empl.style.display = 'block';
    } //Кнопку Очистить для Поиска работы авторы испортили
  }
}

function whereClick(e) {
  //По умолчанию со старта
  if (flag == 'any' && e.target.classList.contains('select__option')) {
    document.getElementById('any').style.display = 'block';
  }

  let target = e.target;
  if (target.getAttribute('data-value')) {
    showClean();
  }
}