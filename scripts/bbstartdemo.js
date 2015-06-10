// **This example illustrates the declaration and instantiation of a minimalist View.**
//
// _Working example: [1.html](../1.html)._
// _[Go to Example 2](2.html)_

// Self-executing wrapper
$(document).ready(function(){
    alert("starting backbone");
    var AppView = Backbone.View.extend({
        el: 'div',
        initialize: function(){
            alert("initializing backbone");
            this.render();
        },
        render: function(){
            alert("applying text to div attribute");
            this.$el.html("<h1>Hello World</h1>");
        }
    });
    var appView = new AppView();
    alert("done");
});