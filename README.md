# Wanderlust

Curate your city’s hidden gems for others to fall in love with or cure your wanderlust by exploring the city through a new perspective.

## Team

  - __Product Owner__: Dan Thareja
  - __Scrum Master__: Park Tamaroon
  - __Development Team Members__: Haiming Bao & Dominic Czarnota

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

### generator-soa ###

We are using [generator-soa](https://www.npmjs.org/package/generator-soa), which is a “yeoman generator for creating MEAN stack applications, using MongoDB, Express, AngularJS, and Node.”

The generator creates a large Gruntfile.js but make sure to take a look at the require statement (which defines the tasks we are running in our file), registerTask functions (“serve,” “wait,” “build,” etc.), and the config block. 

Executing “grunt serve” on the command line will:
  1. Start the server 
  2. Open the browser 
  3. Start a watch task for any changes
  4. Run jslint
  5. Run all tests (will abort on failed tests)

Any errors on the “grunt serve” command (outside of tests) are most likely caused by another instance of the server running. So make sure to terminate any additional servers via activity monitor. 

Mongo must be running for “grunt serve” to work. You can run Mongo by executing “mongod” in the background. 

## Requirements

- Node >=0.10.0
- mongoDB 2.6.4
- npm 2.0.0
- bower 1.3.8

## Development

### Installing Dependencies

To get started execute the following commands: 

<b>Step 1:</b> Install the dependencies with the following commands
```sh
brew update
brew install node
brew install mongoDB
```

<b>Step 2:</b> Navigate to your work directory

<b>Step 3:</b> Clone wanderlust repo and cd into it

<b>Step 4:</b> Install npm and bower dependencies
```sh
npm install
bower install
```

<b>Step 5:</b> Run mongod in a new terminal window
```sh
mongod
```

<b>Step 6:</b> Run grunt serve
```sh
grunt serve
```

<b>Step 7:</b> Start hacking!

### Roadmap

View the project roadmap [here](LINK_TO_PROJECT_ISSUES)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
