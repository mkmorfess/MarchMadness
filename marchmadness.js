$(document).ready(function() {

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCoGQ8N8U50IC9S3wRoFg_Q2IGRDEA8f0o",
    authDomain: "marchmadness-e97ca.firebaseapp.com",
    databaseURL: "https://marchmadness-e97ca.firebaseio.com",
    projectId: "marchmadness-e97ca",
    storageBucket: "",
    messagingSenderId: "1032619939426"
  };
  firebase.initializeApp(config);

	var gameNumber = 0;
	var rowNumber = 0;
	var database = firebase.database();
	var dataFre = 0;
	var dataTime = 0;


	database.ref().on("child_added", function(snapshot) {

	// console.log(snapshot.val());

	var tableRow = $("<tr>")
	

	tableRow.attr("data-game", "game-" + gameNumber)
	tableRow.attr("id", "row-" + rowNumber)
	tableRow.addClass("gameRows")
	$("#main").append(tableRow)

	input = [snapshot.val().year, snapshot.val().location, snapshot.val().venue, snapshot.val().regionround, snapshot.val().stubs, snapshot.val().hometeam]

	for (var i = 0; i < 6; i++) {

		var tableData = $("<td>")

	tableData.text(input[i])
	$("#row-" + rowNumber).append(tableData)
	}
});

$("#submit").on("click", function() {

	var input = [$("#year").val().trim(), $("#location").val().trim(), $("#venue").val().trim(), $("#region-round").val().trim(), $("#stubs").val().trim(), $("#hometeam").val().trim()]

	database.ref().push({
		year: input[0],
		location: input[1],
		venue: input[2],
		regionround: input[3],
		stubs: input[4],
		hometeam: input[5]
	});

	$("#year").val("")
	$("#location").val("")
	$("#venue").val("")
	$("#region-round").val("")
	$("#stubs").val("")
	$("#hometeam").val("")

	gameNumber++
	rowNumber++
		 
	});

});