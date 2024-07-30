### Best Practice #2: Folder structure

#### Properly organize your code files..

 Service layer architecture of NodeJS  can be realized through a proper folder structure that separates different modules into different folders.

This provides clarity about which functionality is managed where, and allows us to organize our classes and methods into separate containers that are easier to manage. Below is a common (yet effective) folder structure that can be used as a template when setting up a new Node.js project.

 ```
 src
      ├── app.js			app entry point
      ├── /api			controller layer: api routes
      ├── /config			config settings, env variables
      ├── /services		service layer: business logic
      ├── /models			data access layer: database models	
      ├── /scripts		miscellaneous NPM scripts
      ├── /subscribers		async event handlers
      └── /test               test suites

 ```
Here, the directories - /API (controller layer),  /services, and /models (data access layers) represent the three layers we discussed in the previous section. The /scripts directory can be used to store workflow automation scripts for building (eg. deployment) pipelines and the /test directory is used for storing test cases. We will look at the purpose of /config and /subscriber directories later in the post when we talk about configuration files, environment variables, and pub/sub-models. 

As a developer, nothing brings me more pleasure than reading (and writing) cleanly structured and organized code. This can lead us to the next important development practice to keep in mind - clean code and easy readability.

