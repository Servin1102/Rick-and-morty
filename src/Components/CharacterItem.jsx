import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios"

const CharacterItem = ({ locationurl }) => {

    const  [ characterdata, setcharacterdata ] = useState({})

    useEffect(() =>{
        axios.get(locationurl)
        .then(res => setcharacterdata(res.data))
    }, [])

    console.log(characterdata);

    return (
        <div>
            <div className="container mt-5">
          <div className="row">
          <div className="col-md-6">
            <div className="cards">
              <img src={characterdata.image} alt="" />
              <div className="info">
                <p>
                  <b>{characterdata?.name}</b>
                </p>
                <p>
                  <span className="circle-green"></span>
                  {characterdata.status} - {characterdata.species}
                </p>
                <p className="description">origin:</p>
                <p>{characterdata.origin?.name}</p>
                <p className="description">Episodes where appear:</p>
                <p>{characterdata.episode?.length}</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
    );
};

export default CharacterItem;