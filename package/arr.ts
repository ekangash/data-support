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
