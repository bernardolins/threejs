window.Star = function(name, scale, position, rotationSpeed) {
  var rotationSpeed = rotationSpeed; 
  
	var texture	= THREE.ImageUtils.loadTexture('images/' + name + 'map.jpg');

	var material = new THREE.MeshPhongMaterial({
    map: texture,
    specular: 0x050505,
    shininess: 100
  });

	var geometry = new THREE.SphereGeometry(100, 256, 256);

	mesh = new THREE.Mesh(geometry, material);
  mesh.scale.multiplyScalar(scale);
	mesh.position.x = position.x;

  var sun = {
    mesh: mesh,
    rotationSpeed: rotationSpeed,
  };

  SolarSystem.stars.push(sun);
}
