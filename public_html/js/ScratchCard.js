;(function() {
  var global = this;
  function ScratchCard(element, options, ownerDocument) {

    // apply default arguments.
//    var defaultOptions = {
//      'color': 'gray',
//      'radius':30
//    };
//    
    var defaultOptions = {
      'color': "../images/sis_cirv.png",
      'radius':30
    };
    if (options) {
      for (var key in defaultOptions) {
        if (!(key in options)) {
          options[key] = defaultOptions[key];
        }
      }
    } else {
      options = defaultOptions;
    }
    ownerDocument = ownerDocument || global.document;
    
    // canvas validate.
    var div = document.getElementById("sceatchable"); //yo
//    var canvas = document.createElement('canvas');
    var canvas = document.getElementById('canvas');
    if (typeof canvas.getContext != 'function')
      return console.log('Canvas not supported.');

    // apply canvas offset & size of element
//    var rect = div.getBoundingClientRect();
//    canvas.width = rect.width || rect.right - rect.left;
//    canvas.height = rect.height || rect.bottom - rect.top;
//    canvas.style.top = rect.top + 'px';
//    canvas.style.left = rect.left + 'px';
     var parent = document.getElementById("contenido");
    canvas.width = div.offsetWidth - 15;
    canvas.height = div.offsetHeight- 15;
    canvas.style.position = 'absolute';
    canvas.style.zIndex = element.style.zIndex + 1;
    // fill the canvas
    var context = canvas.getContext('2d');
    
    var img = new Image(parent.offsetWidth, parent.offsetHeight); //yo
//    context.fillStyle = options.color;
    img.src = options.color;
    context.drawImage(img,0,0);
//    context.fillRect(0, 0, canvas.width, canvas.height);
    context.globalCompositeOperation = "destination-out";
    context.strokeStyle = "rgba(0,0,0,1)";
    // add mouse events to canvas
    // TODO: supply touch events
    // TODO: scratch from the outside
    
              
    
    
    function scratchStart(event) {
      if (event.button != 0) // not left button
        return;

      var x = event.offsetX || event.layerX;
      var y = event.offsetY || event.layerY;

      context.beginPath();
      context.arc(x, y, options.radius, 0, Math.PI * 2);
      context.fill();

      canvas.addEventListener('mousemove', scratchMove);
      document.addEventListener('mouseup', scratchEnd);
    }

    function scratchMove(event) {
      var x = event.offsetX || event.layerX;
      var y = event.offsetY || event.layerY;

      context.beginPath();
      context.arc(x, y, options.radius, 0, Math.PI * 2);
      context.fill();
    }

    function scratchEnd(event) {
      canvas.removeEventListener('mousemove', scratchMove);
      document.removeEventListener('mouseup', scratchEnd);
    }

    canvas.addEventListener('mousedown', scratchStart);

    // disable element interaction
    ['MozUserSelect',
     'msUserSelect',
     'oUserSelect',
     'webkitUserSelect',
     'pointerEvents']
      .filter(function (cssProp) {
        return cssProp in element.style;
      }).forEach(function (cssProp) {
        element.style[cssProp] = 'none';
      });

    // append canvas to body.
//    document.body.appendChild(canvas); //antes era document.body.append...
  }

  if (typeof module == 'object' && module.exports) {
    // Node.js module
    module.exports = ScratchCard;
  } else if (typeof define == 'function' && (define.amd || define.cmd)) {
    // AMD or CMD module
    define(ScratchCard);
  } else if (typeof jQuery == 'function' && typeof jQuery.extend == 'function') {
    // jQuery plugin
    jQuery.fn.extend({
      'ScratchCard': function (options) {
        return this.each(function (element) {
          ScratchCard(element, options);
        });
      }
    });
  } else if (typeof angular == 'object' && typeof angular.module == 'function') {
    // AngularJS module
    // TODO: modify it to a directive.
    angular.module('ScratchCard', [])
      .value('ScratchCard', ScratchCard);
  } else {
    // Apply to a global variable.
    if (global.ScratchCard) {
      (function (oldScratchCard) {
        ScratchCard.noConflict = function () {
          global.ScratchCard = oldScratchCard;
          return ScratchCard;
        };
      }) (global.ScratchCard);
    }
    global.ScratchCard = ScratchCard;
  }
}).call(this);

