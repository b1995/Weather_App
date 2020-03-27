async function GetData(city) {
        const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=550b3c3869c018579bfbe46991374d73`,
                // eslint-disable-next-line prettier/prettier
  { mode: 'cors' })
        const data = await response.json();
        return data;
}

export default GetData;
