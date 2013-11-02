application.controller("default", function ($scope, $log, data) {
	$scope.employees = data.getEmployees();
	$scope.selectedEmployees = [];
	$scope.getName = function (e) {
		return data.getName(e);
	};
});