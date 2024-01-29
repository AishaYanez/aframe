/* global AFRAME */
AFRAME.registerComponent('float', {
  schema: {
    label: {default: 'label'},
    width: {default: 0.11},
    toggable: {default: false}
  },
  init: function () {
    var el = this.el;
    
    el.setAttribute('pressable', '');

    this.bindMethods();
    this.el.addEventListener('stateadded', this.stateChanged);
    this.el.addEventListener('stateremoved', this.stateChanged);
    this.el.addEventListener('pressedstarted', this.onPressedStarted);
    this.el.addEventListener('pressedended', this.onPressedEnded);
  },

  bindMethods: function () {
    // this.stateChanged = this.stateChanged.bind(this);
    this.onPressedStarted = this.onPressedStarted.bind(this);
    this.onPressedEnded = this.onPressedEnded.bind(this);
  },

  // stateChanged: function () {
  //   var color = this.el.is('pressed') ? 'green' : this.color;
  //   this.el.setAttribute('material', {color: color});
  // },

  onPressedStarted: function () {
    var el = this.el;
    el.emit('click');
  },

  onPressedEnded: function () {
    if (this.el.is('pressed')) { return; }
  }
});
