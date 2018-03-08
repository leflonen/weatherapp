# 5 Day weather app
A weatherapp that fetches weather based on your Geolocation.

Modified from https://github.com/Eficode/weatherapp

Works only on linux!

## Browser Support

- Chrome 5.0 - 49.0
- Edge 9.0
- Firefox 3.5
- Safari 5.0
- Opera 16.0

## Steps to use this app

1. Download Docker and Docker compose.

2. Get an openweathermap API-key from http://openweathermap.org/

3. Download the files from this repository

4. Inside docker-compose.yml, change the APPID variable to your openweathermap API-key

5. Inside CLI in the directory where docker-compose.yml file is located, type "docker-compose up --build"

6. Open up your browser and navigate to localhost:8000 where you will be prompted to give your current position to the service.
