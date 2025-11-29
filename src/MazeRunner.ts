type Point = {
    x: number;
    y: number;
}

const dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0]
]

/**
 * START a1. x: 1, y: 4 => path[{1,4}]
 * b1. x: 1, y: 3 => 1,3 OK | path[{1,4}, {1,3}]= WENT UP
 * c1. x: 1, y: 2 => 1,2 OK | path[{1,4}, {1,3}, {1,2}] = WENT UP
 * d1. x: 1, y: 1 => 1,1 X = wall => WENT UP
 *  d2: x: 2, y: 2 => X = wall => WENT RIGHT
 *  d3: x: 2, y: 3 => X = seen => WENT DOWN
 *  d4: x: 1, y: 2 => X = wall => WENT LEFT
 * c1: x: 1, y: 2 => POP | path[{1,4}, {1,3}] 
 * b2: x: 2, y: 3 => OK | path[{1,4}, {1,3}, {2,3}] = WENT RIGHT
 * e1: x: 2, y: 2 => X = wall => WENT UP
 * e2: x: 3, y: 3 => OK | path[{1,4}, {1,3}, {2,3}, {3,3}] => WENT RIGHT
 * f1: x: 3, y: 2 => X => wall => WENT UP
 * f2: x: 4, y: 3 => OK | path[{1,4}, {1,3}, {2,3}, {3,3}, {4,3}] => WENT RIGHT
 * k1: x: 4, y: 2 => OK | path[{1,4}, {1,3}, {2,3}, {3,3}, {4,3}, {4,2}] => WENT UP
 * l1: x: 4, y: 1 => OK | path[{1,4}, {1,3}, {2,3}, {3,3}, {4,3}, {4,2}, {4,1}] => WENT UP
 * END x: 4, y: 0 => OK | path[{1,4}, {1,3}, {2,3}, {3,3}, {4,3}, {4,2}, {4,1}, {4,0}] => DONE
 */

function walk(maze: string[], curr: Point, wall: string, end: Point, seen: boolean[][], path: Point[]): boolean {
    // base
    // 1. out of map
    if (curr.x < 0 || curr.x >= maze[0].length || curr.y < 0 || curr.y >= maze.length) {
        return false;
    }
    // 2. if a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }
    // 3. if seen
    if (seen[curr.y][curr.x]) {
        return false;
    }
    // 4. if end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true
    }
    // recurse
    // pre
    path.push(curr);
    seen[curr.y][curr.x] = true;

    // main
    for (let i = 0; i < dir.length; i++) {
        if (
            walk(
                maze,
                {
                    x: curr.x + dir[i][0],
                    y: curr.y + dir[i][1]
                },
                '#',
                end,
                seen,
                path
            )
        ) {
            return true;
        }
    }

    // post
    path.pop();

    return false;
}

export default function solve(maze: string[], start: Point, end: Point) {
    const seen: boolean[][] = [];
    const path: Point[] = [];
    const curr = start;

    for (let y = 0; y < maze.length; ++y) {
        seen.push(new Array(maze[0].length).fill(false))
    }

    if (walk(maze, curr, '#', end, seen, path)) {
        return path;
    }

    return false;
}