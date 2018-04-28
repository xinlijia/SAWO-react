export default function(state = null, action) {
    switch (action.type) {
        case "FRAME":
            // update POS by speed, dir, and collide
            return action.payload;
    }
  
    return state;
}
  