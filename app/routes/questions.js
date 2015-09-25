import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return this.store.findAll('question');
},

actions: {
  save(params) {
    var newMessage = this.store.createRecord('question', params);
    newMessage.save();
    this.transitionTo('questions');
  },

  destroyQuestion(question){
    question.destroyRecord();
    this.transitionTo('questions')
  }
}

});
