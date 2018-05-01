import React from 'react';
import './Character.css';

const Character = ({ character }) => {
    if (!character){
        return <div>Loading character...</div>
    }
    return (
        <div>
            <div 
            className={'character ' + character.still + '_' + character.dir}
            style={{top: character.top, left: character.left}}
            />
        </div>
    );
}


export default Character;
