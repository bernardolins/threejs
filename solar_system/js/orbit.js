window.Orbit = function(radius) {
  var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
  var geometry = new THREE.CircleGeometry(radius, 64);

  geometry.vertices.shift();

  //var segmentCount = 32;
  //var geometry = new THREE.Geometry();
  //var material = new THREE.LineBasicMaterial({ color: 0x0000FF });

  //for (var i = 0; i <= segmentCount; i++) {
  //  var theta = (i / segmentCount) * Math.PI * 2;
  //  geometry.vertices.push(
  //  new THREE.Vector3(
  //    Math.cos(theta) * radius,
  //    Math.sin(theta) * radius,
  //    0));            
  //}

  var line = new THREE.Line(geometry, material);
  line.lookAt(new THREE.Vector3(0,1,0));

  return line;
}
