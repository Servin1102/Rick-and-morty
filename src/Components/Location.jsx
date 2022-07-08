import React, { useEffect, useState } from "react";
import axios from "axios";

const Location = () => {
  const [location, setlocation] = useState({});
  const [searchlocation, setsearchlocation] = useState("");

  useEffect(() => {
    const random = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}`)
      .then((res) => setlocation(res.data));
  }, []);

  console.log(location);

  const searchclic = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${searchlocation}`)
      .then((res) => setlocation(res.data));
  };

  return (
    <div>
      <input className="imput" type="text" value={searchlocation} onChange={(e) => setsearchlocation(e.target.value)} placeholder="Search a location" />
      <button className="button_imput" onClick={searchclic}>Search</button>
      <br />
      <div className="m-5">
      <h2>{location.name}</h2>
      </div>
        <div className="row p-1">
            <div className="col-sm-4 text-center">
                <b>Type: </b> {location.type}
            </div>
            <div className="col-sm-4 text-center">
                <b>Dimension: </b> {location.dimension}
            </div>
            <div className="col-sm-4 text-center">
                <b>Population: </b> {location.residents?.length}
            </div>
        </div>
        <ul>
          {
            location.residents?.map(locationurl => (
              <li key={locationurl}>{locationurl}</li>
            ))
          }
        </ul>
      
      
      
    </div>
  );
};
export default Location;



    

// const colorAlive = () =>{
//     if(resident.status === "Alive"){
//        return "circle-green"
//     } else if(resident.status === "Dead"){
//       return "circle-red"
//     }
      
    
//   }