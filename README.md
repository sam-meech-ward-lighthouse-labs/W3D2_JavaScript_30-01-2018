# jQuery 

jQuery ($) is a function.
What can I pass the jQuery function?

### 4 things you pass to the jQuery function

* CSS Selector
  - Will grab the dom element and wrap it in a jQuery object so that we have access to all the jQuery methods.

```js
const vanillaWay = document.querySelector('#tastesBad');
const jQueryWay = $('#tastesBad .food');

console.log(vanillaWay, jQueryWay);

console.log(jQueryWay.first().text());

$('li'); // Returns all the list items in the html
```

* Element String '<li>'

Will create a new element

```js
const newLi = $('<li>');
newLi.text("Orange"); 
$("#tastesBad").append(newLi);
```

* DOM Element

Will "wrap" the dom element in a jQuery object, so that you can access all the jQuery methods on it.

  ```js
  const li = document.querySelector('li');
  $(li); // Equivilent $('li');

  $(this)
  ```

* Another function

It will accept a function as a callback that will get executed when the html document has loaded. 

Instead of this:

```js
document.addEventListener("DOMContentLoaded", function() {

});
```

Use this:

```js
$(function() {

});
```

It's also good practice because it stops us from creating global variables.
