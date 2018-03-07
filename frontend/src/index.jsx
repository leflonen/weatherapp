import React from 'react';
import ReactDOM from 'react-dom';


const baseURL = process.env.ENDPOINT;

// const getLocation = async () => {
//   if ('geolocation' in navigator) {
//     const coords = await navigator.geolocation.getCurrentPosition(function (position) {
//       //tää tulee vika
//       return position;
//     });
//   }
//   //menee tänne eka, miten sais tän vika???
//   return 'asd';
// };


const getWeatherFromApi = async (position) => {
  try {
    const response = await fetch(`${baseURL}/weather/${position.latitude}/${position.longitude}`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
  return {};
};

function success(pos) {
  let crd = pos.coords;
  console.log(crd);
  return crd;
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
      lat: '',
    };
  }

  async componentWillMount() {
    const weather2 = navigator.geolocation.getCurrentPosition(getWeatherFromApi);

    console.log(weather2);
    const weather = await getWeatherFromApi('60', '32');
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
