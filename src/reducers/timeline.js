import mazeData from '../resource/maze/maze.json';

export default function(state = null, action) {
    switch (action.type) {
        case "CHANGESTAGE":
            let new_state = {};
            return new_state;
        case "RESET":
            // same as CHANGESTAGE
        case "UPDATEMOVE":
            // update the state, manage collide with bar here
      
    }
  
    return state;
}
  