// Convert multiple spatial data formats to GeoJSON

// ogr2ogr -f GeoJSON -t_srs crs:84 [name].geojson [name].shp

var gdal = require("gdal");
var fs = require("fs");


var shp = gdal.open("./champaign/champaign.shp")

function convert() {
        shp.layers.get(0).features.forEach(function(feature) {
        //console.log(feature.getGeometry().toJSON());
        var outFeature = feature.getGeometry().toJSON();
        fs.appendFile('./area.JSON', outFeature, function(err) {
            if(err){
                console.log(err);
            }
        })
    });
}

convert();
