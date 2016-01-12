window.Sphere = function(material, options) {
  /* Default values */
  var radius    = options.radius   || 50;
  var segments  = options.segments || 10;
  var rings     = options.rings    || 10;

  var sphere = new THREE.Mesh(
    new THREE.SphereGeometry(
      radius,
      segments,
      rings  
    ),
    material   
  );

  return sphere;
};
