import mazeData from '../resource/maze/maze.json';

export default function(state = null, action) {
    switch (action.type) {
        case "CHANGESTAGE":
            let move_list = [];
            let move = mazeData[action.maze_id].move
            for(var i=0; i < move.length; i++){
                var type = move[i];
                move_list.push(
                    {'id': i, 'type': type, 'container': 'move', 'time': null, 'dragging': false,
                    'top': 20, 'left': i * 40 + 30, 'oritop': 20, 'orileft': i * 40 + 30,
                    'offtop': 0, 'offleft': 0,
                    }
                )
            }
            return move_list;
        case "RESET":
            // same as CHANGESTAGE
        case "UPDATEMOVE":
            // update the state, manage collide with bar here
      
    }
  
    return state;
}
  