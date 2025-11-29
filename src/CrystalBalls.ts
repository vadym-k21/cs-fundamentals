export default function crystal_balls(breaks: boolean[]): number {
    let i = 0;
    let j = 0;
    let step = Math.ceil(Math.sqrt(breaks.length));

    for (i; i < breaks.length; i+=step) {
        if (breaks[i]) {
            break;
        }
    }

    i -= step;

    for (j; j <= step && i < breaks.length; j++, i++) {
        if (breaks[i]) {
            return i;
        }
    }

    return -1;
}