import { arr } from "@/package/arr";
import { bool } from "@/package/bool";
import { obj } from "@/package/obj";

/**
 * Вспомогательные методы для работы со строкой.
 *
 * @type {object}
 */
export const form = {
  keys(formData: FormData): string[] {
    let keys: string[] = [];

    // @ts-ignore
    for (let key of formData.keys()) {
      keys.push(key);
    }

    return keys;
  },
  /**
   * Добавляет данные полезной нагрузки в экземпляр FormData.
   *
   * @param {object} payload Полезная нагрузка.
   * @param {FormData} formData Экземпляр FormData.
   * @param {string} parentKey Родительский ключ.
   *
   * @return {FormData} Экземпляр FormData.
   */
  prepareFormData(
    payload: object,
    formData: FormData = new FormData(),
    parentKey: string = ""
  ): FormData {
    for (const [key, value] of Object.entries(payload)) {
      let propertyKey = parentKey ? `${parentKey}[${key}]` : key;

      if (obj.contains(value)) {
        this.prepareFormData(value, formData, propertyKey);
      } else if (arr.contains(value)) {
        value.forEach((item, index) => {
          const arrayKey = `${propertyKey}[${index}]`;

          if (obj.assert(item)) {
            this.prepareFormData(item, formData, arrayKey);

            return;
          }

          let appendItem = item;

          if (appendItem === null) {
            appendItem = "";
          } else if (bool.assert(appendItem)) {
            appendItem = appendItem ? 1 : 0;
          }

          formData.append(arrayKey, appendItem);
        });
      } else {
        let appendValue = value;

        if (appendValue === null) {
          appendValue = "";
        } else if (bool.assert(appendValue)) {
          appendValue = appendValue ? 1 : 0;
        }

        formData.append(propertyKey, appendValue);
      }
    }

    return formData;
  },
};
