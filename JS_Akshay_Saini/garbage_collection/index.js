/* 
how garbage collection works in javascript

Garbage collection in JavaScript is an automatic memory management feature that helps reclaim memory occupied
by objects that are no longer needed by the application. Here's a brief overview of how it works:

1. Memory Allocation
When you create variables or objects, memory is allocated for them. This memory is usually allocated from 
a heap, a large pool of memory used for dynamic allocation.

2. Reachability
JavaScript uses a concept called reachability to determine which objects can still be accessed or are
"reachable" from the root set (global objects, currently executing functions, etc.). If an object is reachable,
it is considered in use; if it is not reachable, it is a candidate for garbage collection.

3. Mark-and-Sweep Algorithm
Most JavaScript engines (like V8 in Chrome and Node.js) use a variation of the mark-and-sweep algorithm:

Mark Phase: The garbage collector starts from the root objects and traverses the entire object graph, 
marking all reachable objects.
Sweep Phase: After marking, the collector goes through the heap and frees the memory occupied by
unmarked (unreachable) objects.

4. Generational Garbage Collection
Many JavaScript engines implement generational garbage collection, which divides memory into different generations:

Young Generation: Newly created objects. This space is collected frequently because most objects die young.
Old Generation: Long-lived objects. This space is collected less frequently since objects that survive
multiple collections are usually retained.

5. Finalization
In some cases, objects may have a finalizer (a function to clean up resources). However, JavaScript's 
garbage collector does not guarantee when or if finalizers will run.

6. Memory Leaks
Despite garbage collection, memory leaks can occur when references to objects are unintentionally maintained, 
preventing them from being collected. Common sources of leaks include:

Global variables
Forgotten timers or callbacks
Detached DOM nodes

Conclusion
Garbage collection in JavaScript allows developers to focus more on writing code without worrying too
much about manual memory management. However, understanding how it works can help optimize performance 
and avoid memory leaks.

*/