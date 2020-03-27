async function toCelcius(tempdata) {
        const report = {};
        console.log(tempdata);

        report.tempC = (parseFloat(tempdata.main.temp) - 273.15).toFixed(1);
        report.tempF = ((parseFloat(tempdata.main.temp) - 273.15) * (9 / 5) + 32).toFixed(1);

        report.tempFeelC = (parseFloat(tempdata.main.feels_like) - 273.15).toFixed(1);
        report.tempFeelF = ((parseFloat(tempdata.main.feels_like) - 273.15) * (9 / 5) + 32).toFixed(1);

        report.tempMinC = (parseFloat(tempdata.main.temp_min) - 273.15).toFixed(1);
        report.tempMinF = ((parseFloat(tempdata.main.temp_min) - 273.15) * (9 / 5) + 32).toFixed(1);

        report.tempMaxC = (parseFloat(tempdata.main.temp_max) - 273.15).toFixed(1);
        report.tempMaxF = ((parseFloat(tempdata.main.temp_max) - 273.15) * (9 / 5) + 32).toFixed(1);

        report.text = tempdata.weather[0].main;
        report.icon = tempdata.weather[0].icon;

        report.city = tempdata.name;
        report.country = tempdata.sys.country;

        return report;
}

export default toCelcius;
