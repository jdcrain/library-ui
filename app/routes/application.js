import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),
  currentUser: service(),

  beforeModel() {
    this._super(...arguments);

    this.loadUser();
  },

  init() {
    this._super(...arguments);

    this.get('session').on('invalidationSucceeded', () => {
      // make sure all in memory data is cleared
      window.location.replace('/login');
    });

    this.get('session').on('authenticationSucceeded', () => {
      this.loadUser();
    });
  },

  loadUser() {
    if (this.get('session.isAuthenticated')) {
      this.get('currentUser').load();
    }
  },
});
