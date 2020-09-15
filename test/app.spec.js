//Module import
const assert = require('assert');

//Local import
const app = require('../app.js');

describe('the add function', function () {
  it('should add 2 numbers together', function () {
     const result = (app.add(2,2));
     assert.strictEqual(result, 4);
  })
})