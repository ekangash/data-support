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
