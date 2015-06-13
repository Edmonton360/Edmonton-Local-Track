<!DOCTYPE html>
<html>
	<head>
		<style type="text/css">
			html, body, #map-canvas { height: 100%; margin: 0; padding: 0}
		</style>
		<script type="text/javascript"
			src="https://maps.googleapis.com/maps/api/js?key=MY_KEY">
		</script>
		<script type="text/javascript">
			function initialize() {
				var mapOptions = {
					Center: {lat:53.546 lng: -113.490},
					zoom: 8
				};
				var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
			}
		</script>
	</head>
	<body>
<div id="map-canvas"></div>
	</body>
</html>
