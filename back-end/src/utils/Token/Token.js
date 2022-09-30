const jwt = require('jsonwebtoken');
const { read } = require('../readFile');

class Token {
    constructor(secret = read()) {
        this.secret = secret;
    }

    generate(data) {
      const token = jwt.sign({ data }, this.secret);

      return token;
    }

    verify(token) {
      const decoded = jwt.verify(token, this.secret);

      return decoded;
    }
}

module.exports = {
  Token,
};