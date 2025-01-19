/**
 * Вспомогательные методы для работы со строкой.
 *
 * @type {object}
 */
export const str = {
  /**
   * Проверка на строку
   *
   * @param {any} str Строка
   *
   * @return {boolean} Флаг проверки на строку
   */
  assert(str): boolean {
    return typeof str === "string";
  },
  /**
   * Проверяет, что строка содержит значения.
   *
   * @param {any} str Строка
   *
   * @return {boolean} Флаг проверки на строку
   */
  contains(str): boolean {
    return typeof str === "string" && str.length > 0;
  },
  /**
   * Проверяет, что строка пуста.
   *
   * @param {any} str Строка
   *
   * @return {boolean} Флаг проверки на строку
   */
  empty(str): boolean {
    return typeof str === "string" && str.length === 0 && str === "";
  },
};
