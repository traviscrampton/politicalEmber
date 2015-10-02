import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('questions');
  this.route('answer', {path: "/answer/:question_id"});
});

export default Router;
