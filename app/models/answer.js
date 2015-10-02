import DS from 'ember-data';

export default DS.Model.extend({
  answerDescription: DS.attr(),
  timeAdded: DS.attr(),
  question: DS.belongsTo('question', {async: true})



});
