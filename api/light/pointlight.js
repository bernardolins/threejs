window.PointLight = function(position, color) {
   var pointLight = new THREE.PointLight(color);

    pointLight.position.x = position.x;
    pointLight.position.y = position.y;
    pointLight.position.z = position.z;

    return pointLight;
};
 
