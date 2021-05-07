var country = document.forms["MyForm"]["Country"];
var CountryMenu = document.forms["MyForm"]["CountryMenu"];
CountryMenu.onchange = function () {
  let x = CountryMenu.value;
  country.value = x;
};

quantity = Number(
  document.querySelectorAll("p.Order>span.Quantity").textContent
);
minus = document.querySelectorAll("p.Order>span.Minus");
plus = document.querySelectorAll("p.Order>span.Plus");
console.log(quantity);
console.log(plus);
plus.forEach((item) =>
  item.addEventListener("click", function () {
    quantity = Number(item.previousSibling.textContent);
    item.previousSibling.textContent = quantity + 1;
    console.log(quantity);
  })
);
minus.forEach((item) =>
  item.addEventListener("click", function () {
    quantity = Number(item.nextSibling.textContent);
    if (quantity == 1) {
      item.nextSibling.textContent = quantity;
    } else {
      item.nextSibling.textContent = quantity - 1;
      console.log(quantity);
    }
  })
);
