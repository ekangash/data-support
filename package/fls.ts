import { str } from "@/package/str";

/**
 * Вспомогательные методы для работы с файлами системы (file system).
 *
 * @type {object}
 */
export const fls = {
  /**
   * Проверяет является ли значенеи файлом.
   *
   * @param {any} value Значение.
   *
   * @return {boolean}
   */
  assert(value): boolean {
    return (
      typeof window !== "undefined" &&
      typeof File !== "undefined" &&
      typeof FileList !== "undefined" &&
      (value instanceof File || value instanceof FileList)
    );
  },
  /**
   * Проверяет, имеет ли путь изображение доступное разрешение файла.
   *
   * @param {string} src Источник пути изображения.
   *
   * @return {boolean}
   */
  srcImageHasAllowedMimetype(src: string): boolean {
    const allowedImageMimetypes: string[] = [".jpg", ".webp", ".png", ".jpeg"];
    let srcIsValid: boolean = false;

    for (const allowedImageMimetype of allowedImageMimetypes) {
      if (src.includes(allowedImageMimetype)) {
        srcIsValid = true;

        break;
      }
    }

    return srcIsValid;
  },
  /**
   *
   * @param file
   *
   * @return {string}
   */
  fileIsValid(file): boolean {
    return (
      (str.contains(file) && (fls.srcImageHasAllowedMimetype(file) || file.includes("blob:"))) ||
      this.assert(file)
    );
  },
  /**
   *
   * @param {File} media
   *
   * @return {string}
   */
  createFileBlobURL(media: File): string {
    return URL.createObjectURL(media as File);
  },
  /**
   *
   * @param {File} file
   *
   * @return {string}
   */
  validateImageMimetype(file): void {
    const allowedImageMimetypes: string[] = [
      "image/jpeg",
      "image/gif",
      "image/pjpeg",
      "image/webp",
      "image/png",
      "image/gif",
    ];

    if (!allowedImageMimetypes.includes(file.type)) {
      throw Error("Допустимый тип загружаемого изображения jpeg, jpg, png,webp, gif, pjpeg");
    }
  },
  /**
   *
   * @param {File} file
   * @param {number} size
   *
   * @return {string}
   */
  validateSize(file: File, size: number): void {
    if (file.size > 1024 * 1024 * size) {
      throw Error("Загружаемый размер файла не должен превышать 10 мБ");
    }
  },
};
