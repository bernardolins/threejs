var pivot, parent, renderer, scene, camera, controls;
var mesh1;

var AXIS = new THREE.Vector3( 0.25, 1, 0 ).normalize();

window.onload = function() {
  init();
  animate();
}

function init() {
	// renderer
	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	// scene
	scene = new THREE.Scene();
	
	// camera
	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 0.1, 100000 );
	camera.position.set( 15, 15, 15 );

	// controls
	controls = new THREE.OrbitControls( camera );
	
	// geometry
	var geometry = new THREE.SphereGeometry(13.9, 16, 8);
	
	// material
  var material1 = new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true } );

	// parent
	parent = new THREE.Object3D();
	scene.add(parent);

	mesh1 = new THREE.Mesh(geometry, material1);
  
  var mercury = new Planet(0.035, 57, 0.05);
  var venus = new Planet(0.0869, 108, 0.03);
  var earth = new Planet(0.088, 149, 0.02);
  var mars = new Planet(0.0450, 227, 0.01);
  var jupiter = new Planet(1, 778, 0.022);
  var saturn = new Planet(0.95, 1443, 0.002);
  var uranus = new Planet(0.364, 2877, 0.0017);
  var neptune = new Planet(0.530, 4503, 0.001);
  var pluto = new Planet(0.530, 5874, 0.0001);

	parent.add(mesh1);

  for(i in SolarSystem.planets) {
    parent.add(SolarSystem.planets[i].pivot);
    scene.add(new Orbit(SolarSystem.planets[i].orbitRadius));
  }
}

function animate() {

	requestAnimationFrame( animate );

  mesh1.rotation.y += 0.0005;

  for(i in SolarSystem.planets) {
    var planet = SolarSystem.planets[i];
    planet.pivot.rotation.y += planet.rotationSpeed;
	  planet.mesh.rotateOnAxis(AXIS, planet.rotationSpeed * 10);
  }

  renderer.render( scene, camera );
}

