window.Solar = {
  aspect: {
    width: 1000,
    height: 1000  
  },

  camera: {
    angle: 75,
    position: {
      x: 0,
      y: 0,
      z: 300 
    } 
  },

  earthOptions: {
    texture: "img/earth.jpg",
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

  selector: "renderArea",

  initializeScene: function() {
    this.renderer = new Renderer(this.aspect);
    this.camera = new Camera(this.camera.angle, this.camera.position, this.aspect);
    this.scene = new Scene(this.camera);
    
    var ambientLight = new THREE.AmbientLight( 0x404040 ); // soft white ambientLight
    var pointLight = new PointLight(this.light.position, this.light.color);
      
    var earth = new Planet(this.earthOptions, function() {
      Solar.render();
    });

    var starfield = new StarField(function() {
      Solar.render();
    });

    this.scene.add(ambientLight);
    this.scene.add(pointLight);
    this.scene.add(earth);
    this.scene.add(starfield);
    this.scene.add(this.camera); 
  },
  
  render: function() {
    this.renderer.render(this.scene, this.camera); 
    document.getElementById(this.selector).appendChild(this.renderer.domElement);
  }
};

window.onload = function() {
  Solar.initializeScene();
}
