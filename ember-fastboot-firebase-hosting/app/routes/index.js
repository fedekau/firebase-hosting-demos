import Ember from 'ember';
import fetch from 'ember-fetch/ajax';

export default Ember.Route.extend({
  model() {
    return fetch('https://api.github.com/users/davideast')
      .then(function(response) {
        return response;
      });
  }
});
