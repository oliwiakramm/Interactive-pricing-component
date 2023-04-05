const rangeInp = document.getElementById("billing");
const priceEl = document.querySelector(".card__amount");
const viewsEl = document.querySelector(".card__views");
const radioInpts = document.querySelectorAll('input[type="radio"]');
const toggleBtn = document.querySelector(".card__toggle");

const amountArray = [
  [8, "10K"],
  [12, "50k"],
  [16, "100k"],
  [24, "500k"],
  [36, "1M"],
];
let discount = null;

function updateInfo() {
  let price = amountArray[rangeInp.value][0];
  if (discount) {
    price = price - price * 0.25;
    priceEl.textContent = `$${price.toFixed(2)}`;
  } else {
    priceEl.textContent = `$${price.toFixed(2)}`;
  }
  viewsEl.textContent = `${amountArray[rangeInp.value][1]}`;
}

rangeInp.addEventListener("input", function (e) {
  updateInfo();
  rangeInp.style.backgroundSize = `${e.target.value * 25}% 100%`;
});

radioInpts.forEach((radio) => {
  radio.addEventListener("input", function (e) {
    if (e.target.id === "yearly") {
      discountData(true);
    } else {
      discountData(false);
    }
  });
});

toggleBtn.addEventListener("click", function () {
  if (toggleBtn.classList.contains("yearly")) {
    discountData(false);
  } else {
    discountData(true);
  }
});

function discountData(discFlag) {
  if (discFlag) {
    discount = discFlag;
    toggleBtn.classList.add("yearly");
    updateInfo();
  } else {
    discount = discFlag;
    toggleBtn.classList.remove("yearly");
    updateInfo();
  }
}
