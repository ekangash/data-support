/** 1 NodeModules */
/** 2 Config, Packages, Endpoints, Enums */
import { Entity } from "@/packages/entity/Entity";

/** 3 Components, Hooks, Icons - NodeModules */
/** 4 Components, Hooks - Custom */
/** 5 Entities, Stores, Services */
import { User } from "@/tests/mocks/packages/entities/User";

/** 6 Resources */

/**
 * @class Review
 */
export class Review extends Entity {
  /**
   * @extends Entity
   */
  rules() {
    return {
      attributes: ["id", "message", "user_id"],
      fillable: ["message"],
      relationships: ["user"],
    };
  }

  /**
   * @param {object} user
   *
   * @return {User}
   */
  user(user) {
    return new User().fill(user);
  }
}
