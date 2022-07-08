import React from 'react';

const CharacterItem = ({ locationurl, key }) => {
    return (
        <div>
            <li key={key}>{locationurl}</li>
        </div>
    );
};

export default CharacterItem;