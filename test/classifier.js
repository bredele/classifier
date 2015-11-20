
/**
 * Test dependencies.
 */

var assert = require('assert');
var classifier = require('..');


describe('classify', function() {

	var natural;
	beforeEach(function() {
		natural = classifier();
	});

	it('should train a classifier', function() {
		natural.train('the weather is good', 'weather');
		assert.equal(natural.guess('what is the weather'), 'weather');
	});

	
});