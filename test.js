'use strict';


var chai       = require('chai');
var expect     = chai.expect;
var sinon      = require('sinon');
//var proxyquire = require('proxyquire')

var myModule = require('./my-module');
var myModule2 = require('./my-module2');

var harmless = {
  destroyWorld: function(){
    console.log('no way');
  }
};
//var myModule = proxyquire('./my-module', { './hardcoreModuleOfDeath': harmless });


describe('My Module', function() {

  it('should add 2 to a number', function () {
    var dontCare = { superFunction: sinon.spy() };

    var value = myModule(3, dontCare);

    expect(value).to.be.equal(5);
    expect(dontCare.superFunction.called).to.be.true;
  });
    it('should add 2 to a number', function () {
    var dontCare = { superFunction: sinon.spy() };

    var value = myModule(4, dontCare);

    expect(value).to.be.equal(6);
    expect(dontCare.superFunction.called).to.be.true;
  });
        it('should add 2 to a number', function () {
    var dontCare = { superFunction: sinon.spy() };

    var value = myModule(5, dontCare);

    expect(value).to.be.equal(7);
    expect(dontCare.superFunction.called).to.be.true;
  });

});
describe('My Module 2', function() {

  it('should add 3 to a number', function () {
    var dontCare = { superFunction: sinon.spy() };

    var value = myModule2(3, dontCare);

    expect(value).to.be.equal(6);
    expect(dontCare.superFunction.called).to.be.true;
  });
    it('should add 3 to a number', function () {
    var dontCare = { superFunction: sinon.spy() };

    var value = myModule2(4, dontCare);

    expect(value).to.be.equal(7);
    expect(dontCare.superFunction.called).to.be.true;
  });
        it('should add 3 to a number', function () {
    var dontCare = { superFunction: sinon.spy() };

    var value = myModule2(5, dontCare);

    expect(value).to.be.equal(8);
    expect(dontCare.superFunction.called).to.be.true;
  });

});