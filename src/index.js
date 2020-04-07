import GetData from './fetchdata';
import toCelcius from './Analyzedata';
import domManiplulation from './ManipulateDom';
import placesAutocomplete from './search.js';
require('dotenv').config();


document.getElementById('searchbutton').onclick = function() {
        resolveWeather();
} ;

async function resolveWeather() {
        const city = document.getElementById('address-input').value;
        console.log(city);
        const weatherData = await GetData(city).catch(error => {
                console.log('error!');
                console.error(error);
        });
        const ReportedData = await toCelcius(weatherData);
        domManiplulation(ReportedData,city);
}
