document.addEventListener('DOMContentLoaded', () => {
    // Footer information
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;
    
    // Example data for Country Information
    const countryInfo = {
        area: 500000000,
        population: 1000000000,
        capital: "Buenos Aires",
        languages: "Español",
        currency: ["Argentinian Peso", " Dolar"],
        time: "UTC-3",
        code: "+54",
        internet: ".com.ar",
    };

    document.getElementById('area').textContent = countryInfo.area;
    document.getElementById('population').textContent = countryInfo.area;
    document.getElementById('capital').textContent = countryInfo.capital;
    document.getElementById('languages').textContent = countryInfo.languages;
    document.getElementById('currency').textContent = countryInfo.currency;
    document.getElementById('time').textContent = countryInfo.time;
    document.getElementById('calling-code').textContent = countryInfo.code;
    document.getElementById('internet').textContent = countryInfo.internet;


    // Example data for temperature and wind speed
    const temperature = 10; // C°
    const windSpeed = 5; // km/h
    const condition = "Sunny";
  
    document.getElementById('temperature').textContent = temperature;
    document.getElementById('wind-speed').textContent = windSpeed;
    document.getElementById('conditions').textContent = condition;
  
    // Calculate wind chill
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('wind-chill').textContent = windChill !== null ? windChill.toFixed(2) : 'N/A';
});

  //Function to calculate wind chill based on temperature and wind speed
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
    } else {
        return null;
    }
}