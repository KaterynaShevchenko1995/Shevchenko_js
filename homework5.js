let services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн"
};
services["Розбити скло"] = "200 грн";

function parsePrice(value) {
  if (typeof value !== "string") {
    throw new Error("Ціна цц рядок");
  }

  const number = parseFloat(value);

  if (isNaN(number)) {
    throw new Error("Некоректна ціна: " + value);
  }

  return number;
}
services.price = function () {
  let total = 0;

  for (let key in this) {
    if (typeof this[key] === "function") continue;

    try {
      total += parsePrice(this[key]);
    } catch (error) {
      console.log(error.message);
    }
  }

  return total;
};
services.minPrice = function () {
  let min = Infinity;

  for (let key in this) {
    if (typeof this[key] === "function") continue;

    try {
      const price = parsePrice(this[key]);
      if (price < min) {
        min = price;
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return min === Infinity ? 0 : min;
};
services.maxPrice = function () {
  let max = -Infinity;

  for (let key in this) {
    if (typeof this[key] === "function") continue;

    try {
      const price = parsePrice(this[key]);
      if (price > max) {
        max = price;
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return max === -Infinity ? 0 : max;
};
console.log("Загальна ціна:", services.price(), "грн");
console.log("Мінімальна ціна:", services.minPrice(), "грн");
console.log("Мaксимальна ціна:", services.maxPrice(), "грн");
