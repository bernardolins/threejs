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
	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 10000000 );
	camera.position.set( 150, 250, 150 );

  // light
  var light = new THREE.PointLight( 0xffc04c );
  light.position.set( 0, 0, 0 ).normalize();
  scene.add(light);

  var ambientLight = new THREE.AmbientLight( 0xffc04c ); // soft white light
  scene.add(ambientLight);

  // camera controls
	controls = new THREE.OrbitControls( camera );
	
	// parent
	parent = new THREE.Object3D();
	scene.add(parent);

  var starfield = THREEx.Planets.createStarfield();

  scene.add(starfield);

  new Star("sun", 20.0, {x: 0, y: 0, z: 0}, 0.0001);
  new Planet("mercury", 0.35, 3387, 0.01607);
  new Planet("venus", 0.869, 3723, 0.01174);
  new Planet("earth", 0.88, 4000, 0.01000);
  new Planet("mars", 0.450, 4524, 0.00802);
  new Planet("jupiter", 10, 8203, 0.00434);
  new Planet("saturn", 9.5, 12539, 0.00323);
  new Planet("uranus", 3.64, 22180, 0.00228);
  new Planet("neptune", 5.30, 33060, 0.00182);
  new Planet("pluto", 0.30, 42520, 0.000159);

  for(i in SolarSystem.planets) {
    parent.add(SolarSystem.planets[i].pivot);
    scene.add(new Orbit(SolarSystem.planets[i].orbitRadius));
  }

  for(i in SolarSystem.stars) {
    console.log(i);
    scene.add(SolarSystem.stars[i].mesh);
  }
}

function animate() {
  renderer.render(scene, camera);

	requestAnimationFrame(animate);

  //mesh1.rotation.y += 0.0005;

  for(i in SolarSystem.stars) {
    var star = SolarSystem.stars[i];
    star.mesh.rotation.y += star.rotationSpeed;
  }

  for(i in SolarSystem.planets) {
    var planet = SolarSystem.planets[i];
    planet.pivot.rotation.y += planet.rotationSpeed;
	  planet.mesh.rotateOnAxis(AXIS, planet.rotationSpeed * 10);
  }
}




//var camera;
//var scene;
//var renderer;
//var mesh;
//  
//window.onload = function() {
//  init();
//  animate();
//}
//  
//function init() {
//  
//    scene = new THREE.Scene();
//    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000);
//  
//    var light = new THREE.DirectionalLight( 0xffffff );
//    light.position.set( 0, 1, 1 ).normalize();
//    scene.add(light);
//  
//    var geometry = new THREE.SphereGeometry( 10, 10, 10);
//    //var material = new THREE.MeshPhongMaterial( { ambient: 0x050505, color: 0x0033ff, specular: 0x555555, shininess: 30 } );
//    var material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('images/venusmap.jpg') } );
//  
//    mesh = new THREE.Mesh(geometry, material );
//    mesh.position.z = -50;
//    scene.add( mesh );
//  
//    renderer = new THREE.WebGLRenderer();
//    renderer.setSize( window.innerWidth, window.innerHeight );
//    document.body.appendChild( renderer.domElement );
//  
//    window.addEventListener( 'resize', onWindowResize, false );
//  
//    render();
//}
//  
//function animate() {
//    mesh.rotation.x += .04;
//    mesh.rotation.y += .02;
//  
//    render();
//    requestAnimationFrame( animate );
//}
//  
//function render() {
//    renderer.render( scene, camera );
//}
//  
//function onWindowResize() {
//    camera.aspect = window.innerWidth / window.innerHeight;
//    camera.updateProjectionMatrix();
//    renderer.setSize( window.innerWidth, window.innerHeight );
//    render();
//}
