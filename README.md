# Установка
```bash
$ make install
```

# Проект: Система расчета скидок

## Описание проекта

Проект представляет собой систему расчета скидок, которая позволяет применять различные стратегии скидок к ценам. Основная цель проекта — научиться работать с классами, методами, моками и тестированием в Jest.

### Функционал

**Класс DiscountService**

- `setDiscountStrategy(strategy)`: Устанавливает стратегию скидок
- `getFinalPrice(price)`: Возвращает цену с учетом скидки
- `getDiscountHistory()`: Возвращает историю всех примененных скидок
- `clearHistory()`: Очищает историю скидок

### Тесты

- Проверка корректного использования стратегии скидок
- Проверка выбрасывания ошибки, если стратегия не установлена
- Проверка сохранения истории скидок
- Проверка очистки истории
- Проверка работы с разными стратегиями

## Технологии

- Node.js
- Jest (моки, spy)

## Установка и запуск

1. Установите зависимости:
2. Запустите тесты:

## Пример использования

```javascript
import { DiscountService } from "./discounts/DiscountService";

// Создаем экземпляр сервиса
const service = new DiscountService();

// Создаем стратегию скидок (пример)
const percentageDiscount = {
  apply: (price) => price * 0.8, // 20% скидка
};

// Устанавливаем стратегию
service.setDiscountStrategy(percentageDiscount);

// Получаем цену со скидкой
const finalPrice = service.getFinalPrice(1000);
console.log(finalPrice); // 800

// Получаем историю скидок
const history = service.getDiscountHistory();
console.log(history); // [{ originalPrice: 1000, discountedPrice: 800 }]

// Очищаем историю
service.clearHistory();
console.log(service.getDiscountHistory()); // []
```
### Объяснение:
- В примере показано, как создать экземпляр `DiscountService`.
- Установлена простая стратегия скидок, которая применяет 20% скидку.
- Продемонстрировано использование методов `getFinalPrice`, `getDiscountHistory` и `clearHistory`.
- Пример помогает студентам понять, как использовать класс на практике.
