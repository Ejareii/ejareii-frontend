// Example point coordinates
//const pointToCheck = [-120, 36];

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
  

  const pointToCheck = [2, 2];

  // Example Polygon geometry
  const polygonGeometry = {
    type: 'Polygon',
    coordinates: [
      [
        [1, 1],
        [1, 3],
        [3, 3],
        [3, 1],
        [1, 1]
      ]
    ]
  };

// Example MultiPolygon geometry
const multiPolygonGeometry = {
  type: 'MultiPolygon',
  coordinates: [
    [
      [
        [-73.98776, 40.76611],
        [-73.98109, 40.76812],
        // ... more coordinates ...
        [-73.98776, 40.76611]
      ]
    ],
    // Additional arrays for other polygons
  ]
};

console.log(isPointInsidePolygon(pointToCheck, polygonGeometry)); // Outputs true or false
console.log(isPointInsidePolygon(pointToCheck, multiPolygonGeometry)); // Outputs true or false
