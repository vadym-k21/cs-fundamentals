Array is a contiguous (limited) memory chunks, defined by fixed size and type (normally). Where the element memory offset could be found by type size and index of the element

if you have an array like 
`const a = new ArrayBuffer(6)` that a fixed to lenght of 6 array.

All default array operations - insert, get, delete - are O(1).

Insert operation is actually overwrites defined memory cell as array cannot dynamically grow as it can impact next memory cells.
Deletion actually sets cell to zero and dev should manage how deleted elements are interpretted. Set a value to null.

 <!-- Questions to ask -->
 1. Is element ordered? Use array 
 2. Efficient algo is to use logN = O(logN) as you always half the array