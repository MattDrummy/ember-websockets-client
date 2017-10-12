import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {
      moveToHome: function(){
        this.transitionToRoute("application")
      }
    }
});
