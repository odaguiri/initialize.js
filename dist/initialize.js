+function ($) { "use strict";
  function InitializeJS() {
    this._$document = $(document)
    this._$body     = $(document.body)
  }

  InitializeJS.prototype.listen = function () {
    this._$document.ready($('[data-initialize]').each($.proxy(this._initialize, this)))
  }

  InitializeJS.prototype._initialize = function (i, el) {
    var $el = $(el)
    var klasses = $el.data('initialize').split(' ')

    for(var i=0; i < klasses.length;i++) {
      try {
        new(eval(klasses[i]))($el)
      } catch(error) {
        console.warn("initialize.js::warn " + error)
      }
    }
  }

  new InitializeJS().listen()
}(jQuery)