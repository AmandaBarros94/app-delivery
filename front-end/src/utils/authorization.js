/**
 * Returns storaged token on Local Storage
 * @returns {string} - storaged token.
*/

export function getToken() {
  return localStorage.getItem('token');
}

export default getToken;
