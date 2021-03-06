'use strict';
const { expect } = require('chai');

const model = require('../../lib/es5/models/schedule');


module.exports = function () {
  describe('Export suite', function () {
    it('Should export', function() {
      expect(model).to.be.an('object');
    });

    it('Should export Schedule class', function() {
      expect(model.Schedule).to.be.an('function');
      expect(new model.Schedule()).to.be.an('object');
    });

    it('Should export Schedule symbols', function() {
      expect(model.symbols).to.be.an.instanceOf(Map);
    });

    it('should not have any extra exports', function () {
      expect(model).to.have.all.keys(['Schedule', 'symbols', 'injectStation']);
    });
  });
};
