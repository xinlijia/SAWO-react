import mazeData from '../resource/maze/maze.json';

// dir: 'd',
// still: 'still',
// // initial pos by maze data
// top: this.props.maze.character_pos.top + 200,
// left: this.props.maze.character_pos.left,
// speed: 100,


export default function(state = null, action) {
    switch (action.type) {
        case "CHANGESTAGE":
            let new_state = {
                dir: 'd',
                still: 'still',
                top: mazeData[action.maze_id].character_pos.top,
                left: mazeData[action.maze_id].character_pos.left,
                speed: 100,
            }
            return new_state;
        case "RESET":
            // same as CHANGESTAGE
        case "FRAME":
            // movement of the char
            // manage collide here
    }
  
    return state;
}
  