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
  update(question, params) {
    Object.keys(params).forEach(function(key) {
      if(params[key]!==undefined){
        question.set(key,params[key]);
      }
    });
    question.save();
    this.transitionTo('questions')
  },

  destroyQuestion(question){
    question.destroyRecord();
    this.transitionTo('questions')
  }
}

});
