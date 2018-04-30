import { combineReducers } from "redux";
import CharacterReducer from "./character_reducer"
import MoveList from "./move_list";
import Timeline from "./timeline";
import TimelinePointer from "./timeline_pointer"
import StageId from "./stage_id"
import Running from "./running"

const rootReducer = combineReducers({
    characterReducer: CharacterReducer,
    moveList: MoveList,
    timeline: Timeline,
    timelinePointer: TimelinePointer,
    stageId: StageId,
    running: Running,
});

export default rootReducer;
