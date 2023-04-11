import './mystyles.css';
import submit from './modules/submit.js';
import maximum from './modules/maximum.js';

const buttons = document.querySelectorAll('button');

const slotFunction = (a) => {
  const maxima = maximum(a);
  const slot = document.querySelector('.slots');
  slot.innerHTML = '';
  slot.innerHTML += `<span> ${a} of ${maxima} slots </span><meter optimum="${Math.floor(0.5 * maxima)}" high="${Math.floor(0.7 * maxima)}" max="${maxima}" value="${a}"></meter>`;
};

const fetchData = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6e8u7sd3gV3AU9VxJF2f/scores');
  const data = await response.json();
  return data;
};

const getFetched = async () => {
  const values = document.querySelector('.values');
  const data = await fetchData();
  const dataArr = data.result;
  values.innerHTML = '';
  dataArr.forEach((element) => {
    values.innerHTML += `<tr><td>${element.user}: ${element.score} </td></tr>`;
  });
  slotFunction(dataArr.length);
  const trow = document.querySelectorAll('tr');
  trow.forEach((row, i) => {
    if (i % 2 === 0) row.classList.add('dark');
  });
};

buttons[0].addEventListener('click', getFetched);
buttons[1].addEventListener('click', submit);