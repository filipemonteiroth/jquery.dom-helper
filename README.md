jquery.dom-helper
=================

jquery.dom-helper its a helper to create dynamically html content with jQuery


How to use
==========

Add jquery.dom-helper.js to your html.
```html
<script type="text/javascript" src="../js/jquery.dom-helper.js"></script>
```
Example:
--------

var article = DOM.article();

it will return a jquery object, so you can do something like:

```javascript
var p = DOM.p().append("My text");
```

the correspondent html element for the returned object would be: 
```html
  <p>My text</p>
```

Creating with classes
=====================

```javascript
var article = DOM.article("my-class", "new-article"); // You can use many classes, every class is a "parameter"
```

the correspondent html element for the returned object would be:

```html
<article class="my-class new-article"></article>
```

The parameters passed will be considered as classes.

Available methods
=================
```javascript
  DOM.article()
  DOM.p()
  DOM.img()
  DOM.span()
  DOM.section()
  DOM.strong()
  DOM.div()
  DOM.a()
```

Contribute
==========

You can add new methods to create others html elements.

Please, feel free to fork and make a pull request at anytime.
