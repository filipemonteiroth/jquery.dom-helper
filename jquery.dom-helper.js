/* The arguments passed in the method will be considered as classes */
var DOM = {
	article: function article() {
		return DOM.create(arguments.callee.name, arguments);
	},
	p: function p() {
		return DOM.create(arguments.callee.name, arguments);	
	},
	img: function img() {
		return DOM.create(arguments.callee.name, arguments);	
	},
	span: function span() {
		return DOM.create(arguments.callee.name, arguments);
	},
	section: function section() {
		return DOM.create(arguments.callee.name, arguments);	
	},
	strong: function strong() {
		return DOM.create(arguments.callee.name, arguments);
	}
};

DOM.addClasses = function(element, classes) {
	for (var i = 0; i < classes.length; i++) {
		$(element).addClass(classes[i]);
	};
}

DOM.create = function(tag, classes) {
	var element = $("<" + tag + "/>");
	DOM.addClasses(element, classes);
	return element;
};
