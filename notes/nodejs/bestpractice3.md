### Best Practice #3: Publisher Subscriber Models

#### Properly organize your code files..

 The Publisher/Subscriber model is a popular data exchange pattern in which there are two communicating entities - publishers and subscribers. Publishers (message senders) send out messages along specific channels without any knowledge of the receiving entities. Subscribers (message receivers), on the other hand express interest in one or more of these channels without any knowledge about publishing entities.

It’s a good idea to incorporate such a model in your project to manage multiple children operations corresponding to a single action. For example, your app, when creating a new user upon signup, will be doing a bunch of things - creating a user entry for the database, generating an authorization key, sending a confirmation email and much more. If all of this is handled by one service function in your, not only will it grow lengthier than usual, but will also violate the principle of Single Responsibility. Here is a sample code for the same-

 ```

 export default class UserService() {		
      async function signup(user) {

        // 1. Create user record
        // 2. Generate auth key
        // 3. Send confirmation email
        // ...  

      }
    }

 ```
 The pub/sub pattern can be set up in Node.js using the Events API. In the above example, you could program your code to first emit a ‘signup’ event when the request is received. In this case, your service module needs to make only one call to emit the respective event, as opposed to the multiple function calls in non pub/subsetting. 


 ```
  var events = require('events');
      var eventEmitter = new events.EventEmitter();		

      export default class UserService() {

        async function signup(user) {
          // emit 'signup' event
          eventEmitter.emit('signup', user.data)
        }

      }
 ```

 To handle such events emissions, you can have multiple subscribers that are essentially event listeners, waiting for certain events to be emitted. These subscribers can be organized into separate files based on their purpose and stored in the /subscribers directory that we saw in the folder structure section of this post. Now let’s create sample subscriber files for our example above -

 ```
 // email.js

    // ...
    eventEmitter.on('signup', async ({ data }) => {  // event listener 
      // send email 
    })

    // ...

 ```


 ```
 // auth.js

    // ...
    eventEmitter.on('signup', async ({ data }) => {	// event listener
      // generate auth key
    })
    // ...
 ```
 