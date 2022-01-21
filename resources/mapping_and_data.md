# Mapping & Data Resources
While this course emphasises a fifty percent time allotment of technical mapping work it is virtually impossible to cover every aspect of web mapping in a single semester. With that being the case I greatly recoommend checking out and becoming familiar with the resources listed below; many of which are pulled from
lists compiled by Ingrid Burrington in a previuos iteration of this course. Others are from [Joey k. Lee's All Maps Lie](https://all-maps-lie-2020.netlify.app/) course taught at NYU ITP. The rest are tools and resources I've used in the past and find beneficial.
<br>
For an fantastically dense and materiaally rich compilation of tools, resources, guides, and basically everything needed to have a foundational understanding of cartography I highly recommend doing a deep dive into Joey's Course linked above!

## Infrastructure-y Spatial Data Sources
* [Submarine Cable Map geojson from TeleGeography](https://raw.githubusercontent.com/telegeography/www.submarinecablemap.com/master/public/api/v2/cable/cable*geo.json): Same data as seen on [submarinecablemap.com](http://submarinecablemap.com)
* [Internet Exchange Map geojson from TeleGeography](https://raw.githubusercontent.com/telegeography/www.internetexchangemap.com/master/public/api/v2/buildings.geojson): Same data as seen on [internetexchangemap.com](http://internetexchangemap.com)
* [ITU Infrastructure Map](https://www.itu.int/itu*d/tnd*map*public/): Raster tiles but relatively easy to copy
* [WikiLeaks Amazon Web Services data centers map](https://wikileaks.org/amazon*atlas/map/aws_geojson.json): circa 2012 so not entirely up to date but gives an ok benchmark
* [wigle.net API](https://api.wigle.net/): Wifi network data
* [FCC Antenna Structure Registration Search](https://wireless2.fcc.gov/UlsApp/AsrSearch/asrRegistrationSearch.jsp): kind of clunky but usable
* [AfTerFiber](https://afterfibre.nsrc.org/): open data on terrestrial fiber in Africa
* [Solar and wind investments by Microsoft, Amazon, and Google](https://gist.github.com/lifewinning/2428e0f73a7953cca6094e0ecb5d506b)

## Web Mapping Resources

### Tile sources/hosting
* [OpenStreetMap](http://openstreetmap.org) tile URL: https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
* [Stamen raster map tiles](http://maps.stamen.com/): free raster tiles from San Francisco*based data visualization firm. Some nice default basemaps!
* [Mapbox](http://mapbox.com) is a platform for creating custom tile base maps that integrates pretty nicely with Leaflet. One of the best satellite imagery basemaps out there. (Requires creating an account; has decent free tier resources)
* [Carto](https://carto.com/help/getting*started/student*accounts/) is more like a place to store spatial data with an interface for making tile maps. It's very beginner*friendly and has student accounts. 
* [Nextzen](https://www.nextzen.org/) offers a free vector tile endpoint (requires signup and API key) and resources on using [Tangram](https://play.tangram.city/), a vector tile 3D map rendering library that is honestly really nice but we don't have a ton of time to get into here. Also provide some really nice terrain maps.

### Static data
* [Natural Earth](https://www.naturalearthdata.com/) is a free source for world map vector data. The website provides shapefiles but if you want JSON Mike Bostock conveniently made an [npm package](https://unpkg.com/browse/world*atlas@2.0.2/) for it. 
* There are a variety of methods for [exporting data from OpenStreetMap](https://wiki.openstreetmap.org/wiki/Downloading_data); honestly depending on what you're doing it might be more trouble than it's worth but it's there. 

### Converting Data
* [geojson.io](http://geojson.io) is a fantastic resource for converting data into geojson format
* [Csv2GeoJSON - Mapbox](https://github.com/mapbox/csv2geojson) // if you're into command line tools, you can download and install Mapbox's handy csv2geojson tool. Having this installed could be nice if you anticipate doing this more frequently!
* [CSV.togeojson tool](http://csv.togeojson.com/) // One of the many tools for converting your a csv file to geojson. Nothing fancy going on here besides parsing your file and a structuring it in geojson format.

### Geocoding APIs
* This is one instance in which it's hard to avoid [Google](https://developers.google.com/maps/documentation/geocoding/start). Sorry. 
* Personally I find [Mapquest](https://developer.mapquest.com/documentation/geocoding*api/) is pretty good?
* [Mapbox](https://docs.mapbox.com/api/search/geocoding/) also has a geocoding library, if you expect you'll be doing a lot of custom tile stuff using Mapbox you might want to use theirs since you already have an API key. 

### Generally just useful
* [Anatomy of a Web Map](http://maptime.io/anatomy-of-a-web-map/#0) // This is more instructional than anything but gives a great overview of the web mapping stack!
* a [comprehensive list](https://macwright.com/lonlat/) of which data formats do it as "[lat,lon]" and which ones do it as "[lon, lat]"

### Map Projections
[Projection Breakdown PDF](https://www.humbleisd.net/cms/lib2/TX01001414/Centricity/Domain/3635/Map%20Projections.pdf)
[D3 Every Map Projection Project](https://bl.ocks.org/mbostock/29cddc0006f8b98eff12e60dd08f59a7)