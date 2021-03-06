# Classifier

Classifier can help you understand the language of short texts and make predictions about how to handle them. For example, `classifier` could be use to:

  - classify tweets into set of classes
  - analyze text messages
  - analyze sentiments
  - etc


## Usage

```js
  var classifier = require('classifier');

  var natural = classifier();
  natural.train(['what', 'is', 'the', 'weather', 'today'], 'weather');
  natural.train(['it', 'is', 'cold'], 'weather');
  natural.train(['you', 'are', 'cold', 'blooded'], 'mean');

  natural.guess(['it', 'looks', 'cold']); // => weather 
```

## API

### train(words, category)

Classifiy an array of words with a category.

```js
natural.train(['sun', 'cold'], 'weather');
```

### guess(words)

Categorize an array of words.

```js
natural.guess(['outside', 'cold']);
// => weather
```

## License

The MIT License (MIT)

Copyright (c) 2015 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

