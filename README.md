# Public NPM `data-support` package

Текущая [npm библиотека](https://www.npmjs.com/package/data-support?activeTab=readme) вспомогательных модулей призвана упрощать манипулирование данных в JavaScript.
Исходный код размещен в репозиторий на [GitHub](https://github.com/ekangash/data-support).

## Установка

Вы можете установить библиотеку через npm:

```shell
npm install data-support
```

## Импорт

Импортируйте необходимые функции из библиотеки:

```TypeScript
import { obj, arr, bool, str, cls, fls, datetime, dts, func, inst, num, form} from "data-support";
```

### Модуль `obj`

Модуль `obj` содержит функции для работы с объектами в JavaScript. Этот модуль упрощает работу с данными и помогает избежать распространенных ошибок при манипуляции объектами.

#### Функции модуля

##### 1. **`filter<T = object>(source: object, filterKeys: string[]): T`**

Фильтрует переданный объект и возвращает новый объект, исключая указанные ключи.

- **Параметры:**
  - `source`: Исходный объект, который нужно отфильтровать.
  - `filterKeys`: Массив строковых ключей, которые нужно исключить из результата.

- **Возвращает:**
  - Новый объект, сформированный после фильтрации.

**Пример использования:**

```typescript
import { obj } from "data-support";

const filtered = obj.filter({ a: 1, b: 2, c: 3 }, ['b']);
console.log(filtered); // { a: 1, c: 3 }
```

##### 2. **`equal(source1: object, source2: object): boolean`**

Проверяет, идентичны ли два объекта.

- **Параметры:**
  - `source1`: Первый объект для сравнения.
  - `source2`: Второй объект для сравнения.

- **Возвращает:**
  - `true`, если объекты идентичны; иначе `false`.

**Пример использования:**

```typescript
import { obj } from "data-support";

const isEqual = obj.equal({ a: 1 }, { a: 1 });
console.log(isEqual); // true

const isNotEqual = obj.equal({ a: 1 }, { a: 2 });
console.log(isNotEqual); // false
```

##### 3. **`contains(source: any): boolean`**

Проверяет, есть ли у объекта ключи.

- **Параметры:**
  - `source`: Исходный объект.

- **Возвращает:**
  - `true`, если у объекта есть ключи; иначе `false`.

**Пример использования:**

```typescript
import { obj } from "data-support";

const hasKeys = obj.contains({ a: 1 });
console.log(hasKeys); // true

const emptyObject = {};
console.log(obj.contains(emptyObject)); // false
```

##### 4. **`empty(source: any): boolean`**

Проверяет, является ли объект пустым.

- **Параметры:**
  - `source`: Исходный объект.

- **Возвращает:**
  - `true`, если объект пустой; иначе `false`.

**Пример использования:**

```typescript
import { obj } from "data-support";

const isEmpty = obj.empty({});
console.log(isEmpty); // true

const filledObject = { a: 1 };
console.log(obj.empty(filledObject)); // false
```

##### 5. **`isset(source: any, propName: string | number): boolean`**

Проверяет, существует ли указанное свойство у объекта.

- **Параметры:**
  - `source`: Исходный объект.
  - `propName`: Имя свойства для проверки.

- **Возвращает:**
  - `true`, если свойство существует; иначе `false`.

**Пример использования:**

```typescript
import { obj } from "data-support";

const myObject = { a: 1 };
console.log(obj.isset(myObject, 'a')); // true
console.log(obj.isset(myObject, 'b')); // false
```

##### 6. **`assert(source: any): boolean`**

Проверяет, является ли элемент объектом.

- **Параметры:**
  - `source`: Исходный элемент.

- **Возвращает:**
  - `true`, если элемент является объектом; иначе `false`.

**Пример использования:**

```typescript
import { obj } from "data-support";

console.log(obj.assert({})); // true
console.log(obj.assert([])); // false (массив не считается обычным объектом)
```

##### 7. **`freeFromEmptiness(source: any): { [k: string]: unknown }`**

Фильтрует объект от неопределенных и пустых данных.

- **Параметры:**
  - `source`: Исходный объект.

- **Возвращает:**
  - Объект с данными после фильтрации.

**Пример использования:**

```typescript
import { obj } from "data-support";

const cleanedObject = obj.freeFromEmptiness({
    a: undefined,
    b: null,
    c: "",
    d: "valid data"
});
console.log(cleanedObject); // { d: 'valid data' }
```

##### 8. **`get<T extends object = any>(source: object, names: string, defaultValue?: any): T`**

Возвращает значение свойства из объекта по указанному пути. Если свойство не определено, возвращает значение по умолчанию.
Поддерживает точечную нотацию и вложенную структуру данных.

- **Параметры:**
  - `source`: Исходный объект.
  - `names`: Имена свойств вложенного объекта разделенные через точку.
  - `defaultValue`: Значение по умолчанию (по умолчанию `undefined`).

- **Возвращает:**
  - Значение свойства или значение по умолчанию.

**Пример использования:**

```typescript
import { obj } from "data-support";

const myObject = { user: { name: "Alice" } };
const name = obj.get(myObject, "user.name", "Unknown");
console.log(name); // Alice

const age = obj.get(myObject, "user.age", "Not specified");
console.log(age); // Not specified
```

##### 9. **`insert(source: object, names: string, value: any): void`**

Вставляет или изменяет данные в объекте без разрушения его структуры.

- **Параметры:**
  - `source`: Исходный объект.
  - `names`: Имена свойств вложенного объекта разделенные через точку.
  - `value`: Значение для установки.

- **Возвращает:**
  - Ничего не возвращает (void).

**Пример использования:**

```typescript
import { obj } from "data-support";

const myObject = {};
obj.insert(myObject, "user.name", "Bob");
console.log(myObject); // { user: { name: 'Bob' } }
```

##### 10. **`only<T = object>(source: object, props: string[]): T`**

Возвращает новый объект только с указанными свойствами из исходного объекта.

- **Параметры:**
  - `source`: Исходный объект.
  - `props`: Массив имен свойств для извлечения.

- **Возвращает:**
  - Новый объект только с нужными свойствами.

**Пример использования:**

```typescript
import { obj } from "data-support";

const myObject = { a: 1, b: 2, c: 3 };
const onlyAB = obj.only(myObject, ["a", "b"]);
console.log(onlyAB); // { a: 1, b: 2 }
```

##### 11. **`query(source: object, prefix?: string): string`**

Формирует строку запроса из объекта. Полезно для создания URL-параметров из объектов данных.

- **Параметры:**
  - `source`: Исходный объект.
  - `prefix`: Префикс для параметров (по умолчанию пустой).

- **Возвращает:**
  - Сформированную строку запроса.

**Пример использования:**

```typescript
import { obj } from "data-support";

const queryParams = obj.query({ searchTerm: 'test', pageNumber: 2 });
console.log(queryParams); // searchTerm=test&pageNumber=2
```

##### 12. **`omit<R = {}>(source: object, omitKeys?: string[]): R`**

Фильтрует объект по ключам кроме указанных и возвращает новый объект.

- **Параметры:**
  - `source`: Исходный объект.
  - `omitKeys`: Ключи, которые будут исключены из выборки (по умолчанию пустой массив).

- **Возвращает:**
  - Новый объект без указанных ключей.

**Пример использования:**

```typescript
import { obj } from "data-support";

const myObject = { a: 1, b: 2, c: 3 };
const omitted = obj.omit(myObject, ["b"]);
console.log(omitted); // { a: 1, c: 3 }
```

### Модуль `arr`

Модуль `arr` предоставляет функции для проверки и манипуляции массивами.

#### Функции модуля

##### 1. **`contains(arr: any): boolean`**

Проверяет, содержит ли массив хотя бы один элемент.

- **Параметры:**
    - `arr`: Массив, который нужно проверить. Может быть любого типа, но ожидается, что это будет массив.

- **Возвращает:**
    - `true`, если массив не пустой и содержит хотя бы один элемент.
    - `false`, если массив пустой.

**Пример использования:**

```typescript
import { arr } from "data-support";

const myArray = [1, 2, 3];
console.log(arr.contains(myArray)); // true

const emptyArray = [];
console.log(arr.contains(emptyArray)); // false
```

##### 2. **`empty(arr: any): boolean`**

Проверяет, является ли массив пустым.

- **Параметры:**
    - `arr`: Массив, который нужно проверить. Ожидается, что это будет массив.

- **Возвращает:**
    - `true`, если массив пустой (не содержит элементов).
    - `false`, если в массиве есть хотя бы один элемент.

**Пример использования:**

```typescript
import { arr } from "data-support";

const myArray = [];
console.log(arr.empty(myArray)); // true

const filledArray = [1, 2, 3];
console.log(arr.empty(filledArray)); // false
```


Вот подробное описание модуля `inst`, который предоставляет вспомогательные методы для работы с экземплярами классов в библиотеке `data-support`. Это описание можно использовать в вашем `README.md`, чтобы другие разработчики могли легко понять, как использовать этот модуль.

### Модуль `inst`

Модуль `inst` содержит функции для работы с экземплярами классов, созданными с использованием конструкции `new Class()`. Он предоставляет методы для проверки свойств, получения значений и работы с методами экземпляров.

#### Функции модуля

##### 1. **`isset(instance: any, propName: string): boolean`**

Проверяет, существует ли указанное свойство у переданного экземпляра.

- **Параметры:**
  - `instance`: Исходный экземпляр, который нужно проверить.
  - `propName`: Имя свойства, которое необходимо проверить.

- **Возвращает:**
  - `true`, если свойство существует у экземпляра.
  - `false`, если свойство не существует.

**Пример использования:**

```typescript
import { inst } from "data-support";

class Person {
    constructor(public name: string) {}
}

const personInstance = new Person("Alice");
console.log(inst.isset(personInstance, "name")); // true
console.log(inst.isset(personInstance, "age"));  // false
```

##### 2. **`get(instance: any, name: string, defaultValue?: any): any`**

Возвращает значение указанного свойства из экземпляра. Если свойство не определено, возвращает значение по умолчанию.

- **Параметры:**
  - `instance`: Исходный экземпляр.
  - `name`: Имя свойства, значение которого нужно получить.
  - `defaultValue`: Значение по умолчанию (по умолчанию `undefined`).

- **Возвращает:**
  - Значение свойства, если оно определено; иначе значение по умолчанию.

**Пример использования:**

```typescript
import { inst } from "data-support";

class User {
    constructor(public username: string) {}
}

const userInstance = new User("john_doe");
console.log(inst.get(userInstance, "username")); // john_doe
console.log(inst.get(userInstance, "age", 30));   // 30 (значение по умолчанию)
```

##### 3. **`assert(instance: any): boolean`**

Проверяет, является ли переданное значение экземпляром какого-либо класса.

- **Параметры:**
  - `instance`: Исходный экземпляр.

- **Возвращает:**
  - `true`, если значение является экземпляром класса.
  - `false`, если нет.

**Пример использования:**

```typescript
import { inst } from "data-support";

class Animal {}

const animalInstance = new Animal();
console.log(inst.assert(animalInstance)); // true
console.log(inst.assert({}));              // false
```

##### 4. **`only(instance: any, propNames: string[]): object`**

Возвращает новый объект, содержащий только указанные свойства из исходного экземпляра.

- **Параметры:**
  - `instance`: Исходный экземпляр.
  - `propNames`: Массив имен свойств, которые нужно извлечь.

- **Возвращает:**
  - Объект только с указанными свойствами.

**Пример использования:**

```typescript
import { inst } from "data-support";

class Product {
    constructor(public id: number, public name: string, public price: number) {}
}

const productInstance = new Product(1, "Laptop", 999);
const filteredProduct = inst.only(productInstance, ["id", "name"]);
console.log(filteredProduct); // { id: 1, name: 'Laptop' }
```

##### 5. **`in(instance: any, name: string): boolean`**

Проверяет, определен ли метод в экземпляре объекта.

- **Параметры:**
  - `instance`: Исходный экземпляр.
  - `name`: Имя метода.

- **Возвращает:**
  - `true`, если метод определен; иначе `false`.

**Пример использования:**

```typescript
import { inst } from "data-support";

class Sample {
    myMethod() {}
}

const sampleInstance = new Sample();
console.log(inst.in(sampleInstance, "myMethod")); // true
console.log(inst.in(sampleInstance, "unknownMethod")); // false
```

##### 6. **`constructorName(instance: any): string`**

Определяет имя конструктора объекта.

- **Параметры:**
  - `instance`: Исходный объект.

- **Возвращает:**
  - Имя конструктора объекта как строку.

**Пример использования:**

```typescript
import { inst } from "data-support";

class Vehicle {}

const vehicleInstance = new Vehicle();
console.log(inst.constructorName(vehicleInstance)); // Vehicle
```
