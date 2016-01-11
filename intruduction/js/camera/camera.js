window.Camera = function(angle, position, aspect) {
  this._angle = angle;
  this._position = {};

  var camera = new THREE.PerspectiveCamera(angle, aspect.width/aspect.height, 0.1, 2000);

  if(typeof position.x === "undefined" || typeof position.y === "undefined" || typeof position.z === "undefined") {
    console.error("Invalid camera position");
  } else {
    this._position = position;
  }

  camera.position.set(this._position.x, this._position.y, this._position.z);

  return camera;
};

Camera.prototype.getAngle = function() {
  return this._angle;
};

Camera.prototype.getPosition = function() {
  return this._position;
}
