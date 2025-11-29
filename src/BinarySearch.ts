// O(logN)
export default function binary_search(haystack: number[], needle: number): boolean {
    let lo = 0
    let hi = haystack.length - 1;

    while (lo < hi) {
        const mp = lo + Math.ceil((hi - lo) / 2);
        if (needle === haystack[mp]) {
            return true
        } else if (needle > haystack[mp]) {
            lo = mp + 1;
        } else {
            hi = mp;
        }
    }

    return false;
}