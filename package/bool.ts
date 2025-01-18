/** 1 Node - Modules, Components, Hooks, Icons */
/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */
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
  assert(bool: any): boolean {
    return typeof bool === "boolean";
  },
};
