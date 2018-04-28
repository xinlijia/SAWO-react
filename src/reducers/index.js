import { combineReducers } from "redux";
import Frame from "./frame";
import MoveBar from "./move_bar";
import Timeline from "./timeline";
import TimelinePointer from "./timeline_pointer"


const rootReducer = combineReducers({
    frame, Frame,
    moveBar: MoveBar,
    timeline: Timeline,
    timelinePointer: TimelinePointer
});

export default rootReducer;
