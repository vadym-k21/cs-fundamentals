import { LNode } from "LinkedList";
// FIFO 
export class Queue<T> {
    public length: number;
    public head?: LNode<T>;
    public tail?: LNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }
    // O(1)
    enqueue(element: T): T | undefined {
        this.length++;

        if (!this.tail) {
            this.tail = this.head = { value: element };
            return undefined;
        } else {
            const newElement =  { value: element };
            this.tail.next = newElement;
            this.tail = newElement;

            return element;
        }
    }
    // O(1)
    deque(): T | undefined {
        if (!this.head) {
            return undefined
        } else {
            this.length--;

            if (!this.head.next) {
                return undefined
            } else {
                this.head = this.head.next;

                return this.head.value;
            }
        }
    }
    // O(1)
    peek(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        return this.head?.value;
    }
}