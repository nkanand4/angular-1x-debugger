(function() {
	// need to find a way to find out if debug is disabled
	//angular.reloadWithDebugInfo();

	// select an element in debugging console and run _scope($0)
	var _scope = function(selector) {
		return angular.element(selector || $0).scope();
	}
	var _binder = function(selector) {
		return angular.element(selector || $0).data('$binding');
	}
	var _inj = function(name) {
		return angular.element(document).injector().get(name);
	}
	if(!window._scope && !window._binder && !window._inj) {
		window._scope = _scope;
		window._binder = _binder;
		window._inj = _inj
	}
}());