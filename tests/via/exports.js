'use strict';
const { expect } = require('chai');

const model = require('../../lib/es5/models/via');


module.exports = function () {
  describe('Export suite', function () {
    it('Should export', function() {
      expect(model).to.be.an('object');
    });

    it('Should export Via class', function() {
      expect(model.Via).to.be.an('function');
      expect(new model.Via()).to.be.an('object');
    });

    it('Should export Via symbols', function() {
      expect(model.symbols).to.be.an.instanceOf(Map);
    });

    it('should not have any extra exports', function () {
      expect(model).to.have.all.keys(['Via', 'symbols', 'injectLocation']);
    });
  });
};
