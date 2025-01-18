/** 1 NodeModules */
/** 2 Config, Packages, Endpoints, Enums */
import { Entity } from "@/packages/entity/Entity";
import { Collection } from "@/packages/collection/Collection";
import { Author } from "@/tests/mocks/packages/entities/Author";
import { Review } from "@/tests/mocks/packages/entities/Review";

/** 3 Components, Hooks, Icons - NodeModules */
/** 4 Components, Hooks - Custom */
/** 5 Entities, Stores, Services */

/** 6 Resources */

export class Book extends Entity {
  /**
   * @extends Entity
   */
  rules() {
    return {
      attributes: [
        "id",
        "title",
        "category",
        "author_id",
        "review_id",
        "scores",
        "author_sign",
        "files.cover",
        "files.publisher",
        "scores.reviews",
      ],
      fillable: ["title", "category", "files.cover", "files.publisher"],
      relationships: ["author", "reviews"],
    };
  }

  /**
   * @extends Entity
   */
  labels() {
    return {
      title: "Заголовок книги",
      category: "Категория книги",
    };
  }

  /**
   * @extends Entity
   */
  placeholders() {
    return {
      title: "Заголовок книги",
      category: "Категория книги",
    };
  }

  /**
   * Связь канала
   *
   * @param {object} author
   *
   * @return {Author}
   */
  author(author) {
    return new Author().fill(author);
  }

  /**
   * Связь канала
   *
   * @param {object[]} reviews
   *
   * @return {Collection}
   */
  reviews(reviews) {
    return new Collection().forEntity(Review).fill(reviews);
  }
}
