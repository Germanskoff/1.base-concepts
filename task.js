function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  let d = b ** 2-4 * a * c;
  let x;
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    arr = [-b/(2*a)]
  } else {
    arr = [((-b + Math.sqrt(d) )/(2 * a)), ((-b - Math.sqrt(d) )/(2 * a))]
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь
  if(Number.isNaN(Number(percent)) || typeof percent === "undefined") {
    return `Параметр "Процентная ставка" содержит неправильное значение! "${percent}"`;
  }
  if(Number.isNaN(Number(contribution)) || typeof contribution === "undefined") {
    return `Параметр "Начальный взнос" содержит неправильное значение! "${contribution}"`;
  } 
  if(Number.isNaN(Number(amount)) || typeof amount === "undefined") {
    return `Параметр "Общая стоимость" содержит неправильное значение! "${amount}"`
  }
  const percentage = percent /100;
  const credit = amount - contribution;
  const dateFrom = new Date();
  const dateTo = new Date(date);
  const creditLine = dateTo.getMonth() - dateFrom.getMonth() + (12 * (dateTo.getFullYear() - dateFrom.getFullYear()));
  const monthPay = credit * ((percentage/12) + (percentage/12) / (((1 + (percentage/12))**creditLine) - 1));
  totalAmount = +((monthPay * creditLine).toFixed(2));
  return totalAmount;
}
