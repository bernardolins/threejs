window.Sphere = function(radius, options) {
  console.log(radius, options);
  var sphere = new THREE.Mesh(
    new THREE.SphereGeometry(
      radius,
      options.segments,
      options.rings  
    ),
    options.material   
  );

  return sphere;
};
