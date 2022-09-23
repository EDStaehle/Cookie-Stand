'use strict';

let hoursOpen = ['6 am', '7 am', '8 am', '9am', '10 am ', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];
let table = document.createElement('table');

let myForm = document.getElementById('myForm');
let storeArr = [];

function StoreLoc(location, minHr, maxHr, avg) {
  this.location = location;
  this.minHr = minHr;
  this.maxHr = maxHr;
  this.avg = avg;
  this.salesArray = this.sales();
  storeArr.push(this);
}

StoreLoc.prototype.ranNumCust = function () {
  let numCustomers = Math.floor(Math.random() * (this.maxHr - this.minHr + 1));
  return numCustomers;
};

StoreLoc.prototype.sales = function () {
  let salesArray = [];
  for (let i = 0; i < hoursOpen.length; i++) {
    let hourlySales = Math.floor(this.avg * this.ranNumCust());
    salesArray.push(hourlySales);
  }
  return salesArray;
};


StoreLoc.prototype.render = function () {
  let rows = document.createElement('tr');
  table.appendChild(rows);
  let locRow = document.createElement('td');
  locRow.innerHTML = this.location;
  rows.appendChild(locRow);

  for (let i = 0; i < this.salesArray.length; i++) {
    let newData = document.createElement('td');
    newData.innerHTML = this.salesArray[i];
    rows.appendChild(newData);
  }
  let totalsRow = document.createElement('th');
  totalsRow.innerHTML = locTotals(this.sales());
  rows.appendChild(totalsRow);
};

new StoreLoc('Seattle', 23, 65, 6.3);
new StoreLoc('Tokyo', 3, 24, 1.2);
new StoreLoc('Dubai', 11, 38, 3.7);
new StoreLoc('Paris', 20, 38, 2.3);
new StoreLoc('Lima', 2, 16, 4.6);



let locTotals = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};
let main = document.querySelector('main');
const createTable = function () {
  main.appendChild(table);
  table.style.width = '100vw';
  table.style.border = '2px solid black';
};
const createHeader = function () {
  let hedRow = document.createElement('tr');
  hedRow.innerHTML = 'hours:';
  table.appendChild(hedRow);


  for (let i = 0; i < hoursOpen.length; i++) {
    let tableHeader = document.createElement('th');
    tableHeader.setAttribute('scope', 'column');
    tableHeader.innerHTML = hoursOpen[i];
    hedRow.appendChild(tableHeader);
  }
  let bttmR = document.createElement('th');
  bttmR.innerHTML = 'Daily Location Total';
  hedRow.appendChild(bttmR);
};
let createFooter = function () {
  let foot = document.createElement('tfoot');
  table.appendChild(foot);
  let totalsOverall = (document.createElement('td'));
  totalsOverall.innerHTML = 'Hourly Totals:';
  foot.appendChild(totalsOverall);

  let storeTotals = 0;
  for (let i = 0; i < hoursOpen.length; i++) {
    let total = 0;
    for (let m = 0; m < storeArr.length; m++) {
      total += storeArr[m].salesArray[i];
    }
    let totalPerHour = document.createElement('td');
    totalPerHour.innerHTML = total;
    foot.appendChild(totalPerHour);
    storeTotals += total;
  }
  let overallTotal = document.createElement('td');
  overallTotal.innerHTML = storeTotals;
  foot.appendChild(overallTotal);
};
const tableDisplayed = function () {
  createTable();
  createHeader();
  for (let i = 0; i < storeArr.length; i++) {
    storeArr[i].render();
  }
  createFooter();
};
tableDisplayed();
function deleteTFoot(){
  document.getElementById('table').deleteTFoot();
}

function newStoreData(event) {

  event.preventDefault();

  let location = document.getElementById('storeLocation').value;
  let minHr = Number(document.getElementById('minCusPerHr').value);
  let maxHr = Number(document.getElementById('maxCusPerHr').value);
  let avg = Number(document.getElementById('avgCusPerHr').value);
  console.log(location, minHr, maxHr, avg);
  let storeLocation = new StoreLoc(location, minHr, maxHr, avg);
  storeLocation.render();
  deleteTFoot();
  createFooter();
  myForm.reset();
}
myForm.addEventListener('submit', newStoreData);
