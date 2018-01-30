# Client side javascript

- Allows us to write logic in the browser. Which lets us manipulate the html once we've sent it to the user. 

### HTML & the DOM

Document Object Model

The DOM is a tree

```js
let node = {
  parent: {},
  children: [],
  tagName: "",
  ....
}
```

```js
let body {
  parent: html,
  children: [p],
  tagName: "Body",
  ...
}
```

### Global Vars

window: the browser window. any global variables exist as properties on this object. 
navigator: represents the browser
document: represents the html document.

#### Traversal

Tree traversal:

```js
document.body.children[4].children[0].innerText
document.body.children[4].children[0].parentElement.parentElement.children[2]
```

#### Selection

```js
document.getElementsByTagName('ul')
document.getElementById('tastesBad')
document.getElementById('tastesBad').children[0].innerText

document.getElementsByClassName('food-list') 

document.querySelector('#tastesBad')
document.querySelectorAll('ul.food-list li')
```

#### Creation

```js
let newItem = document.createElement('li')
document.querySelector('#justPadThai').appendChild(newItem)
newItem.innerText = "Orange"
```

#### Manipulation

```js
document.querySelector('#tastesGood').children[0].innerText = "🤗"
```

--- 

## JavaScript Versions

Check the different browser's compatibility before choosing which version of JavaScript you will use.  Although browser support for ES6 is growing, there are still browsers in use today that don't support it.

https://caniuse.com/

## Including Javascript Files

```js
<script src="penutButter.js"></script>
```

Include the file at the end of the `<body>` tag, so the html can load first.

## Events

https://developer.mozilla.org/en-US/docs/Web/Events

Some Events:

* click
* hover
* mouseOver
* mouseMovce
* keyboardPress
* keyboardup
* keyboardStuff

Event Bubbling: If an event gets triggered on a node, that event will also bubble up and get triggered on every parent node as well.

