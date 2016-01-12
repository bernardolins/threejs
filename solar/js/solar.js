window.Solar = {
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

  earthOptions: {
    radius: 50,
    segments: 15,
    rings: 15
  },

  light: {
    position: {
      x: 300,
      y: 0,
      z: 130 
    },
    color: 0xFFFFFF 
  },

  initialize: function() {
    this.renderer = new Renderer(this.aspect);
    this.camera = new Camera(this.camera.angle, this.camera.position, this.aspect);
    this.scene = new Scene(this.camera);

    var light = new THREE.AmbientLight( 0x404040 ); // soft white light
      
    var material  = new THREE.MeshPhongMaterial({color: 0xCC0000});

    var sphere = new Sphere(material, this.earthOptions);

    this.scene.add(light);
    this.scene.add(sphere);
    this.scene.add(this.camera); 

  },

  render: function(selector) {
    this.renderer.render(this.scene, this.camera); 
    document.getElementById(selector).appendChild(this.renderer.domElement);
  }
};

window.onload = function() {
  Solar.initialize();
  Solar.render("renderArea");
}
