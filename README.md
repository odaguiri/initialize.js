# initialize.js
Organize your javascript doing components

1. import javascript
```HTML
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
```

2. create component and everytime, you will need to reference to your element
```Javascript
function MyComponent(el) {
  $(el).append('<span>Custom Component Append</span>');
}
```

3. set data-attribute, if you want to have more components in the same element, you can! see the examples on this repository
```HTML
  <div data-initialize="MyComponent">something will happen here</div>
```
