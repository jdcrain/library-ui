import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
  session: service(),
  currentUser: service(),

  beforeModel() {
    this._super(...arguments);

    this.loadUser();
  },

  sessionAuthenticated() {
    this._super(...arguments);

    this.loadUser();
  },

  sessionInvalidated() {
    window.location.replace('/login');
  },

  loadUser() {
    if (this.get('session.isAuthenticated')) {
      this.get('currentUser').load();
    }
  },
});
