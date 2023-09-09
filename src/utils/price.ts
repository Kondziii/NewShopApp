export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pl-PL', {
    currency: 'PLN',
    style: 'currency',
  }).format(price / 100);
};
