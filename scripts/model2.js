var Book = Backbone.Model.extend({
    defaults: {
        ID: "",
        BookName: ""
    },

    //idAttribute: "ID",

    initialize: function () {
        console.log('Book has been intialized');

        this.on("invalid", function (model, error) {
            console.log("Houston, we have a problem: " + error)
        });
    },

    constructor: function (attributes, options) {
        console.log('Book\'s constructor had been called');
        Backbone.Model.apply(this, arguments);
    },

    validate: function (attr) {
        if (attr.ID <= 0) {
            return "Invalid value for ID supplied."
        }
    }

    //urlRoot: 'http://localhost:51377/api/Books'
});

