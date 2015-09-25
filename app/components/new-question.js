import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
actions: {
  questionFormShow() {
    this.set('addNewQuestion', true);
  },

  save() {
    var params = {
    title: this.get('title'),
    question: this.get('question'),
    author: this.get('author'),
   };
   this.set('addNewQuestion', false),
   this.set('title', ''),
   this.set('question', ''),
   this.set('author', ''),
   this.sendAction('save', params);
  }

}
});
