var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function($scope, homeService, allTeams){
	console.log(allTeams);
	$scope.jazzData = allTeams.utahjazz;
	$scope.lakersData = allTeams.losangeleslakers;
	$scope.heatData = allTeams.miamiheat;
});
