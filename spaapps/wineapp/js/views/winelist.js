window.WineListView = Backbone.View.extend({

    tagName: 'ul',

    initialize: function () {
        //alert("initializing the list");
        this.model.bind("reset", this.render, this);
        var self = this;
        this.model.bind("add", function (wine) {
            //alert(wine);
            $(self.el).append(new WineListItemView({model: wine}).render().el);
        });
    },

    render: function (eventName) {
        _.each(this.model.models, function (wine) {
            //alert("rendering the list" + wine);
            $(this.el).append(new WineListItemView({model: wine}).render().el);
        }, this);
        return this;
    }
});

window.WineListItemView = Backbone.View.extend({

    tagName: "li",


    initialize: function () {
        //alert("initializing the list item");
        this.template = _.template(tpl.get('wine-list-item'));
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
    },

    render: function (eventName) {
        //alert("rendering the list item");
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

});