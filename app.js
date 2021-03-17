//Run a function as soon as window loads
window.addEventListener('load', ()=> {
    //declare longitude and latitude to get current location
    let long;
    let lat;


    if (navigator.geolocation) { //if user allows google to use their current location
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=2d34b7d14e86d002792327c07e7f2655`; 

            fetch(api)
                .then(Response => {
                    return Response.json();
                })
                .then(data => {
                    console.log(data);
                })
        })
    }

})