window.Camera = function(angle, position) {
  this._angle = angle;
  this._position = position;

  var camera = new THREE.PerspectiveCamera(angle, WIDTH/HEIGHT, 0.1, 2000);

  camera.position.set(_position.x, _position.y, _position.z);

  return camera;
};

Camera.prototype.getAngle = function() {
  return this._angle;
};

Camera.prototype.getPosition = function() {
  return this._position;
}
