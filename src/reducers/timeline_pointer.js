export default function(state = 50, action) {
    switch (action.type) {
        case "CHANGESTAGE":
            return 50;
        case "RESET":
            return 50;
        case "UPDATEALL":
            if(action.running && state + action.dt * 50 < 300){
                return state + action.dt * 50;
            }
            return state;
        default:
            return state;
    } 
}