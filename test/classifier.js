
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
		natural.classify(['weather', 'sun', 'cold', 'cold'], 'weather');
		assert.equal(natural.categorize(['outside', 'cold']), 'weather');
	});

	it('multiple trainings', function() {
		natural.classify(['write', 'code'], 'computing');
		natural.classify(['script', 'code'], 'computing');
		natural.classify(['write', 'book'], 'literature');
		natural.classify(['read', 'book'], 'literature');
		natural.classify(['study', 'book'], 'literature');
		assert.equal(natural.categorize(['bug', 'code']), 'computing');
		assert.equal(natural.categorize(['read', 'thing']), 'literature');
	});



});