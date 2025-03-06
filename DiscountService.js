export class DiscountService {
  // Конструктор инициализирует начальные значения
  constructor() {
    this.strategy = null; // Стратегия скидок, по умолчанию отсутствует
    this.history = []; // История применения скидок
  }

  // Метод для установки стратегии скидок
  setDiscountStrategy = (strategy) => {
    this.strategy = strategy;
  };

  // Метод для получения итоговой цены со скидкой
  getFinalPrice = (price) => {
    // Проверка наличия установленной стратегии
    if (!this.strategy) {
      throw new Error('Стратегия скидок не установлена');
    }
    // Применение стратегии для расчета скидки
    const discountedPrice = this.strategy.apply(price);
    // Добавление записи в историю скидок
    this.history.push({ originalPrice: price, discountedPrice });
    // Возврат итоговой цены
    return discountedPrice;
  };

  // Метод для получения истории применения скидок
  getDiscountHistory = () => {
    return this.history;
  };

  // Метод для очистки истории скидок
  clearHistory = () => {
    this.history = [];
  };
}