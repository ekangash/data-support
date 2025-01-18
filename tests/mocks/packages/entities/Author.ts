/** 1 NodeModules */
/** 2 Config, Packages, Endpoints, Enums */
import { Entity } from "@/packages/entity/Entity";

/** 3 Components, Hooks, Icons - NodeModules */
/** 4 Components, Hooks - Custom */
/** 5 Entities, Stores, Services */
/** 6 Resources */

export class Author extends Entity {
  static primaryKey = "sign";

  /**
   * @extends Entity
   */
  rules() {
    return {
      attributes: ["sign", "nickname", "nationality"],
      fillable: ["nickname", "nationality"],
      relationships: [],
    };
  }
}
