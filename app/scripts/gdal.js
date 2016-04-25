// Convert shapefiles to jsons using ogr2ogr gdal

function run_cmd(cmd, args, callBack ) {
    var spawn = require('child_process').spawn;
    var child = spawn(cmd, args);
    var resp = "";

    child.stdout.on('data', function (buffer) { resp += buffer.toString() });
    child.stdout.on('end', function() { callBack (resp) });
}
// run_cmd("command_to_run", ["parameters", "go", "here"]);

// do gdal conversion
// ogr2ogr -f GeoJSON -t_srs crs:84 area.geojson "./champaign/champaign.shp"

run_cmd("ogr2ogr", ["-f", "GeoJSON", "-t_srs", "crs:84", "area.geojson", "./champaign/champaign.shp"], function(text) {console.log(text)});

