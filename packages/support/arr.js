/** 1 Node - Modules, Components, Hooks, Icons */
/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */

/**
 * Вспомогательные методы для работы с массивами.
 *
 * @type {{contains(Object): boolean, empty(Array): boolean}}
 */
export const arr = {
  /**
   * Не пустой ли массив/пропитанный.
   *
   * @param {object} arr
   *
   * @return {boolean}
   */
  contains(arr) {
    return Array.isArray(arr) && arr.length > 0;
  },
  /**
   *
   * @param {array} arr
   *
   * @return {boolean}
   */
  empty(arr) {
    return Array.isArray(arr) && arr.length === 0;
  },
};
