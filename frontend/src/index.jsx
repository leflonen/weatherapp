import React from 'react';
import ReactDOM from 'react-dom';


const baseURL = process.env.ENDPOINT;


// helper function for making sure that coordinates are fetched in correct order
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getWeatherFromApi = async () => {
  let latitude = 'unknown';
  let longitude = 'unknown';
  navigator.geolocation.getCurrentPosition((location) => {
    latitude = location.coords.latitude;
    longitude = location.coords.longitude;
  }, error => alert('Geolocation not supported or turned on')
);

  // while loop to finish getting the coordinates from the end user
  // so the API call doesn't get "unknown" values as coordinates.
  // TODO: make this pretty or find a better way to do this
  let bool = false;
  while (bool === false) {
    if (longitude === 'unknown' && longitude === 'unknown') {
      await sleep(500);
    } else {
      bool = true;
    }
  }
  try {
    const response = await fetch(`${baseURL}/api/weather/${latitude}/${longitude}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
  return {};
};


class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '',
      day1: '',
      day2: '',
      day3: '',
      day4: '',
      day5: '',
    };
  }

  async componentWillMount() {
    const weather = await getWeatherFromApi();
    this.setState({ current: weather.current.slice(0, -1) });
    this.setState({ day1: weather.day1.slice(0, -1) });
    this.setState({ day2: weather.day2.slice(0, -1) });
    this.setState({ day3: weather.day3.slice(0, -1) });
    this.setState({ day4: weather.day4.slice(0, -1) });
    this.setState({ day5: weather.day5.slice(0, -1) });
  }

  render() {
    const { current } = this.state;
    const { day1 } = this.state;
    const { day2 } = this.state;
    const { day3 } = this.state;
    const { day4 } = this.state;
    const { day5 } = this.state;
    return (
      <div>
        <div className="icon">
          { current && <img src={`/img/${current}.svg`} alt="Awesome weather pic" /> }
        </div>
        <div className="text-container">
          <h1>5 day forecast</h1>
        </div>
        <div className="container">
          <div className="forecast">
            { day1 && <img src={`/img/${day1}.svg`} alt="Awesome weather pic" /> }
          </div>
          <div className="forecast">
            { day2 && <img src={`/img/${day2}.svg`} alt="Awesome weather pic" /> }
          </div>
          <div className="forecast">
            { day3 && <img src={`/img/${day3}.svg`} alt="Awesome weather pic" /> }
          </div>
          <div className="forecast">
            { day4 && <img src={`/img/${day4}.svg`} alt="Awesome weather pic" /> }
          </div>
          <div className="forecast">
            { day5 && <img src={`/img/${day5}.svg`} alt="Awesome weather pic" /> }
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Weather />, document.getElementById('app')
);
