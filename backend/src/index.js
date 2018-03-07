const debug = require('debug')('weathermap');

const Koa = require('koa');
const router = require('koa-router')();
const fetch = require('node-fetch');
const cors = require('kcors');

const appId = process.env.APPID || '';
const mapURI = process.env.MAP_ENDPOINT || '';
const targetCity = process.env.TARGET_CITY || '';

const port = process.env.PORT || 9000;

const app = new Koa();

app.use(cors());

const fetchWeather = async (latitude, longitude) => {
  const endpoint = `${mapURI}/forecast/daily?lat=${latitude}&lon=${longitude}&appid=${appId}&`;
  console.log(`${mapURI}/forecast/daily?q=lat=${latitude}&lon=${longitude}&appid=${appId}&`);
  console.log('longitude: ' + longitude);
  const response = await fetch(endpoint);

  return response ? response.json() : {};
};

router.get('/api/weather/:latitude/:longitude', async ctx => {
  const weatherData = await fetchWeather(ctx.params.latitude, ctx.params.longitude);
  console.log(ctx.params);
  var response = {
    'current': `${weatherData.list[0].weather[0].icon}`,
    'day1': `${weatherData.list[1].weather[0].icon}`,
    'day2': `${weatherData.list[2].weather[0].icon}`,
    'day3': `${weatherData.list[3].weather[0].icon}`,
    'day4': `${weatherData.list[4].weather[0].icon}`,
    'day5': `${weatherData.list[5].weather[0].icon}`,
  };
  ctx.type = 'application/json; charset=utf-8';
  ctx.body = response || {};
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port);

console.log(`App listening on port ${port}`);
