describe('Römische Zahlen', function() {
    beforeEach(angular.mock.module('roemischeZahlen'));
	var $controller;
	beforeEach(angular.mock.inject(function(_$controller_) {
	  $controller = _$controller_;
	}));
	describe('$scope.konvertiere', function() {
		it('konvertiert die Zahl 4 ins römische Zahlenformat', function() {
			var $scope = {};
			var controller = $controller('roemischeZahlenCtrl', {$scope: $scope});
			expect($scope.konvertiere(4)).toEqual('IV');
		});
		it('konvertiert die Zahl 0 ins römische Zahlenformat', function() {
			var $scope = {};
			var controller = $controller('roemischeZahlenCtrl', {$scope: $scope});
			expect($scope.konvertiere(0)).toEqual('kein Ergebnis');
		});
		it('konvertiert die Zahl 4000 ins römische Zahlenformat', function() {
			var $scope = {};
			var controller = $controller('roemischeZahlenCtrl', {$scope: $scope});
			expect($scope.konvertiere(4000)).toEqual('kein Ergebnis');
		});
		it('konvertiert die Zahl 800 ins römische Zahlenformat', function() {
			var $scope = {};
			var controller = $controller('roemischeZahlenCtrl', {$scope: $scope});
			expect($scope.konvertiere(800)).toEqual('DCCC');
		});
		it('konvertiert die Zahl 3999 ins römische Zahlenformat', function() {
			var $scope = {};
			var controller = $controller('roemischeZahlenCtrl', {$scope: $scope});
			expect($scope.konvertiere(3999)).toEqual('MMMCMXCIX');
		});
	});
});