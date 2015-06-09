var app = angular.module('nbaRoutes');

app.service('homeService', function($http, $q, teamService){
	this.getAll = function() {
		var dfd = $q.defer();
		var promises = {
			utahjazz: teamService.getTeamData('utahjazz'),
			losangeleslakers: teamService.getTeamData('losangeleslakers'),
			miamiheat: teamService.getTeamData('miamiheat')
		};
		$q.all(promises).then(function(results) {
			dfd.resolve(results);
		});
		return dfd.promise;
	}
});
