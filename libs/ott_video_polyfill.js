/**
 * For browsers that do not support Element.closest(),
 * but carry support for element.matches() (or a prefixed equivalent, meaning IE9+),
 * a polyfill exists:
 * */
if (!Element.prototype.matches) {
	Element.prototype.matches =
		Element.prototype.msMatchesSelector ||
		Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
	Element.prototype.closest = function(s) {
		var el = this;

		do {
			if (Element.prototype.matches.call(el, s)) return el;
			el = el.parentElement || el.parentNode;
		} while (el !== null && el.nodeType === 1);
		return null;
	};
}

/**
 * You can polyfill the before() method in Internet Explorer 9 and higher with the following code
 * */
(function (arr) {
	arr.forEach(function (item) {
		if (item.hasOwnProperty('before')) {
			return;
		}
		Object.defineProperty(item, 'before', {
			configurable: true,
			enumerable: true,
			writable: true,
			value: function before() {
				var argArr = Array.prototype.slice.call(arguments),
					docFrag = document.createDocumentFragment();

				argArr.forEach(function (argItem) {
					var isNode = argItem instanceof Node;
					docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
				});

				this.parentNode.insertBefore(docFrag, this);
			}
		});
	});
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

/**
 * Date Now
 * */
;(function (){
	if (!Date.now) {
		Date.now = function now() {
			return new Date().getTime();
		};
	}
})(window.Date);