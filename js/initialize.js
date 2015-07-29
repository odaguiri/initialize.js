+function ($) { "use strict";
  function InitializeJS() {
    window.onload = this.listen;
  }

  InitializeJS.prototype.listen = function() {
    var elements = document.querySelectorAll('[data-initialize]');
    var i;
    for (i = 0; i < elements.length; i++) {
      var element = elements[i];
      var klasses = element.getAttribute('data-initialize').split(' ');

      for(var n=0; n < klasses.length;n++) {
        try {
          new(eval(klasses[n]))(element);
        } catch(error) {
          console.warn("initialize.js::warn " + error)
        }
      }
    }
  };

  new InitializeJS();
}(jQuery)
