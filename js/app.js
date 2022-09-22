'use strict';

let hoursOpen = ['6 am', '7 am', '8 am', '9am', '10 am ', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];
let table = document.createElement('table');
let storeArr = [];

function StoreLoc(location, minHr, maxHr, avg) {
  this.location = location;
  this.minHr = minHr;
  this.maxHr = maxHr;
  this.avg = avg;
  this.sales_array = this.sales();
  storeArr.push(this);
}

StoreLoc.prototype.ranNumCust = function () {
  let numCustomers = Math.floor(Math.random() * (this.maxHr - this.minHr + 1));
  return numCustomers;
};

StoreLoc.prototype.sales = function () {
  let sales_array = [];
  for (let i = 0; i < hoursOpen.length; i++) {
    let hourlySales = Math.floor(this.avg * this.ranNumCust());
    sales_array.push(hourlySales);
  }
  return sales_array;
};


StoreLoc.prototype.render = function () {
  let rows = document.createElement('tr');
  table.appendChild(rows);
  let locRow = document.createElement('td');
  locRow.innerHTML = this.location;
  rows.appendChild(locRow);

  for (let i = 0; i < this.sales_array.length; i++) {
    let newData = document.createElement('td');
    newData.innerHTML = this.sales_array[i];
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

const createTable = function () {
  document.body.appendChild(table);
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
      total += storeArr[m].sales_array[i];
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

