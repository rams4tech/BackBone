var myRouter = Backbone.Router.extend({

    greeting: null,
    container: null,
    view1: null,
    view2: null,
    view3: null,

    initialize: function () {
        this.greeting = new GreetModel({Message: "Hello world"});
        this.container = new ContainerView({el: $("#rAppContainer"), model: this.greeting});
    },

    routes: {
        "": "handleRoute1",
        "view1": "handleRoute1",
        "view2": "handleRoute2",
        "view3": "handleRoute3",
        "view/:viewid(/:msg)": "handleRouteAll"
    },

    handleRoute1: function () {
        if (this.view1 == null) {
            var viewModel1 = new GreetModel({Message: "This is coming from Model of view 1"});
            this.view1 = new View1({model: viewModel1});
        }

        this.container.myChildView = this.view1;
        this.container.render();
    },

    handleRoute2: function () {
        if (this.view2 == null) {
            var viewModel1 = new GreetModel({Message: "This is coming from Model of view 2kljkljkljkljklkjllkj"});
            this.view2 = new View2({model: viewModel1});
        }

        this.container.myChildView = this.view2;
        this.container.render();
    },

    handleRoute3: function () {
        if (this.view3 == null) {
            var viewModel1 = new GreetModel({Message: "ljkljkljkljlkjkljtkljkljklj"});
            this.view3 = new View3({model: viewModel1});
        }

        this.container.myChildView = this.view3;
        this.container.render();
    },

    handleRouteAll: function (viewid, msg) {

        if (viewid == 1) {
            this.handleRoute1();
        }
        else if (viewid == 2) {
            this.handleRoute2();
        }
        else if (viewid == 3) {
            this.handleRoute3();
        }

        if (msg) {
            alert(msg);
        }
    }
});