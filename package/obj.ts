/** 1 Node - Modules, Components, Hooks, Icons */
/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */
import {str, arr} from "@/packages/support";

/**
 * Вспомогательные методы для работы с объектом.
 *
 * @type {object}
 */
export const obj = {
    /**
     * Фильтрует переданный объект и возвращает перечисляемые пары свойств со строковыми ключами
     *
     * @param {object} source Исходный объект
     * @param {string[]} filterKeys Исходный объект
     *
     * @return {object} Объект, сформированный после фишьтрации переданного объекта по парам ключ-значение
     */
    filter<T = object>(source: object, filterKeys: string[]): T {
        return Object.keys(source)
            .filter((key) => !filterKeys.includes(key))
            .reduce((acc, key) => {
                acc[key] = source[key];

                return acc;
            }, {}) as T;
    },
    /**
     * Проверяет, идентичны ли два объекта.
     *
     * @param {object} source1
     * @param {object} source2
     *
     * @return {boolean} Идентичны ли объекты.
     */
    equal(source1: object, source2: object) {
        // Если типы не совпадают, объекты не равны
        if (typeof source1 !== typeof source2) {
            return false;
        }

        // Если это примитивы или null или undefined, просто сравниваем их значения
        if (source1 === null || source1 === undefined || typeof source1 !== 'object') {
            return source1 === source2;
        }

        // Если это массивы, сравниваем их элементы
        if (Array.isArray(source1) && Array.isArray(source2)) {
            if (source1.length !== source2.length) {
                return false;
            }

            for (let i = 0; i < source1.length; i++) {
                if (!this.equal(source1[i], source2[i])) {
                    return false;
                }
            }

            return true;
        }

        // Если это объекты, сравниваем их ключи и значения
        const keys1 = Object.keys(source1);
        const keys2 = Object.keys(source2);

        if (keys1.length !== keys2.length) {
            return false;
        }

        for (let key of keys1) {
            if (!keys2.includes(key) || !this.equal(source1[key], source2[key])) {
                return false;
            }
        }

        return true;
    },
    /**
     * Проверяет, есть ли у объекта ключи
     *
     * @param {object} source Исходный объект.
     *
     * @return {boolean} Флаг проверки на существование ключей объекта
     */
    contains(source) {
        return this.assert(source) && Object.keys(source).length > 0;
    },
    /**
     * Проверяет, что элемент является объектом и он не пустой
     *
     * @param {object} source Исходный объект.
     *
     * @return {boolean} Флаг проверки на объект и пустой он или нет
     */
    empty(source) {
        return this.assert(source) && Object.keys(source).length === 0;
    },
    /**
     * Проверяет, является ли элемент объектом и есть ли у него указанное свойства.
     *
     * @param {any} source Исходный объект.
     * @param {string} propName Имя свойства объекта.
     *
     * @return {boolean} Флаг проверки на объект и на существующие свойства объекта.
     */
    isset(source: any, propName: string | number): boolean {
        return this.assert(source) && source.hasOwnProperty(propName) && typeof source[propName] !== 'undefined';
    },
    /**
     * Проверяет, является ли элемент объектом
     *
     * @param {any} source Исходный элемент.
     *
     * @return {boolean} Флаг проверки на объект
     */
    assert(source: any) {
        return typeof source === 'object' && !Array.isArray(source) && source !== null && source.constructor.name === 'Object';
    },
    /**
     * Метод фильтрации объектов от неопределенных и пустых данных
     *
     * @param {object} source Исходный объект.
     *
     * @return {object} Объект с данными после фильтрации
     */
    freeFromEmptiness(source) {
        return Object.fromEntries(Object.entries(source).filter(([prop, item]) => {
            if (this.assert(item)) {
                return this.contains(item);
            } else if (Array.isArray(item)) {
                return arr.contains(item);
            } else if (typeof item === 'string') {
                return str.contains(item);
            }

            return typeof item !== 'undefined' && item !== null;
        }));
    },
    /**
     * Возвращает свойство из объекта, если она там определена.
     *
     * @param {object} source Исходный объект.
     * @param {string} names Имена свойств вложенного объекта разделенные через точку.
     * @param {any} defaultValue Значение по умолчанию.
     *
     * @return {any} Объект с данными
     */
    get<T = any>(source: object, names: string, defaultValue: any = undefined): T {
        let nameParts = names.split('.');
        let value = source;

        for (let i = 0; i < nameParts.length; i++) {
            if (!this.isset(value, nameParts[i])) {
                return defaultValue;
            }

            value = value[nameParts[i]];
        }

        return value as T;
    },
    /**
     * Вставляет/изменяет данные в объекте, не разрушая его цельность.
     *
     * @param {object} source Исходный объект.
     * @param {string} names Имена свойств вложенного объекта разделенные через точку.
     * @param {any} value Значение по умолчанию.
     *
     * @return {void}
     */
    insert(source: object, names: string, value: any): void {
        let nameParts = names.split('.');
        let currentObject = source;

        for (let i = 0; i < nameParts.length - 1; i++) {
            const name = nameParts[i];

            if (!currentObject[name]) {
                currentObject[name] = {};
            }

            currentObject = currentObject[name];
        }

        currentObject[nameParts[nameParts.length - 1]] = value;
    },
    /**
     * Возвращает только нужные свойства.
     *
     * @param {object} source Исходный объект.
     * @param {string[]} props Имена свойств.
     *
     * @return {object} Объект только с нужными свойствами.
     */
    only<T = object>(source:object, props: string[]): T {
        let extractedProps: object = {};

        for (let prop of props) {
            const value = this.get(source, prop);

            if (typeof value === 'undefined') {
                continue;
            }

            this.insert(extractedProps, prop, value);
        }

        return extractedProps as T;
    },
    /**
     * Формирует строку запроса из объекта.
     *
     * @param {object} source Исходный объект.
     * @param {string} prefix Префикс.
     *
     * @return {string} Сформированная строку запроса.
     */
    query(source: object, prefix: string = ''): string {
        return Object.entries(source).map<string>(([key, value]) => {
            const newPrefix = prefix ? `${prefix}[${key}]` : key;

            if (this.assert(value)) {
                return this.query(value, newPrefix);
            } else if (Array.isArray(value)) {
                return `${newPrefix}=${value.join(',')}`;
            }

            return `${newPrefix}=${encodeURIComponent(value)}`;
        }).join('&');
    },
    /**
     * Фильтрует объект по ключам кроме указанных
     *
     * @param {object} source Исходный объект
     * @param {string[]} omitKeys Ключи, которые будут исключены из выборки
     *
     * @return {{}} Объект, сформированный после фильтрации переданного объекта по парам ключ-значение
     */
    omit<R = {}>(source: object, omitKeys: string[] = []): R {
        return Object.keys(source)
            .filter((key) => !omitKeys.includes(key))
            .reduce((acc, key) => {
                acc[key] = source[key];

                return acc;
            }, {} as R);
    },
}