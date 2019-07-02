var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

    it('should be able to chain multiple operations together', function(){
        running_total = element(by.css('#running_total'))
        element(by.css('#number8')).click();
        element(by.css('#operator_add')).click();
        element(by.css('#number2')).click();
        element(by.css('#operator_multiply')).click();
        element(by.css('#number4')).click();
        element(by.css('#operator_divide')).click();
        element(by.css('#number5')).click();
        element(by.css('#operator_equals')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('8')
      })

      it('should be able to clear the running total without affecting the calculation', function(){
        running_total = element(by.css('#running_total'))
        element(by.css('#number8')).click();
        element(by.css('#operator_add')).click();
        element(by.css('#number2')).click();
        element(by.css('#clear')).click();
        element(by.css('#number1')).click();
        element(by.css('#operator_equals')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('9')
      })

      it('should show the number buttons when clicked in the running total', function(){
          running_total = element(by.css('#running_total'))
          element(by.css('#number1')).click();
          element(by.css('#number2')).click();
          element(by.css('#number3')).click();
          element(by.css('#number4')).click();
          element(by.css('#number5')).click();
          expect(running_total.getAttribute('value')).to.eventually.equal('12345')
        })


      it('should show an updated amount as the result of arithmetical operations', function(){
        running_total = element(by.css('#running_total'))
        element(by.css('#number4')).click();
        element(by.css('#operator_add')).click();
        element(by.css('#number5')).click();
        element(by.css('#operator_multiply')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('9')
      })

      it('should be able to display negative numbers', function(){
        running_total = element(by.css('#running_total'))
        element(by.css('#number7')).click();
        element(by.css('#operator_subtract')).click();
        element(by.css('#number8')).click();
        element(by.css('#operator_equals')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('-1')
      })

      it('should be able to display decimal numbers', function(){
        running_total = element(by.css('#running_total'))
        element(by.css('#number7')).click();
        element(by.css('#operator_divide')).click();
        element(by.css('#number2')).click();
        element(by.css('#operator_equals')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('3.5')
      })

      it('should be able to display very large numbers', function(){
        running_total = element(by.css('#running_total'))
        element(by.css('#number9')).click();
        element(by.css('#number9')).click();
        element(by.css('#number9')).click();
        element(by.css('#operator_multiply')).click();
        element(by.css('#number9')).click();
        element(by.css('#number9')).click();
        element(by.css('#number9')).click();
        element(by.css('#operator_multiply')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('998001')
      })

      it('should show `Not a number` when asked to divide a number by 0', function(){
        running_total = element(by.css('#running_total'))
        element(by.css('#number5')).click();
        element(by.css('#operator_divide')).click();
        element(by.css('#number0')).click();
        element(by.css('#operator_equals')).click();
        expect(running_total.getAttribute('value')).to.eventually.equal('Not a number')
      })

});
