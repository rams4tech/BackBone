var Book = Backbone.Model.extend({
    defaults: {

        ID: "",
        BookName: ""
    },
    idAttribute: "ID",
   
    urlRoot: 'http://localhost:51377/api/Books'
});


var BooksCollection = Backbone.Collection.extend({
    model: Book,

    initialize: function () {

        // This will be called when an item is added. pushed or unshifted
        this.on('add', function (model) {
            console.log('something got added');
        });

        // This will be called when an item is removed, popped or shifted
        this.on('remove', function (model) {
            console.log('something got removed');
        });

        // This will be called when an item is updated
        this.on('change', function (model) {
            console.log('something got changed');
        });
    },

    comparator: function (model) {
        return model.get("ID");
    },

    url: "http://localhost:51377/api/Books",
});


