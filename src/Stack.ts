import { LNode } from "LinkedList";
// LIFO
export class Stack<T> {
    public head?: LNode<T>;
    public tail?: LNode<T>;
    public length: number;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }
    // O(1)
    push(element: T): T | undefined {
        this.length++;
        if (!this.head) {
            this.head = this.tail = { value: element };
            return this.head.value;
        } else {
            const oldHead = this.head;
            const newHead = { value: element, next: oldHead }
            this.head = newHead;

            return this.head.value;
        }
    }
    // O(1)
    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        } else {
            this.length--;
            const oldHead = this.head;
            const newHead = oldHead.next;
            return newHead?.value;
        }
    }
    // O(1)
    peek() {
        if (!this.head) {
            return undefined;
        }

        return this.head.value
    }
}