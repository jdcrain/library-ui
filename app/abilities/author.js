import { Ability } from 'ember-can';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Ability.extend({
  currentUser: service(),

  canEdit: computed('currentUser.user.username', 'model.username', function() {
    return this.get('currentUser.user.username') === this.get('model.username');
  }),

  canDelete: computed('canEdit', 'model.books.length', function() {
    return this.get('canEdit') && this.get('model.books.length') === 0;
  }),
});
