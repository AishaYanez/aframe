/* global AFRAME */
AFRAME.registerComponent('event-manager-float', {

  init: function () {
    this.bindMethods();

    this.floatGeometryEl = document.querySelector('#floatGeometry');
    this.bombGeometryEl = document.querySelector('#bombGeometry');

    this.floatGeometryEl.addEventListener('click', this.onClick);
    this.bombGeometryEl.addEventListener('click', this.onClick);
  },

  bindMethods: function () {
    this.onClick = this.onClick.bind(this);
  },

  onClick: function (evt) {
    var targetEl = evt.target;

    if (this.floatGeometryEl.contains(targetEl) && !(this.floatGeometryEl.object3D.visible == false)) {

      var audio = new Audio('./assets/float_pot.m4a');
      audio.play();

      this.floatGeometryEl.object3D.visible = false;
    }

    if(this.bombGeometryEl.contains(targetEl) && !(this.bombGeometryEl.object3D.visible == false)){
      this.bombGeometryEl.setAttribute('material','color','red');
    }

    console.log(targetEl);
  }
});
