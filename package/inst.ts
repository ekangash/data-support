/**
 * Вспомогательные методы для работы с экземплярами классов,
 * которые были сформированы через конструкцию 'new Class()'.
 *
 * @type {object}
 */
export const inst = {
  /**
   * Проверяет, является ли элемент объектом и есть ли у него указанное свойства
   *
   * @param {any} instance Исходный экземпляр.
   * @param {string} propName Имя свойства объекта
   *
   * @return {boolean} Флаг проверки на объект и на существующие свойства объекта
   */
  isset(instance, propName) {
    return (
      this.assert(instance) &&
      instance.hasOwnProperty(propName) &&
      typeof instance[propName] !== "undefined"
    );
  },
  /**
   * Возвращает свойство из объекта, если она там определена.
   *
   * @param {any} instance Исходный экземпляр.
   * @param {string} name Имя свойства
   * @param {any} [defaultValue=null] Значение по умолчанию.
   *
   * @return {any} Значение.
   */
  get(instance, name: string, defaultValue = undefined) {
    return this.isset(instance, name) ? instance[name] : defaultValue;
  },
  /**
   * Проверяет, является ли переданное значение экземпляром какого-либо класса
   *
   * @param {any} instance Исходный экземпляр.
   *
   * @return {boolean} Является ли переданное значение экземпляром какого-либо класса
   */
  assert(instance) {
    return (
      typeof instance === "object" &&
      instance !== null &&
      !Array.isArray(instance) &&
      instance.constructor.name !== "Object" &&
      instance.__proto__.constructor.name !== "Function" &&
      instance.__proto__.constructor.name !== "Object"
    );
  },
  /**
   * Возвращает только нужные свойства.
   *
   * @param {any} instance Исходный экземпляр.
   * @param {string[]} propNames Имена свойств.
   *
   * @return {object} Объект только с нужными свойствами.
   */
  only(instance, propNames) {
    let extractedProps = {};

    for (let propName of propNames) {
      if (this.isset(instance, propName)) {
        extractedProps[propName] = instance[propName];
      }
    }

    return extractedProps;
  },
  /**
   * Проверяет, определен метод в экземпляре объекта.
   *
   * @param {any} instance Исходный экземпляр.
   * @param {string} name Имя
   *
   * @return {boolean}
   */
  in(instance, name) {
    return this.assert(instance) && name in instance;
  },
  /**
   * Определяет имя объекта конструктора
   *
   * @param {object} instance Исходный объект.
   *
   * @return {string} Имя конструктора объекта.
   */
  constructorName(instance) {
    return instance.__proto__.constructor.name;
  },
};
