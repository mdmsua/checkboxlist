application.directive('account', function () {
	return {
		restrict: 'E',
		template: '<p ng-repeat="model in names"><input type="checkbox"/><span>{{name}}<span></p>',
		replace: true,
		scope: {
			names: '=',
			value: '=',
			name: '='
		}
	}
});