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
            const maze = mazeData[action.maze_id];
            const dt = action.dt;
            if(state.still === 'moving'){
                if(dir === 'l'){
                    //new_state.left = state.left - speed * action.dt
                    var pos = moveSingleAxis(-speed * dt, 0, state.left, state.top, dir, maze);
                    new_state.left = pos.x
                }
                if(dir === 'r'){
                    //new_state.left = state.left + speed * action.dt
                    pos = moveSingleAxis(speed * dt, 0, state.left, state.top, dir, maze);
                    new_state.left = pos.x
                }
                if(dir === 'u'){
                    //new_state.top = state.top - speed * action.dt

                    pos = moveSingleAxis(0, -speed * dt, state.left, state.top, dir, maze);
                    new_state.top = pos.y
                }
                if(dir === 'd'){
                    //new_state.top = state.top + speed * action.dt

                    pos = moveSingleAxis(0, speed * dt, state.left, state.top, dir, maze);
                    new_state.top = pos.y
                }

                // manage maze ob here

                return new_state;
            }
            return new_state;

        default:
            return state;
    }
}

function moveSingleAxis(dx, dy, x, y, dir, maze){
    x += dx
    y += dy
    const rect = {left: x, top: y, width: 19, height: 25}
    for (var i = 0; i < maze["brick"].length; i++){

        const item = maze["brick"][i]
        console.log(rect)
        // console.log(item)
        if (collideRect(item, rect)){
            console.log('coll')
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
    return {x: x, y: y, dir: dir}
}