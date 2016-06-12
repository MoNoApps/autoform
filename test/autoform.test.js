'use strict';

const Autoform = require('../index');
const assert = require('assert');

describe('Autoform', () => {
  it('default properties', () => {
    const af = new Autoform();
    assert.equal(af.type, 'basic');
  });
});
