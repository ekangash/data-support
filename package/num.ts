/**
 * Вспомогательные методы для работы с числами.
 *
 * @type {object}
 */
export const num = {
  /**
   * Возвращает утверждение, что тип элемента - number
   *
   * @param {any} element Исходная строка
   *
   * @return {boolean} Флаг проверки на тип number
   */
  assert(element) {
    return typeof element === "number";
  },
  /**
   * Возвращает любое значение в диапазоне.
   *
   * @param {number} min
   * @param {number} max
   *
   * @return {number}
   */
  random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
};
