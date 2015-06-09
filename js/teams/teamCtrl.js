var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){

	$scope.teamData = teamData;
	$scope.newGame = {};
	$scope.showNewGameForm = false;

	console.log($scope.teamData);

	$scope.toggleNewGameForm = function() {
		if ($scope.showNewGameForm === false) {
			$scope.showNewGameForm = true;
		}
		else {
			$scope.showNewGameForm = true;
		}
	}

	if ($routeParams.team === 'utahjazz') {
		$scope.homeTeam = 'Utah Jazz';
		$scope.logoPath = 'images/jazz-logo.png';
	}
	else if ($routeParams.team === 'losangeleslakers') {
		$scope.homeTeam = 'Los Angeles Lakers';
		$scope.logoPath = 'images/lakers-logo.png';
	}
	else if ($routeParams.team === 'miamiheat') {
		$scope.homeTeam = 'Miami Heat';
		$scope.logoPath = 'images/heat-logo.png';
	}


	console.log($scope.newGame);

	$scope.submitGame = function() {
		$scope.newGame.homeTeam = $scope.homeTeam.split(' ').join('').toLowerCase();
		console.log($scope.newGame)
		teamService.addNewGame($scope.newGame).then(function() {
			teamService.getTeamData($scope.newGame.homeTeam).then(function(response) {
				$scope.teamData = response;
				$scope.newGame = {};
				$scope.showNewGameForm = false;
			});
		});
	};

});