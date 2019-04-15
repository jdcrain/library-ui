import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { inject as service } from '@ember/service';

export default Route.extend(AuthenticatedRouteMixin, {
  can: service(),

  model({ id }) {
    return this.store.findRecord('book', id);
  },

  afterModel(model) {
    if (!this.get('can').can('edit book', model)) {
      return this.transitionTo('book.detail', model.id);
    }
  },
});
