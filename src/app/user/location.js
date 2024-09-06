console.log("file loading...");

function getLocation() {
    const x = document.getElementById("locationDisplay"); // Get the element to display location

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    const x = document.getElementById("locationDisplay"); // Get the element again
    x.innerHTML = "Latitude: " + position.coords.latitude +
                  "<br>Longitude: " + position.coords.longitude;
}

getLocation();
