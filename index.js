// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
const products = [
  { name: 'opu', price: 1000 },
  { name: 'akhi', price: 5000 },
  { name: 'siyam', price: 15000 },
];
console.log(products[0].price);
