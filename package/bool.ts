/**
 * Вспомогательные методы для работы с логическими значениями.
 *
 * @type {object}
 */
export const bool = {
  /**
   * Проверяет, является ли элемент логическим
   *
   * @param {any} bool Исходный элемент
   *
   * @return {boolean} Флаг проверки на объект
   */
  assert(bool: boolean): boolean {
    return typeof bool === "boolean";
  },
};
