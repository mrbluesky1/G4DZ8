import React from "react";
// import * as url from "url";
class Parent extends React.Component {
  doSomething() {
    console.log("Parent component")
  }

  render() {
    return (
        <div className="container">
          <div className="item"><img src="assets/1.jpg" alt=""/><Child text="10000 сом" title="Nintendo Switch" onClick={this.doSomething}></Child></div>
          <div className="item"><img src="assets/4.jpg" alt=""/><Child text="11000 сом" title="Nintendo Switch Mario Kart" onClick={this.doSomething}></Child></div>
        </div>
    );
  }
}
class Child extends React.Component {
  render() {
    return (<div>
      <h1>{this.props.title}</h1>
      <h2>{this.props.text}</h2>
    </div>)
  }
}

export default Parent

// import React, { useState } from "react";
// import axios from "axios";
//
// export default function App() {
//   const [data, setData] = useState({});
//   const [location, setLocation] = useState("");
//
//   const url = ` https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=ru&appid=0664c01016365240baa6b9397ab325e9`;
//
//   const searchLocation = (event) => {
//     if (event.key === "Enter") {
//       axios.get(url).then((response) => {
//         setData(response.data);
//         console.log(response.data);
//       });
//       setLocation("");
//       console.log(data);
//     }
//   };
//
//   return (
//     <div className="app">
//       <div className="search">
//         <input
//           value={location}
//           onChange={(event) => setLocation(event.target.value)}
//           onKeyPress={searchLocation}
//           placeholder="Введите название города или страны!"
//           type="text"
//         />
//       </div>
//       <div className="container">
//         <div className="top">
//           <div className="location">
//             <p>{data.name}</p>
//           </div>
//           <div className="temp">{data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}</div>
//           <div className="description">{data.weather ? <p>{data.weather[0].description}</p> : null}</div>
//           {/*<img className="city-icon" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}2x.png`} alt={data.weather[0].descriptionnp}/>*/}
//         </div>
//
//         {data.name !== undefined && (
//             <div className="bottom">
//               <div className="feels">{data.main ? (
//                   <p className="bold">{data.main.feels_like.toFixed()}°C</p>
//               ) : null}
//                 <p>Чувствуется как</p>
//               </div>
//               <div className="humidity">{data.main ? (
//                   <p className="bold">{data.main.humidity}%</p>
//               ) : null}
//                 <p>Влажность</p>
//               </div>
//               <div className="wind">{data.main ? (
//                   <p className="bold">{data.wind.speed.toFixed()} м/с</p>
//               ) : null}
//                 <p>Скорость ветра</p>
//               </div>
//             </div>
//         )}
//       </div>
//     </div>
//   );
// }