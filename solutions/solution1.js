var flavorList = window.iceCreamFlavors;
let icecreamList = document.querySelector(".ice-cream-list");

flavorList.forEach(flavor => {
    let item = document.createElement("li");
    item.textContent = flavor;
    icecreamList.appendChild(item);
});
