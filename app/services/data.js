application.service('data', function () {
	var employees = [
			{
				id: 1, name: 'Manda Jantzen'
			},
			{
				id: 2, name: 'Hai Paschall'
			},
			{
				id: 3, name: 'Anderson Abbas'
			},
			{
				id: 4, name: 'Numbers Britt'
			},
			{
				id: 5, name: 'Karina Steen'
			}
		];
	this.getEmployees = function() {
		return employees;
	};
	this.getName = function (e) {
		for (var i = 0; i < employees.length; i++) {
			if (employees[i].id === e)
				return employees[i].name;
		};
	};
})