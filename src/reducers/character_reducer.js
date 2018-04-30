import mazeData from '../resource/maze/maze.json';


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
            new_state = {
                dir: 'd',
                still: 'still',
                top: mazeData[action.maze_id].character_pos.top,
                left: mazeData[action.maze_id].character_pos.left,
                speed: 100,
            }
            return new_state; 
        case "UPDATEALL":
            if(!action.running){
                return state;
            }
            new_state = Object.assign({}, state);
            if(action.time_now in action.timeline_dic){
                let move = action.move_list[action.timeline_dic[action.time_now]];
                if(move.type === 'move_up'){
                    new_state.dir = 'u';
                    new_state.still = 'moving';
                }
                else if(move.type === 'move_down'){
                    new_state.dir = 'd';
                    new_state.still = 'moving';
                }
            }

            return new_state



            // movement of the char
            // manage collide here
        default:
            return state;
    }
}
  