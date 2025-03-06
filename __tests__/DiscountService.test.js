import { jest } from "@jest/globals";
import { DiscountService } from "../DiscountService.js";

describe("DiscountService", () => {
  let discountService;
  let mockStrategy;

  beforeEach(() => {
    discountService = new DiscountService();
    mockStrategy = { apply: jest.fn((price) => price * 0.9) };
  });

  test("устанавливает стратегию скидок", () => {
    discountService.setDiscountStrategy(mockStrategy);
    expect(discountService.strategy).toBe(mockStrategy);
  });

  test("выбрасывает ошибку, если стратегия не установлена", () => {
    expect(() => discountService.getFinalPrice(100)).toThrow("Стратегия скидок не установлена");
  });

  test("корректно рассчитывает скидку и сохраняет в историю", () => {
    discountService.setDiscountStrategy(mockStrategy);
    const finalPrice = discountService.getFinalPrice(200);
    expect(finalPrice).toBe(180);
    expect(mockStrategy.apply).toHaveBeenCalledWith(200);
    expect(discountService.getDiscountHistory()).toEqual([
      { originalPrice: 200, discountedPrice: 180 },
    ]);
  });

  test("очищает историю скидок", () => {
    discountService.setDiscountStrategy(mockStrategy);
    discountService.getFinalPrice(300);
    discountService.clearHistory();
    expect(discountService.getDiscountHistory()).toEqual([]);
  });

  test("работает с разными стратегиями", () => {
    const strategy1 = { apply: jest.fn((price) => price - 50) };
    const strategy2 = { apply: jest.fn((price) => price * 0.8) };

    discountService.setDiscountStrategy(strategy1);
    expect(discountService.getFinalPrice(200)).toBe(150);
    expect(strategy1.apply).toHaveBeenCalledWith(200);

    discountService.setDiscountStrategy(strategy2);
    expect(discountService.getFinalPrice(200)).toBe(160);
    expect(strategy2.apply).toHaveBeenCalledWith(200);
  });
});
