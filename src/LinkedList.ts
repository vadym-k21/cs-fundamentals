export type LNode<T> = {
    value: T;
    next?: LNode<T>;
}

export class LinkedList<T> {
    public head?: LNode<T>;
    public tail?: LNode<T>;
    public length: number = 0;

    constructor(head?: LNode<T>, tail?: LNode<T>) {
        if (head) {
            this.head = head;
        }

        if (tail) {
            this.tail = tail;
        }
    }
}