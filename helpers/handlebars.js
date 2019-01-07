var register = function(Handlebars) {
    var helpers = {
    list: function(context, options) {
        var ret = "";
        for(var i=0, l=context.length; i<l; i++) {
            ret = ret + '<span class="badge badge-pill badge-secondary">' + options.fn(context[i]) + "</span>";
        }
        return ret;
    }
};

if (Handlebars && typeof Handlebars.registerHelper === "function") {
    for (var prop in helpers) {
        Handlebars.registerHelper(prop, helpers[prop]);
    }
} else {
    return helpers;
}

};

module.exports.register = register;
module.exports.helpers = register(null); 