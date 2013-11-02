application.controller("default", function ($scope, $log, data) {
	$scope.names = data.getNames();
	$scope.chosen = [];
	$scope.$watch('chosen', function (v) {
		$log.log('chosens are: ', v);
	});
});