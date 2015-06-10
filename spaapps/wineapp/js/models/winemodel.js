window.Wine = Backbone.Model.extend({
    urlRoot: "http://localhost:9090/cellar/api/wines",
    defaults: {
        "id": null,
        "name": "",
        "grapes": "",
        "country": "USA",
        "region": "California",
        "year": "",
        "description": "",
        "picture": ""
    }
});

window.WineCollection = Backbone.Collection.extend({
    model: Wine,
    url: "http://localhost:9090/cellar/api/wines"
});