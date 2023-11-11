'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// 
// document.querySelector('.header');
// const allsections = document.querySelectorAll('.section');
// console.log(allsections);



//////////////////////// Select Element

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const val56 = document.querySelector(".header");
// console.log(val56);

const gebut56 = document.querySelectorAll('.section');
// console.log(gebut56);

const gebytn65 = document.querySelectorAll('.btn');
// console.log(gebytn65);

const geid675 = document.getElementsByTagName('button');
// console.log(geid675);

const byclna85 = document.getElementsByClassName('btn');
// console.log(byclna85);

const h11 = document.querySelector('.section__title');

h11.addEventListener('mouseenter', function (e) {
  alert("hi");
})


///////////////////// query selector

const qs1 = document.querySelectorAll('.btn');
// console.log(qs1);

////////////////////// get element by id

const gid85 = document.getElementById('section--1')
// console.log(gid85);

////////////////// tagname

const gdo86 = document.getElementsByTagName('buttons');
// console.log(gdo86);


////////////// set interval

// let start = 0;

// let count = (count, message) => {
//   console.log(`${message} is ${count}`);
// }

// setInterval(function () {
//   count(start++, 'count');
// }, 1000);

//count is 0
//count is 1
//count is 2



////////////// by class name /////////

// let valUp = 0;
// let one887 = [];


// setInterval((atc) => {
//   // updaVal()
//   atc = (valUp++);
//   one887 = valUp;
//   // console.log(`the one887 is ${one887}`);  
//   one887.push(atc)
// }, 1000);
// console.log(one887);

///////////// By class name /////////

const gCN = document.getElementsByClassName('operations__header')[0].innerHTML;
// console.log(gCN);

const GetBut = document.getElementsByTagName('button')
// console.log((GetBut));

////////////////// class name

const val34 = document.getElementsByClassName('btn');
// console.log(val34);

const red54 = document.getElementsByClassName('btn');
// console.log(red54);

/// create Element
const ref34 = document.createElement('div');
ref34.classList.add('cookie-message')
// ref34.idList.add('redmi')
// ref34.textContent = 'i love you';  
ref34.innerHTML = 'i love you Jesus . <button class="btn btn--show-modal"> click to check!</button>';


header.before(ref34);
// header.after(ref34.cloneNode(true));



//// delete element

document.querySelector('.btn--show-modal').addEventListener('click', function () {
  ref34.remove();
})

////////////// settimeout
//5 sec timeout
setTimeout(() => console.log("running after 5sec"), 5000)

setTimeout((ing1, ing2) => console.log(`${ing1} ,${ing2}  `), 3000, "olives", "spinach")


//// setTimeInterval
let ab78 = 0;

const valueToSri = [" ", "Love", "Guide", "Protect", "Provide", "Runner"];

// const reuse875 = (arr => console.log(arr));
const int43 = setInterval((i1) => {
  // console.log(i1);
  // console.log(i2);
  // reuse875(ab78++)
  // console.log(ab78++);
  ab78++
  document.write(`<h1> Sri ${ab78} ${i1[ab78]}<br> </h1>`);

  if (ab78 == 5) {
    clearTimeout(int43)
  }

}, 1000, [...valueToSri]);
















// console.log("Last Line");
