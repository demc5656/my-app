// picks a random number?
export function roll (sides: number): number {
    return Math.floor(Math.random()*sides)+1;
}