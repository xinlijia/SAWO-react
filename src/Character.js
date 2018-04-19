import React, { Component } from 'react';
import './Character.css';

class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            character: this.props.character,
        };
    }

    render() {
        // console.log(this.props.character);
        return (
            <div>
                <div 
                className={'character ' + this.props.character.still + '_' + this.props.character.dir}
                style={{top: this.props.character.top, left:this.props.character.left}}
                />
            </div>
        );
    }
}

export default Character;
