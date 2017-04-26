import data from './data.json';
import proj4 from 'proj4';

let esriProjection = '+proj=tmerc +lat_0=31 +lon_0=-106.25 +k=0.9999 +x_0=500000.0000000001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs';
let wgs84Projection = "+proj=longlat +datum=WGS84 +no_defs";

let projCoord = 0;

function changeCoords(coordinates){

	return proj4(esriProjection , wgs84Projection, [data.features[i].geometry.coordinates[0], data.features[i].geometry.coordinates[1]]);
}

for (var i = 0; i < data.features.length; i++) {

	projCoord = changeCoords(data.features[i].geometry.coordinates[0], data.features[i].geometry.coordinates[1])

	data.features[i].geometry.coordinates[0] = projCoord[0];
	data.features[i].geometry.coordinates[1] = projCoord[1];
}

var dataFramework = {
  "type": "FeatureCollection",
  "crs": {
    "type": "name",
    "properties": {
      "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
    }
  },
  "features": data.features
}
