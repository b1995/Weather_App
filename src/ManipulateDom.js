async function domManiplulation(FinalizedData) {
        getImage(FinalizedData.text);
        document.getElementById('temp').innerHTML = FinalizedData.tempC + '&#8451';
        document.getElementById('feels_like').innerHTML = FinalizedData.tempFeelC  + '&#8451';
        document.getElementById('temp_min').innerHTML = FinalizedData.tempMinC + '&#8451';
        document.getElementById('temp_max').innerHTML = FinalizedData.tempMaxC + '&#8451';
        document.getElementById('location').innerHTML = FinalizedData.city + ", " +FinalizedData.country ;
        // eslint-disable-next-line no-use-before-define
}
async function getImage(currentWeather) {
        const response = await fetch(
                `https://api.unsplash.com/search/photos/?client_id=TVZ3hWy7l5Xo5yPLqRP0GLHReFrX6jRrSgUTz0QLGXY&query=${currentWeather}-${currentWeather.city}`
        );
        console.log(currentWeather);
        const blob = await response.json();
        console.log(blob.results[0].urls.full);
        document.body.style.backgroundImage = ` linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
              ),url(${blob.results[0].urls.full})`;
}

export default domManiplulation;
