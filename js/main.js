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




