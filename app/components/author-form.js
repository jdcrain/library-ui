import Component from '@ember/component';

export default Component.extend({
    didReceiveAttrs() {
        this._super(...arguments);

        this.setProperties({
            first: this.author.get('first'),
            last: this.author.get('last')
        });
    },

    actions: {
        submitChanges(event) {
            event.preventDefault(); // prevent form from redirecting

            this.onsubmit({
                first: this.first,
                last: this.last
            });
        }
    }
});
