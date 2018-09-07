export function collideRect(rect1, rect2) {
    return (rect1.left < rect2.left + rect2.width &&
        rect1.left + rect1.width > rect2.left &&
        rect1.top < rect2.top + rect2.height &&
        rect1.height + rect1.top > rect2.top);
}
  
export function collideList(list, rect0) {
    let i;
    for (i = 0; i < list.length; i++) {
        if (collideRect(list[i], rect0)) {
        return i;
        }
    }
    return -1;
}
  
export function collideCell(rect, maze_rect, cell_width, cell_height) {
    if (maze_rect.width % cell_width != 0 || maze_rect.height % cell_height != 0){
        return -1;
    }
    let m = maze_rect.width / cell_width;
    // let n = maze_rect.height / cell_height;
    if (rect.top < -cell_height || rect.left < -cell_width ||
        rect.top > maze_rect.height || rect.left > maze_rect.width){
            return -1
        }
    let x = rect.left / cell_width;
    let y = rect.top / cell_height;
    return x * m + y;
}