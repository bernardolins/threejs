window.StarField = function(callback) {
  var geometry  = new THREE.SphereGeometry(250, 64, 64)
  var material  = new THREE.MeshBasicMaterial()
  material.map   = THREE.ImageUtils.loadTexture('img/starfield.png', {}, function() {
    callback(); 
  });
  material.side  = THREE.BackSide
  return new THREE.Mesh(geometry, material)
}


