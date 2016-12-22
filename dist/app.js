(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.vhtml = factory());
}(this, (function () { 'use strict';

var emptyTags = ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'];

var esc = function esc(str) {
	return String(str).replace(/[&<>"']/g, function (s) {
		return '&' + map[s] + ';';
	});
};
var map = { '&': 'amp', '<': 'lt', '>': 'gt', '"': 'quot', "'": 'apos' };

var sanitized = {};

function h(name, attrs) {
	var stack = [];
	for (var i = arguments.length; i-- > 2;) {
		stack.push(arguments[i]);
	}

	if (typeof name === 'function') {
		(attrs || (attrs = {})).children = stack.reverse();
		return name(attrs);
	}

	var s = '<' + name;
	if (attrs) for (var _i in attrs) {
		if (attrs[_i] !== false && attrs[_i] != null) {
			s += ' ' + esc(_i) + '="' + esc(attrs[_i]) + '"';
		}
	}

	if (emptyTags.indexOf(name) === -1) {
		s += '>';

		while (stack.length) {
			var child = stack.pop();
			if (child) {
				if (child.pop) {
					for (var _i2 = child.length; _i2--;) {
						stack.push(child[_i2]);
					}
				} else {
					s += sanitized[child] === true ? child : esc(child);
				}
			}
		}

		s += '</' + name + '>';
	} else {
		s += '>';
	}

	sanitized[s] = true;
	return s;
}

return h;

})));


},{}],2:[function(require,module,exports){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.vrouter = factory());
}(this, (function () { 'use strict';

var ifElse = function ifElse(i, e) {
  return function (cond) {
    return cond ? i : e;
  };
};

var redirect = function redirect(routes, root) {
  var route = location.hash.split('/')[1] || '';
  var hasIndexRedirect = routes.hasOwnProperty('indexRedirect');

  var isIndex = function isIndex(i, e) {
    return ifElse(i, e)(route === '');
  };

  root.innerHTML = isIndex(ifElse(routes[routes.indexRedirect], '')(hasIndexRedirect), routes[route])();
};

function router(routes, root) {
  window.addEventListener('load', function () {
    redirect(routes, root);
  }, false);

  window.addEventListener('hashchange', function () {
    redirect(routes, root);
  }, false);
}

return router;

})));


},{}],3:[function(require,module,exports){
'use strict';

var _vhtml = require('vhtml');

var _vhtml2 = _interopRequireDefault(_vhtml);

var _events = require('./events');

var events = _interopRequireWildcard(_events);

var _vrouter = require('vrouter');

var _vrouter2 = _interopRequireDefault(_vrouter);

var _Layout = require('./views/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _PostContainer = require('./views/Post/PostContainer');

var _PostContainer2 = _interopRequireDefault(_PostContainer);

var _PostsListsContainer = require('./views/PostsList/PostsListsContainer');

var _PostsListsContainer2 = _interopRequireDefault(_PostsListsContainer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = document.querySelector('#content');
data = JSON.parse(data.innerHTML.split('`')[1]);

(0, _vrouter2.default)({
  indexRedirect: 'posts',
  'posts': function posts() {
    return (0, _vhtml2.default)(
      _Layout2.default,
      null,
      (0, _vhtml2.default)(_PostsListsContainer2.default, { data: data.content })
    );
  },
  'post': function post() {
    return (0, _vhtml2.default)(
      _Layout2.default,
      null,
      (0, _vhtml2.default)(_PostContainer2.default, { data: data.content })
    );
  }
}, document.querySelector('.root'));

},{"./events":6,"./views/Layout":8,"./views/Post/PostContainer":10,"./views/PostsList/PostsListsContainer":11,"vhtml":1,"vrouter":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vhtml = require('vhtml');

var _vhtml2 = _interopRequireDefault(_vhtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Aside = function Aside(prop) {
  return (0, _vhtml2.default)(
    'aside',
    null,
    (0, _vhtml2.default)('div', { 'class': 'top' }),
    (0, _vhtml2.default)(
      'a',
      { href: '#/posts' },
      (0, _vhtml2.default)('div', { 'class': 'menu' })
    )
  );
};

exports.default = Aside;

},{"vhtml":1}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vhtml = require("vhtml");

var _vhtml2 = _interopRequireDefault(_vhtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(props) {
  return (0, _vhtml2.default)(
    "footer",
    null,
    (0, _vhtml2.default)(
      "span",
      { "class": "author" },
      "Por: ",
      (0, _vhtml2.default)(
        "strong",
        null,
        (0, _vhtml2.default)(
          "a",
          { href: "http://www.twitter.com/aguirrecaro" },
          "Carolina Aguirre"
        )
      )
    ),
    (0, _vhtml2.default)(
      "span",
      { "class": "creator" },
      "Creado con \u2764\uFE0F por ",
      (0, _vhtml2.default)(
        "a",
        { href: "http://www.twitter.com/keyserfaty" },
        "@keyserfaty"
      )
    )
  );
};

exports.default = Footer;

},{"vhtml":1}],6:[function(require,module,exports){
'use strict';

var _helpers = require('./helpers');

var d = document;

d.addEventListener('click', function (e) {
  if (e.target.classList.contains('top')) {
    window.scrollTo(0, 0);
  }

  if (e.target.classList.contains('menu')) {
    // const menu = d.querySelector('.menu')
    // menu.classList.toggle('toggle-menu')
  }
}, true);

window.addEventListener('scroll', function () {
  var header = d.querySelector('header');

  if (!header) return;

  var fullHeight = d.body.scrollHeight - d.body.clientHeight;
  var scrollPosition = window.pageYOffset;

  header.setAttribute('style', 'width: ' + (0, _helpers.readBarWidth)(scrollPosition, fullHeight) + '%');
}, true);

},{"./helpers":7}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var readBarWidth = exports.readBarWidth = function readBarWidth(scrollPosition, windowHeight) {
  if (windowHeight > 0) {
    return scrollPosition * 100 / windowHeight;
  } else {
    return 0;
  }
};

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vhtml = require('vhtml');

var _vhtml2 = _interopRequireDefault(_vhtml);

var _Footer = require('../common/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Aside = require('../common/Aside');

var _Aside2 = _interopRequireDefault(_Aside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout(props) {
  return (0, _vhtml2.default)(
    'span',
    null,
    (0, _vhtml2.default)(
      'section',
      { 'class': 'container' },
      (0, _vhtml2.default)(_Aside2.default, { data: '' }),
      props.children[0]
    ),
    (0, _vhtml2.default)(_Footer2.default, { data: '' })
  );
};

exports.default = Layout;

},{"../common/Aside":4,"../common/Footer":5,"vhtml":1}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vhtml = require('vhtml');

var _vhtml2 = _interopRequireDefault(_vhtml);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Post = function Post(props) {
  var _props$data = props.data,
      content = _props$data.content,
      title = _props$data.title;

  return (0, _vhtml2.default)(
    'article',
    null,
    (0, _vhtml2.default)(
      'h1',
      null,
      title
    ),
    content.map(function (p) {
      return (0, _vhtml2.default)(
        'p',
        null,
        p
      );
    })
  );
};

exports.default = Post;

},{"vhtml":1}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vhtml = require('vhtml');

var _vhtml2 = _interopRequireDefault(_vhtml);

var _Post = require('./Post');

var _Post2 = _interopRequireDefault(_Post);

var _Footer = require('../../common/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Aside = require('../../common/Aside');

var _Aside2 = _interopRequireDefault(_Aside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostContainer = function PostContainer(props) {
  var route = location.hash.split('/')[2];
  var data = props.data.filter(function (file) {
    return file.fileName === '/' + route;
  })[0];
  return (0, _vhtml2.default)(
    'span',
    null,
    (0, _vhtml2.default)('header', null),
    (0, _vhtml2.default)(
      'section',
      { 'class': 'container' },
      (0, _vhtml2.default)(_Aside2.default, { data: '' }),
      (0, _vhtml2.default)(_Post2.default, { data: data })
    ),
    (0, _vhtml2.default)(_Footer2.default, { data: '' })
  );
};

exports.default = PostContainer;

},{"../../common/Aside":4,"../../common/Footer":5,"./Post":9,"vhtml":1}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vhtml = require('vhtml');

var _vhtml2 = _interopRequireDefault(_vhtml);

var _Footer = require('../../common/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Aside = require('../../common/Aside');

var _Aside2 = _interopRequireDefault(_Aside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostListsContainer = function PostListsContainer(props) {
  return (0, _vhtml2.default)(
    'span',
    { 'class': 'list' },
    props.data.map(function (post) {
      return (0, _vhtml2.default)(
        'div',
        { 'class': 'post' },
        (0, _vhtml2.default)(
          'a',
          { href: '#/post' + post.fileName },
          (0, _vhtml2.default)(
            'h1',
            { 'data-label': post.fileName },
            post.title
          )
        ),
        (0, _vhtml2.default)(
          'span',
          { 'class': 'source' },
          (0, _vhtml2.default)(
            'a',
            { href: 'http://www.lanacion.com' + post.fileName },
            'La Naci\xF3n'
          )
        )
      );
    })
  );
};

exports.default = PostListsContainer;

},{"../../common/Aside":4,"../../common/Footer":5,"vhtml":1}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvdmh0bWwvZGlzdC92aHRtbC5qcyIsIm5vZGVfbW9kdWxlcy92cm91dGVyL2Rpc3QvdnJvdXRlci5qcyIsInNyYy9hcHAuanMiLCJzcmMvY29tbW9uL0FzaWRlLmpzIiwic3JjL2NvbW1vbi9Gb290ZXIuanMiLCJzcmMvZXZlbnRzLmpzIiwic3JjL2hlbHBlcnMuanMiLCJzcmMvdmlld3MvTGF5b3V0LmpzIiwic3JjL3ZpZXdzL1Bvc3QvUG9zdC5qcyIsInNyYy92aWV3cy9Qb3N0L1Bvc3RDb250YWluZXIuanMiLCJzcmMvdmlld3MvUG9zdHNMaXN0L1Bvc3RzTGlzdHNDb250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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WDtBQUNFO0FBQUE7QUFBQSxZQUFHLGlCQUFlLEtBQUssUUFBdkI7QUFDRTtBQUFBO0FBQUEsY0FBSSxjQUFZLEtBQUssUUFBckI7QUFDRyxpQkFBSztBQURSO0FBREYsU0FERjtBQU1FO0FBQUE7QUFBQSxZQUFNLFNBQU0sUUFBWjtBQUFxQjtBQUFBO0FBQUEsY0FBRyxrQ0FBZ0MsS0FBSyxRQUF4QztBQUFBO0FBQUE7QUFBckI7QUFORixPQURlO0FBQUEsS0FBZjtBQURKLEdBREY7QUFjRCxDQWZEOztrQkFpQmUsa0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLnZodG1sID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlUYWdzID0gWydhcmVhJywgJ2Jhc2UnLCAnYnInLCAnY29sJywgJ2NvbW1hbmQnLCAnZW1iZWQnLCAnaHInLCAnaW1nJywgJ2lucHV0JywgJ2tleWdlbicsICdsaW5rJywgJ21ldGEnLCAncGFyYW0nLCAnc291cmNlJywgJ3RyYWNrJywgJ3diciddO1xuXG52YXIgZXNjID0gZnVuY3Rpb24gZXNjKHN0cikge1xuXHRyZXR1cm4gU3RyaW5nKHN0cikucmVwbGFjZSgvWyY8PlwiJ10vZywgZnVuY3Rpb24gKHMpIHtcblx0XHRyZXR1cm4gJyYnICsgbWFwW3NdICsgJzsnO1xuXHR9KTtcbn07XG52YXIgbWFwID0geyAnJic6ICdhbXAnLCAnPCc6ICdsdCcsICc+JzogJ2d0JywgJ1wiJzogJ3F1b3QnLCBcIidcIjogJ2Fwb3MnIH07XG5cbnZhciBzYW5pdGl6ZWQgPSB7fTtcblxuZnVuY3Rpb24gaChuYW1lLCBhdHRycykge1xuXHR2YXIgc3RhY2sgPSBbXTtcblx0Zm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGg7IGktLSA+IDI7KSB7XG5cdFx0c3RhY2sucHVzaChhcmd1bWVudHNbaV0pO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBuYW1lID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0KGF0dHJzIHx8IChhdHRycyA9IHt9KSkuY2hpbGRyZW4gPSBzdGFjay5yZXZlcnNlKCk7XG5cdFx0cmV0dXJuIG5hbWUoYXR0cnMpO1xuXHR9XG5cblx0dmFyIHMgPSAnPCcgKyBuYW1lO1xuXHRpZiAoYXR0cnMpIGZvciAodmFyIF9pIGluIGF0dHJzKSB7XG5cdFx0aWYgKGF0dHJzW19pXSAhPT0gZmFsc2UgJiYgYXR0cnNbX2ldICE9IG51bGwpIHtcblx0XHRcdHMgKz0gJyAnICsgZXNjKF9pKSArICc9XCInICsgZXNjKGF0dHJzW19pXSkgKyAnXCInO1xuXHRcdH1cblx0fVxuXG5cdGlmIChlbXB0eVRhZ3MuaW5kZXhPZihuYW1lKSA9PT0gLTEpIHtcblx0XHRzICs9ICc+JztcblxuXHRcdHdoaWxlIChzdGFjay5sZW5ndGgpIHtcblx0XHRcdHZhciBjaGlsZCA9IHN0YWNrLnBvcCgpO1xuXHRcdFx0aWYgKGNoaWxkKSB7XG5cdFx0XHRcdGlmIChjaGlsZC5wb3ApIHtcblx0XHRcdFx0XHRmb3IgKHZhciBfaTIgPSBjaGlsZC5sZW5ndGg7IF9pMi0tOykge1xuXHRcdFx0XHRcdFx0c3RhY2sucHVzaChjaGlsZFtfaTJdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cyArPSBzYW5pdGl6ZWRbY2hpbGRdID09PSB0cnVlID8gY2hpbGQgOiBlc2MoY2hpbGQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cyArPSAnPC8nICsgbmFtZSArICc+Jztcblx0fSBlbHNlIHtcblx0XHRzICs9ICc+Jztcblx0fVxuXG5cdHNhbml0aXplZFtzXSA9IHRydWU7XG5cdHJldHVybiBzO1xufVxuXG5yZXR1cm4gaDtcblxufSkpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZodG1sLmpzLm1hcFxuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsLnZyb3V0ZXIgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbnZhciBpZkVsc2UgPSBmdW5jdGlvbiBpZkVsc2UoaSwgZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGNvbmQpIHtcbiAgICByZXR1cm4gY29uZCA/IGkgOiBlO1xuICB9O1xufTtcblxudmFyIHJlZGlyZWN0ID0gZnVuY3Rpb24gcmVkaXJlY3Qocm91dGVzLCByb290KSB7XG4gIHZhciByb3V0ZSA9IGxvY2F0aW9uLmhhc2guc3BsaXQoJy8nKVsxXSB8fCAnJztcbiAgdmFyIGhhc0luZGV4UmVkaXJlY3QgPSByb3V0ZXMuaGFzT3duUHJvcGVydHkoJ2luZGV4UmVkaXJlY3QnKTtcblxuICB2YXIgaXNJbmRleCA9IGZ1bmN0aW9uIGlzSW5kZXgoaSwgZSkge1xuICAgIHJldHVybiBpZkVsc2UoaSwgZSkocm91dGUgPT09ICcnKTtcbiAgfTtcblxuICByb290LmlubmVySFRNTCA9IGlzSW5kZXgoaWZFbHNlKHJvdXRlc1tyb3V0ZXMuaW5kZXhSZWRpcmVjdF0sICcnKShoYXNJbmRleFJlZGlyZWN0KSwgcm91dGVzW3JvdXRlXSkoKTtcbn07XG5cbmZ1bmN0aW9uIHJvdXRlcihyb3V0ZXMsIHJvb3QpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgcmVkaXJlY3Qocm91dGVzLCByb290KTtcbiAgfSwgZmFsc2UpO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgIHJlZGlyZWN0KHJvdXRlcywgcm9vdCk7XG4gIH0sIGZhbHNlKTtcbn1cblxucmV0dXJuIHJvdXRlcjtcblxufSkpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZyb3V0ZXIuanMubWFwXG4iLCJpbXBvcnQgaCBmcm9tICd2aHRtbCdcbmltcG9ydCAqIGFzIGV2ZW50cyBmcm9tICcuL2V2ZW50cydcblxuaW1wb3J0IHJvdXRlciBmcm9tICd2cm91dGVyJ1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vdmlld3MvTGF5b3V0J1xuaW1wb3J0IFBvc3RDb250YWluZXIgZnJvbSAnLi92aWV3cy9Qb3N0L1Bvc3RDb250YWluZXInXG5pbXBvcnQgUG9zdHNMaXN0c0NvbnRhaW5lciBmcm9tICcuL3ZpZXdzL1Bvc3RzTGlzdC9Qb3N0c0xpc3RzQ29udGFpbmVyJ1xuXG5sZXQgZGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcbmRhdGEgPSBKU09OLnBhcnNlKGRhdGEuaW5uZXJIVE1MLnNwbGl0KCdgJylbMV0pXG5cbnJvdXRlcihcbiAge1xuICAgIGluZGV4UmVkaXJlY3Q6ICdwb3N0cycsXG4gICAgJ3Bvc3RzJzogKCkgPT4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPFBvc3RzTGlzdHNDb250YWluZXIgZGF0YT17ZGF0YS5jb250ZW50fSAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKSxcbiAgICAncG9zdCc6ICgpID0+IChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxQb3N0Q29udGFpbmVyIGRhdGE9e2RhdGEuY29udGVudH0gLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfSxcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvb3QnKVxuKVxuIiwiaW1wb3J0IGggZnJvbSAndmh0bWwnXG5cbmNvbnN0IEFzaWRlID0gcHJvcCA9PiAoXG4gIDxhc2lkZT5cbiAgICA8ZGl2IGNsYXNzPSd0b3AnPjwvZGl2PlxuICAgIDxhIGhyZWY9JyMvcG9zdHMnPlxuICAgICAgPGRpdiBjbGFzcz0nbWVudSc+PC9kaXY+XG4gICAgPC9hPlxuICA8L2FzaWRlPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBBc2lkZVxuIiwiaW1wb3J0IGggZnJvbSAndmh0bWwnXG5cbmNvbnN0IEZvb3RlciA9IHByb3BzID0+IChcbiAgPGZvb3Rlcj5cbiAgICA8c3BhbiBjbGFzcz1cImF1dGhvclwiPlBvcjogPHN0cm9uZz48YSBocmVmPVwiaHR0cDovL3d3dy50d2l0dGVyLmNvbS9hZ3VpcnJlY2Fyb1wiPkNhcm9saW5hIEFndWlycmU8L2E+PC9zdHJvbmc+PC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwiY3JlYXRvclwiPkNyZWFkbyBjb24g4p2k77iPIHBvciA8YSBocmVmPVwiaHR0cDovL3d3dy50d2l0dGVyLmNvbS9rZXlzZXJmYXR5XCI+QGtleXNlcmZhdHk8L2E+PC9zcGFuPlxuICA8L2Zvb3Rlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXG4iLCJpbXBvcnQgeyByZWFkQmFyV2lkdGggfSBmcm9tICcuL2hlbHBlcnMnXG5cbmNvbnN0IGQgPSBkb2N1bWVudFxuXG5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndG9wJykpIHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgfVxuXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUnKSkge1xuICAgIC8vIGNvbnN0IG1lbnUgPSBkLnF1ZXJ5U2VsZWN0b3IoJy5tZW51JylcbiAgICAvLyBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZS1tZW51JylcbiAgfVxufSwgdHJ1ZSlcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKVxuXG4gIGlmICghaGVhZGVyKSByZXR1cm5cblxuICBjb25zdCBmdWxsSGVpZ2h0ID0gZC5ib2R5LnNjcm9sbEhlaWdodCAtIGQuYm9keS5jbGllbnRIZWlnaHRcbiAgY29uc3Qgc2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXRcblxuICBoZWFkZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWR0aDogJyArIHJlYWRCYXJXaWR0aChzY3JvbGxQb3NpdGlvbiwgZnVsbEhlaWdodCkgKyAnJScpXG59LCB0cnVlKVxuIiwiZXhwb3J0IGNvbnN0IHJlYWRCYXJXaWR0aCA9IChzY3JvbGxQb3NpdGlvbiwgd2luZG93SGVpZ2h0KSA9PiB7XG4gIGlmICh3aW5kb3dIZWlnaHQgPiAwKSB7XG4gICAgcmV0dXJuIHNjcm9sbFBvc2l0aW9uICogMTAwIC8gd2luZG93SGVpZ2h0XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDBcbiAgfVxufVxuIiwiaW1wb3J0IGggZnJvbSAndmh0bWwnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbW1vbi9Gb290ZXInXG5pbXBvcnQgQXNpZGUgZnJvbSAnLi4vY29tbW9uL0FzaWRlJ1xuXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNwYW4+XG4gICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8QXNpZGUgZGF0YT1cIlwiIC8+XG4gICAgICAgIHsgcHJvcHMuY2hpbGRyZW5bMF0gfVxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPEZvb3RlciBkYXRhPVwiXCIvPlxuICAgIDwvc3Bhbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiIsImltcG9ydCBoIGZyb20gJ3ZodG1sJ1xuXG5jb25zdCBQb3N0ID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IGNvbnRlbnQsIHRpdGxlIH0gPSBwcm9wcy5kYXRhXG4gIHJldHVybiAoXG4gICAgPGFydGljbGU+XG4gICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICB7Y29udGVudC5tYXAocCA9PiA8cD57cH08L3A+KX1cbiAgICA8L2FydGljbGU+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdFxuIiwiaW1wb3J0IGggZnJvbSAndmh0bWwnXG5pbXBvcnQgUG9zdCBmcm9tICcuL1Bvc3QnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbW1vbi9Gb290ZXInXG5pbXBvcnQgQXNpZGUgZnJvbSAnLi4vLi4vY29tbW9uL0FzaWRlJ1xuXG5jb25zdCBQb3N0Q29udGFpbmVyID0gcHJvcHMgPT4ge1xuICBjb25zdCByb3V0ZSA9IGxvY2F0aW9uLmhhc2guc3BsaXQoJy8nKVsyXVxuICBjb25zdCBkYXRhID0gcHJvcHMuZGF0YS5maWx0ZXIoZmlsZSA9PiBmaWxlLmZpbGVOYW1lID09PSAnLycgKyByb3V0ZSlbMF1cbiAgcmV0dXJuIChcbiAgICA8c3Bhbj5cbiAgICAgIDxoZWFkZXIgLz5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxBc2lkZSBkYXRhPVwiXCIvPlxuICAgICAgICA8UG9zdCBkYXRhPXtkYXRhfSAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPEZvb3RlciBkYXRhPVwiXCIvPlxuICAgIDwvc3Bhbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0Q29udGFpbmVyXG4iLCJpbXBvcnQgaCBmcm9tICd2aHRtbCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tbW9uL0Zvb3RlcidcbmltcG9ydCBBc2lkZSBmcm9tICcuLi8uLi9jb21tb24vQXNpZGUnXG5cbmNvbnN0IFBvc3RMaXN0c0NvbnRhaW5lciA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzcz1cImxpc3RcIj5cbiAgICAgIHsgcHJvcHMuZGF0YS5tYXAocG9zdCA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3N0XCI+XG4gICAgICAgICAgPGEgaHJlZj17YCMvcG9zdCR7cG9zdC5maWxlTmFtZX1gfT5cbiAgICAgICAgICAgIDxoMSBkYXRhLWxhYmVsPXtwb3N0LmZpbGVOYW1lfT5cbiAgICAgICAgICAgICAge3Bvc3QudGl0bGV9XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInNvdXJjZVwiPjxhIGhyZWY9e2BodHRwOi8vd3d3LmxhbmFjaW9uLmNvbSR7cG9zdC5maWxlTmFtZX1gfT5MYSBOYWNpw7NuPC9hPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKSB9XG4gICAgPC9zcGFuPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RMaXN0c0NvbnRhaW5lclxuIl19
