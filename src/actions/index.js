
function changeStage(maze_id) {
    return {
        type: "CHANGESTAGE",
        maze_id: maze_id,
    };
}
function updateAll(maze_id, dt, running, timeline_dic, move_list, time_now){
    return{
        type: "UPDATEALL",
        maze_id: maze_id,
        dt: dt,
        running: running,
        timeline_dic: timeline_dic,
        move_list: move_list,
        time_now,
    }
}

function resetStage(maze_id){
    return {
        type: "RESET",
        maze_id: maze_id,
    };
}
function toggleRunning(){
    return {
        type: "STARTPAUSE",
    };
}

function updateMove(id, top, left, act, timeline_dic, move_list) {
    return {
        type: "UPDATEMOVE",
        id: id,
        top: top,
        left: left,
        act: act,
        timeline_dic: timeline_dic,
        move_list: move_list,
    };
}

function updateTool(id, top, left, act, tool_list) {
    return {
        type: "UPDATETOOL",
        id: id,
        top: top,
        left: left,
        act: act,
        tool_list: tool_list,
    };
}

export default {
    changeStage,
    updateAll,
    resetStage,
    toggleRunning,
    updateMove,
    updateTool,
};