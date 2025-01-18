/** 1 Node - Modules, Components, Hooks, Icons */
import { describe, it, expect } from "vitest";

/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */
import { dts } from "@/packages/support";

describe("dts", () => {
  it("Должно вернуть true, если строка не пустая", () => {
    const original: string = "2023-07-19T12:15:35.000000Z";

    const stringIsFilled = dts.getTimeAgoFromNow(original);

    expect(stringIsFilled).toBe(stringIsFilled);
  });

  it("Должно склонять слова", () => {
    // Примеры использования функции:
    expect(dts.pluralize(1, "секунда", "секунды", "секунд")).toBe("секунда");
    expect(dts.pluralize(2, "секунда", "секунды", "секунд")).toBe("секунды");
    expect(dts.pluralize(5, "секунда", "секунды", "секунд")).toBe("секунд");

    expect(dts.pluralize(1, "минута", "минуты", "минут")).toBe("минута");
    expect(dts.pluralize(3, "минута", "минуты", "минут")).toBe("минуты");
    expect(dts.pluralize(10, "минута", "минуты", "минут")).toBe("минут");

    expect(dts.pluralize(1, "час", "часа", "часов")).toBe("час");
    expect(dts.pluralize(3, "час", "часа", "часов")).toBe("часа");
    expect(dts.pluralize(10, "час", "часа", "часов")).toBe("часов");

    expect(dts.pluralize(1, "день", "дня", "дней")).toBe("день");
    expect(dts.pluralize(3, "день", "дня", "дней")).toBe("дня");
    expect(dts.pluralize(10, "день", "дня", "дней")).toBe("дней");

    expect(dts.pluralize(1, "неделя", "недели", "недель")).toBe("неделя");
    expect(dts.pluralize(3, "неделя", "недели", "недель")).toBe("недели");
    expect(dts.pluralize(20, "неделя", "недели", "недель")).toBe("недель");

    expect(dts.pluralize(1, "месяц", "месяца", "месяцев")).toBe("месяц");
    expect(dts.pluralize(3, "месяц", "месяца", "месяцев")).toBe("месяца");
    expect(dts.pluralize(14, "месяц", "месяца", "месяцев")).toBe("месяцев");

    expect(dts.pluralize(1, "год", "года", "лет")).toBe("год");
    expect(dts.pluralize(3, "год", "года", "лет")).toBe("года");
    expect(dts.pluralize(14, "год", "года", "лет")).toBe("лет");
  });
});
