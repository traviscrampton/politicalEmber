import Ember from 'ember';

export default Ember.Component.extend({
    viewQuestion: false,
  actions: {
    showQuestion() {
      this.set('viewQuestion', true)
    },
    questionHide() {
      this.set('viewQuestion', false)
    },
    update(question, params) {
      this.sendAction('update', question, params)
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this piece of art?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
