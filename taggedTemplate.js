function transformInDollars(part, ...amount) {
  const result = [];
  amount.forEach((value, index) => {
    value = isNaN(value) ? value : `$${value.toFixed(2)}`;
    result.push(part[index], value);
  });
  return result.join(" ");
}

const price = 199.99;
const priceInstallments = 20;
console.log(transformInDollars`1x of ${price} or 10x of ${priceInstallments}.`);
