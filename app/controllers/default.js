application.controller("", function ($scope, data) {
	$scope.accounts = [];
	$scope.busy = true;
	$scope.view = true;

	$scope.switch = function(v) {
		$scope.view = v;
	};

	$scope.getTotal = function(v) {
		return _.where($scope.accounts, { active: v }).length;
	};

	data.getAccounts().then(function (d) {
		$scope.busy = false;
		$scope.accounts = d;
	});
});