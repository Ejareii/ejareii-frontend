const fs = require('fs');

let rawdata = fs.readFileSync('ir.geojson');
let provinces = JSON.parse(rawdata);

function pointInPolygon(polygon, point) {
  let odd = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; i++) {
    if (((polygon[i][1] > point["latitude"]) !== (polygon[j][1] > point["latitude"]))
      && (point["longitude"] < ((polygon[j][0] - polygon[i][0]) * (point["latitude"] - polygon[i][1]) / (polygon[j][1] - polygon[i][1]) + polygon[i][0]))) {
      odd = !odd;
    }
    j = i;
  }
  return odd;
};

const pointToCheck = { "longitude" : 57.956, "latitude":30.9281 };

function getProviceFromLatLng(pointToCheck){
    let foundProvince;
    for (let index = 0; index < provinces.features.length; index++) {
        const province = provinces.features[index];
        const isInsideProvince = pointInPolygon(province.geometry.coordinates[0][0], pointToCheck);
        if(isInsideProvince) {
            foundProvince = province
            break;
        }
    }
    if(foundProvince){
        const normalizedProvinceObject = {
            name: foundProvince.name,
            properties: {
                'name:fa': foundProvince.properties.name,
                'name:en': foundProvince.properties['name:en'],
                'ISO3166-2': foundProvince.properties['ISO3166-2'],
            },
            geometry: foundProvince.geometry
        };
        return normalizedProvinceObject
    }else{

        throw new Error("Could not find province based on privided coordinates !")
    }
}

console.log(getProviceFromLatLng(pointToCheck));
