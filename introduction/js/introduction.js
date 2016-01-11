window.Introduction = {
  aspect: {
    width: 500,
    height: 500  
  },

  camera: {
    angle: 45,
    position: {
      x: 0,
      y: 0,
      z: 300 
    } 
  },

  initialize: function(selector) {
    var $selector = $(selector); 

    var renderer = new Renderer(this.aspect);
    var camera = new Camera(this.camera.angle, this.camera.position, this.aspect);
    var scene = new Scene(camera);

    $selector.append(renderer.domElement);
  }
};

Introduction.initialize(".renderArea");
