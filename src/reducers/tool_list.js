import mazeData from '../resource/maze/maze.json';
import { tool_list_rect } from '../util/rects'
import { collideCell } from '../util/functions';


export default function(state = [], action) {
    switch (action.type) {
        case "CHANGESTAGE":
            let tool_list = [];
            let tool = mazeData[action.maze_id].tool
            for(var i=0; i < tool.length; i++){
                var type = tool[i];
                tool_list.push(
                    {'id': i, 'type': type, 'container': 'tool', 'dragging': false,
                    'top': 40, 'left': i * 40 + 30, 'oritop': 40, 'orileft': i * 40 + 30,
                    'offtop': 0, 'offleft': 0, 'incell': false,
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
                    'top': 40, 'left': i * 40 + 30, 'oritop': 40, 'orileft': i * 40 + 30,
                    'offtop': 0, 'offleft': 0, 'incell': false,
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

                // don't use collide here. We want to put the tool in maze blocks.
                // Therefore we can just use top, left and calcualte the block that point to
                // WIP
                const cell_width = 10;
                const cell_height = 10;
                const cell_index = collideCell(rect, maze_rect, cell_width, cell_height); 
                if(cell_index != -1){
                    const m = maze_rect.width / cell_width;
                    const n = maze_rect.height / cell_height;
                    const x = cell_index / m;
                    const y = cell_index % m;
                    tool.left = maze_rect.left + cell_width * x;
                    tool.top = maze_rect.top + cell_height * y;
                    tool.container = 'maze';
                    tool.orileft = tool.left;
                    tool.oritop = tool.top;
                }
                else if(collideRect(rect, tool_list_rect)){
                    tool.left = action.left;
                    tool.top = tool_list_rect.top;
                    tool.container = 'tool';
                    tool.orileft = tool.left;
                    tool.oritop = tool.top;
                }
                else {
                    tool.left = tool.orileft;
                    tool.top = tool.oritop;
                }

                tool.dragging = false;  

                return new_tool_list;
            }
            return state;
        default:
            return state;
      
    }
  
}
  