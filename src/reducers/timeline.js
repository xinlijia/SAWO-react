// import mazeData from '../resource/maze/maze.json';
import { collideRect } from '../util/functions';
import { timeline_rect } from '../util/rects'
import { move_list_rect } from '../util/rects'


export default function(state = {}, action) {
    switch (action.type) {
        case "CHANGESTAGE":
            return {};
        case "RESET":
            return {}
            // same as CHANGESTAGE
        case "UPDATEMOVE":
            if(action.act === 'pick'){
                return state;
            }
            else if (action.act === 'drag'){
                return state;
            }
            else if(action.act === 'drop'){
                var move = action.move_list[action.id]

                const rect = {top: move.top, left: move.left, width: 30, height: 30}

                if(move.container === 'move'){
                    var time = action.left - action.move_list[action.id].offleft
                    if(collideRect(rect, timeline_rect) && !(time in action.timeline_dic)){

                        let new_timeline_dic = Object.assign({}, state);
                        new_timeline_dic[time] = action.id;
                        return new_timeline_dic;
                    }
                }
                else{
                    time = action.left - action.move_list[action.id].offleft

                    if(collideRect(rect, move_list_rect)){

                        let new_timeline_dic = Object.assign({}, state);
                        delete new_timeline_dic[move.time];
                        return new_timeline_dic;
                    }
                    else if (collideRect(rect, timeline_rect) && !(time in action.timeline_dic)){
                        let new_timeline_dic = Object.assign({}, state);
                        delete new_timeline_dic[move.time];
                        new_timeline_dic[time] = action.id;
                        return new_timeline_dic;

                    }
                }
            }
            return state;
        default:
            return state; 
    }
  
}
  