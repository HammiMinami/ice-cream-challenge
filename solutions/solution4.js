var flavorList = window.iceCreamFlavors;

icecreamList = $.map(flavorList, function (flavor) {
    return `<li> ${flavor} </li>`;
});

$(".ice-cream-list").append(icecreamList);