import mazeData from '../resource/maze/maze.json';


export default function(state = null, action) {
    switch (action.type) {
        case "CHANGESTAGE":
            let new_state = {
                dir: 'd',
                still: 'still',
                top: mazeData[action.maze_id].character_pos.top + 200,
                left: mazeData[action.maze_id].character_pos.left,
                speed: 100,
            }
            return new_state;
        case "RESET":
            new_state = {
                dir: 'd',
                still: 'still',
                top: mazeData[action.maze_id].character_pos.top + 200,
                left: mazeData[action.maze_id].character_pos.left,
                speed: 100,
            }
            return new_state; 
        case "UPDATEALL":
            if(!action.running){
                return state;
            }
            new_state = Object.assign({}, state);
            // timeline move update
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
            //frame update
            const dir = state.dir;
            const speed = state.speed;
            //const maze = mazeData[action.maze_id];
            if(state.still === 'moving'){
                if(dir === 'l'){
                    new_state.left = state.left - speed * action.dt
                    //moveSingleAxis(-speed * dt, 0, maze);
                }
                if(dir === 'r'){
                    new_state.left = state.left + speed * action.dt
                    //moveSingleAxis(speed * dt, 0, maze);
                }
                if(dir === 'u'){
                    new_state.top = state.top - speed * action.dt

                    //moveSingleAxis(0, -speed * dt, maze);
                }
                if(dir === 'd'){
                    new_state.top = state.top + speed * action.dt

                    //moveSingleAxis(0, speed * dt, maze);
                }
                return new_state;
            }
            return new_state;

        default:
            return state;
    }
}
  