var flavorList = window.iceCreamFlavors;
let icecreamList = document.querySelector(".ice-cream-list");

let elementString = "";

flavorList.forEach(flavor => elementString += `<li>${flavor}</li>`);

icecreamList.innerHTML = elementString;