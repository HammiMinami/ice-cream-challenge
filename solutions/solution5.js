var flavorList = window.iceCreamFlavors;

let elementString = "";

flavorList.forEach(flavor => elementString += `<li>${flavor}</li>`);

$(".ice-cream-list").html(elementString);