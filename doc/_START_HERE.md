# Wanderlust On-Boarding Tour

This document is its own Wanderlust tour through our codebase.

We want any new team to pick up this project and be productive in the first hour and the first day.

## Test-driven development

We believe in TDD. It makes it makes development more fun, safe, and effective. So hack away!

We're using the Jasmine testing framework for the front end and Mocha for the server side. We followed test-driven development methods, so you can know right away whenever your changes break anything. Pay it forward by doing the same for the next team. Write tests before you write the code that makes it pass. And write tough tests that treat the API as roughly as it might actually be treated, so you can be sure you have a good safety alert system. When you find a bug, early or late in the process, write tests that catch that bug before you fix it. Code that's meant to be run only by your own code doesn't need to do parameter type checking unless you think your code might pass defective types.

## Architecture

We used the yeoman generator [generator-angular-fullstack] which creates a MEAN stack application: MongoDB, Express, AngularJS, and Node. Try running "yo angular-fullstack" in a clean directory to build a reference of the stub file structure for comparison. Every file we make significant changes to will have a standard comment header indicating it's been modified from the seed.

Joel Cox (Hack Reactor HIR alum of HR15) made an alternate to angular-fullstack generator. He can explain why his is better. Ask him. [generator-soa](https://www.npmjs.org/package/generator-soa). It creates the same back-end architecture, but organizes the front end along better practices. Leave the structure as-is unless you're feeling ambitious.

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

$ grunt test will run the whole test suite.
$ grunt test:server will run the tests on the server side over a new clean database instance.

## Features overview

  1. Splash Page (enter location)
  2. Visit A Tour (sorted by rating/nearby) – this can be pre-populated
    + a. Tour
        * i. title (short string 60 chars, naming the tour)
        * ii. author (user ID)
        * iii. description (short paragraph describing the tour 500 char)
        * iv. rating (numeric in range 0.0 ... 5.0)
        * v. city (string 60 chars)
        * vi. duration (typical time needed to complete the tour)
        * vii. all spots (array of spot IDs)
    + b. Spot
        * i. address (short string containing human-readable "where to find it")
        * ii. action (short paragraph describing what to do when you find it. 500 char)
        * iii. photo (file name of the canonical photo of the spot)
        * iv. title (short string 60 chars, naming the spot)
        * v. tags (array of strings)
        * vi. geo ({'lon':num , 'lat':num })
    + c. Embark! Call to action
        * i. Pre-populate first location into map
  3. Create a tour (log in gated)
    + a. Title
        * i. Same attributes as “Tour” from Visit A Tour (see 2a)
    + b. Add Spot
        * i. One at a time (only show one by default)
        * ii. “Add more spots” button 
        * iii. Same attributes as “Spot” from Visit A Tour (see 2b)

### Minimum Viable Product
  + Users (wanderer and guide)
  + Create and do tours (collections of spots)
  + Spots (geographical data)
  + Point system


### Suggested future features
  + Instagram integration
  + Live tour map
  + Claim/own a spot – location of interest
  + Game mode – challenge or hunt game like a tour with progressively easing hints
  + Event – one time thing (certain time/place)
  + Geocaching – Leave a physical trinket to be discovered
  + Super visual, tie to Instagram
  + Earn status – users unlock extra functionality by scoring points
  + Featured – tour of the week
  + Everything at once or sequential or split
  + real-time statistics collection

## REST client/server API

  Communications between the front and back are done through HTTP requests against a RESTful API. This table maps HTTP methods and URIs to the symantic meaning of the request and response interpreted by the server. Some of the blanks in this table will be filled in as the corresponding functionality comes on line.

| URI                     | GET               | POST                 | PUT             | DELETE       |
|-------------------------|-------------------|----------------------|-----------------|--------------|
| api/users/              | index of users*   | create new user      |                 |              |
| api/users/me            | private profile   |                      |                 |              |
| api/users/:id           | public profile    |                      | modify user     | delete user  |
| api/users/:id/password  |                   |                      | change password |              |
| api/spots/              | index of spots    | create new spot      |                 |              |
| api/spots/:id           | spot details      |                      | modify spot     | delete spot  |
| api/tours/              | index of tours    | create new tour      |                 |              |
| api/tours/:city_name    | index a city      |                      |                 |              |
| api/tours/:id           | tour details      |                      | modify tour     | delete tour  |
| api/spots/:id/rating    |                   | record opinion       |                 |              |
| api/tours/:id/rating    |                   | record opinion       |                 |              |
| api/tours/:id/duration  |                   | report time taken    |                 |              |
| api/spots/:id/cost      |                   | report money spent   |                 |              |
| api/tours/:id/cost      |                   | report money spent   |                 |              |
| api/spots/:id/photo     |                   | upload a new pic     |                 |              |
| api/spots/:id/geo       |                   | report lon/latitude  |                 |              |
| api/spots/:id/tags      |                   | new tag(s) for spot  |                 |              |
| api/tours/:id/tags      |                   | new tag(s) for tour  |                 |              |

\* admin-only functionality
There will be URL query strings at the end of some of these as well. We haven't worked it out yet.
PATCH requests are often served with the same functionality as PUT requests.

Possibly saving incomplete tours would be in MVP+:
api/tours/develop/:tour_id/spots/:spot_id   POST: associate a spot to a tour as it is being built
api/tours/develop/:tour_id/publish          POST: tour is ready. Publish it.

Some possible future server requests:
  "save my half-created tour"
  "show me the tours I authored"
  "show me the spots I've visited"
  "bookmark this tour for later"
  "mark this tour as thematically similar to that tour"
  "add my personal addendum of spots to this tour"
  "declare that a spot is a duplicate of another spot"
  "show me some tours that contain this spot"

## File Structure

+ doc/ -- detailed documentation
+ assets/ -- images used by client side
+ client/app/ -- this is where all the Angular code lives
+ client/app/account/ -- manage user account
+ client/app/admin/ -- functions for administrative users
+ client/app/main/ -- Splash screen and home page
+ client/app/tours/ -- Splash page directs here. Browse tours with sorting and filters.
+ client/app/tours/createtour/ Form page to build a new tour. Tours sub-view.
+ client/app/tours/showtour/ Detail page for a specific tour.
+ server/api/ -- router code
+ server/config/local.env.sample.js -- secrets and keys for auth services
+ utils/ -- Code intended to be shared by both front and back
