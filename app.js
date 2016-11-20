var app = angular.module("roemischeZahlen", []);
app.controller("roemischeZahlenCtrl", function($scope) {
  $scope.zahl = 1;
  $scope.konvertiere = function(zahl) {
	
	var rz = new Array("M","D","C","L","X","V","I");
	var teiler = 1000;
	var rest = zahl;
	var index = 0;
	var result = '';
	
	if ((typeof zahl == 'undefined')
		|| (zahl < 1 || zahl > 3999)) {
	  return 'kein Ergebnis';
	}	
	
	while (teiler >= 1) {
	  var wert = Math.floor(rest / teiler);
	  rest -= wert * teiler;
	  teiler /= 10;
	  if (wert % 5 == 4) {
        // Subtraktive Darstellung wird benötigt (z.B. IV, XC)
		result += rz[index] + rz[index - 1 - Math.floor(wert / 5)];
	  }
	  else if (wert > 0) {
		result += (wert > 4 ? rz[index - 1]:"") + rz[index].repeat(wert % 5);
	  }
	  index += 2;
	};
	return result;
  }
});
