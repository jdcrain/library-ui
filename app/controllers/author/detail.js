import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  can: service(),

  actions: {
    deleteAuthor(author) {
      if (this.get('can').can('delete author', this.model)) {
        author.destroyRecord().then(() => {
          this.transitionToRoute('author.index'); // could also route to author
        });
      }
    },
  },
});
