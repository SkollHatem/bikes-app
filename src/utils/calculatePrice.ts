function calculatePrice(base: number, rate: number, rentalDays: number) {
  const additionalDays = rentalDays - rate;
  const priceForExtraDays = base * (additionalDays > 0 ? additionalDays : 0);

  return base + priceForExtraDays;
}

export default calculatePrice;
