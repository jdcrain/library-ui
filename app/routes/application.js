import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),

  init() {
    this._super(...arguments);

    this.get('session').on('invalidationSucceeded', () => {
      // make sure all in memory data is cleared
      window.location.replace('/login');
    });
  },
});
