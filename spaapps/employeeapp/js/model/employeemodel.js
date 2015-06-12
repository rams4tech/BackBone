// Models
window.Employee = Backbone.Model.extend({
    urlRoot: "http://localhost:9090/SystemInfo/rest/employeedetail",
    defaults: {
        "empid": null,
        "firstName": "",
        "lastName": "",
        "emailId": "",
        "dob": "",
        "doj": "",
        "phoneNum": ""
    },
    idAttribute: "empid"
});

window.EmployeeCollection = Backbone.Collection.extend({
    model: Employee,
    url: "http://localhost:9090/SystemInfo/rest/employeedetail"
});
