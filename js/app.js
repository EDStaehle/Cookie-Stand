'use strict';


let hoursOpen = ['6 am', '7 am', '8 am', '9am', '10 am ', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];

let Seattle = {
  name: 'Seattle',
  minHr: 23,
  maxHr: 65,
  avg: 6.3,
  random_number_customers: function randomNumCustomers() {
    let numCustomers = Math.floor(Math.random() * (this.maxHr - this.minHr + 1));
    return numCustomers;
  },
  salesArray: function sales() {
    let sales_array = [];
    for (let i = 0; i < hoursOpen.length; i++) {
      let hourlySales = Math.floor(this.avg * this.random_number_customers());
      sales_array.push(hourlySales);
    }
    return sales_array;
  }
};

let Tokyo = {
  name: 'Tokyo',
  minHr: 3,
  maxHr: 24,
  avg: 1.2,
  random_number_customers: function randomNumCustomers() {
    let numCustomers = Math.floor(Math.random() * (this.maxHr - this.minHr + 1));
    return numCustomers;
  },
  salesArray: function sales() {
    let sales_array = [];
    for (let i = 0; i < hoursOpen.length; i++) {
      let hourlySales = Math.floor(this.avg * this.random_number_customers());
      sales_array.push(hourlySales);
    }
    return sales_array;
  }
};
let Dubai = {
  name: 'Dubai',
  minHr: 11,
  maxHr: 38,
  avg: 3.7,
  random_number_customers: function randomNumCustomers() {
    let numCustomers = Math.floor(Math.random() * (this.maxHr - this.minHr + 1));
    return numCustomers;
  },
  salesArray: function sales() {
    let sales_array = [];
    for (let i = 0; i < hoursOpen.length; i++) {
      let hourlySales = Math.floor(this.avg * this.random_number_customers());
      sales_array.push(hourlySales);
    }
    return sales_array;
  }
};
let Paris = {
  name: 'Paris',
  minHr: 20,
  maxHr: 38,
  avg: 2.3,
  random_number_customers: function randomNumCustomers() {
    let numCustomers = Math.floor(Math.random() * (this.maxHr - this.minHr + 1));
    return numCustomers;
  },
  salesArray: function sales() {
    let sales_array = [];
    for (let i = 0; i < hoursOpen.length; i++) {
      let hourlySales = Math.floor(this.avg * this.random_number_customers());
      sales_array.push(hourlySales);
    }
    return sales_array;
  }
};
let Lima = {
  name: 'Lima',
  minHr: 2,
  maxHr: 16,
  avg: 4.6,
  random_number_customers: function randomNumCustomers() {
    let numCustomers = Math.floor(Math.random() * (this.maxHr - this.minHr + 1));
    return numCustomers;
  },
  salesArray: function sales() {
    let sales_array = [];
    for (let i = 0; i < hoursOpen.length; i++) {
      let hourlySales = Math.floor(this.avg * this.random_number_customers());
      sales_array.push(hourlySales);
    }
    return sales_array;
  }
};
let storeArr = [Seattle, Tokyo, Dubai, Paris, Lima];

let locTotals = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};
const salesDisplayed = function () {
  for (let i = 0; i < storeArr.length; i++) {

    let section = document.createElement('section');
    let title = document.createElement('h2');
    let list = document.createElement('ul');

    let locSales = storeArr[i].salesArray();

    document.body.appendChild(section);
    title.innerHTML = storeArr[i].name;
    section.appendChild(title);
    section.appendChild(list);

    for (let i = 0; i < locSales.length; i++) {
      let liElem = document.createElement('li');
      liElem.innerHTML = `${hoursOpen[i]}: ${locSales[i]} cookies`;
      list.appendChild(liElem);
      console.log(liElem);
    }
    let sumElem = document.createElement('li');
    sumElem.setAttribute('id','saleTotals');
    sumElem.innerHTML = `Total sales: ${locTotals(locSales)} cookies`;
    list.appendChild(sumElem);
  }
};
salesDisplayed();
