const HTMLContent = `
<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Leaflet example in one file</title>

        <!-- include leaflet css and javascript -->
        <link rel="stylesheet" crossorigin="" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css" />
        <script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet-src.js" crossorigin=""></script>

        <style >
            *{
                margin: 0;
            }
            #map {
                height: 100vh;
            }
        </style>
    </head>

	<body>
		<div id="map"></div>

		<script>
			/*
			the script mus be loaded after the map div is defined,
			otherwise this will not work. Therefore the script is below
			the div.
			The source code below is the example from the leaflet start page.
			*/
			
			var map = L.map('map').setView([51.505, -0.09], 13);

			L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			  attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map);

			L.marker([51.5, -0.09]).addTo(map)
			 .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
			 .openPopup();
		</script>
	</body>
</html>
`;

export {HTMLContent};