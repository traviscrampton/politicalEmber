import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer(model){
      var params = {
        answerDescription: this.get('answerDescription'),
        timeAdded: new Date(),
        question: model
      }
      this.set('answerDescription', ''),
      this.sendAction('saveAnswer', params);
      },
    }
});
