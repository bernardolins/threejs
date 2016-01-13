window.Planet = function(options, callback) {
  var earthTexture = THREE.ImageUtils.loadTexture(options.texture, {}, function() {
    callback(); 
  });

  var earthBump = THREE.ImageUtils.loadTexture("img/earthbump.jpg", {}, function() {
    callback(); 
  });
  
  var material  = new THREE.MeshPhongMaterial({map: earthTexture, bumpMap: earthBump, bumpScale: 0.05});

  var sphere = new Sphere(material, options);

  return sphere;
};
