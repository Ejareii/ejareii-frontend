const fs = require('fs');

let rawdata = fs.readFileSync('ir.geojson');
let provinces = JSON.parse(rawdata);
console.log(provinces.features.length);

//Ray-Casting algp
// function isPointInsidePolygon(point, polygonCoordinates) {
//     const x = point[0];
//     const y = point[1];
//     let inside = false;
  
//     for (let i = 0, j = polygonCoordinates.length - 1; i < polygonCoordinates.length; j = i++) {
//       const xi = polygonCoordinates[i][0];
//       const yi = polygonCoordinates[i][1];
//       const xj = polygonCoordinates[j][0];
//       const yj = polygonCoordinates[j][1];
  
//       const intersect =
//         ((yi > y) !== (yj > y)) &&
//         (x < ((xj - xi) * (y - yi)) / (yj - yi) + xi);
  
//       if (intersect) inside = !inside;
//     }
  
//     return inside;
// }

function isPointInsidePolygon(point, geometry) {
    const x = point[0];
    const y = point[1];
    let inside = false;
  
    const checkIntersect = (xi, yi, xj, yj) =>
      ((yi > y) !== (yj > y)) && (x < ((xj - xi) * (y - yi)) / (yj - yi) + xi);
  
    const processRing = (ring) => {
      for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        const xi = ring[i][0];
        const yi = ring[i][1];
        const xj = ring[j][0];
        const yj = ring[j][1];
  
        if (checkIntersect(xi, yi, xj, yj)) {
          inside = !inside;
        }
      }
    };
  
    if (geometry.type === 'Polygon') {
      processRing(geometry.coordinates[0]); // Process the outer ring
      // Check for inner rings (holes)
      for (let k = 1; k < geometry.coordinates.length; k++) {
        processRing(geometry.coordinates[k]);
      }
    } else if (geometry.type === 'MultiPolygon') {
      geometry.coordinates.forEach((polygonCoordinates) => {
        processRing(polygonCoordinates[0]); // Process the outer ring
        // Check for inner rings (holes)
        for (let k = 1; k < polygonCoordinates.length; k++) {
          processRing(polygonCoordinates[k]);
        }
      });
    }
  
    return inside;
  }

const pointToCheck = [34.38641,48.6141266];

for (let index = 0; index < provinces.features.length; index++) {
    const province = provinces.features[index];
    
    const isInside = isPointInsidePolygon(pointToCheck, province.geometry.coordinates[0]);

    console.log(province.properties["name:en"] , isInside);
}