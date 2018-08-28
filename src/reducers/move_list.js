import mazeData from '../resource/maze/maze.json';
import { timeline_rect } from '../util/rects'
import { move_list_rect } from '../util/rects'
import { collideRect } from '../util/functions';


export default function(state = [], action) {
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
            move_list = [];
            move = mazeData[action.maze_id].move
            for(i=0; i < move.length; i++){
                type = move[i];
                move_list.push(
                    {'id': i, 'type': type, 'container': 'move', 'time': null, 'dragging': false,
                    'top': 20, 'left': i * 40 + 30, 'oritop': 20, 'orileft': i * 40 + 30,
                    'offtop': 0, 'offleft': 0, 'prevtime': null,
                    }
                )
            }
            return move_list;           
            // same as CHANGESTAGE
        case "UPDATEMOVE":
            if(action.act === 'pick'){
                let new_move_list = state.map((item, index) =>
                    item
                );
                new_move_list[action.id].offtop = action.top;
                new_move_list[action.id].offleft = action.left;
                new_move_list[action.id].dragging = true;
                return new_move_list;
            }
            else if (action.act === 'drag'){
                let new_move_list = state.map((item, index) =>
                    item
                );
                new_move_list[action.id].top = action.top - new_move_list[action.id].offtop;
                new_move_list[action.id].left = action.left - new_move_list[action.id].offleft;
                return new_move_list;
            }
            else if(action.act === 'drop'){


                let new_move_list = state.map((item, index) =>
                    item
                );
                move = new_move_list[action.id]
                const rect = {top: move.top, left: move.left, width: 30, height: 30}

                if(move.container === 'move'){
                    var time = action.left - new_move_list[action.id].offleft
                    if(collideRect(rect, timeline_rect) && !(time in action.timeline_dic)){
                        move.left = time;
                        move.top = timeline_rect.top - 10;
                        move.prevtime = move.time;
                        move.time = time;
                        move.container = 'timeline';
                        move.orileft = time;
                        move.oritop = timeline_rect.top - 10;
                    }
                    else{
                        move.left = move.orileft;
                        move.top = move.oritop;
                    }
                }
                else{
                    time = action.left - new_move_list[action.id].offleft

                    if(collideRect(rect, move_list_rect)){
                        move.left = time;
                        move.top = move_list_rect.top;
                        move.container = 'move';
                        move.orileft = time;
                        move.oritop = move_list_rect.top;
                    }
                    else if (collideRect(rect, timeline_rect) && !(time in action.timeline_dic)){
                        move.prevtime = move.time
                        move.time = time;
                        move.orileft = time;
                        move.top = timeline_rect.top - 10;
                        
                    }
                    else{
                        move.left = move.orileft;
                        move.top = move.oritop;
                    }
                }
                move.dragging = false;  

                return new_move_list;
            }
            return state;
        default:
            return state;
      
    }
  
}
  