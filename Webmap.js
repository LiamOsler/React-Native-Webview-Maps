const HTMLContent = `
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1,user-scalable=no"/>
    <title>Simple Map</title>
    <link rel="stylesheet" href="https://js.arcgis.com/3.35/esri/css/esri.css">
    <style>
      html, body, #map {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
    <script src="https://js.arcgis.com/3.35/"></script>
    <script>
      var map;

      require(["esri/map", "dojo/domReady!"], function(Map) {
        map = new Map("map", {
          basemap: "oceans",  //For full list of pre-defined basemaps, navigate to http://arcg.is/1JVo6Wd
          center: [-122.45, 37.75], // longitude, latitude
          zoom: 13
        });
      });
    </script>
  </head>

  <body>
    <div id="map"></div>
  </body>
</html>
`;

export {HTMLContent};