/** 1 Node - Modules, Components, Hooks, Icons */
import { describe, it, expect } from "vitest";

/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */
import { arr } from "@/package";

describe("arr.empty()", () => {
  it("Должен вернуть true, если массив пустой", () => {
    const emptyArray = [];

    const arrayIsEmpty = arr.empty(emptyArray);

    expect(arrayIsEmpty).toEqual(true);
  });
  it("Должен вернуть false, если массив заполнен", () => {
    const filledArray = [1];

    const arrayIsEmpty = arr.empty(filledArray);

    expect(arrayIsEmpty).toEqual(false);
  });
});

describe("arr.contains()", () => {
  it("Должен вернуть true, если массив заполнен", () => {
    const filledArray = [1];

    const arrayIsFilled = arr.contains(filledArray);

    expect(arrayIsFilled).toEqual(true);
  });
  it("Должен вернуть false, если массив пустой", () => {
    const emptyArray = [];

    const arrayIsFilled = arr.contains(emptyArray);

    expect(arrayIsFilled).toEqual(false);
  });
});
