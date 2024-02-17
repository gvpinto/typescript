// class NodeItem {

//     constructor(public value: number) { }
//     next: NodeItem | null = null;
// }

// export class LinkedList {
//     head: NodeItem | null = null;
//     constructor(public node: NodeItem) { }

//     add(value: number): void {

//         if (!this.head) {
//             this.head = new NodeItem(value);
//             return;
//         }

//         let node: NodeItem | null = this.head;
//         while (node) {
//             node = node.next;
//         }
//         node.next = new NodeItem(value);
//     }

//     at(index: number) {
//         if (!this.head) {
//             throw new Error('Out of index error');
//         }

//         let c;
//     }
// }