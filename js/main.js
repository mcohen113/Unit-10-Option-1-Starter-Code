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
}));

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

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.7128, lng: -74.0059},
    zoom: 12,
    scrollwheel: false,
    styles: [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}]
  });

  // use Marker constructor to add a marker to map
  var marker = new google.maps.Marker({
    position: {lat: 40.8054491, lng: -73.9654415},
    map: map,
    title: 'Monks Café'
  });
}


