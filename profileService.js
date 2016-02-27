angular.module('devMtIn')
.service('profileService', function($http){

var baseUrl = "http://connections.devmounta.in/";


this.serviceTest = function() {
	console.log('profileService is connected!');
}

this.saveProfile = function(profile) {
	return $http({
		method: 'POST',
		url: baseUrl + 'api/profiles',
		data: profile
	})
	.then(function(profileResponse){
		console.log('profileResponse', profileResponse);
		localStorage.setItem('profileId', JSON.stringify({profileId: profileResponse.data._id}));
	})
	.catch(function(err){
		console.error(err);
	});
}

this.checkForProfile = function(profileId){
	return $http({
		method: 'GET',
		url: baseUrl + 'api/profiles/' + profileId
	});

	// if (localStorage.getItem('profile')){
	// 	return JSON.parse(localStorage.getItem('profile'));
	// }
	// return {
	// 	friends : [{name: 'Ryan'}, {name: 'Bryan'}, {name: 'Sarah'}, {name: 'Zac'}, {name: 'Erin'}]
	// }
}

this.deleteProfile = function(profile) {
	var profileId = JSON.parse(localStorage.getItem('profileId')).profileId;

	return $http({
		method: 'DELETE',
		url: baseUrl +'api/profiles/' + profileId
	});
}

});