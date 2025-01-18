/** 1 Node - Modules, Components, Hooks, Icons */
/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */

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
  assert(str: any): boolean {
    return typeof str === "string";
  },
  /**
   * Проверяет, что строка содержит значения.
   *
   * @param {any} str Строка
   *
   * @return {boolean} Флаг проверки на строку
   */
  contains(str: any): boolean {
    return typeof str === "string" && str.length > 0;
  },
  /**
   * Проверяет, что строка пуста.
   *
   * @param {any} str Строка
   *
   * @return {boolean} Флаг проверки на строку
   */
  empty(str: any): boolean {
    return typeof str === "string" && str.length === 0 && str === "";
  },
};
