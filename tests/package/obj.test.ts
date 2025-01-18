/** 1 Node - Modules, Components, Hooks, Icons */
import { describe, it, expect } from "vitest";

/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */
import { obj } from "@/packages/support";

describe("obj.contains()", () => {
  it("Должно вернуть true, если у объекта есть свойства", () => {
    const srcObj = { name: "name" };

    const objIsFilled = obj.contains(srcObj);

    expect(objIsFilled).toEqual(true);
  });
  it("Должно вернуть false, если у объект пустой", () => {
    const srcObj = {};

    const objIsFilled = obj.contains(srcObj);

    expect(objIsFilled).toEqual(false);
  });
});

describe("obj.empty()", () => {
  it("Должно вернуть true, если объект пустой", () => {
    const srcObj = {};

    const objIsEmpty = obj.empty(srcObj);

    expect(objIsEmpty).toEqual(true);
  });
  it("Должно вернуть false, если объект не пустой", () => {
    const srcObj = { name: "name" };

    const objIsEmpty = obj.empty(srcObj);

    expect(objIsEmpty).toEqual(false);
  });
});

describe("obj.isset()", () => {
  it("Должно вернуть true, если переменная является объектом и у нее есть необходимое свойство", () => {
    const srcObj = { name: "name" };

    const nameIsIssetInObj = obj.isset(srcObj, "name");

    expect(nameIsIssetInObj).toEqual(true);
  });
  it("Должно вернуть false, если переменная является объектом, но у нее нет необходимого свойства", () => {
    const srcObj = { name: "name" };

    const lastNameIsIssetInObj = obj.isset(srcObj, "lastName");

    expect(lastNameIsIssetInObj).toEqual(false);
  });
});

describe("obj.assert()", () => {
  it("Должно вернуть true, если переменная является объектом", () => {
    const srcObj = {};

    const objIsObject = obj.assert(srcObj);

    expect(objIsObject).toEqual(true);
  });
  it("Должен вернуть false, если переменная не является объектом", () => {
    const arr = [];
    const func = () => {};
    const nullable = null;
    const undefinedValue = undefined;
    const num = 0;
    const str = "";
    const bool = true;

    const arrIsObject = obj.assert(arr);
    const funcIsObject = obj.assert(func);
    const nullableIsObject = obj.assert(nullable);
    const undefinedIsObject = obj.assert(undefinedValue);
    const numIsObject = obj.assert(num);
    const strIsObject = obj.assert(str);
    const boolIsObject = obj.assert(bool);

    expect(arrIsObject).toEqual(false);
    expect(funcIsObject).toEqual(false);
    expect(nullableIsObject).toEqual(false);
    expect(undefinedIsObject).toEqual(false);
    expect(numIsObject).toEqual(false);
    expect(strIsObject).toEqual(false);
    expect(boolIsObject).toEqual(false);
  });
});

describe("obj.freeFromEmptiness()", () => {
  it("Должно вернуть объект с заполненными значениями", () => {
    const srcObj = {
      name: "name",
      age: 1,
      arr: [1, 2, 3],
      undefinedValue: undefined,
      nullValue: null,
      emptyObj: {},
    };

    const expectedObj = {
      name: "name",
      age: 1,
      arr: [1, 2, 3],
    };

    const freeFromEmptinessObject = obj.freeFromEmptiness(srcObj);

    expect(freeFromEmptinessObject).toEqual(expectedObj);
  });
});

describe("srcObj.get()", () => {
  const OBJ_NAME_VALUE = "example";
  const OBJ_NAME_DEFAULT_VALUE = "example default";
  const srcObj = { name: OBJ_NAME_VALUE };

  it('Должен вернуть значение "example", так как свойство в объекте определено!', () => {
    const objNameValue = obj.get(srcObj, "name");

    expect(objNameValue).toEqual(OBJ_NAME_VALUE);
  });

  it("Должен вернуть null, так как свойство names в объекте не определено как и значения по умолчанию.", () => {
    const objNameValue = obj.get(srcObj, "names");

    expect(objNameValue).toBeUndefined();
  });

  it('Должен вернуть значение по умолчанию, так как свойство "names" не определено.', () => {
    const objNameValue = obj.get(srcObj, "names", OBJ_NAME_DEFAULT_VALUE);

    expect(objNameValue).toEqual(OBJ_NAME_DEFAULT_VALUE);
  });

  it("Должно вернуть глубоко вложенное значение из объекта", () => {
    const expectedValue = "name";
    const srcObj = { nested1: { nested2: { nested3: "name" } } };

    const nestedValue = obj.get(srcObj, "nested1.nested2.nested3");

    expect(nestedValue).toEqual(expectedValue);
  });
  it("Должно вернуть значение по-умолчанию, если объект пустой", () => {
    const srcObj = {};
    const defaultValue = "default";

    const nestedValue = obj.get(srcObj, "nested", defaultValue);

    expect(nestedValue).toEqual(defaultValue);
  });
  it("Должно вернуть значение по-умолчанию, если при поиске не было найдено вложенного значения", () => {
    const srcObj = { nested1: "nested" };
    const nestedValue = obj.get(srcObj, "nested1.nested2", null);

    expect(nestedValue).toBeNull();
  });
});

describe("obj.only()", () => {
  it("Должен вернуть пустой объект, ибо параметры функции пусты", () => {
    const srcObj = {};
    const onlyProps = [];

    const extractedProps = obj.only(srcObj, onlyProps);

    expect(extractedProps).toEqual({});
  });
  it("Должен вернуть объект с свойствами 'name' и 'filter'.", () => {
    const srcObj = { name: "example", active: true, filter: false };
    const onlyProps = ["name", "filter", "sort"];

    const extractedProps = obj.only(srcObj, onlyProps);

    expect(extractedProps).toEqual({ name: "example", filter: false });
  });

  it("Должен получить значения из объекта включая вложенную структуру данных", () => {
    const received = obj.only(
      {
        files: { avatar: "4234", cover: "text.jpg" },
        name: "example",
        active: true,
        filter: false,
      },
      ["files.cover", "active"]
    );
    const expected = { files: { cover: "text.jpg" }, active: true };

    expect(received).toEqual(expected);
  });
});

describe("obj.query()", () => {
  it("Должен сформировать строку запроса", () => {
    const srcObj = {
      limit: 40,
      offset: 0,
      filter: { attrName: "attrValue" },
      fields: ["attr1", "attr2"],
      include: ["relation1", "relation2"],
    };

    expect(obj.query(srcObj)).toBe(
      "limit=40&offset=0&filter[attrName]=attrValue&fields=attr1,attr2&include=relation1,relation2"
    );
  });
  it("Должен сформировать строку запроса с вложенными объектами", () => {
    const srcObj = {
      limit: 40,
      offset: 0,
      filter: { attrName: { like: "attrValue" } },
      fields: ["attr1", "attr2"],
      include: ["relation1", "relation2"],
    };

    expect(obj.query(srcObj)).toBe(
      "limit=40&offset=0&filter[attrName][like]=attrValue&fields=attr1,attr2&include=relation1,relation2"
    );
  });
});

describe("obj.insert()", () => {
  it("Должен вложено добавить значение в объект", () => {
    const names = "files.cover";
    const value = "text.jpg";
    const attrs = { files: { avatar: "4234" } };

    obj.insert(attrs, names, value);

    expect(attrs).toEqual({ files: { avatar: "4234", cover: value } });
  });
});

describe("isEqual function", () => {
  it("should return true for equal arrays", () => {
    expect(obj.equal([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(obj.equal(["a", "b", "c"], ["a", "b", "c"])).toBe(true);
  });

  it("should return false for different arrays", () => {
    expect(obj.equal([1, 2, 3], [1, 2, 4])).toBe(false);
    expect(obj.equal(["a", "b", "c"], ["a", "b", "d"])).toBe(false);
    expect(obj.equal([1, 2, 3], [1, 2])).toBe(false);
  });

  it("should return true for equal objects", () => {
    expect(obj.equal({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
    expect(obj.equal({ name: "John", age: 30 }, { name: "John", age: 30 })).toBe(true);
  });

  it("should return false for different objects", () => {
    expect(obj.equal({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
    expect(obj.equal({ name: "John", age: 30 }, { name: "Jane", age: 30 })).toBe(false);
    expect(obj.equal({ name: "John", age: 30 }, { name: "John" })).toBe(false);
  });

  it("should return true for nested objects", () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };
    expect(obj.equal(obj1, obj2)).toBe(true);
  });

  it("should return false for different nested objects", () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 3 } };
    expect(obj.equal(obj1, obj2)).toBe(false);
  });

  it("should return true for nested equals objects", () => {
    const obj1 = [
      {
        id: "d82f5e29-6778-4eeb-a22f-b52c02959399",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [
          {
            type: "text",
            text: "the new effect  wad ddaw awd dawdwdd f sfe",
            styles: {},
          },
        ],
        children: [],
      },
      {
        id: "8c6f8e52-e03d-40db-a839-05659623eaa3",
        type: "image",
        props: {
          backgroundColor: "default",
          textAlignment: "left",
          url: "http://localhost:8085/media/8/o-AYyG5p4KM.jpg",
          caption: "",
          width: 660,
        },
        children: [],
      },
      {
        id: "7577c27c-4dc8-4946-a4e7-55a3053993a4",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [
          {
            type: "text",
            text: "dwadwa",
            styles: {},
          },
        ],
        children: [],
      },
      {
        id: "12d2eafd-51f8-47c2-8360-998bfcc28a53",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [],
        children: [],
      },
    ];
    const obj2 = [
      {
        id: "d82f5e29-6778-4eeb-a22f-b52c02959399",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [
          {
            type: "text",
            text: "the new effect  wad ddaw awd dawdwdd f sfe",
            styles: {},
          },
        ],
        children: [],
      },
      {
        id: "8c6f8e52-e03d-40db-a839-05659623eaa3",
        type: "image",
        props: {
          backgroundColor: "default",
          textAlignment: "left",
          url: "http://localhost:8085/media/8/o-AYyG5p4KM.jpg",
          caption: "",
          width: 660,
        },
        children: [],
      },
      {
        id: "7577c27c-4dc8-4946-a4e7-55a3053993a4",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [
          {
            type: "text",
            text: "dwadwa",
            styles: {},
          },
        ],
        children: [],
      },
      {
        id: "12d2eafd-51f8-47c2-8360-998bfcc28a53",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [],
        children: [],
      },
    ];
    expect(obj.equal(obj1, obj2)).toBe(true);
  });
});
