### Best Practice #1: Take a Layered Approach

#### Separate your concerns.

Popular Node.js frameworks like Express.js allow you to define route handlers as callback functions that are executed when a client request is received. With the amount of flexibility that these frameworks provide, it might be naively tempting to define all your business logic directly inside those functions. If you start on this path, you’ll notice that things can quickly escalate and before you know it, your petite server routes file can turn into a clunky, unwieldy and messy blob of code that is not only difficult to read, maintain and manage, but also difficult to unit test.

This would, therefore, be a good place to implement the renowned <b>separation of concerns</b> programming principle. According to this, we should have different modules for addressing different concerns pertinent to our application. As far as server-side apps are concerned, different modules (or layers) should take the responsibility of catering to different aspects of processing a response for a client request. Broadly, in most cases, this is likely to unfold as - 

Client request ➡️ Some business logic + some data(base) manipulation ➡️ Returning the response

- Controller
(API routes and endpoints)
- Service layer
 (for business logic)
- Data access layer
(for working with a database)

<b>Controller layer</b>
This is the module of your code where the API routes are defined. Here you define only, and only your API routes. In the route handler functions, you can deconstruct the request object, pick the important data pieces and pass them to the service layer for processing.

<b>Service layer</b>
This is where your business logic lives, even the secret sauce of your application. It contains a bunch of classes and methods that take up singular responsibility and are reusable (and also follow other S.O.L.I.D programming principles). This layer allows you to effectively decouple the processing logic from where the routes are defined.  

One more aspect to consider here is the database part. To independently deal with this, we need one more layer.

<b>Data Access Layer</b>
The Data Access layer can take up the responsibility of talking to the database - fetching from, writing to, and updating it. All your SQL queries, database connections, models, ORM (object-relational mappers), etc. are supposed to be defined here.

This three-layer setup serves as a reliable scaffolding for most Node.js applications, making your applications easier to code, maintain, debug and test. Now let’s look at how we can actually implement these layers in our project.
