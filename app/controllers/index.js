import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    moveToCloset: function(){
      this.transitionToRoute("closet")
    }
  }
});
