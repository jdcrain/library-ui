import Route from '@ember/routing/route';

export default Route.extend({
  model({ id }) {
    return this.store.findRecord('book', id);
  },

  afterModel(model) {
    return Promise.all([model.get('author'), model.get('reviews')]);
  },
});
