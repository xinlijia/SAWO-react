import mazeData from '../resource/maze/maze.json';
import { tool_list_rect } from '../util/rects'
import { collideRect } from '../util/functions';


export default function(state = [], action) {
    switch (action.type) {
        case "CHANGESTAGE":
            let tool_list = [];
            let tool = mazeData[action.maze_id].tool
            for(var i=0; i < tool.length; i++){
                var type = tool[i];
                tool_list.push(
                    {'id': i, 'type': type, 'container': 'tool', 'dragging': false,
                    'top': 20, 'left': i * 40 + 30, 'oritop': 20, 'orileft': i * 40 + 30,
                    'offtop': 0, 'offleft': 0,
                    }
                )
            }
            return tool_list;
        case "RESET":
            let tool_list = [];
            let tool = mazeData[action.maze_id].tool
            for(var i=0; i < tool.length; i++){
                var type = tool[i];
                tool_list.push(
                    {'id': i, 'type': type, 'container': 'tool', 'dragging': false,
                    'top': 20, 'left': i * 40 + 30, 'oritop': 20, 'orileft': i * 40 + 30,
                    'offtop': 0, 'offleft': 0,
                    }
                )
            }
            return tool_list;
        case "UPDATETOOL":
            if(action.act === 'pick'){
                let new_tool_list = state.map((item, index) =>
                    item
                );
                new_tool_list[action.id].offtop = action.top;
                new_tool_list[action.id].offleft = action.left;
                new_tool_list[action.id].dragging = true;
                return new_tool_list;
            }
            else if (action.act === 'drag'){
                let new_tool_list = state.map((item, index) =>
                    item
                );
                new_tool_list[action.id].top = action.top - new_tool_list[action.id].offtop;
                new_tool_list[action.id].left = action.left - new_tool_list[action.id].offleft;
                return new_tool_list;
            }
            else if(action.act === 'drop'){


                let new_tool_list = state.map((item, index) =>
                    item
                );
                tool = new_tool_list[action.id]
                const rect = {top: tool.top, left: tool.left, width: 30, height: 30}

                if(tool.container === 'tool'){
                    var time = action.left - new_tool_list[action.id].offleft
                    // don't use collide here. We want to put the tool in maze blocks.
                    // Therefore we can just use top, left and calcualte the block that point to
                    // WIP
                    if(collideRect(rect, maze_rect)){
                        tool.left = time;
                        tool.top = timeline_rect.top - 10;
                        tool.prevtime = tool.time;
                        tool.time = time;
                        tool.container = 'maze';
                        tool.orileft = time;
                        tool.oritop = timeline_rect.top - 10;
                    }
                    else{
                        tool.left = tool.orileft;
                        tool.top = tool.oritop;
                    }
                }
                else{
                    time = action.left - new_tool_list[action.id].offleft

                    if(collideRect(rect, tool_list_rect)){
                        tool.left = time;
                        tool.top = tool_list_rect.top;
                        tool.container = 'tool';
                        tool.orileft = time;
                        tool.oritop = tool_list_rect.top;
                    }
                    else if (collideRect(rect, timeline_rect) && !(time in action.timeline_dic)){
                        tool.prevtime = tool.time
                        tool.time = time;
                        tool.orileft = time;
                        tool.top = timeline_rect.top - 10;
                        
                    }
                    else{
                        tool.left = tool.orileft;
                        tool.top = tool.oritop;
                    }
                }
                tool.dragging = false;  

                return new_tool_list;
            }
            return state;
        default:
            return state;
      
    }
  
}
  