var markers = [];
var map;

function myMap() {
    var mapOptions = {
        center: {
            lat: 41.25825,
            lng: -96.010705
        },
        zoom: 10

    }
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var locations = [{
        title: 'kobe resturant',
        location: {
            lat: 41.259166,
            lng: -96.177691
        }
    }, {
        title: 'Spezia',
        location: {
            lat: 41.229737,
            lng: -96.023418
        }
    }, {
        title: 'The Drover',
        location: {
            lat: 41.239149,
            lng: -96.025954
        }
    }, {
        title: 'Blue Sushi Sake Grill',
        location: {
            lat: 41.255865,
            lng: -95.932194
        }
    }, {
        title: 'Salt 88',
        location: {
            lat: 41.290495,
            lng: -96.115525
        }
    }, {
        title: 'Stokes Grill and Bar',
        location: {
            lat: 41.264331,
            lng: -96.12829
        }
    }];
    for (var i = 0; i < locations.length; i++) {
        // Get the position from the location array.
        var position = locations[i].location;
        var title = locations[i].title;
        // Create a marker per location, and put into markers array.
        var marker = new google.maps.Marker({
            map: map,
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            id: i
        });
        markers.push(marker);
        var largeInfowindow = new google.maps.InfoWindow();
        marker.addListener('click', function() {
            populateInfoWindow(this, largeInfowindow);
        });
    }


    function populateInfoWindow(marker, infowindow) {
        // Check to make sure the infowindow is not already opened on this marker.
        if (infowindow.marker != marker) {
            infowindow.marker = marker;
            infowindow.setContent('<div>' + marker.title + '</div>');
            infowindow.open(map, marker);
            // Make sure the marker property is cleared if the infowindow is closed.
            infowindow.addListener('closeclick', function() {
                infowindow.setMarker = null;
            });
        }

    }
}