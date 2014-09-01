Should we assume the front end builds an entire tour before the back end sees it? Or should we build up tours piece by piece at the back end?

-----------

Some of the blanks in this table will be filled in as we decide to provide that functionality.

| REST RESOURCE URI       | GET               | POST                 | PUT             | DELETE      |
|-------------------------|-------------------|----------------------|-----------------|-------------|
| api/users/              | index of users*   | create new user      |                 |             |
| api/users/me            | private profile   |                      |                 |             |
| api/users/:id           | public profile    |                      | modify user     | delete user |
| api/users/:id/password  |                   |                      | change password |             |
| api/spots/              | index of spots    | create new spot      |                 |             |
| api/spots/:id           | spot details      |                      | modify spot     | delete spot |
| api/tours/              | index of tours    | create new tour      |                 |             |
| api/tours/:city_name    | index a city      |                      |                 |             |
| api/tours/:id           | tour details      |                      | modify tour     | delete tour |
| api/spots/:id/rating    |                   | give opinion         |                 |             |
| api/tours/:id/rating    |                   | give opinion         |                 |             |
| api/tours/:id/duration  |                   | report time taken    |                 |             |
| api/spots/:id/cost      |                   | report money spent   |                 |             |
| api/tours/:id/cost      |                   | report money spent   |                 |             |
| api/spots/:id/photo     |                   | upload a new pic     |                 |             |
| api/spots/:id/geo       |                   | report lon/latitude  |                 |             |
| api/spots/:id/tags      |                   | new tag(s) for spot  |                 |             |
| api/tours/:id/tags      |                   | new tag(s) for tour  |                 |             |

\* admin-only functionality

There will be URL query strings at the end of some of these as well. We haven't worked it out yet.

Possibly saving incomplete tours would be in the MVP+:
api/tours/develop/:tour_id/spots/:spot_id   POST: associate a spot to a tour as it is being built
api/tours/develop/:tour_id/publish          POST: tour is ready. Publish it.


Some possible future resources:
  "save my half-created tour"
  "show me the tours I authored"
  "show me the spots I've collected"
  "bookmark a tour for later"
  "mark a tour as similar to another tour"
  "personal addendum of spots to an existing tour"
  "declare that a spot is a duplicate of another spot"
  "show me more tours with this spot in it"
