# App Ideas and MVP Criteria #


## FANTASY FEATURES ##
  1. “Claim/own a spot” – location of interest
  2. “Guide” (user) – creator of tour
  3. “Wanderer” (user) – scavenger
    + points
  4. “Tour” – collection (ordered or unordered list) of spots 
     has unified theme
    + has specific location associated
    + categorize
  5. “Hunt” – challenge or game like a tour
  6. “Event” – one time thing (certain time/place)
  7. “Action” – take a picture
  8. “Tour map” – map object
  9. “Geocaching” – Wanderlust branded capsule
    + super visual, tie to Instagram
  10. “Points” – reveal more spots/spend points
  11. “Action” – take a picture
    + buy something
    + check in
  12. “Featured” – tour of the week
  13. “Everything at once” or “sequential” or “split” – average time and distance/transport methods mode

## MVP ##
  + Users (wanderer and guide)
  + Create and do tours
  + Spots (geographical data)

## MVP+ ##
  + Instagram
  + Point system
  + Tour map
  + Tour.geobox: {nwLon:num , nwLat:num , swLon:num , swLat:num }

## APP OVERVIEW ##

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
