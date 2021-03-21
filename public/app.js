
//get user location 
function search() {
    let city = document.querySelector('#location').value; 

    //instert user location in api
    const api = `https://api.weatherapi.com/v1/forecast.json?key=703d940f7ef44bc19b972820211803&q=${city}&days=10&aqi=no&alerts=no`;

            fetch(api)
                .then(response => {
                    return response.json(); //converst api to json to use with js
                })
                .then(data => {
                    console.log(data);
                    //get all information you need for today
                    const temp = data.current.temp_c;
                    const condition = data.current.condition.text;
                    const time = data.location.localtime;
                    const icon = data.current.condition.icon;
                    const region = data.location.region;

                    //inster information into app
                    document.querySelector('#temperature').textContent = temp;
                    document.querySelector('#description').textContent = condition;
                    document.querySelector('#date').textContent = time;
                    document.querySelector('h2#location').textContent = region;
                    document.querySelector('.icon img').src = icon;

                    //get all information you need for forecast
                    //get temperature
                    const temp1min = data.forecast.forecastday[0].day.mintemp_c;
                    const temp1max = data.forecast.forecastday[0].day.maxtemp_c;
                    const temp2min = data.forecast.forecastday[1].day.mintemp_c;
                    const temp2max = data.forecast.forecastday[1].day.maxtemp_c;
                    const temp3min = data.forecast.forecastday[2].day.mintemp_c;
                    const temp3max = data.forecast.forecastday[2].day.maxtemp_c;

                    //get day of the week 
                    const day2 = data.forecast.forecastday[1].date;
                    let d = new Date(day2)
                    let dayString;
                    switch (d.getDay()) {
                        case 0:
                            dayString = "Sunday";
                          break;
                        case 1:
                            dayString = "Monday";
                          break;
                        case 2:
                            dayString = "Tuesday";
                          break;
                        case 3:
                            dayString = "Wednesday";
                          break;
                        case 4:
                            dayString = "Thursday";
                          break;
                        case 5:
                            dayString = "Friday";
                          break;
                        case 6:
                            dayString = "Saturday";
                      }

                    const day3 = data.forecast.forecastday[2].date;

                    let a = new Date(day3)
                    let dayString2;
                    switch (a.getDay()) {
                        case 0:
                            dayString2 = "Sunday";
                          break;
                        case 1:
                            dayString2 = "Monday";
                          break;
                        case 2:
                            dayString2 = "Tuesday";
                          break;
                        case 3:
                            dayString2 = "Wednesday";
                          break;
                        case 4:
                            dayString2 = "Thursday";
                          break;
                        case 5:
                            dayString2 = "Friday";
                          break;
                        case 6:
                            dayString2 = "Saturday";
                      }

                    //get icon
                    const icon1 = data.forecast.forecastday[0].day.condition.icon;
                    const icon2 = data.forecast.forecastday[1].day.condition.icon;
                    const icon3 = data.forecast.forecastday[2].day.condition.icon;

                    //insert forecast information into app
                    //inster temperature
                    document.querySelector('#temperature1').textContent = `${Math.floor(temp1max)}/${Math.floor(temp1min)}`;
                    document.querySelector('#temperature2').textContent = `${Math.floor(temp2max)}/${Math.floor(temp2min)}`;
                    document.querySelector('#temperature3').textContent = `${Math.floor(temp3max)}/${Math.floor(temp3min)}`;

                    //insert day of the week
                    document.querySelector('#forecast2').textContent = dayString;
                    document.querySelector('#forecast3').textContent = dayString2;

                    //insert icon 
                    document.querySelector('#icon1 img').src = icon1;
                    document.querySelector('#icon2 img').src = icon2;
                    document.querySelector('#icon3 img').src = icon3;
                })
}

