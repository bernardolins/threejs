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

  sphereOptions: {
    radius: 50,
    segments: 15,
    rings: 15,
    material: new THREE.MeshLambertMaterial({
      color: 0xCC0000 
    }) 
  },

  light: {
    position: {
      x: 10,
      y: 50,
      z: 130 
    },
    color: 0xFFFFFF 
  },

  initialize: function(selector) {
    var renderer = new Renderer(this.aspect);
    var camera = new Camera(this.camera.angle, this.camera.position, this.aspect);
    var scene = new Scene(camera);

    var sphere = new Sphere(this.sphereOptions.radius, this.sphereOptions);

    var pointLight = new PointLight(this.light.position, this.light.color);


    scene.add(sphere); 
    scene.add(camera); 
    scene.add(pointLight);

    renderer.render(scene, camera);

    document.getElementById(selector).appendChild(renderer.domElement);
  }
};

window.onload = function() {
  Introduction.initialize("renderArea");
}
