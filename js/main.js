var config = {
    apiKey: "AIzaSyDSsfzKJbQz-cNVjf4XBygA9b-gIbHw6YU",
    authDomain: "reservation-site-16f33.firebaseapp.com",
    databaseURL: "https://reservation-site-16f33.firebaseio.com",
    projectId: "reservation-site-16f33",
    storageBucket: "reservation-site-16f33.appspot.com",
    messagingSenderId: "69733048914"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var reservationData = {};

$('.reservation-day li').click(function() {
  reservationData.day = $(this).text();

});

$('.reservations').on('submit', (function(e) {
  e.preventDefault();

  reservationData.name = $('.reservation-name').val();

  database.ref('reservations').push(reservationData);
});)

// on initial load and addition of each reservation update the view
database.ref('reservations').on('child_added', function(snapshot) {
  // grab element to hook to
  var reservationList = $('.reservation-list');
  // get data from database
  var reservations = snapshot.val();
  // get your template from your script tag
  var source   = $("#reservation-template").html();
  // compile template
  var template = Handlebars.compile(source);
  // pass data to template to be evaluated within handlebars
  // as the template is created
  var reservationTemplate = template(reservations);
  // append created templated
  reservationList.append(reservationTemplate);
});


