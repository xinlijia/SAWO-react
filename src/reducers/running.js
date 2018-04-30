export default function(state = false, action) {
    switch (action.type) {
        case "CHANGESTAGE":
            return false;
        case "RESET":
            return false;
        case "STARTPAUSE":
            return !state;   
        default:
            return state;   
    }
}
  