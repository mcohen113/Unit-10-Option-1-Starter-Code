### Project 1 - Reservation App

For this project option you will be building a reservation app that allows a user to book and see reservations for a restaurant.

##### Step 1:
Create reservationData object which will be populated with user input.

```js
var reservationData = {};
```

##### Step 2:
Create a reference to an instance of your database

```js
var databaseReference = new Firebase("https://js-dev-test.firebaseio.com/reservations");
```

##### Step 3:
Set the day when an option is clicked on.

```js
$('.reservation-day li').click(function() {
  reservationData.day = $(this).text();
});
```

##### Step 4:
When submission button is clicked, the name data should be set and all data should be sent to your database.

```js
$('.reservation-button').click(function(event) {
  event.preventDefault();

  reservationData.name = $('.reservation-name').val();

  databaseReference.push(reservationData);
});
```

##### Step 5:
On initial load of application and addition of each reservation update the view.

```js
databaseReference.on('child_added', function(snapshot) {
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
```

##### Step 6:
Define the callback used by the GoogleMaps API to initialize the app's map.

```js
function initMap() {
}
```

##### Step 7:
Use the GoogleMap's Map constructor to create a map.

```js
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.7128, lng: -74.0059},
    zoom: 10,
    scrollwheel: false
  });
}
```

##### Step 8:
Use the Marker constructor to add a marker to map.

```js
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.7128, lng: -74.0059},
    zoom: 10,
    scrollwheel: false
  });

  var marker = new google.maps.Marker({
    position: {lat: 40.7128, lng: -74.0059},
    map: map,
    title: 'Monks Café'
  });
}
```