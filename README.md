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

3. Clone this repository `git clone git@github.com:leflonen/weatherapp.git`

4. Inside CLI in the directory where docker-compose.yml file is located, type `export YOUR_APPID="-"; docker-compose up --build` changing the `"-"` to your openweathermap API-key

5. Open up your browser and navigate to http://localhost:8000 where you will be prompted to give your current position to the service.

## Troubleshooting

If there are errors when building the images with the npm commands, modify the dockerfile command `RUN npm install`to  `npm install --save-dev` in the backend directory. If this fails, run `npm install` in both the frontend and backend directories.
