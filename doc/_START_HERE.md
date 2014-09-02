Here's the on-boarding starter so you can be productive on your first day.

## The seed

We used the yeoman generator [generator-angular-fullstack] which creates a MEAN stack application: MongoDB, Express, AngularJS, and Node. Try running "yo angular-fullstack" in a clean directory to build a reference of the stub file structure for comparison. Every file we make significant changes to will have a standard comment header indicating it's been modified from the seed.

EXTRA CREDIT: Joel Cox (Hack Reactor HIR alum of HR15) made an alternate to angular-fullstack generator. He can explain why his is better. Ask him. [generator-soa](https://www.npmjs.org/package/generator-soa). It creates the same back-end architecture, but organizes the front end along better practices. Leave the structure as-is unless you're feeling ambitious.

## The task manager

The generator created a large Gruntfile.js but make sure to take a look at the require statement (which defines the tasks we are running in our file), registerTask functions (“serve,” “wait,” “build,” etc.), and the config block. 

Executing “grunt serve” on the command line will:
  1. Start the server 
  2. Open the browser 
  3. Start a watch task for any changes
  4. Run jslint
  5. Run all tests (will abort on failed tests)

Any errors on the “grunt serve” command (outside of tests) are most likely caused by another instance of the server running, so make sure to terminate any additional servers via activity monitor or "ps -ax | grep node".

Mongo must be running for “grunt serve” to work. You can run Mongo by executing “mongod” in the background. 

$ grunt test:server will run the test on the server side over a new clean database instance.

## Test Driven Development

We're using the Jasmine testing framework for the front end and Mocha for the server side. We followed test-driven development methods, so you can know right away whenever your changes break anything. Pay it forward by doing the same for the next team. Write tests before you write the code that makes it pass. And write tough tests that treat the API as roughly as it might actually be treated, so you can be sure you have a good safety alert system. When you find a bug, early or late in the process, write tests that catch that bug before you fix it. Code that's meant to be run only by your own code doesn't need to do parameter type checking unless you think your code might pass defective types.

