/** 1 Node - Modules, Components, Hooks, Icons */
import { describe, it, expect } from "vitest";

/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */
import { form } from "@/package";

describe("Form", () => {
  const payload = {
    title: "The Art of Learning",
    category: "Personal Development",
    scores: { reviews: 2 },
    files: { cover: "https://initial.jpg", publisher: new File([""], "") },
    author: { sign: 4444, nickname: "Josh Waitzkin", nationality: "American" },
    reviews: [
      { id: 1, user: { name: "John", surname: "Doe" }, message: "A brilliant book!" },
      { id: 2, user: { name: "Jane", surname: "Smith" }, message: "This book is amazing!" },
    ],
    content: [
      { id: "1WsEkqSDgh1Illl4", type: "heading-two" },
      { id: "jduohsmUdHYMBRdF", type: "paragraph" },
      { id: "Ks0RVnLW8IhhARZX", type: "image" },
    ],
    childrenIds: [
      [1, 232, 543, 5546, 546],
      ["342", 34453, 43534],
    ],
  };

  it("Должен вернуть все имена ключей установленных в FormData", () => {
    const formData = new FormData();
    formData.append("cover", "mount.jpg");
    formData.append("updated_at", "10.20.23 11:43:25");
    const formDataKeys = form.keys(formData);

    expect(formDataKeys).toEqual(["cover", "updated_at"]);
  });

  it("Должен создать экземпляр FormData и заполнить ее полезной нагрузкой", () => {
    const formData = form.prepareFormData(payload);

    expect(formData).toBeInstanceOf(FormData);
  });
});
