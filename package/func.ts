/** 1 Node - Modules, Components, Hooks, Icons */
/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */

/**
 * Вспомогательные методы для работы с функциями
 */
export const func = {
  /**
   * Проверяет, является ли переданное значение функцией
   *
   * @function
   *
   * @param {any} funcToCheck Проверяемое значение
   *
   * @return {boolean} Является ли переданное значение функцией
   */
  assert(funcToCheck) {
    return (
      typeof funcToCheck === "function" &&
      !!funcToCheck.constructor &&
      !!funcToCheck.call &&
      !!funcToCheck.apply
    );
  },
};
