export const GenerateWhatsappLink = ({
  name,
  color,
  size,
  variation,
  tire,
  wheels,
}) => {
  const lines = [
    'Привет! Хочу заказать велосипед:',
    name && `— модель: ${name}`,
    color && `— цвет: ${color}`,
    size && `— размер рамы: ${size}`,
    variation && `— шатуны: ${variation}`,
    tire && `— колёса: ${tire}`,
    wheels && `— руль: ${wheels}`,
    ' ',
    'Подскажите, как оформить заказ?',
  ];

  const message = lines.filter(Boolean).join('\n');

  return `https://wa.me/77066960530?text=${encodeURIComponent(message)}`;
};
