
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


  /**
   * Number of trainings.
   */

  var total = 0;


  /**
   * Number of trainings
   * by category.
   */

  var categories = {};


  /**
   * Uniq array of words used
   * during the training.
   */

  var dictionary = [];


  /**
   * Number of training by
   * category.
   */

  var count = {};


  /**
   * Frequency of words
   * by category.
   */

  var frequency = {};


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
   * Classify array of words with category.
   *
   * @param {Array} arr
   * @param {String} category
   * @api public
   */

  that.classify = function(arr, category) {
  	var l = arr.length;
  	update(category, l);
  	while(l--) {
  		var word = arr[l];
  		frequency[category][word] = ++frequency[category][word] || 1;
  		if(~!dictionary.indexOf(word)) dictionary.push(word);
  	}
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
   * Probabily a word belongs to
   * a category.
   *
   * @param {String} word
   * @param {String} category
   * @api public
   */

  that.probability = function(word, category) {
  	return ((frequency[category][word] || 0) + 1) / (count[category] + dictionary.length);
  };


  /**
   * Return a uniq category for
   * a list of tokens.
   *
   * @param {String}
   * @api public
   */

  that.categorize = function(arr) {
  	var max = -Infinity;
  	var tokens = frequence(arr);
  	var choice;
  	for(var category in categories) {
  		var prob = Math.log(count[category] / total);
  		for(var token in tokens) {
  			prob += tokens[token] * Math.log(that.probability(token, category));
  		}
  		if (prob > max) {
  		   max = prob
  		   choice = category
  		 }
  	}
  	return choice;
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


  /**
   * Return the frequencies of 
   * a word in a sentence.
   * @note could be used in classify
   *
   * @param {Array} words
   * @param {Object}
   * @api private
   */

  function frequence(words) {
  	var obj = {};
  	for(var l = words.length; l--;) {
  		obj[words[l]] = ++obj[words[l]] || 1;
  	}
  	return obj;
  }


  /**
   * Update/initialize classifier
   * statistics.
   *
   * @param {String} category
   * @param {Number} length (number of words to classify)
   * @api private
   */

  function update(category, length) {
  	count[category] = (count[category] || 0) + length;
  	frequency[category] = frequency[category] || {};
  	categories[category] = ++categories[category] || 1;
  	total++;
  }

  return that;
};

