import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        saveAuthor(event) {
            event.preventDefault(); // prevent form from redirecting

            let author = this.store.createRecord('author', this.model);

            author.save()
                .then(() => {
                    this.transitionToRoute('author');
                });
        }
    }
});
