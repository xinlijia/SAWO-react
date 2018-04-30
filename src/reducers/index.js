import { combineReducers } from "redux";
import CharacterReducer from "./character_reducer"
import Frame from "./frame";
import MoveList from "./move_list";
import Timeline from "./timeline";
import TimelinePointer from "./timeline_pointer"
import StageId from "./stage_id"

const rootReducer = combineReducers({
    characterReducer: CharacterReducer,
    frame: Frame,
    moveList: MoveList,
    timeline: Timeline,
    timelinePointer: TimelinePointer,
    stageId: StageId
});

export default rootReducer;
