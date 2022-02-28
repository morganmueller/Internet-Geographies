# Kepler.gl Studio

> Kepler.gl is a powerful open source geospatial analysis tool for large-scale data sets.

## About

![Kepler.gl interface demo](https://d1a3f4spazzrp4.cloudfront.net/kepler.gl/website/hero/kepler.gl-contours.png)

**Kepler.gl** is an open source project by Uber that wraps their powerful [Deck.gl](https://deck.gl) mapping framework into a really slick, full-featured web interface. Your data stays right in your browser, you can add interactivity to your data, and you can export your visualizations as images and as an HTML file you can host on your platform of choice. No installation needed. 

This studio is a gentle introduction to kepler.gl.

## Before you start

In order to export maps, you'll need your own Mapbox API key. To get a Mapbox API key you can [Sign up with Mapbox](https://www.mapbox.com/). You can learn more about how [Mapbox API keys work here](https://docs.mapbox.com/help/how-mapbox-works/access-tokens/).

You might also take a look at:
* [Anatomy of a web map](http://maptime.io/anatomy-of-a-web-map/#0) to learn more about web maps

## Data you can use

When exploring a new tool, I find it helpful to try and recreate a visualization or analysis done by other reputable mappers. I've selected some data sets and their accompanying reporting in case you're looking for some inspiration.

* Jeremy Singer Vine, "These Maps Show a Massive Gender Gap in Bicycle-Riding". 
  * [Article](https://www.buzzfeed.com/jsvine/these-maps-show-a-massive-gender-gap-in-bicycle-riding), 
  * [NYC Data](https://raw.githubusercontent.com/BuzzFeedNews/2014-06-bikeshare-gender-maps/master/html/data/nyc.geojson), 
  * [Github Repo](https://github.com/BuzzFeedNews/2014-06-bikeshare-gender-maps), 
  * [Other City Data](https://github.com/BuzzFeedNews/2014-06-bikeshare-gender-maps/tree/master/html/data)
* Lam Thuy Vo, "They Played Dominoes Outside Their Apartment For Decades. Then The White People Moved In And Police Started Showing Up.".
  * [Article](https://www.buzzfeednews.com/article/lamvo/gentrification-complaints-311-new-york)
  * [Data - complaint counts merged with census tract](https://raw.githubusercontent.com/BuzzFeedNews/2018-06-nyc-311-complaints-and-gentrification/master/output/merged_complaints_final.json)
  * [Github Repo](https://github.com/BuzzFeedNews/2018-06-nyc-311-complaints-and-gentrification)
  * [All Data outputs](https://github.com/BuzzFeedNews/2018-06-nyc-311-complaints-and-gentrification/tree/master/output)
* Hubway Bike Share Data January 2017:
  * Hubway Count data [Hello Vector Tiles Workshop](https://github.com/joeyklee/hello-vector-tiles):
    * [Hubway Station Data](https://raw.githubusercontent.com/joeyklee/hello-vector-tiles/master/data/201701-hubway-tripdata-counts.csv)
    * [Routed Data](https://github.com/joeyklee/hello-vector-tiles/blob/master/data/201701_hubway_routes_all.geojson)
    * [Hubway Stations](https://github.com/joeyklee/hello-vector-tiles/blob/master/data/hubway_Stations_201606.geojson)


## Kepler.gl User Guide

The Kepler.gl [User Guide](https://github.com/keplergl/kepler.gl/blob/master/docs/user-guides/a-introduction.md) is super well documented. You should start by going through these documents to get a feeling of what kepler.gl has to offer.

My recommendation would be:
1. **Start by getting a feel for the data driven Workflow**. The [Getting started](https://github.com/keplergl/kepler.gl/blob/master/docs/user-guides/j-get-started.md) guide will walk you through how to:
   1. [Add Data](https://github.com/keplergl/kepler.gl/blob/master/docs/user-guides/b-kepler-gl-workflow/a-add-data-to-the-map.md) to your map
   2. [Add Data Layers](https://github.com/keplergl/kepler.gl/blob/master/docs/user-guides/b-kepler-gl-workflow/b-add-data-layers/a-adding-data-layers.md) based on your data.
   3. [Add filters](https://github.com/keplergl/kepler.gl/blob/master/docs/user-guides/e-filters.md) to explore your data based on time or other data attributes.
   4. [Add Interactions](https://github.com/keplergl/kepler.gl/blob/master/docs/user-guides/g-interactions.md)
   5. [Change the basemap style](https://github.com/keplergl/kepler.gl/blob/master/docs/user-guides/f-map-styles.md) for more custom cartography
   6. [Change map settings](https://github.com/keplergl/kepler.gl/blob/master/docs/user-guides/m-map-settings.md) which includes creating split maps, faux 3D maps, and legend displays.
   7. [Save and export your map](https://github.com/keplergl/kepler.gl/blob/master/docs/user-guides/k-save-and-export.md)
2. Next I would explore on a deeper level what you can do with: 
   1. [creating layers from your data](https://github.com/keplergl/kepler.gl/blob/master/docs/user-guides/b-kepler-gl-workflow/b-add-data-layers/b-create-a-layer.md),  
   2. [Using colors to style data](https://github.com/keplergl/kepler.gl/blob/master/docs/user-guides/l-color-attributes.md)
   3. [layer blending methods](https://github.com/keplergl/kepler.gl/blob/master/docs/user-guides/b-kepler-gl-workflow/b-add-data-layers/d-blend-and-rearrange-layers.md)
3. Last, I would spend some time learning more about:
   1. [The types of layers](https://github.com/keplergl/kepler.gl/blob/master/docs/user-guides/a-introduction.md#types-of-layers) such as points, lines, arcs, heatmaps, etc.


## NYC Squirrel Census 

[The Squirrel Census](https://www.thesquirrelcensus.com/) is a multimedia science, design, and storytelling project focusing on the Eastern gray (Sciurus carolinensis). They count squirrels and present their findings to the public. This table contains squirrel data for each of the 3,023 sightings, including location coordinates, age, primary and secondary fur color, elevation, activities, communications, and interactions between squirrels and with humans.

### Download Data

For the first part of this studio you will download a csv file of the 2018 Central Park Squirrel Census from below:
* [2018 Central Park Squirrel Census](https://data.cityofnewyork.us/Environment/2018-Central-Park-Squirrel-Census-Squirrel-Data/vfnx-vebw)


## Visualization 1: Point Mapping

Add the downloaded squirrel census data to the base Kepler map by draagging the file over the add data field.

![add data](../../../images/add_data.png "DATA")


To produce this visualization:
1. Go to [https://kepler.gl/demo](https://kepler.gl/demo)
2. Add Map Data
3. Change Visualization type to Point
    * Set **Lat** to `Y`
    * Set **Lon** to `X`
4. Using the "three dots" to toggle down thee Fill Color
5. Select the **Color Based On** Field
   1. Input `Hectare Squirrel Number`
   2. **color**:
      1. set **Fill Color** Gradient: Blue
7. Explore the interaction options for click and hover overs
8. Export your map as an image!


Your map should look something like this:
![add data](../../../images/kepler_point1.png)
![add data](../../../images/kepler_point2.png)


## Visualization 2: Heat Map

This time the goal is to create a heat map of the squirrel Census Data

To produce this visualization:
1. Go to [https://kepler.gl/demo](https://kepler.gl/demo)
2. Add Map Data
3. Change visualization type to Heatmap
    * Set **Lat** to `Y`
    * Set **Lon** to `X`
4. Modify the Color field to a red gradient
5. Select the **Weight** Field
   1. Input `Hectare Squirrel Number` (This will base the head map's weight density on squirel numbers per area )
7. Explore the interaction options for click and hover overs
8. Export your map as an image!

Your map should look something like this:
![heat map](../../../images/kepler_heat.png)


## Visualization 3: NYC Taxi Trips (Sample Data)

Kepler's web GUI has a great set of sample data for us to play around with. For this last section we will be using the sample NYC taxi dataset.

![Styling the arc layer](../../../images/taxi.png)

To produce this visualization:
1. Go to [https://kepler.gl/demo](https://kepler.gl/demo)
2. select: **Try Sample Data**
3. Choose NYC Taxi Trips
4. toggle on the view for the `arc` layer titled: **pickup -> dropoff arc** // notice the symbol of the eye is currently x-ed out.
5. toggle the down caret to view the layer styles
   ![Styling the arc layer](../../../images/taxi_arc.png)
   2. **color**:
      1. set **source** color: blue
      2. set **target** color: orange
   3. **stroke**:
      1. using the "three dots" to toggle down the stroke properties menu > select: **stroke based on**: > `trip_distance`
6. Explore the **3D map** toggle button to see your map in 3D 
7. Explore the interaction options for click and hover overs
8. Export your map as an image!





## Next Steps

There are many [thematic maps types](https://www.axismaps.com/guide/) -- see Univariate and Multivariate Thematic map types -- like [choropleths](https://www.axismaps.com/guide/univariate/choropleth/), [proportional symbol](https://www.axismaps.com/guide/univariate/proportional-symbols/), and dot [density maps](https://www.axismaps.com/guide/univariate/dot-density/) and many considerations that must be made when creating thematic maps. Furthermore, you may consider learning more about [web map interactions](https://www.axismaps.com/guide/web/map-interaction/). 

Most importantly, you must take into consideration the types of representation that are appropriate for the data that you are trying to show. Ensuring that you have done due diligence in [standardizing your data](https://www.axismaps.com/guide/data/standardizing-data/) is of utmost importance. As written in the Axis Cartography Guide: "Bottom line: If you want your map readers to understand magnitudes (how much of something exists), use map totals/counts. If you want your map readers to understand relative differences (that account for things like size differences), use standardized data."

In this guide, we took a quick look at kepler.gl's powerful features for visualizing data CSV data. With this appetizer, you should now have a general grasp of the kepler.gl interface and what types of data driven styling opportunities might exist. 

You now have a powerful, free and open source, web mapping tool in the back of your pocket. With such a tool you can already do a lot in terms of exploring data and showing and sharing data with your community. 


