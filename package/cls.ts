/**
 * Вспомогательные методы для работы с классами
 *
 * @type {object}
 */
export const cls = {
  /**
   * Проверяет, является ли класс потомком класса-прототипа.
   *
   * @param {Class} subclass Проверяемый класс.
   * @param {Class} parentClass Родительский класс-прототип.
   *
   * @return {boolean} true, если класс является потомком класса-прототипа, иначе false.
   */
  isSubclassOf(subclass, parentClass) {
    return parentClass.prototype.isPrototypeOf.call(subclass);
  },
  /**
   * Определяет имя объекта конструктора
   *
   * @param {object} obj Исходный объект.
   *
   * @return {string} Имя конструктора объекта.
   */
  name(obj) {
    return obj.__proto__.constructor.name;
  },
};
