
//get user location 
function search() {
    let city = document.querySelector('#location').value; 

    //instert user location in api
    const api = `https://api.weatherapi.com/v1/current.json?&key=703d940f7ef44bc19b972820211803&q=${city}&aqi=yes`;

            fetch(api)
                .then(response => {
                    return response.json(); //converst api to json to use with js
                })
                .then(data => {
                    console.log(data);
                    //get all information you need 
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
                    
                })
}

