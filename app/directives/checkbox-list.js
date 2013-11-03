application.directive('checkboxList', function () {
	return {
		restrict: 'E',
		template: 	'<section>' +
						'<div class="input-group">' +
							'<input type="text" class="form-control" ng-model="expression">' +
	      						'<span class="input-group-btn">' +
	        						'<button class="btn btn-default" type="button" ng-click="check()"><span ng-class="{ \'glyphicon glyphicon-check\': doCheck == 1, \'glyphicon glyphicon-unchecked\' : doCheck == 0, \'glyphicon glyphicon-random\': doCheck == -1 }"></span></button>' +
	      						'</span>' +
						'</div>' +
						'<div ng-repeat="item in collection | filter: expression" class="checkbox">' +
							'<label><input type="checkbox" value="{{item[key]}}" ng-checked="item.checked" ng-model="item.checked" ng-change="onChange()">{{item[value]}}</label>' +
						'</div>' +
					'</section>',
		replace: true,
		require: 'ngModel',
		scope: {
			items: '=',
			key: '@',
			value: '@',
			ngModel: '='
		},
		controller: function ($scope, $filter) {
			$scope.collection = angular.copy($scope.items);
			$scope.expression = '';
			$scope.doCheck = 1;
			$scope.onChange = function () {
				var checked = [];
				for (var i = 0; i < $scope.collection.length; i++) {
					if ($scope.collection[i].checked)
						checked.push($scope.collection[i][$scope.key]);
				};
				$scope.ngModel = checked;
				getDoCheck();
			};
			$scope.check = function () {
				var filtered = $filter('filter')($scope.collection, $scope.expression);
				getDoCheck();
				for (var i = 0; i < filtered.length; i++) {
					switch ($scope.doCheck)
					{
						case 1: filtered[i].checked = true;
							break;
						case 0: filtered[i].checked = false;
							break;
						case -1: filtered[i].checked = !filtered[i].checked;
							break;
					}
					$scope.onChange();
				};
				getDoCheck();
			};
			$scope.$watch('expression', function () {
				getDoCheck();
			});
			function getDoCheck() {
				var allChecked = 1, allUnchecked = 1, 
					filtered = $filter('filter')($scope.collection, $scope.expression);
				for (var i = 0; i < filtered.length; i++) {
					allChecked &= filtered[i].checked;
					allUnchecked &= !filtered[i].checked;
				};
				$scope.doCheck = allChecked ? 0 : allUnchecked ? 1 : -1;
			}
		}
	}
});