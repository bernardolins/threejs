window.Planet = function(scale, orbitRadius, rotationSpeed, daysInYear) {
  var rotationSpeed = rotationSpeed; 
  var orbitRadius = orbitRadius;
  var daysInYear = daysInYear;
  var pivot = new THREE.Object3D();

	var material = new THREE.MeshBasicMaterial({ color: 0x00aa00, wireframe: true });
	var geometry = new THREE.SphereGeometry(100, 16, 8);

	mesh = new THREE.Mesh(geometry, material);
  mesh.scale.multiplyScalar(scale);
	mesh.position.x = orbitRadius;

  var planet = {
    mesh: mesh,
    pivot: pivot,
    rotationSpeed: rotationSpeed,
    orbitRadius: orbitRadius
  };

  console.log("add", planet);

  pivot.add(mesh);

  SolarSystem.planets.push(planet);
}
