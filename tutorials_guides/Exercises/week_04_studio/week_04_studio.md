#  Leaflet Studio

The goal of this in class studio is to get comfortable setting up leaflet and using some basic features to add data layers to maps.

## Additional materials
Try looking through both of these guides for assistance with getting setup with leaflet and some other basic leaflet functions.
* [Leaflet sandbox](https://joeyklee.github.io/geosandbox/hello-leaflet.html#section6)
* [Maptime Boston](https://maptimeboston.github.io/leaflet-intro/)

### Step 1: Downloading the Source Code

Before you do anything else, you should download some source code I prepared. To download, go to the [repository on GitHub](https://github.com/RyanMullins/Geog461W.SP2014.Labs) and click the "Download ZIP" button along the right side of the screen (Figure 3.1). This will download a ZIP archive of the entire repository onto your machine. Unzip this archive and navigate to the _Lab2/Code_ directory. This directory contains a single file, yourNameHere-FireMap.html, open that file in your text editor (if you do not have one, I recommend [Sublime Text](http://www.sublimetext.com/2)). 


```HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Geog 461W Lab 2: Fire Map">
    <meta name="author" content="">
    <meta name="keywords" content="">

    <title>Internet Geographies | Studio 2 | Making an Earthquake Map</title>

    <script src="earthquake.js" type="text/javascript"></script>
    <style type="text/css">
        body {
            padding: 0px;
            font: 14px "Futura", "Lucida Grande", Helvetica, Arial, sans-serif;
            margin-right: auto;
            margin-left: auto;
        }

        h1 {
            text-align: center;
        }

        a {
            color: #00B7FF;
        }

        footer {
            text-align: center;
        }

        #map {
            width: 500px;
            height: 500px;
            margin-right: auto;
            margin-left: auto;
        }
    </style>
</head>
<body>
    <h1>Earthquake Map</h1>
    <div id="map"></div>
    <footer>
        Data Courtesy <a target="_blank" href="http://wildfire.cr.usgs.gov/firehistory/data.html">USGS Earthquake Wildland Occurrence Dataset</a><br/>
        <!-- Attribute you data here -->
    </footer>

    <script type="text/javascript">
        
    </script>
</body>
</html>

```

If you aren't familiar with what you're seeing above, it is a series of HTML elements, some with and others without content. The first line defines the type of document that the browser is seeing, in this case HTML 5. Following this is the header information. This includes metadata about the page (all of those `<meta>` tags), the title for the page displayed in the tabs for the browser, and then some style information. You should take the time to fill in the metadata about the author and keywords. You do not need to worry about anything else, for now, unless you really dislike my title. 

Below the header information is the body. I have kept this pretty simple. There is a `<h1>` with the title for the page, a `<div>` named "map", a `<footer>`, and an empty `<script>` element. You will use the `<footer>` as a secondary space to list data attribution. Feel free to add the name and source for the data you chose in Lab 1 at any time. The `<div>` will be used by Leaflet.js as a placeholder to put the map in. We will discuss the `<script>` element further in the next step.

__TODO__
You might have noticed that there is not a single reference to Leaflet.js  at this time. I did not include the import statements for these libraries, intentionally, to show you the proper place to import libraries in your pages.  Below are the elements to import the leaflet.js library and the styles associated with it. Copy and paste these into the file above the `<style>` tag in the header (roughly line 10). Make sure to keep the files in their current order. 


```html
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="" />
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
```

It is important to note that we put these elements in the header and not in the body. When placed in the header, libraries and style information are downloaded and made available prior to the rendering or processing of anything in the page body. If you were to add these elements to the body, they may or may not be available to other script elements of the page depending on their order of the elements, and the time it takes to download the resources these elements refer to. As such, it is considered best practice to include all JavaScript library and stylesheet imports in the header, and only include scripts related to the handling the actual content of the page, and interaction with this content, in the body. 


### Step 2: Creating a Map Using JavaScript

This step requires you to write just a little bit of code. I understand that some of you may have never written code before. Do not worry. These labs are designed to ease you into the process of writing code. This studio focuses on using functions defined in external libraries to create objects, then using the objects functions available from these objects to set basic parameters. In the next studio you will get practice writing your own functions and logic to control how the page responds to interactions. 

The code below creates a new map and then sets some parameters. 

```js

const map = L.map('mapDiv').setView([42.361145, -71.057083], 12);

L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);
```

Lets break down the code snippet above: 

1. We created a map variable named `map`
2. Used `L.map()` to initialize the map object, passing it the id of the div where we want the map to go
3. Used the `setView()` method to center the initial map view on Boston (latitude 42.361145., longitude -71.057083, and zoom level 12)
4. Used `L.tileLayer()` to create a base layer of map tiles, specifying a URL template for the tile images. In this case we're using MAPC's basemap, but there are many options out there. `{z}/{x}/{y}` is a template that Leaflet uses to find tiles at the correct zoom, x, and y coordinates. (See Anatomy of a Web Map). We also specified a few options:
    * Attribution text to appear in the corner. Always properly attribute your map data!
    * Maximum and minimum zoom levels. Some tile sets such as this one only cover a certain zoom range. These options prevent the user from zooming beyond that range and seeing a blank map.
5. Used the `addTo()` method to add this tile layer to the map we just created

__TODO__
1. Use [This Link](http://leaflet-extras.github.io/leaflet-providers/preview/index.html) to find an opensource map tile set and use it as the base layer of your code. Center the map on the the country of your choice (remember to use latitude and longitude to do this) and try a few different zoom levels.

### Step 3: Adding more Map data!

Sometimes base tiles are all you need, but usually your web map will show some specific data besides general reference features. Generally these data will be displayed as vector features, in contrast to the raster base map. Vector features come in three varieties:

Points (e.g., the locations of restaurants)
Lines (e.g., cycling routes)
Polygons (e.g., neighborhood areas)

We want to add all the locations of 4.5+ magnitude earthquakes to our map, so we have pulled in a geojson file with that data already. The geojson data comes from the USGS Earthquake Wildland Occurrence Dataset and has been added to the separate `earthquake.js` file and saved as an object called `earthquakeObj` which we can reference in our code.

If you look at the head of the html document you can see that we are linking to the `earthquake.js` file using a `<script>` tag.

The boilerplate code below will create a new vector layer from GeoJSON, passing it the same data, and again using addTo() to put the layer on the map.
```html
    L.geoJson(data).addTo(map);

```

__TODO__
Modify the code above so it adds the earthquake locations to the map. 
_Hint_: Simply pass the `earthquakeObj`into the data field.


### Step 4: adding popup information for each data point.

The true power of web maps is in interaction, and not just panning and zooming. Let's make the earthquake map a bit more useful by adding popups showing the location and magnitude of each earthquake.

we just need to use the `bindPopup()` method to enable the popup on click. `bindPopup()` only needs to be given the content that is to appear in the popup. In this case, we pass it an HTML string: the `place` and `mag` properties from the GeoJSON feature, and a line break in between. Leaflet handles the interaction and everything else. Like most Leaflet objects, though, we could customize the popup if we wanted to.


__TODO__

Replace the previously added boilerplate with the following code snippet:

```js
let earthquakeInfo = L.geoJson(earthquakeObj.features).bindPopup(function (layer) {
    return 'Location: ' + layer.feature.properties.place + '<br/>' + 'Magnitude: ' + layer.feature.properties.mag;
}).addTo(map);
     
```

Refresh and notice when you click on the markers how metadata appears!

### Step 4: adding popup information for each data point. __BONUS__

Add a custom image marker in place of the default! [This Resource](https://joeyklee.github.io/geosandbox/hello-leaflet.html#section6) might help with that.
Try googling around for help. 

