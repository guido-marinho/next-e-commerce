export const formatPrice = (price: number | null) => price ? new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format(price / 100) : '0.00';
