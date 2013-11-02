application.directive('checkboxList', function () {
	return {
		restrict: 'E',
		template: '<div ng-repeat="item in collection" class="checkbox"><label><input type="checkbox" value="{{item[key]}}" ng-checked="item.checked" ng-model="item.checked" ng-change="onChange(item)">{{item[value]}}</label></div>',
		replace: true,
		require: 'ngModel',
		scope: {
			items: '=',
			key: '@',
			value: '@',
			ngModel: '='
		},
		controller: function ($scope) {
			$scope.collection = angular.copy($scope.items);
			$scope.onChange = function (item) {
				var checked = [];
				for (var i = 0; i < $scope.collection.length; i++) {
					if ($scope.collection[i].checked)
						checked.push($scope.collection[i][$scope.key]);
				};
				$scope.ngModel = checked;
			};
		}
	}
});