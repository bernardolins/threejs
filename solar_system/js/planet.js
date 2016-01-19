window.Planet = function(name, scale, orbitRadius, rotationSpeed, daysInYear) {
  var rotationSpeed = rotationSpeed; 
  var orbitRadius = orbitRadius;
  var daysInYear = daysInYear;
  var pivot = new THREE.Object3D();

  var onLoadEvent = name + 'TextureLoaded';

	var texture	= THREE.ImageUtils.loadTexture('images/' + name + 'map.jpg');
	var bump = THREE.ImageUtils.loadTexture('images/' + name + 'bump.jpg');

	var material = new THREE.MeshPhongMaterial({
    map: texture,
  });

	var geometry = new THREE.SphereGeometry(100, 64, 64);

	mesh = new THREE.Mesh(geometry, material);
  mesh.scale.multiplyScalar(scale);
	mesh.position.x = orbitRadius;

  var planet = {
    mesh: mesh,
    pivot: pivot,
    rotationSpeed: rotationSpeed,
    orbitRadius: orbitRadius,
    onLoadEvent: onLoadEvent
  };

  pivot.add(mesh);

  SolarSystem.planets.push(planet);
}
