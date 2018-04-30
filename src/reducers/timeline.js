// import mazeData from '../resource/maze/maze.json';

export default function(state = {}, action) {
    switch (action.type) {
        case "CHANGESTAGE":
            return {};
        case "RESET":
            return {}
            // same as CHANGESTAGE
        case "UPDATEMOVE":
            break;
            // update the state, manage collide with bar here
        default:
            return state; 
    }
  
}
  