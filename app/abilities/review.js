import { Ability } from 'ember-can';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Ability.extend({
  currentUser: service(),
  session: service('session'),

  canCreate: alias('session.isAuthenticated'),
});
