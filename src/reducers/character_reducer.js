import mazeData from '../resource/maze/maze.json';
import { collideRect } from '../util/functions';



export default function(state = null, action) {
    switch (action.type) {
        case "CHANGESTAGE":
            let new_state = {
                dir: 'd',
                still: 'still',
                top: mazeData[action.maze_id].character_pos.top + 200,
                left: mazeData[action.maze_id].character_pos.left,
                speed: 100,
                out: false,
            }
            return new_state;
        case "RESET":
            new_state = {
                dir: 'd',
                still: 'still',
                top: mazeData[action.maze_id].character_pos.top,
                left: mazeData[action.maze_id].character_pos.left,
                speed: 100,
                out: false,
            }
            return new_state; 
        case "UPDATEALL":
            if(!action.running || state.out){
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
                else if(move.type === 'move_left'){
                    new_state.dir = 'l';
                    new_state.still = 'moving';
                }
                else if(move.type === 'move_right'){
                    new_state.dir = 'r';
                    new_state.still = 'moving';
                }
                else if(move.type === 'move_speedup'){
                    new_state.speed = state.speed * 2;
                }
            }
            //frame update
            const dir = state.dir;
            const speed = state.speed;
            const maze = mazeData[action.maze_id];
            const dt = action.dt;
            if(state.still === 'moving'){
                if(dir === 'l'){
                    //new_state.left = state.left - speed * action.dt
                    var pos = moveSingleAxis(-speed * dt, 0, state.left, state.top, dir, maze);
                    new_state.left = pos.x
                }
                else if(dir === 'r'){
                    //new_state.left = state.left + speed * action.dt
                    pos = moveSingleAxis(speed * dt, 0, state.left, state.top, dir, maze);
                    new_state.left = pos.x

                }
                else if(dir === 'u'){
                    //new_state.top = state.top - speed * action.dt

                    pos = moveSingleAxis(0, -speed * dt, state.left, state.top, dir, maze);
                    new_state.top = pos.y
                }
                else if(dir === 'd'){
                    //new_state.top = state.top + speed * action.dt

                    pos = moveSingleAxis(0, speed * dt, state.left, state.top, dir, maze);
                    new_state.top = pos.y
                }
                else{
                    pos = moveSingleAxis(0, 0, state.left, state.top, dir, maze);
                }
                if(pos.out){
                    new_state.out = true;
                    new_state.still = "still";
                }

                
                return new_state;
            }
            return new_state;

        default:
            return state;
    }
}
// Manage collision and operation here
function moveSingleAxis(dx, dy, x, y, dir, maze){
    x += dx
    y += dy
    const rect = {left: x, top: y, width: 19, height: 25}
    for (var i = 0; i < maze["brick"].length; i++){

        const item = maze["brick"][i]

        if (collideRect(item, rect)){
            if (dx > 0){
                x = item.left - rect.width
            }
            else if (dx < 0){
                x = item.left + item.width
            }
            else if (dy > 0){
                y = item.top - rect.height
            }
            else if (dy < 0){
                y = item.top + item.height
            }
        }

    }
    const exit = {top: maze["exit"].top, left: maze["exit"].left, width: 15, height: 15}
    var out = false;
    if (collideRect(rect, exit)){
        console.log('exit')
        out = true;
    }
    return {x: x, y: y, dir: dir, out: out}
}