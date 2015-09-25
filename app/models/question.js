import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  question: DS.attr(),
  Author: DS.attr()

});
