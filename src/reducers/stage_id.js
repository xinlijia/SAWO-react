// initialize as 0
// will write title later
export default function(state = 0, action) {
    switch (action.type) {
        case "CHANGESTAGE":
            return action.stage_id;
    } 
    return state;
}
  