// IMPORT DATA
import data from './data.json';
// LIBRARY FOR PROJECTION
import proj4 from 'proj4';
// ORIGINAL DATA PROJECTION i.e what you are projecting from
let firstProjection = '+proj=tmerc +lat_0=31 +lon_0=-106.25 +k=0.9999 +x_0=500000.0000000001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs';
// WGS 84 EPSG: 4326 i.e what you are projecting to
let secondProjection = "+proj=longlat +datum=WGS84 +no_defs";

let projCoord = 0;
// FUNCTION RUN PROJ4 
function changeCoords(coordinates){

	return proj4(firstProjection , secondProjection, [data.features[i].geometry.coordinates[0], data.features[i].geometry.coordinates[1]]);
}
// LOOP THROUGH YOUR DATA
for (var i = 0; i < data.features.length; i++) {

	projCoord = changeCoords(data.features[i].geometry.coordinates[0], data.features[i].geometry.coordinates[1])

	data.features[i].geometry.coordinates[0] = projCoord[0];
	data.features[i].geometry.coordinates[1] = projCoord[1];
}
// INPUT INTO GEOJSON FRAMEWORK
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
//ADD PRE TAG TO HTML AND CALL INTO IT, TO USE JSON.STRINGIFY TO GET JSON OUT
var elem = document.getElementById("pre")
// console.log("elem", elem);
let getJSON = elem.innerHTML = JSON.stringify(dataFramework)
