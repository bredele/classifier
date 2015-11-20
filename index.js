
/**
 * Naive bayed classifier.
 *
 * Examples:
 *
 *  var bayes = classifier();
 *  bayes.train('weather is cold', 'weather');
 *  bayer.guess('what is the weathr?');
 *
 * @return {Object}
 * @api public
 */

module.exports = function() {

	/**
	 * Classifier instance.
	 */

  var that = {};


  var total = 0;


  var words = {
  	hello : ['welcome'],
  	coucou : ['welcome', 'olivier'],
  	olivier: ['olivier']
  }


  /**
   * Train classifier.
   *
   * @param {String} sentence
   * @param {String} category
   * @api public
   */

  that.train = function(sentence, category) {
  	return that;
  };

  /**
   *
   */

  that.classify = function(arr, category) {
  	total++;
  	return that;
  };


  /**
   * Guess category.
   *
   * @param {String} sentence
   * @param {String}
   * @api public
   */

  that.guess = function(sentence) {
  	return '';
  };


  /**
   * Clone classifier.
   *
   * @return {Object}
   * @api public
   */

  that.clone = function() {
  	return {};
  };

  return that;
};