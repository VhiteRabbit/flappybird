AFRAME.registerComponent("player", {
  
  init: function() {    
    this.camera = document.createElement("a-entity");
    this.camera.setAttribute("camera", "");
    this.camera.setAttribute("look-controls", "");
    this.camera.setAttribute("wasd-controls", "");
    this.camera.setAttribute("position", {y:1.6});
    this.el.appendChild(this.camera);
  }
  
});