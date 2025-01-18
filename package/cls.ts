/** 1 Node - Modules, Components, Hooks, Icons */
/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */

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
    return parentClass.isPrototypeOf(subclass);
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
