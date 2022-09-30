import { userFormSchema } from '../schemas';

/**
 * Validates user form info.
 * @constructor
 * @param {Object} userInfo - User infos.
 * @param {string} userInfo.name - User's name.
 * @param {string} userInfo.email - User's email.
 * @param {string} userInfo.password - User's password.
 * @param {string} userInfo.role - User's application role.
 * @returns {boolean} - validate response.
 */

function validateUserForm(userInfo) {
  const { success } = userFormSchema.safeParse(userInfo);

  return success;
}

export default validateUserForm;
