
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

	it('one training', function() {
		natural.train(['weather', 'sun', 'cold', 'cold'], 'weather');
		assert.equal(natural.guess(['outside', 'cold']), 'weather');
	});

	it('multiple trainings', function() {
		natural.train(['write', 'code'], 'computing');
		natural.train(['script', 'code'], 'computing');
		natural.train(['write', 'book'], 'literature');
		natural.train(['read', 'book'], 'literature');
		natural.train(['study', 'book'], 'literature');
		assert.equal(natural.guess(['bug', 'code']), 'computing');
		assert.equal(natural.guess(['read', 'thing']), 'literature');
	});



});