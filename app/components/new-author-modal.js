import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    store: service(),

    init() {
        this._super(...arguments);

        this.set('author', {
            first: '',
            last: ''
        });
    },

    actions: {
        save(ev) {
            ev.preventDefault();

            let author = this.get('store').createRecord('author', this.author);

            author.save()
                .then(() => {
                    this.set('showModal', false);
                    
                    this.onsave(author);
                });
        }
    }
});
