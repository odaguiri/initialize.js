# initialize.js
Organize your javascript doing components

Import javascript and load it
```HTML
  <script src="initialize.min.js"></script>
  <script>window.load = InitializeJS.allElements();</script>
```

Create your component file "opacity.js" (yeah try to default your file with class)
```Javascript
function Opacity(el) {
  el.style.opacity = el.getAttribute('data-opacity-level');
}
```

Now the magic :)
```HTML
  <div data-initialize="Opacity" data-opacity-level="0.7">something will happen here</div>
```

ps: This repository have an example