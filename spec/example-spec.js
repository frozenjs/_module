(function(buster, define) {
  'use strict';

  define(function(require){
    buster.spec.expose();

    var expect = buster.expect;

    describe('Example', function(){

      it('should check true to be true', function(){
        expect(true).toBe(true);
      });

    });

  });

})(
  this.buster || require('buster'),
  typeof define === 'function' && define.amd ? define : function (factory) { module.exports = factory(require); }
);
