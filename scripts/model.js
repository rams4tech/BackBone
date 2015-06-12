var Book = Backbone.Model.extend({
    defaults: {
        ID: "",
        BookName: ""
    },

    initialize: function () {
        console.log('Book has been intialized');

        /*// Lets hook up some event handers to listen to model change
        this.on('change:BookName', function () {
            console.log('Message from specific listener: BookName has been changed');
         });*/

        // Lets hook up some event handers to listen to model change
        this.on('change', function () {
            if (this.hasChanged('ID')) {
                console.log('ID has been changed');
                alert('ID has been changed');
            }
            if (this.hasChanged('BookName')) {
                console.log('BookName has been changed');
                alert('BookName has been changed');
            }
        });
    },
    /*constructor: function (attributes, options) {
        console.log('Book\'s constructor had been called');
        Backbone.Model.apply(this, arguments);
    },*/

    showAlert: function () {
        alert('ID: ' + this.get('ID') + ', BookName: ' + this.get('BookName'));
    }
});

