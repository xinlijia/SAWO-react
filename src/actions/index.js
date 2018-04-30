function updateMove(id, top, left, act) {
    return {
        type: "UPDATEMOVE",
        id: id,
        top: top,
        left, left,
        act: act,
    };
}
function changeStage(maze_id) {
    return {
        type: "CHANGESTAGE",
        maze_id: maze_id,
    };
}
function frame(){
    return{
        type: "FRAME",
    }
}


export default {
    updateMove,
    changeStage,
};