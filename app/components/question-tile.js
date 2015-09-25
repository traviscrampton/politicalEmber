import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if (confirm('Are you sure you want to delete this piece of art?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
