const turf = require("@turf/turf");
const fs = require("fs");

let rawdata = fs.readFileSync("ir.geojson");
let provinces = JSON.parse(rawdata);
console.log(provinces.features.length);

var points = turf.points([
  [-46.6318, -23.5523],
  [-46.6246, -23.5325],
  [-46.6062, -23.5513],
  [-46.663, -23.554],
  [-46.643, -23.557],
]);

var searchWithin = turf.polygon([
  [
    [-46.653, -23.543],
    [-46.634, -23.5346],
    [-46.613, -23.543],
    [-46.614, -23.559],
    [-46.631, -23.567],
    [-46.653, -23.56],
    [-46.653, -23.543],
  ],
]);

var ptsWithin = turf.pointsWithinPolygon(points, searchWithin);

let pt = turf.points([[51.3965, 35.6895]]);

for (let index = 0; index < provinces.features.length; index++) {
  const province = provinces.features[index];

  var ptsWithin;

  //const isInside = isPointInsidePolygon(pointToCheck, province.geometry.coordinates[0]);
  for (let j = 0; j < province.geometry.coordinates.length; j++) {
    const eachPoly = province.geometry.coordinates[j];
    var searchWithin = turf.polygon(eachPoly);
    let innerCond = turf.pointsWithinPolygon(pt, searchWithin);
    if (innerCond) {
        ptsWithin = innerCond
        break
    }
  }

  console.log(province.properties["name:en"], ptsWithin);
}

console.log({ ptsWithin });
