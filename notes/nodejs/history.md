# Node.js architecture

Even though only 14 years old, Node.js has emerged to be one of the most popular web development frameworks in the last decade. We can write Javascript code outside the browser to create server-side web applications that are non-blocking, lightweight, fast, robust and scalable.

###  **A Brief History of Node.js**

Just to give you a sense of the timeline here, the World Wide Web started around 34 years back. Javascript was born about 29 years ago and about the same goes for PHP (30 years). Node.js, on the other hand, is only 14 years old. Despite its relatively short run, Node.js has done wonders for developer organizations around the world.

Ever since Javascript has launched, there have been attempts to utilize Javascript for the back-end, for example, Netscape tried to do something similar with Netscape Livewire. These however turned out to be unsuccessful. Around 2004 onwards, when the first waves of Web 2.0 were starting out, Javascript started getting a lot of traction owing to the visions of a modern web experience. Since Javascript was (and is) the most widely used client-side programming language, browsers competed and pushed to create the most optimized Javascript engines for best performance. One of these engines was Chrome V8, on top of which Node.js was later built. As a result of this momentum, Javascript flourished, and so did the V8 engine. 

In 2009, in the right place, at the right time, Node.js was born. Ever since then, Node.js development has skyrocketed. Despite competition from pioneers like PHP and Advance Java, Node.js has emerged to be the more preferred server-side choice for many applications today, thanks to it’s asynchronous I/O, event-driven architecture, light-weightedness, speed, scalability and the fact that it uses the most popular programming language i.e. Javascript. Today, Node.js servers are used in production for applications and enterprises that cater to hundreds of millions of users worldwide - Netflix, Linkedin, Microsoft, GoDaddy, Paypal and many more. To give you an estimate of it’s popularity, Node’s package manager, NPM, registers billions of downloads each week.


Node.js is very actively maintained, thanks to its enormous community of users and developers. This means that there’s abundant support on the internet if you get stuck somewhere and need some help with your code, or any web development advice in general.


## Background: A Primer on How Node.js Works 
Node.js is most popular for it’s asynchronous event-driven, non-blocking I/O processing. It gets most of this concurrency and asynchronism from Javascript’s single-threaded event loop model.

Most other web development alternatives like ASP.NET, JSP, Spring use a multi-threaded processing architecture to cater to concurrent client requests. Let’s take a closer look at these multi-threaded models before we contrast them against what Node.js brings to the table.

### Traditional Multi-Threaded Processing Model in Web Frameworks 

In multi-threaded processing setups, each server has a limited thread pool at it’s disposal. Every time the server receives a request from the client, it picks a thread from the pool and assigns it to the client’s request. This thread will take care of all the processing related to that request. Inside these threads, the processing is sequential and synchronous in nature i.e. one operation is performed at a time. Regardless, when a new concurrent request is made to the server, it can pick up any available thread from the pool and put it on duty. 


This can go on and on until all your threads are exhausted. When that happens, your server is forced to wait for at least one of the busy threads to be freed for the new request(s) to be catered to. If not responsibly accounted for, this can turn out to be slow and inefficient for your application. Besides, the synchronous nature of processing inside each thread means that even though we can spin up multiple threads for concurrent requests, each thread, individually, will be slowed down when encountered by blocking code. Such multi-threaded support also brings forth the difficulties of dealing with synchronizing and managing multiple threads. There’s also a risk of dead-locking, wherein multiple threads are blocked forever in the process of waiting for each other to free up resources.


### Single-Threaded Event Loop Architecture in Node.js

There’s a lot of confusion about whether Node.js really does everything with just one thread. How could that be possible? How could it compete against other multi-threaded frameworks with just one thread?

As we know, Node.js is essentially a Javascript runtime built on top of Chrome’s V8 Javascript engine. This means that it is based on Javascript’s single-threaded architecture. Therefore, every time there’s a client request, it is handled by a single main thread. The event loop is the primary component that allows Node.js to run (otherwise) blocking I/O operations in a non-blocking way. It constantly keeps track of the status of your asynchronous tasks (eg. the code in your callback functions) and moves them back to the execution queue when they’re completed. It operates in the same main thread we have been talking about.

The interesting thing to note here is that even though there’s just one main thread on the surface, there are a bunch of auxiliary threads in the system kernel that Node.js can utilize for extensive disk and network-based async operations. This group of threads constitutes (what is known as) the worker pool.

The event loop can take care of basic processing itself, but for async I/O operations, involving modules such as fs (I/O-heavy) and crypto (CPU-heavy), it can offload the processing to the worker pool in the system kernel. The worker pool is implemented in libuv and can spawn and manage multiple threads as per the requirement. These threads can individually run their respective assigned tasks in a synchronous manner and return their response to the event loop whenever ready. While these threads work on their assigned operations, the event loop can continue operating as usual, concurrently catering to other requests. When the threads are done with their tasks, they can return their output to the event loop, which can then place this back on the execution queue to be executed or returned back to the client.

The thought process behind adopting such an architecture can be attributed to the fact that under typical web loads, a single main thread can perform and scale much better as compared to conventional “one thread per request” architectures. As a result, Node.js is the go-to option for many because of it’s advantages in terms of speed and scalability. The caveat here however, is that performance can suffer for upfront complex, memory intensive operations like matrix multiplications for image processing, data science and machine learning applications. These can block the one and only main thread, making the server unresponsive. However, for such cases, Node.js has also introduced worker threads which developers can leverage to create efficient multi-threaded Node.js applications.
