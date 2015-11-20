
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
		natural.classify(['weather', 'sun', 'cold'], 'weather');
		assert.equal(natural.guess('is it cold outside?'), 'weather');
	});


});