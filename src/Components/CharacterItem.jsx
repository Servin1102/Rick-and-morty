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
            <li>{characterdata.name}
            <img src={characterdata.image} alt="" />
            </li>
        </div>
    );
};

export default CharacterItem;