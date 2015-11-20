
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

  var that = {};


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