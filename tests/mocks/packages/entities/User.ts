/** 1 NodeModules */
/** 2 Config, Packages, Endpoints, Enums */
import { Entity } from "@/packages/entity/Entity";

/** 3 Components, Hooks, Icons - NodeModules */
/** 4 Components, Hooks - Custom */
/** 5 Entities, Stores, Services */
/** 6 Resources */

/**
 * @class User
 */
export class User extends Entity {
  /**
   * @extends Entity
   */
  rules() {
    return {
      attributes: ["id", "name", "surname"],
      fillable: ["name", "surname"],
    };
  }
}
