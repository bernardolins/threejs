window.Renderer = function(aspect) { 
  var renderer = new THREE.WebGLRenderer(); 

  if(typeof aspect.width !== "undefined" || typeof aspect.height !== "undefined") {
    renderer.setSize(aspect.width, aspect.height);
  }

  return renderer;
}
