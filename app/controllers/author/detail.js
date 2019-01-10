import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        deleteAuthor(author) {
            author.destroyRecord().then(() => {
                this.transitionToRoute('author.index'); // could also route to author
            });
        }
    }
});
