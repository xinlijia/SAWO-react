function timelineToMove(move_id) {
    return {
        type: "TIMELINETOMOVE",
        move: move_id,
    };
}

function moveToTimeline(move_id, time) {
    return {
        type: "MOVETOTIMELINE",
        move: move_id,
        time: time,
    };
}

export default {
    timelineToMove,
    moveToTimeline,
};