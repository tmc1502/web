// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyAKVwCUXgdKswFp26qklPmA26sb2K4FO_o",
	authDomain: "test-web-19188.firebaseapp.com",
	databaseURL: "https://test-web-19188-default-rtdb.firebaseio.com",
	projectId: "test-web-19188",
	storageBucket: "test-web-19188.appspot.com",
	messagingSenderId: "423386348055",
	appId: "1:423386348055:web:0b9047c53e837206f4ba52",
	measurementId: "G-7ZX8RBPEL8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


$(document).ready(function () {
	var database = firebase.database();

	database.ref().on("value", function (snapshot) {
		var parkingStatus = snapshot.val();

		for (var key in parkingStatus) {
			if (parkingStatus.hasOwnProperty(key)) {
				var parkingSpace = $("#" + key);
				if (parkingStatus[key] === 1) {
					parkingSpace.find("img").show();
				} else {
					parkingSpace.find("img").hide();
				}
			}
		}
	});
});



