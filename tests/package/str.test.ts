/** 1 Node - Modules, Components, Hooks, Icons */
import { describe, it, expect } from "vitest";

/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */
import { str } from "@/package";

describe("str.contains()", () => {
  it("Должно вернуть true, если строка не пустая", () => {
    const srcStr: string = "1";

    const stringIsFilled = str.contains(srcStr);

    expect(stringIsFilled).toEqual(true);
  });
  it("Должно вернуть false, если строка пустая", () => {
    const srcStr = "";

    const stringIsFilled = str.contains(srcStr);

    expect(stringIsFilled).toEqual(false);
  });
});

describe("str.empty()", () => {
  it("Должно вернуть true, если строка пустая", () => {
    const srcStr = "";

    const stringIsEmpty = str.empty(srcStr);

    expect(stringIsEmpty).toEqual(true);
  });
  it("Должно вернуть false, если строка не пустая", () => {
    const srcStr = "1";

    const stringIsEmpty = str.empty(srcStr);

    expect(stringIsEmpty).toEqual(false);
  });
});
