var chai = require('chai');

var expect = chai.expect;

var should = chai.should();

var Human = require('../human.js');


describe('Human Class', function(){

  var human = Human;
  var luke;

  beforeEach(function(){
     luke  = new Human('Luke');
  });

  it ('should be a function', function(){
    expect(human).to.be.a('function');
  });

  it('should have property name', function(){
    expect(luke.name).to.equal('Luke');
  });

  it('should have method sayName',function(){
    expect(luke.sayName()).to.equal('Luke');
  });

});

