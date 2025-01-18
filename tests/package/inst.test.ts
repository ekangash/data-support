/** 1 Node - Modules, Components, Hooks, Icons */
import { describe, it, expect } from "vitest";

/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */
import { inst } from "@/packages/support";

describe("cls.isClassInstance()", () => {
  it("Должно вернуть true, если переменная является экземпляром класса", () => {
    class SomeClass {}

    const someClass = new SomeClass();
    const someClassIsInstanceOfClass = inst.assert(someClass);

    expect(someClassIsInstanceOfClass).toEqual(true);
  });

  it("Должно вернуть false, если переменная не является экземпляром класса", () => {
    const someClass = {};

    const someClassIsInstanceOfClass = inst.assert(someClass);

    expect(someClassIsInstanceOfClass).toEqual(false);
  });
});
