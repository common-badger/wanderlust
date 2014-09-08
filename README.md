# Wanderlust

Curate your city’s hidden gems for others to fall in love with or cure your wanderlust by exploring the city through a new perspective.

## Team

  - __Product Owner__: Dan Thareja
  - __Scrum Master__: Park Loqi Tamaroon
  - __Development Team Members__: Haiming Bao & Dominic Czarnota

  Dedicated to Justin Thareja, who welcomed his brother Dan to San Francisco with the
  Mission Mission, the scavenger hunt that started it all.

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

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

<b>Step 2:</b> Navigate to your work directory<br>
<b>Step 3:</b> Clone wanderlust repo and cd into it<br>
<b>Step 4:</b> Install npm and bower dependencies
```sh
npm install
bower install
```

<b>Step 5:</b> Run mongod in a new terminal window (see the Troubleshooting section below if you have encounter problems)
```sh
mongod
```

<b>Step 6:</b> Run grunt serve
```sh
grunt serve
```

<b>Step 7:</b> Start hacking!

For additional information read the [doc/\_START\_HERE.md] (doc/_START_HERE.md) for more detailed on-boarding.

### Troubleshooting

A frequently occurring error when running mongod was
```sh
ERROR: dbpath (/data/db) does not exist.
```

To fix this issue run the following command:
```sh
sudo mkdir -p /data/db
```
This should resolve the issue and allow you to run mongod in the command line.

### Roadmap

View the project roadmap [here](LINK_TO_PROJECT_ISSUES)

## Contributing

See [doc/CONTRIBUTING.md](doc/CONTRIBUTING.md) for contribution guidelines.
