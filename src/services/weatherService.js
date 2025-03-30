// src/services/weatherService.js
const axios = require('axios');
const config = require('../../config/config');

const getWeatherByLocation = async (location) => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${config.weatherApiKey}`;

    try {
        const response = await axios.get(weatherUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};

module.exports = { getWeatherByLocation };
