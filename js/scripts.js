// Each destination should be an object with multiple properties, like location, landmarks, time of year, notes, etc. Display those properties when a user clicks on a place's name.


function Place(location, landmark, time, notes) {
  this.myLocation = location;
  this.landmark = landmark;
  this.time = time;
  this.notes = notes;
}

$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("#new-location").val();
    var inputtedLandmark = $("#new-landmark").val();
    var inputtedTime = $("#new-time").val();
    var inputtedNotes = $("#new-notes").val();

    var newPlace = new Place(inputtedLocation, inputtedLandmark, inputtedTime, inputtedNotes);

    $("ul#places").append("<li><span class='place'>" + newPlace.myLocation + "</span></li>");

    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.myLocation);
      $(".landmark").text(newPlace.landmark);
      $(".time").text(newPlace.time);
      $(".notes").text(newPlace.notes);
    });
    $("#new-location").val('');
    $("#new-landmark").val('');
    $("#new-time").val('');
    $("#new-notes").val('');
  });
});
